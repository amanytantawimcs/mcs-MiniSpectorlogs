// ============================================================
// electron/main.js  —  MiniSpector Log Desktop
// Offline storage: SQLite (better-sqlite3) — one DB file per user.
// Cloud sync: Supabase (credentials live here, never exposed to renderer).
// renderer.js is unchanged; preload.js bridges via contextBridge.
// ============================================================

'use strict';

const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs   = require('fs');

// ── SQLite ────────────────────────────────────────────────────
let db = null;

function initDB() {
    const Database = require('better-sqlite3');
    const dbPath   = path.join(app.getPath('userData'), 'minispector.db');
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');

    db.exec(`
        CREATE TABLE IF NOT EXISTS reports (
            key          TEXT PRIMARY KEY,
            project_name TEXT,
            project_code TEXT,
            data         TEXT NOT NULL,
            saved_at     TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS sim_files (
            key          TEXT PRIMARY KEY,
            project_name TEXT,
            project_code TEXT,
            scope_name   TEXT,
            data         TEXT NOT NULL,
            saved_at     TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS drafts (
            type         TEXT PRIMARY KEY,
            project_name TEXT,
            scope_name   TEXT,
            data         TEXT NOT NULL,
            updated_at   TEXT DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS kv (
            key   TEXT PRIMARY KEY,
            value TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS admins (
            username      TEXT PRIMARY KEY,
            password_hash TEXT NOT NULL
        );
    `);

    console.log('[DB] SQLite ready:', dbPath);
}

// ── SQLite helpers (synchronous — better-sqlite3 is sync) ─────
function dbGet(table, key) {
    try {
        const row = db.prepare(`SELECT data FROM ${table} WHERE key = ?`).get(key);
        return row ? JSON.parse(row.data) : null;
    } catch { return null; }
}

function dbSet(table, key, data, extra = {}) {
    const cols    = ['key', 'data', ...Object.keys(extra)];
    const vals    = [key, JSON.stringify(data), ...Object.values(extra)];
    const placeholders = cols.map(() => '?').join(', ');
    const updates = cols.filter(c => c !== 'key').map(c => `${c} = excluded.${c}`).join(', ');
    db.prepare(
        `INSERT INTO ${table} (${cols.join(', ')}) VALUES (${placeholders})
         ON CONFLICT(key) DO UPDATE SET ${updates}`
    ).run(...vals);
}

function kvGet(key) {
    try {
        const row = db.prepare('SELECT value FROM kv WHERE key = ?').get(key);
        return row ? JSON.parse(row.value) : null;
    } catch { return null; }
}

function kvSet(key, value) {
    db.prepare(
        `INSERT INTO kv (key, value) VALUES (?, ?)
         ON CONFLICT(key) DO UPDATE SET value = excluded.value`
    ).run(key, JSON.stringify(value));
}

function kvDelete(key) {
    db.prepare('DELETE FROM kv WHERE key = ?').run(key);
}

// ── Supabase (credentials live here, never exposed to renderer) ──
const SUPABASE_URL = 'https://hhkhlsjcduxvcgdlkprz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhoa2hsc2pjZHV4dmNnZGxrcHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NDU4MDMsImV4cCI6MjA5MzMyMTgwM30.e63nFaQwFDJFuvr2nzntYWXCOsuunTIJHfd4QHpRvvA';

let supabase = null;
try {
    if (!global.WebSocket) global.WebSocket = require('ws');
    const { createClient } = require('@supabase/supabase-js');
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
        auth: { persistSession: false, autoRefreshToken: false }
    });
    console.log('[Main] Supabase connected');
} catch (e) {
    console.warn('[Main] Supabase unavailable — cloud sync disabled:', e.message);
}

// ── App root ──────────────────────────────────────────────────
const ROOT = path.join(__dirname, '..');

// ── Window ───────────────────────────────────────────────────
let win = null;

