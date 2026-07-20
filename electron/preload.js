// ============================================================
// electron/preload.js  —  MiniSpector Log Desktop
// Exposes window.electronAPI to the renderer via contextBridge.
// renderer.js calls the exact same API as the web version —
// no changes to renderer.js needed.
// ============================================================

'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {

    // ── User auth ──────────────────────────────────────────────
    getUserName:        (userId)      => ipcRenderer.invoke('get-user-name',   userId),

    // ── Read a file from the app root (e.g. xlsx template) ────
    // renderer.js uses this as a fallback when fetch() can't
    // load local files (shouldn't happen in Electron, but safe)
    readAppFile:        (relPath)     => ipcRenderer.invoke('read-app-file',   relPath),

    // ── Reports ───────────────────────────────────────────────
    saveReport:         (data)        => ipcRenderer.invoke('save-report',     data),
    loadReport:         (key)         => ipcRenderer.invoke('load-report',     key),
    getRecentSessions:  ()            => ipcRenderer.invoke('get-recent-sessions'),

    // ── Word / Excel export ───────────────────────────────────
    exportWord:         (opts)        => ipcRenderer.invoke('export-word',     opts),
    exportSimulationWord:(data)       => ipcRenderer.invoke('export-sim-word', data),
    exportSimExcel:     (data)        => ipcRenderer.invoke('export-sim-excel',data),

    // ── Packing list ──────────────────────────────────────────
    savePackingList:    (data)        => ipcRenderer.invoke('save-packing-list', data),
    loadPackingList:    ()            => ipcRenderer.invoke('load-packing-list'),
    openExcelFile:      ()            => ipcRenderer.invoke('open-excel-file'),

    // ── Operation draft (auto-save) ───────────────────────────
    saveDraft:          (data)        => ipcRenderer.invoke('save-draft',    data),
    checkDraft:         ()            => ipcRenderer.invoke('check-draft'),
    loadDraft:          ()            => ipcRenderer.invoke('load-draft'),
    deleteDraft:        ()            => ipcRenderer.invoke('delete-draft'),

    // ── Simulation draft ──────────────────────────────────────
    saveSimDraft:       (data)        => ipcRenderer.invoke('save-sim-draft',   data),
    checkSimDraft:      ()            => ipcRenderer.invoke('check-sim-draft'),
    loadSimDraft:       ()            => ipcRenderer.invoke('load-sim-draft'),
    deleteSimDraft:     ()            => ipcRenderer.invoke('delete-sim-draft'),

    // ── Simulation files ──────────────────────────────────────
    saveSimFile:        (data)        => ipcRenderer.invoke('save-sim-file',    data),
    getSimSessions:     ()            => ipcRenderer.invoke('get-sim-sessions'),
    loadSimFile:        (key)         => ipcRenderer.invoke('load-sim-file',    key),

    // ── Cloud sync (Supabase called from main, key stays hidden)
    pushProject:        (payload)     => ipcRenderer.invoke('push-project',     payload),
    pullProject:        (code)        => ipcRenderer.invoke('pull-project',     code),
    logCloudAction:     (entry)       => ipcRenderer.invoke('log-cloud-action', entry),
    getCloudSyncLog:    (code)        => ipcRenderer.invoke('get-cloud-sync-log',code),
    saveCloudMeta:      (meta)        => ipcRenderer.invoke('save-cloud-meta',  meta),
    getCloudMeta:       (deviceId)    => ipcRenderer.invoke('get-cloud-meta',   deviceId),

    // ── Window close (dirty-check handshake) ──────────────────
    // main.js sends 'close-check' → renderer decides to save or discard → calls forceClose()
    onCloseCheck:       (cb)          => ipcRenderer.on('close-check', () => cb()),
    forceClose:         ()            => ipcRenderer.invoke('force-close'),

    // ── Project listing ───────────────────────────────────────
    listProjects:       (filters)     => ipcRenderer.invoke('list-projects',          filters),

    // ── Admin auth ────────────────────────────────────────────
    checkAdminExists:   ()            => ipcRenderer.invoke('check-admin-exists'),
    adminLogin:         (u, h)        => ipcRenderer.invoke('admin-login',            u, h),
    setupAdmin:         (u, h)        => ipcRenderer.invoke('setup-admin',            u, h),

    // ── User management ───────────────────────────────────────
    getUsers:           ()            => ipcRenderer.invoke('get-users'),
    addUser:            (user)        => ipcRenderer.invoke('add-user',               user),
    deleteUser:         (userId)      => ipcRenderer.invoke('delete-user',            userId),

    // ── Project members ───────────────────────────────────────
    getProjectMembers:  (code)        => ipcRenderer.invoke('get-project-members',    code),
    setProjectMember:   (code, uid, role, by) => ipcRenderer.invoke('set-project-member', code, uid, role, by),
    removeProjectMember:(code, uid)   => ipcRenderer.invoke('remove-project-member',  code, uid),
    checkProjectAccess: (code, uid)   => ipcRenderer.invoke('check-project-access',   code, uid),
});
