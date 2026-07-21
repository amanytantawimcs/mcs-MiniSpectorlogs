// ============================================================
// web-api-bridge.js
// Replaces window.electronAPI (Electron IPC) with browser equivalents
// Uses IndexedDB for local storage + a REST API (Node/Express + Railway
// Postgres) for cloud sync — replaces the old Supabase backend.
// Your renderer.js calls the SAME API — zero changes needed
// ============================================================

(function () {
    'use strict';

    // In Electron, preload.js sets window.electronAPI before this script runs.
    // Skip the entire web bridge — IndexedDB and service worker are not needed.
    if (window.electronAPI) return;

    // ---- CLOUD API (Railway: Express + Postgres) ----
    // Update this if the API service gets its own custom domain later.
    const API_BASE_URL = 'https://dependable-friendship-production-f118.up.railway.app';

    async function apiFetch(path, options = {}) {
        try {
            const res = await fetch(API_BASE_URL + path, {
                headers: { 'Content-Type': 'application/json' },
                ...options,
            });
            let data = {};
            try { data = await res.json(); } catch (e) { /* empty body, e.g. 204 */ }
            return { ok: res.ok, status: res.status, data };
        } catch (e) {
            console.warn('[WebBridge] API request failed:', path, e.message);
            return { ok: false, status: 0, data: {}, networkError: true };
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
    // Same interface as preload.js, backed by IndexedDB + REST API
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

                // Try cloud API if available
                const r = await apiFetch('/users/' + encodeURIComponent(id));
                if (r.ok && r.data.success) return { success: true, name: r.data.name };

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
            const r = await apiFetch('/projects', { method: 'POST', body: JSON.stringify(payload) });
            if (!r.ok) return { success: false, error: r.data.error || 'Request failed', offline: r.networkError || false };
            return { success: true, updated_at: r.data.updated_at };
        },

        pullProject: async (projectCode) => {
            const r = await apiFetch('/projects/' + encodeURIComponent(projectCode));
            if (r.status === 404) return { success: false, notFound: true, error: 'Not found' };
            if (!r.ok) return { success: false, error: r.data.error || 'Request failed', offline: r.networkError || false };
            return { success: true, project: r.data.project };
        },

        logCloudAction: async (entry) => {
            const r = await apiFetch('/sync-log', { method: 'POST', body: JSON.stringify(entry) });
            return { success: r.ok };
        },

        getCloudSyncLog: async (projectCode) => {
            const r = await apiFetch('/sync-log/' + encodeURIComponent(projectCode));
            if (!r.ok) return { success: false, offline: true };
            return { success: true, log: r.data.log || [] };
        },

        saveCloudMeta: async (meta) => {
            const r = await apiFetch('/session-meta', { method: 'POST', body: JSON.stringify(meta) });
            return { success: r.ok };
        },

        getCloudMeta: async (deviceId) => {
            const r = await apiFetch('/session-meta/' + encodeURIComponent(deviceId));
            if (!r.ok) return { success: false, offline: true };
            return { success: true, meta: r.data.meta };
        },

        listProjects: async (filters = {}) => {
            const qs = filters.mode ? ('?mode=' + encodeURIComponent(filters.mode)) : '';
            const r = await apiFetch('/projects' + qs);
            if (!r.ok) return { success: false, offline: true, projects: [] };
            return { success: true, projects: r.data.projects || [] };
        },

        // ---- ADMIN AUTH ----
        checkAdminExists: async () => {
            const r = await apiFetch('/admin/exists');
            if (!r.ok) return { success: false, offline: true };
            return { exists: !!r.data.exists };
        },

        adminLogin: async (username, passwordHash) => {
            const r = await apiFetch('/admin/login', { method: 'POST', body: JSON.stringify({ username, passwordHash }) });
            if (!r.ok) return { success: false, error: r.data.error || 'Invalid credentials' };
            return { success: true };
        },

        setupAdmin: async (username, passwordHash) => {
            const r = await apiFetch('/admin/setup', { method: 'POST', body: JSON.stringify({ username, passwordHash }) });
            if (!r.ok) return { success: false, error: r.data.error || 'Setup failed' };
            return { success: true };
        },

        // ---- USER MANAGEMENT ----
        getUsers: async () => {
            const r = await apiFetch('/users');
            if (!r.ok) return { success: false, users: [] };
            return { success: true, users: r.data.users || [] };
        },

        addUser: async (user) => {
            const r = await apiFetch('/users', { method: 'POST', body: JSON.stringify(user) });
            if (!r.ok) return { success: false, error: r.data.error };
            await dbPut('users', user.id, user);
            return { success: true };
        },

        deleteUser: async (userId) => {
            const r = await apiFetch('/users/' + encodeURIComponent(userId), { method: 'DELETE' });
            await dbDelete('users', userId);
            return { success: r.ok };
        },

        // ---- PROJECT MEMBERS ----
        getProjectMembers: async (projectCode) => {
            const r = await apiFetch('/projects/' + encodeURIComponent(projectCode) + '/members');
            if (!r.ok) return { success: false, members: [] };
            return { success: true, members: r.data.members || [] };
        },

        setProjectMember: async (projectCode, userId, role, addedBy) => {
            const r = await apiFetch('/projects/' + encodeURIComponent(projectCode) + '/members', {
                method: 'POST', body: JSON.stringify({ userId, role, addedBy })
            });
            if (!r.ok) return { success: false, error: r.data.error };
            return { success: true };
        },

        removeProjectMember: async (projectCode, userId) => {
            const r = await apiFetch('/projects/' + encodeURIComponent(projectCode) + '/members/' + encodeURIComponent(userId), { method: 'DELETE' });
            return { success: r.ok };
        },

        checkProjectAccess: async (projectCode, userId) => {
            const r = await apiFetch('/projects/' + encodeURIComponent(projectCode) + '/access/' + encodeURIComponent(userId));
            if (!r.ok) return { allowed: true, role: 'operator' };
            return r.data;
        },
    };

    // ---- INIT ----
    window.addEventListener('DOMContentLoaded', () => {
        openDB().then(() => console.log('[WebBridge] IndexedDB ready'));

        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('[SW] Registered:', reg.scope))
                .catch(err => console.error('[SW] Registration failed:', err));
        }
    });

})();