function createWindow() {
    win = new BrowserWindow({
        width:     1440,
        height:    900,
        minWidth:  1024,
        minHeight: 680,
        show:      false,
        backgroundColor: '#111827',
        icon: path.join(ROOT, 'assets', 'logo.png'),
        webPreferences: {
            preload:          path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration:  false,
            sandbox:          false,
        },
    });

    win.loadFile(path.join(ROOT, 'index.html'));

    win.once('ready-to-show', () => {
        win.show();
        win.maximize();
    });

    win.on('close', e => {
        e.preventDefault();
        win.webContents.send('close-check');
    });

    win.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });
}

app.whenReady().then(() => {
    initDB();
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// ============================================================
// IPC HANDLERS
// ============================================================

// ── User auth ─────────────────────────────────────────────────
const DEFAULT_USERS = [
    { id: '101', name: 'Admin User'      },
    { id: '102', name: 'Mariam Antar'    },
    { id: '103', name: 'Vessel Operator' },
    { id: '104', name: 'Office Viewer'   },
];

ipcMain.handle('get-user-name', async (_, userId) => {
    const id = String(userId).trim();
    if (!id) return { success: false, message: 'Please enter a User ID' };

    const local = DEFAULT_USERS.find(u => u.id === id);
    if (local) return { success: true, name: local.name };

    if (supabase) {
        try {
            const { data } = await supabase.from('users').select('name').eq('id', id).single();
            if (data) return { success: true, name: data.name };
        } catch {}
    }

    return { success: true, name: 'User ' + id };
});

// ── Read a file from the app root (xlsx template) ─────────────
ipcMain.handle('read-app-file', async (_, relativePath) => {
    const safePath = path.join(ROOT, relativePath.replace(/\.\./g, ''));
    if (!fs.existsSync(safePath)) return null;
    return Array.from(fs.readFileSync(safePath));
});

// ── Reports ───────────────────────────────────────────────────
ipcMain.handle('save-report', async (_, data) => {
    const key = data.operationalIdAuto || data.projectCode || `report-${Date.now()}`;

    // Persist to SQLite
    db.prepare(`
        INSERT INTO reports (key, project_name, project_code, data, saved_at)
        VALUES (?, ?, ?, ?, datetime('now'))
        ON CONFLICT(key) DO UPDATE SET
            project_name = excluded.project_name,
            project_code = excluded.project_code,
            data         = excluded.data,
            saved_at     = excluded.saved_at
    `).run(key, data.projectName || '', data.projectCode || '', JSON.stringify(data));

    // Also let user export a JSON backup file
    const { filePath, canceled } = await dialog.showSaveDialog(win, {
        title:       'Export Report Backup',
        defaultPath: path.join(app.getPath('documents'), `Report-${key}.json`),
        filters:     [{ name: 'JSON Report', extensions: ['json'] }],
    });
    if (!canceled && filePath) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return { status: 'success', path: filePath };
    }
    return { status: 'success' };
});

ipcMain.handle('load-report', async (_, specificKey) => {
    // Load from SQLite by key
    if (specificKey) {
        const row = db.prepare('SELECT data FROM reports WHERE key = ?').get(specificKey);
        if (row) return JSON.parse(row.data);
    }
    // Otherwise let user open a backup JSON file
    const { filePaths, canceled } = await dialog.showOpenDialog(win, {
        title:      'Load Report Backup',
        defaultPath: app.getPath('documents'),
        filters:    [{ name: 'JSON Report', extensions: ['json'] }],
        properties: ['openFile'],
    });
    if (canceled || !filePaths[0]) return null;
    try { return JSON.parse(fs.readFileSync(filePaths[0], 'utf8')); } catch { return null; }
});

ipcMain.handle('get-recent-sessions', async () => {
    try {
        return db.prepare(`
            SELECT key, project_name, project_code, saved_at
            FROM reports
            ORDER BY saved_at DESC
            LIMIT 5
        `).all().map(r => ({
            name:        r.key,
            projectName: r.project_name || r.project_code || r.key,
            projectCode: r.project_code,
            mtime:       r.saved_at,
        }));
    } catch { return []; }
});

// ── Word export ───────────────────────────────────────────────
ipcMain.handle('export-word', async (_, { data }) => {
    const { Document, Paragraph, TextRun, HeadingLevel, Packer } = require('docx');

    const key = data.operationalIdAuto || data.projectCode || 'report';
    const { filePath, canceled } = await dialog.showSaveDialog(win, {
        title:       'Export Operation Report',
        defaultPath: path.join(app.getPath('documents'), `Report-${key}.docx`),
        filters:     [{ name: 'Word Document', extensions: ['docx'] }],
    });
    if (canceled || !filePath) return { status: 'cancelled' };

    const p  = text         => new Paragraph({ children: [new TextRun(text)] });
    const h1 = text         => new Paragraph({ text, heading: HeadingLevel.HEADING_1 });
    const kv = (label, val) => new Paragraph({ children: [
        new TextRun({ text: `${label}: `, bold: true }),
        new TextRun({ text: String(val || '—') }),
    ]});

    const children = [
        new Paragraph({ text: 'MiniSpector Log — Operation Report', heading: HeadingLevel.TITLE }),
        p(''),
        kv('Project',        data.projectName),
        kv('Code',           data.projectCode),
        kv('Operational ID', data.operationalIdAuto),
        kv('Scope',          data.scope),
        kv('Vessel',         data.vessel),
        kv('Location',       data.location),
        p(''),
    ];

    if (data.diveLogs?.length) {
        children.push(h1('Dive Logs'));
        data.diveLogs.forEach((log, i) => children.push(new Paragraph({ children: [
            new TextRun({ text: `Dive ${log.diveNo || i+1}  `, bold: true }),
            new TextRun(`${log.rovName || ''} · Depth: ${log.depth || '—'}m · ${log.objective || ''}`),
        ]})));
        children.push(p(''));
    }
    if (data.maintenanceLogs?.length) {
        children.push(h1('Maintenance Log'));
        data.maintenanceLogs.forEach(log => children.push(p(`[${log.date || ''}]  ${log.description || log.activity || ''}`)));
        children.push(p(''));
    }
    if (data.hseReports?.length) {
        children.push(h1('HSE Reports'));
        data.hseReports.forEach(log => children.push(p(`[${log.date || ''}]  ${log.description || ''}`)));
        children.push(p(''));
    }
    if (data.faultLogs?.length) {
        children.push(h1('Fault / Technical Log'));
        data.faultLogs.forEach(log => children.push(p(`[${log.date || ''}]  ${log.fault || log.description || ''}`)));
        children.push(p(''));
    }
    if (data.standbyLogs?.length) {
        children.push(h1('Standby Time Log'));
        data.standbyLogs.forEach(log => children.push(p(`[${log.date || ''}]  ${log.reason || ''}  (${log.hours || 0} hrs)`)));
    }

    const doc    = new Document({ sections: [{ properties: {}, children }] });
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(filePath, buffer);
    return { status: 'success', path: filePath };
});

ipcMain.handle('export-sim-word', async (_, data) => {
    const { Document, Paragraph, TextRun, HeadingLevel, Packer } = require('docx');

    const key = data.projectCode || 'simulation';
    const { filePath, canceled } = await dialog.showSaveDialog(win, {
        title:       'Export Simulation Report',
        defaultPath: path.join(app.getPath('documents'), `Simulation-${key}.docx`),
        filters:     [{ name: 'Word Document', extensions: ['docx'] }],
    });
    if (canceled || !filePath) return { status: 'cancelled' };

    const p  = text         => new Paragraph({ children: [new TextRun(text)] });
    const h1 = text         => new Paragraph({ text, heading: HeadingLevel.HEADING_1 });
    const kv = (label, val) => new Paragraph({ children: [
        new TextRun({ text: `${label}: `, bold: true }),
        new TextRun(String(val || '—')),
    ]});

    const children = [
        new Paragraph({ text: 'MiniSpector — Simulation Report', heading: HeadingLevel.TITLE }),
        p(''), kv('Project', data.projectName), kv('Code', data.projectCode),
        kv('Scope', data.scopeName), kv('Date', data.reportDate), p(''),
        h1('Sensor Packing List'),
        ...(data.sensors || []).map((s, i) => new Paragraph({ children: [
            new TextRun({ text: `${i+1}. ${s.name}`, bold: true }),
            new TextRun(`  Model: ${s.model||'—'}  · Cal: ${s.calibrated?'✓':'✗'}  · Test: ${s.tested?'✓':'✗'}  · QTY: ${s.qty||1}`),
        ]})),
        p(''), h1('Machines & Computers'),
        ...(data.machines || []).map((m, i) => new Paragraph({ children: [
            new TextRun({ text: `${i+1}. ${m.name}`, bold: true }),
            new TextRun(`  IP: ${m.ip||'—'}  · Status: ${m.status||'OK'}`),
        ]})),
        p(''), h1('Hardware & Consumables'),
        ...(data.equipment || []).map((e, i) => new Paragraph({ children: [
            new TextRun({ text: `${i+1}. ${e.item||'—'}`, bold: true }),
            new TextRun(`  QTY: ${e.qty||0}  · ${e.comments||''}`),
        ]})),
    ];

    const doc    = new Document({ sections: [{ properties: {}, children }] });
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(filePath, buffer);
    return { status: 'success', path: filePath };
});

// ── Excel export ──────────────────────────────────────────────
ipcMain.handle('export-sim-excel', async (_, data) => {
    const XLSX = require('xlsx');
    const key  = data.projectCode || 'SIM';

    const { filePath, canceled } = await dialog.showSaveDialog(win, {
        title:       'Export Packing List Excel',
        defaultPath: path.join(app.getPath('documents'), `PackingList-${key}.xlsx`),
        filters:     [{ name: 'Excel Workbook', extensions: ['xlsx'] }],
    });
    if (canceled || !filePath) return { status: 'cancelled' };

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(
        (data.sensors || []).map((s, i) => ({
            '#': i+1, Sensor: s.name, Model: s.model||'—',
            QTY: s.qty||1, Calibrated: s.calibrated?'✓':'✗', Tested: s.tested?'✓':'✗', Status: s.status,
        }))
    ), 'Sensors');
    if (data.machines?.length) {
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(
            data.machines.map((m, i) => ({ '#': i+1, Machine: m.name, Model: m.model||'—', IP: m.ip||'—', Status: m.status||'OK' }))
        ), 'Machines');
    }
    if (data.equipment?.length) {
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(
            data.equipment.map((e, i) => ({ '#': i+1, Item: e.item||'—', QTY: e.qty||0, Notes: e.comments||'' }))
        ), 'Hardware');
    }
    XLSX.writeFile(wb, filePath);
    return { status: 'success', path: filePath };
});

