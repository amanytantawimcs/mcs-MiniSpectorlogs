// ============================================================
// web-api-bridge.js
// Replaces window.electronAPI (Electron IPC) with browser equivalents
// Uses IndexedDB for local storage + Supabase for cloud sync
// Your renderer.js calls the SAME API — zero changes needed
// ============================================================

(function () {
    'use strict';

    // In Electron, preload.js sets window.electronAPI before this script runs.
    // Skip the entire web bridge — IndexedDB and service worker are not needed.
    if (window.electronAPI) return;

    // ---- SUPABASE CLIENT (browser) ----
    const SUPABASE_URL = 'https://hhkhlsjcduxvcgdlkprz.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhoa2hsc2pjZHV4dmNnZGxrcHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NDU4MDMsImV4cCI6MjA5MzMyMTgwM30.e63nFaQwFDJFuvr2nzntYWXCOsuunTIJHfd4QHpRvvA';

    let supabase = null;

    // Load Supabase JS client from CDN
    function initSupabase() {
        try {
            // Supabase UMD exposes window.supabase with createClient
            const sb = window.supabase;
            if (sb && sb.createClient) {
                supabase = sb.createClient(SUPABASE_URL, SUPABASE_KEY, {
                    auth: { persistSession: false, autoRefreshToken: false }
                });
                console.log('[WebBridge] Supabase connected');
            } else {
                console.warn('[WebBridge] Supabase CDN not loaded yet — cloud features disabled');
            }
        } catch (e) {
            console.error('[WebBridge] Supabase init failed:', e);
        }
    }

    // ---- INDEXEDDB (offline local storage) ----
    const DB_NAME = 'MiniSpectorDB';
    const DB_VERSION = 2;
    let db = null;

    function openDB() {
        return new Promise((resolve, reject) => {
            if (db) { resolve(db); return; }
            const req = indexedDB.open(DB_NAME, DB_VERSION);
            req.onupgradeneeded = (e) => {
                const d = e.target.result;
                // Delete old stores if upgrading from v1
                ['reports','drafts','simDrafts','simFiles','syncQueue','users','sessions'].forEach(name => {
                    if (d.objectStoreNames.contains(name)) d.deleteObjectStore(name);
                });
                // Recreate all with consistent keyPath
                d.createObjectStore('reports', { keyPath: 'key' });
                d.createObjectStore('drafts', { keyPath: 'key' });
                d.createObjectStore('simDrafts', { keyPath: 'key' });
                d.createObjectStore('simFiles', { keyPath: 'key' });
                d.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true });
                d.createObjectStore('users', { keyPath: 'key' });
                d.createObjectStore('sessions', { keyPath: 'key' });
            };
            req.onsuccess = (e) => { db = e.target.result; resolve(db); };
            req.onerror = (e) => reject(e.target.error);
        });
    }

    async function dbPut(storeName, key, value) {
        const d = await openDB();
        return new Promise((resolve, reject) => {
            const tx = d.transaction(storeName, 'readwrite');
            tx.objectStore(storeName).put({ key, value, timestamp: Date.now() });
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e.target.error);
        });
    }

    async function dbGet(storeName, key) {
        const d = await openDB();
        return new Promise((resolve, reject) => {
            const tx = d.transaction(storeName, 'readonly');
            const req = tx.objectStore(storeName).get(key);
            req.onsuccess = () => resolve(req.result?.value || null);
            req.onerror = (e) => reject(e.target.error);
        });
    }

    async function dbDelete(storeName, key) {
        const d = await openDB();
        return new Promise((resolve, reject) => {
            const tx = d.transaction(storeName, 'readwrite');
            tx.objectStore(storeName).delete(key);
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e.target.error);
        });
    }

    async function dbGetAll(storeName) {
        const d = await openDB();
        return new Promise((resolve, reject) => {
            const tx = d.transaction(storeName, 'readonly');
            const req = tx.objectStore(storeName).getAll();
            req.onsuccess = () => resolve(req.result || []);
            req.onerror = (e) => reject(e.target.error);
        });
    }

    // ---- FILE DOWNLOAD HELPER ----
    function downloadFile(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // ---- USERS (replaces users.xlsx) ----
    const DEFAULT_USERS = [
        { id: '101', name: 'Admin User' },
        { id: '102', name: 'Mariam Antar' },
        { id: '103', name: 'Vessel Operator' },
        { id: '104', name: 'Office Viewer' },
    ];

    async function initUsers() {
        // Seed default users if none exist, or load from Supabase
        for (const u of DEFAULT_USERS) {
            const existing = await dbGet('users', u.id);
            if (!existing) await dbPut('users', u.id, u);
        }
    }

    // ============================================================
    // window.electronAPI — BROWSER IMPLEMENTATION
    // Same interface as preload.js, backed by IndexedDB + Supabase
    // ============================================================

    window.electronAPI = {

        // ---- USER AUTH ----
        getUserName: async (userId) => {
            try {
                const id = String(userId).trim();
                if (!id) return { success: false, message: 'Please enter a User ID' };

                // Try local DB first
                try {
                    await initUsers();
                    const local = await dbGet('users', id);
                    if (local) return { success: true, name: local.name };
                } catch (e) { console.warn('[WebBridge] IndexedDB lookup failed:', e); }

                // Try Supabase if available
                if (supabase) {
                    try {
                        const { data } = await supabase.from('users').select('name').eq('id', id).single();
                        if (data) return { success: true, name: data.name };
                    } catch (e) { console.warn('[WebBridge] Supabase user lookup failed:', e); }
                }

                // Web fallback: always accept
                return { success: true, name: 'User ' + id };
            } catch (e) {
                console.error('[WebBridge] getUserName error:', e);
                return { success: true, name: 'User ' + userId };
            }
        },

        // ---- SAVE REPORT (to IndexedDB + download JSON) ----
        saveReport: async (data) => {
            const key = data.operationalIdAuto || data.projectCode || `report-${Date.now()}`;
            await dbPut('reports', key, data);

            // Trigger download
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            downloadFile(blob, `Report-${key}.json`);

            return { status: 'success', path: key };
        },

        // ---- LOAD REPORT (from file picker or IndexedDB) ----
        loadReport: async (specificKey) => {
            if (specificKey) {
                // Load from IndexedDB by key
                const data = await dbGet('reports', specificKey);
                if (data) return data;
            }
            // File picker fallback
            return new Promise((resolve) => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = async (e) => {
                    const file = e.target.files[0];
                    if (!file) { resolve(null); return; }
                    const text = await file.text();
                    resolve(JSON.parse(text));
                };
                input.click();
            });
        },

        // ---- EXPORT WORD (generate .docx in browser) ----
        exportWord: async ({ data, templateName }) => {
            // For web version: download data as JSON (Word generation requires server-side)
            // TODO: Implement with docx.js library for full browser Word generation
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            downloadFile(blob, `Report-${data.operationalIdAuto || 'export'}.json`);
            alert('Word export is available in the desktop version.\nJSON data has been downloaded as a fallback.');
            return { status: 'success', type: 'json-fallback' };
        },

        // ---- RECENT SESSIONS ----
        getRecentSessions: async () => {
            const all = await dbGetAll('reports');
            return all
                .map(r => ({ name: r.key, path: r.key, mtime: new Date(r.timestamp) }))
                .sort((a, b) => b.mtime - a.mtime)
                .slice(0, 3);
        },

        // ---- SAFE CLOSE (no-op in web) ----
        onCloseCheck: () => {},
        forceClose: async () => { window.close(); },

        // ---- PACKING LIST ----
        savePackingList: async (data) => {
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            downloadFile(blob, 'Mission-Packing-List.json');
            return { status: 'success' };
        },
        loadPackingList: async () => {
            return new Promise((resolve) => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = async (e) => {
                    const file = e.target.files[0];
                    if (!file) { resolve(null); return; }
                    resolve(JSON.parse(await file.text()));
                };
                input.click();
            });
        },

        // ---- SIMULATION WORD EXPORT ----
        exportSimulationWord: async (data) => {
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            downloadFile(blob, `Simulation-Report-${data.reportDate || 'Draft'}.json`);
            return { status: 'success' };
        },

        // ---- SIMULATION EXCEL EXPORT ----
        exportSimExcel: async (data) => {
            if (typeof XLSX === 'undefined') {
                alert('Excel library not loaded.');
                return { status: 'error' };
            }
            const wb = XLSX.utils.book_new();

            // Sensors sheet
            const sensorRows = (data.sensors || []).map((s, i) => ({
                '#': i + 1, 'Sensor': s.name, 'Model': s.model || '—',
                'QTY': s.qty || 1, 'Status': s.status, 'Calibrated': s.calibrated ? '✓' : '✗',
                'Tested': s.tested ? '✓' : '✗', 'Notes': s.note || ''
            }));
            XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(sensorRows), 'Sensors');

            // Machines sheet
            if (data.machines?.length > 0) {
                const machineRows = data.machines.map((m, i) => ({
                    '#': i + 1, 'Machine': m.name, 'Model': m.model || '—',
                    'IP': m.ip || '—', 'Status': m.status || 'OK'
                }));
                XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(machineRows), 'Machines');
            }

            // Summary sheet
            XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet([
                { Field: 'Project', Value: data.projectName || '—' },
                { Field: 'Code', Value: data.projectCode || '—' },
                { Field: 'Scope', Value: data.scopeName || '—' },
                { Field: 'Date', Value: data.reportDate || '' },
            ]), 'Summary');

            XLSX.writeFile(wb, `PackingList-${data.projectCode || 'SIM'}-${data.reportDate || 'Draft'}.xlsx`);
            return { status: 'success' };
        },

        // ---- DRAFT AUTO-SAVE ----
        saveDraft: async (data) => {
            await dbPut('drafts', 'operation-draft', { ...data, _draftTimestamp: new Date().toISOString() });
            return { status: 'success' };
        },
        checkDraft: async () => {
            const draft = await dbGet('drafts', 'operation-draft');
            if (!draft) return null;
            return { timestamp: draft._draftTimestamp, projectName: draft.projectName || draft.projectCode || 'Unknown' };
        },
        loadDraft: async () => await dbGet('drafts', 'operation-draft'),
        deleteDraft: async () => { await dbDelete('drafts', 'operation-draft'); return { status: 'success' }; },

        // ---- SIMULATION DRAFT ----
        saveSimDraft: async (data) => {
            await dbPut('simDrafts', 'sim-draft', { ...data, _draftTimestamp: new Date().toISOString() });
            return { status: 'success' };
        },
        checkSimDraft: async () => {
            const draft = await dbGet('simDrafts', 'sim-draft');
            if (!draft) return null;
            return { timestamp: draft._draftTimestamp, projectName: draft.projectName || 'Unknown', scopeName: draft.scopeName || '' };
        },
        loadSimDraft: async () => await dbGet('simDrafts', 'sim-draft'),
        deleteSimDraft: async () => { await dbDelete('simDrafts', 'sim-draft'); return { status: 'success' }; },

        // ---- SIMULATION FILE SAVE/LOAD ----
        saveSimFile: async (data) => {
            const key = `sim-${data.projectCode || Date.now()}-${data.reportDate || 'draft'}`;
            await dbPut('simFiles', key, data);
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            downloadFile(blob, `${key}.json`);
            return { status: 'success', path: key };
        },
        getSimSessions: async () => {
            const all = await dbGetAll('simFiles');
            return all
                .map(r => ({
                    name: r.key, path: r.key, mtime: new Date(r.timestamp),
                    projectName: r.value?.projectName, scopeName: r.value?.scopeName, projectCode: r.value?.projectCode
                }))
                .sort((a, b) => b.mtime - a.mtime)
                .slice(0, 5);
        },
        loadSimFile: async (key) => {
            if (key) {
                const data = await dbGet('simFiles', key);
                if (data) return data;
            }
            return new Promise((resolve) => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.json';
                input.onchange = async (e) => {
                    const file = e.target.files[0];
                    if (!file) { resolve(null); return; }
                    resolve(JSON.parse(await file.text()));
                };
                input.click();
            });
        },

        // ---- CLOUD SYNC ----
        pushProject: async (payload) => {
            if (!supabase) return { success: false, error: 'Supabase not loaded', offline: true };
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .upsert({
                        project_code: payload.project_code,
                        mode: payload.mode || 'operation',
                        created_by: payload.created_by || '',
                        project_name: payload.project_name || '',
                        data: payload.data || {},
                    }, { onConflict: 'project_code' })
                    .select('project_code, updated_at')
                    .single();
                if (error) return { success: false, error: error.message };
                return { success: true, updated_at: data.updated_at };
            } catch (err) {
                return { success: false, error: err.message, offline: true };
            }
        },

        pullProject: async (projectCode) => {
            if (!supabase) return { success: false, error: 'Supabase not loaded', offline: true };
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .eq('project_code', projectCode)
                    .single();
                if (error) {
                    if (error.code === 'PGRST116') return { success: false, notFound: true, error: 'Not found' };
                    return { success: false, error: error.message };
                }
                return { success: true, project: data };
            } catch (err) {
                return { success: false, error: err.message, offline: true };
            }
        },

        logCloudAction: async (entry) => {
            if (!supabase) return { success: false };
            try {
                await supabase.from('sync_log').insert(entry);
                return { success: true };
            } catch (e) { return { success: false }; }
        },

        getCloudSyncLog: async (projectCode) => {
            if (!supabase) return { success: false, offline: true };
            try {
                const { data } = await supabase
                    .from('sync_log')
                    .select('*')
                    .eq('project_code', projectCode)
                    .order('synced_at', { ascending: false })
                    .limit(10);
                return { success: true, log: data || [] };
            } catch (e) { return { success: false, offline: true }; }
        },

        saveCloudMeta: async (meta) => {
            if (!supabase) return { success: false };
            try {
                await supabase.from('session_meta').upsert(meta, { onConflict: 'device_id' });
                return { success: true };
            } catch (e) { return { success: false }; }
        },

        getCloudMeta: async (deviceId) => {
            if (!supabase) return { success: false, offline: true };
            try {
                const { data } = await supabase
                    .from('session_meta')
                    .select('*')
                    .eq('device_id', deviceId)
                    .single();
                return data ? { success: true, meta: data } : { success: false };
            } catch (e) { return { success: false, offline: true }; }
        },

        listProjects: async (filters = {}) => {
            if (!supabase) return { success: false, offline: true, projects: [] };
            try {
                let query = supabase.from('projects').select('*');
                if (filters.mode) query = query.eq('mode', filters.mode);
                const { data, error } = await query.order('updated_at', { ascending: false });
                if (error) return { success: false, error: error.message, projects: [] };
                return { success: true, projects: data || [] };
            } catch (err) {
                return { success: false, error: err.message, projects: [] };
            }
        },

        // ---- ADMIN AUTH ----
        checkAdminExists: async () => {
            if (!supabase) return { success: false, offline: true };
            try {
                const { data } = await supabase.from('admins').select('id').limit(1);
                return { exists: (data || []).length > 0 };
            } catch (e) { return { exists: false }; }
        },

        adminLogin: async (username, passwordHash) => {
            if (!supabase) return { success: false, error: 'Offline' };
            try {
                const { data } = await supabase.from('admins')
                    .select('id, username').eq('username', username).eq('password_hash', passwordHash).single();
                return data ? { success: true } : { success: false, error: 'Invalid credentials' };
            } catch (e) { return { success: false, error: 'Invalid credentials' }; }
        },

        setupAdmin: async (username, passwordHash) => {
            if (!supabase) return { success: false, error: 'Offline' };
            try {
                const { error } = await supabase.from('admins').insert({ username, password_hash: passwordHash });
                return error ? { success: false, error: error.message } : { success: true };
            } catch (e) { return { success: false, error: e.message }; }
        },

        // ---- USER MANAGEMENT ----
        getUsers: async () => {
            if (!supabase) return { success: false, users: [] };
            try {
                const { data } = await supabase.from('users').select('*').order('id');
                return { success: true, users: data || [] };
            } catch (e) { return { success: false, users: [] }; }
        },

        addUser: async (user) => {
            if (!supabase) return { success: false };
            try {
                const { error } = await supabase.from('users').upsert({ id: user.id, name: user.name }, { onConflict: 'id' });
                if (error) return { success: false, error: error.message };
                await dbPut('users', user.id, user);
                return { success: true };
            } catch (e) { return { success: false, error: e.message }; }
        },

        deleteUser: async (userId) => {
            if (!supabase) return { success: false };
            try {
                await supabase.from('users').delete().eq('id', userId);
                await dbDelete('users', userId);
                return { success: true };
            } catch (e) { return { success: false, error: e.message }; }
        },

        // ---- PROJECT MEMBERS ----
        getProjectMembers: async (projectCode) => {
            if (!supabase) return { success: false, members: [] };
            try {
                const { data } = await supabase.from('project_members')
                    .select('*').eq('project_code', projectCode);
                return { success: true, members: data || [] };
            } catch (e) { return { success: false, members: [] }; }
        },

        setProjectMember: async (projectCode, userId, role, addedBy) => {
            if (!supabase) return { success: false };
            try {
                const { error } = await supabase.from('project_members')
                    .upsert({ project_code: projectCode, user_id: userId, role, added_by: addedBy }, { onConflict: 'project_code,user_id' });
                return error ? { success: false, error: error.message } : { success: true };
            } catch (e) { return { success: false, error: e.message }; }
        },

        removeProjectMember: async (projectCode, userId) => {
            if (!supabase) return { success: false };
            try {
                await supabase.from('project_members').delete()
                    .eq('project_code', projectCode).eq('user_id', userId);
                return { success: true };
            } catch (e) { return { success: false, error: e.message }; }
        },

        checkProjectAccess: async (projectCode, userId) => {
            if (!supabase) return { allowed: true, role: 'operator' };
            try {
                const { data: members } = await supabase.from('project_members')
                    .select('role').eq('project_code', projectCode);
                if (!members || members.length === 0) return { allowed: true, role: 'operator' };
                const member = (await supabase.from('project_members').select('role')
                    .eq('project_code', projectCode).eq('user_id', String(userId)).single()).data;
                return member ? { allowed: true, role: member.role } : { allowed: false };
            } catch (e) { return { allowed: true, role: 'operator' }; }
        },
    };

    // ---- INIT ----
    window.addEventListener('DOMContentLoaded', () => {
        initSupabase();
        openDB().then(() => console.log('[WebBridge] IndexedDB ready'));

        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('[SW] Registered:', reg.scope))
                .catch(err => console.error('[SW] Registration failed:', err));
        }
    });

})();