// ── Packing list (SQLite kv store, key = 'packing-list') ──────
ipcMain.handle('save-packing-list', async (_, data) => {
    kvSet('packing-list', data);
    return { status: 'success' };
});

ipcMain.handle('load-packing-list', async () => {
    return kvGet('packing-list');
});

// ── Open Excel / CSV file and return parsed rows ──────────────
ipcMain.handle('open-excel-file', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog(win, {
        title: 'Load Packing List from Excel',
        filters: [{ name: 'Spreadsheets', extensions: ['xlsx', 'xls', 'csv'] }],
        properties: ['openFile'],
    });
    if (canceled || filePaths.length === 0) return null;
    try {
        const XLSX = require('xlsx');
        const workbook = XLSX.readFile(filePaths[0]);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows  = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
        return { rows, fileName: path.basename(filePaths[0]) };
    } catch (err) {
        return { error: err.message };
    }
});

// ── Operation draft ───────────────────────────────────────────
ipcMain.handle('save-draft', async (_, data) => {
    db.prepare(`
        INSERT INTO drafts (type, project_name, data, updated_at)
        VALUES ('operation', ?, ?, datetime('now'))
        ON CONFLICT(type) DO UPDATE SET
            project_name = excluded.project_name,
            data         = excluded.data,
            updated_at   = excluded.updated_at
    `).run(data.projectName || data.projectCode || '', JSON.stringify(data));
    return { status: 'success' };
});

ipcMain.handle('check-draft', async () => {
    const row = db.prepare("SELECT project_name, updated_at FROM drafts WHERE type = 'operation'").get();
    if (!row) return null;
    return { timestamp: row.updated_at, projectName: row.project_name || 'Unknown' };
});

ipcMain.handle('load-draft', async () => {
    const row = db.prepare("SELECT data FROM drafts WHERE type = 'operation'").get();
    return row ? JSON.parse(row.data) : null;
});

ipcMain.handle('delete-draft', async () => {
    db.prepare("DELETE FROM drafts WHERE type = 'operation'").run();
    return { status: 'success' };
});

// ── Simulation draft ──────────────────────────────────────────
ipcMain.handle('save-sim-draft', async (_, data) => {
    db.prepare(`
        INSERT INTO drafts (type, project_name, scope_name, data, updated_at)
        VALUES ('simulation', ?, ?, ?, datetime('now'))
        ON CONFLICT(type) DO UPDATE SET
            project_name = excluded.project_name,
            scope_name   = excluded.scope_name,
            data         = excluded.data,
            updated_at   = excluded.updated_at
    `).run(data.projectName || '', data.scopeName || '', JSON.stringify(data));
    return { status: 'success' };
});

ipcMain.handle('check-sim-draft', async () => {
    const row = db.prepare("SELECT project_name, scope_name, updated_at FROM drafts WHERE type = 'simulation'").get();
    if (!row) return null;
    return { timestamp: row.updated_at, projectName: row.project_name || 'Unknown', scopeName: row.scope_name || '' };
});

ipcMain.handle('load-sim-draft', async () => {
    const row = db.prepare("SELECT data FROM drafts WHERE type = 'simulation'").get();
    return row ? JSON.parse(row.data) : null;
});

ipcMain.handle('delete-sim-draft', async () => {
    db.prepare("DELETE FROM drafts WHERE type = 'simulation'").run();
    return { status: 'success' };
});

// ── Simulation files ──────────────────────────────────────────
ipcMain.handle('save-sim-file', async (_, data) => {
    const key = `sim-${data.projectCode || Date.now()}-${data.reportDate || 'draft'}`;

    db.prepare(`
        INSERT INTO sim_files (key, project_name, project_code, scope_name, data, saved_at)
        VALUES (?, ?, ?, ?, ?, datetime('now'))
        ON CONFLICT(key) DO UPDATE SET
            project_name = excluded.project_name,
            project_code = excluded.project_code,
            scope_name   = excluded.scope_name,
            data         = excluded.data,
            saved_at     = excluded.saved_at
    `).run(key, data.projectName || '', data.projectCode || '', data.scopeName || '', JSON.stringify(data));

    // Optional export to file
    const { filePath, canceled } = await dialog.showSaveDialog(win, {
        title:       'Export Simulation Backup',
        defaultPath: path.join(app.getPath('documents'), `${key}.json`),
        filters:     [{ name: 'JSON', extensions: ['json'] }],
    });
    if (!canceled && filePath) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return { status: 'success', path: filePath };
    }
    return { status: 'success' };
});

ipcMain.handle('get-sim-sessions', async () => {
    try {
        return db.prepare(`
            SELECT key, project_name, project_code, scope_name, saved_at
            FROM sim_files
            ORDER BY saved_at DESC
            LIMIT 5
        `).all().map(r => ({
            name:        r.key,
            projectName: r.project_name,
            projectCode: r.project_code,
            scopeName:   r.scope_name,
            mtime:       r.saved_at,
        }));
    } catch { return []; }
});

ipcMain.handle('load-sim-file', async (_, key) => {
    if (key) {
        const row = db.prepare('SELECT data FROM sim_files WHERE key = ?').get(key);
        if (row) return JSON.parse(row.data);
    }
    const { filePaths, canceled } = await dialog.showOpenDialog(win, {
        title:      'Load Simulation Backup',
        filters:    [{ name: 'JSON', extensions: ['json'] }],
        properties: ['openFile'],
    });
    if (canceled || !filePaths[0]) return null;
    try { return JSON.parse(fs.readFileSync(filePaths[0], 'utf8')); } catch { return null; }
});

// ── Cloud sync (Supabase runs in main — key never reaches renderer) ─
ipcMain.handle('push-project', async (_, payload) => {
    if (!supabase) return { success: false, error: 'Supabase unavailable', offline: true };
    try {
        const { data, error } = await supabase
            .from('projects')
            .upsert({
                project_code: payload.project_code,
                mode:         payload.mode || 'operation',
                created_by:   payload.created_by || '',
                project_name: payload.project_name || '',
                data:         payload.data || {},
            }, { onConflict: 'project_code' })
            .select('project_code, updated_at')
            .single();
        if (error) return { success: false, error: error.message };
        return { success: true, updated_at: data.updated_at };
    } catch (err) { return { success: false, error: err.message, offline: true }; }
});

ipcMain.handle('pull-project', async (_, projectCode) => {
    if (!supabase) return { success: false, error: 'Supabase unavailable', offline: true };
    try {
        const { data, error } = await supabase
            .from('projects').select('*').eq('project_code', projectCode).single();
        if (error) {
            if (error.code === 'PGRST116') return { success: false, notFound: true, error: 'Not found' };
            return { success: false, error: error.message };
        }
        return { success: true, project: data };
    } catch (err) { return { success: false, error: err.message, offline: true }; }
});

ipcMain.handle('log-cloud-action', async (_, entry) => {
    if (!supabase) return { success: false };
    try { await supabase.from('sync_log').insert(entry); return { success: true }; }
    catch { return { success: false }; }
});

ipcMain.handle('get-cloud-sync-log', async (_, projectCode) => {
    if (!supabase) return { success: false, offline: true };
    try {
        const { data } = await supabase.from('sync_log').select('*')
            .eq('project_code', projectCode).order('synced_at', { ascending: false }).limit(10);
        return { success: true, log: data || [] };
    } catch { return { success: false, offline: true }; }
});

ipcMain.handle('save-cloud-meta', async (_, meta) => {
    if (!supabase) return { success: false };
    try { await supabase.from('session_meta').upsert(meta, { onConflict: 'device_id' }); return { success: true }; }
    catch { return { success: false }; }
});

ipcMain.handle('get-cloud-meta', async (_, deviceId) => {
    if (!supabase) return { success: false, offline: true };
    try {
        const { data } = await supabase.from('session_meta').select('*').eq('device_id', deviceId).single();
        return data ? { success: true, meta: data } : { success: false };
    } catch { return { success: false, offline: true }; }
});

// ── Window control ────────────────────────────────────────────
ipcMain.handle('force-close', () => {
    if (win) win.destroy();
    app.quit();
});

// ── List projects (Supabase) ───────────────────────────────────
ipcMain.handle('list-projects', async (_, filters = {}) => {
    if (!supabase) return { success: false, offline: true, projects: [] };
    try {
        let query = supabase.from('projects').select('*');
        if (filters.mode) query = query.eq('mode', filters.mode);
        const { data, error } = await query.order('updated_at', { ascending: false });
        if (error) return { success: false, error: error.message, projects: [] };
        return { success: true, projects: data || [] };
    } catch (err) { return { success: false, error: err.message, projects: [] }; }
});

// ── Admin auth (local SQLite + Supabase) ──────────────────────
ipcMain.handle('check-admin-exists', async () => {
    const local = db.prepare('SELECT username FROM admins LIMIT 1').get();
    if (local) return { exists: true };
    if (!supabase) return { exists: false };
    try {
        const { data } = await supabase.from('admins').select('id').limit(1);
        return { exists: (data || []).length > 0 };
    } catch { return { exists: false }; }
});

ipcMain.handle('admin-login', async (_, username, passwordHash) => {
    const local = db.prepare('SELECT username FROM admins WHERE username = ? AND password_hash = ?').get(username, passwordHash);
    if (local) return { success: true };
    if (!supabase) return { success: false, error: 'Invalid credentials' };
    try {
        const { data } = await supabase.from('admins')
            .select('id').eq('username', username).eq('password_hash', passwordHash).single();
        return data ? { success: true } : { success: false, error: 'Invalid credentials' };
    } catch { return { success: false, error: 'Invalid credentials' }; }
});

ipcMain.handle('setup-admin', async (_, username, passwordHash) => {
    try {
        db.prepare(
            `INSERT INTO admins (username, password_hash) VALUES (?, ?)
             ON CONFLICT(username) DO UPDATE SET password_hash = excluded.password_hash`
        ).run(username, passwordHash);
    } catch (e) { return { success: false, error: e.message }; }
    if (supabase) {
        try { await supabase.from('admins').upsert({ username, password_hash: passwordHash }, { onConflict: 'username' }); } catch {}
    }
    return { success: true };
});

// ── User management (Supabase + local SQLite kv fallback) ─────
ipcMain.handle('get-users', async () => {
    if (supabase) {
        try {
            const { data } = await supabase.from('users').select('*').order('id');
            return { success: true, users: data || [] };
        } catch {}
    }
    return { success: true, users: DEFAULT_USERS };
});

ipcMain.handle('add-user', async (_, user) => {
    if (!supabase) return { success: false, error: 'Offline' };
    try {
        const { error } = await supabase.from('users').upsert({ id: user.id, name: user.name }, { onConflict: 'id' });
        return error ? { success: false, error: error.message } : { success: true };
    } catch (e) { return { success: false, error: e.message }; }
});

ipcMain.handle('delete-user', async (_, userId) => {
    if (!supabase) return { success: false, error: 'Offline' };
    try {
        await supabase.from('users').delete().eq('id', userId);
        return { success: true };
    } catch (e) { return { success: false, error: e.message }; }
});

// ── Project members (Supabase) ────────────────────────────────
ipcMain.handle('get-project-members', async (_, projectCode) => {
    if (!supabase) return { success: false, members: [] };
    try {
        const { data } = await supabase.from('project_members')
            .select('*').eq('project_code', projectCode);
        return { success: true, members: data || [] };
    } catch { return { success: false, members: [] }; }
});

ipcMain.handle('set-project-member', async (_, projectCode, userId, role, addedBy) => {
    if (!supabase) return { success: false, error: 'Offline' };
    try {
        const { error } = await supabase.from('project_members')
            .upsert({ project_code: projectCode, user_id: userId, role, added_by: addedBy }, { onConflict: 'project_code,user_id' });
        return error ? { success: false, error: error.message } : { success: true };
    } catch (e) { return { success: false, error: e.message }; }
});

ipcMain.handle('remove-project-member', async (_, projectCode, userId) => {
    if (!supabase) return { success: false, error: 'Offline' };
    try {
        await supabase.from('project_members').delete()
            .eq('project_code', projectCode).eq('user_id', userId);
        return { success: true };
    } catch (e) { return { success: false, error: e.message }; }
});

ipcMain.handle('check-project-access', async (_, projectCode, userId) => {
    if (!supabase) return { allowed: true, role: 'operator' };
    try {
        const { data: members } = await supabase.from('project_members')
            .select('role').eq('project_code', projectCode);
        if (!members || members.length === 0) return { allowed: true, role: 'operator' };
        const { data: member } = await supabase.from('project_members').select('role')
            .eq('project_code', projectCode).eq('user_id', String(userId)).single();
        return member ? { allowed: true, role: member.role } : { allowed: false };
    } catch { return { allowed: true, role: 'operator' }; }
});
