# MiniSpector Log — Architecture & Data Flow

## What Kind of App Is This?

MiniSpector Log ships in two forms from the same codebase:

| Form | Runtime | Local storage | Export |
|------|---------|--------------|--------|
| **PWA (browser)** | Any browser over HTTP(S) | IndexedDB | JSON download |
| **Desktop (.exe)** | Electron (Chromium + Node.js) | SQLite (.db file) | Native save dialogs |

Both share the same `index.html` and `js/renderer.js` — zero code changes between them.  
The only remote service is **Supabase** (hosted PostgreSQL), used for cloud sync. The app works fully offline without it.

---

## File Roles

| File | Role |
|------|------|
| `index.html` | All UI markup (~88 KB). Tailwind CDN JIT + inline `<style>` block. |
| `js/renderer.js` | All app logic (~6 500 lines). One global script, no ES modules. |
| `js/web-api-bridge.js` | Browser shim: exposes `window.electronAPI` via IndexedDB + Supabase. Bails out early if Electron's preload already set `window.electronAPI`. |
| `electron/main.js` | Electron main process: SQLite storage, Word/Excel export, Supabase calls (key never reaches renderer). |
| `electron/preload.js` | Thin `contextBridge` layer that maps `window.electronAPI.*` → IPC calls into main. |
| `sw.js` | Service Worker — offline cache shell for the browser version. |
| `manifest.json` | PWA manifest (name, icons, theme color `#f39124`, `standalone` display). |
| `Job Simulation.xlsx` | Excel template used by `exportSysArchXLSX()` (SheetJS style-preserving fill). |

---

## The `window.electronAPI` Abstraction

`renderer.js` never touches storage directly. It always calls `window.electronAPI.*`.

```
renderer.js
    │
    ├── Browser  →  web-api-bridge.js  →  IndexedDB + Supabase JS SDK
    └── Electron →  preload.js (IPC)   →  main.js  →  SQLite + Supabase (server-side key)
```

This means adding a new storage backend requires zero changes to `renderer.js`.

---

## App Flow (Screen by Screen)

### Login Screen
```
User enters ID + PIN
    │
    ▼
getUserName()  →  DEFAULT_USERS[]  →  Supabase users table  →  fallback "User {id}"
    │
    ▼
showModeScreen()
```

### Mode Selection (2-step)

```
Step 1
  ┌──────────────┐   ┌─────────────────┐
  │  New Project │   │ Join / Continue │
  └──────┬───────┘   └────────┬────────┘
         │                    │
         ▼                    ▼
      Step 2A              Step 2B
  ┌──────────────────┐  ┌──────────────────────────────┐
  │ Start with Sim   │  │ [ Cloud Code ] [ Local Sess] │
  │  (Recommended)   │  │  Supabase pull  SQLite list  │
  │ Skip to Operation│  └──────────────────────────────┘
  └──────────────────┘
```

- **New Project → Start with Simulation**: enters Simulation mode, planning first.
- **New Project → Skip to Operation**: enters Operation mode directly.
- **Join → Cloud Code**: pulls project from Supabase by project code, loads into Operation.
- **Join → Local Sessions**: lists last 5 reports and sim sessions from SQLite; click to load.

### Dashboard (Operation mode)
Sidebar nav order:
1. Project Details → Crew & Shifts
2. Packing List & Equipment (hidden until sim is pushed)
3. **Mobilization** — Mobilization checklist
4. **Setup** — Start-Up checklist
5. **Operations** — Pre-Op checklist · Standby · Dive Log · Maintenance · Faults · HSE · Post-Op
6. **Close-Out** — LARS Status · Shutdown checklist
7. **Demobilization** checklist

### Dashboard (Simulation mode)
Single `#tab-simulation` with two internal sub-steps:
- **Step 1** — Mission info, scope selection, ROV grid selection
- **Step 2** — Sensor packing list, SysArch (machines, hardware/consumables, sim results, deliverables)

**Push to Operation** button commits the plan to Operation and locks the simulation tab read-only.

---

## Workflow Integrity Constraints

These rules prevent silent data corruption:

| Constraint | Trigger | Behaviour |
|---|---|---|
| **Simulation lock** | Push to Operation clicked | Sim tab becomes read-only (dimmed, pointer-events: none). Orange lock banner. "Unlock & Re-edit" warns that re-push is required. |
| **Second push diff** | Push to Operation when preOpData already exists | Confirm dialog shows sensor/machine/equipment counts before vs after. |
| **Project code guard** | Changing project code field after cloud sync is active | Confirm dialog warns about cloud disconnection. Cancel reverts field. |
| **Scope change guard** | Changing scope dropdown after sim data exists | Confirm dialog warns that sensors/machines/ROVs will be wiped. Cancel reverts dropdown. |
| **ROV lock after dive logs** | Remove or role-change an ROV that has dive log entries | Alert blocks action — user must remove dive log entries first. |
| **Mode switch dirty check** | Switching Op → Sim while `isDirty = true` | Confirm dialog. Confirming auto-saves a draft before switching. |

---

## Data Saving Mechanisms

### 1. Auto-Save Draft (every 3 minutes)

```
User edits form
    │ (setInterval every 3 min)
    ▼
collectAllData()  /  collectSimState()
    │
    ▼
window.electronAPI.saveDraft(data)
    │
    ├── Browser  →  IndexedDB: store 'drafts', key 'operation-draft'
    └── Electron →  SQLite:    drafts table, type = 'operation'
```

On next login, `checkDraft()` offers to restore. Draft deleted after a full manual save.

### 2. Manual Save (Save button)

```
User clicks Save
    │
    ▼
collectAllData()
    │
    ▼
window.electronAPI.saveReport(data)
    │
    ├── Browser  →  IndexedDB 'reports' + JSON file download
    └── Electron →  SQLite 'reports' table + optional JSON export dialog
    │
    ▼
syncToCloud()  →  pushProject() to Supabase
    │
    ▼
deleteDraft()
```

### 3. Manual Cloud Sync (Sync button in header)

```
User clicks Sync button
    │
    ▼
manualSyncToCloud()
    │  (shows spinner → Syncing...)
    ▼
syncToCloud()
    │
    ├── success  →  button turns green "Synced", resets after 3s
    ├── offline  →  button turns red "Offline", payload queued
    └── no code  →  toast: "set project code first"
```

### 4. Cloud Sync (Supabase)

```
syncToCloud()
    │
    ├── Network OK  →  supabase.from('projects').upsert(...)
    │                     conflict key: project_code
    │
    └── Network down →  queueOfflineSync()
                            │
                            └── localStorage: 'mcs_offline_queue'
                                    │
                                    └── flushed on window 'online' event
```

Polling for remote updates (reviewer/office side): `checkForCloudUpdates()` every 30 s compares `updated_at` timestamps.

### 5. Simulation Save

```
Auto-save  →  saveSimDraft()  →  IndexedDB 'simDrafts'  /  SQLite drafts type='simulation'
Manual     →  saveSimFile()   →  IndexedDB 'simFiles'   /  SQLite sim_files table  +  optional export dialog
```

### 6. Offline Queue

`localStorage['mcs_offline_queue']` holds failed push payloads.  
Flushed by `flushOfflineQueue()` when `window` fires `online`.

### 7. Service Worker Cache (browser only)

Cache name: `minispector-v2`. Strategy:
- Static files (`index.html`, `renderer.js`, `web-api-bridge.js`) — cache-first.
- Supabase API calls — network-always (bypassed).
- Offline navigation → returns cached `index.html`.

---

## SQLite Schema (Electron / desktop)

Database file: `%APPDATA%\minispector-log\minispector.db`  
WAL mode enabled. All data columns are JSON text blobs.

| Table | Primary Key | Notable columns |
|-------|------------|----------------|
| `reports` | `key` (operationalId or projectCode) | `project_name`, `project_code`, `data TEXT`, `saved_at` |
| `sim_files` | `key` (`sim-{code}-{date}`) | `project_name`, `project_code`, `scope_name`, `data TEXT`, `saved_at` |
| `drafts` | `type` (`'operation'` or `'simulation'`) | `project_name`, `scope_name`, `data TEXT`, `updated_at` |
| `kv` | `key` (arbitrary string) | `value TEXT` — used for packing list (`key='packing-list'`) |

---

## IndexedDB Schema (browser / PWA)

Database: `MiniSpectorDB` v2

| Store | Key | Contents |
|-------|-----|----------|
| `reports` | operationalIdAuto or projectCode | Completed operation report |
| `drafts` | `'operation-draft'` | Auto-saved operation state |
| `simDrafts` | `'sim-draft'` | Auto-saved simulation state |
| `simFiles` | `sim-{code}-{date}` | Saved simulation sessions |
| `syncQueue` | autoIncrement | Reserved |
| `users` | userId | User name cache |
| `sessions` | key | Cloud session metadata |

---

## Simulation → Operation Data Pipeline

```
simSharedData
  ├── sensors[]         (status, calibrated, tested, custom, qty)
  └── sysarch
        ├── machines[]  (name, model, ip, status)
        ├── equipment[] (item, qty, comments)    ← hardware & consumables
        ├── simStatus[]
        └── deliverables

simSelectedROVs  Map<rovNumber, 'main'|'standby'>
simProjectData   { name, code, scope }

         pushToOperation()
                │
                ├── preOpData already exists? → show diff confirm
                │
                ▼
            preOpData = {
                pushedAt, projectName, projectCode, scopeName,
                rovs[], sensors[], machines[], equipment[],
                additions: { sensors[], machines[] }
            }
                │
                ▼
         applySimLock()  ← simulation tab becomes read-only
```

`preOpData` is consumed by:
- `renderPreOpTab()` — Packing List & Equipment tab
- `renderProjectSimInfo()` — sim badge + ROV roster on Project Details
- Dive Log modal — ROV dropdown populated from `preOpData.rovs`

---

## Key Globals in renderer.js

| Global | Type | Purpose |
|--------|------|---------|
| `currentReportData` | Object | Live log arrays: `diveLogs`, `maintenanceLogs`, `hseReports`, `standbyLogs`, `faultLogs`, `shiftLogs`, `checklists` |
| `preOpData` | Object\|null | Snapshot pushed from simulation |
| `simSharedData` | Object | Simulation sensor + sysarch state |
| `simSelectedROVs` | Map | ROV number → `'main'`\|`'standby'` |
| `simLocked` | Boolean | True after pushToOperation — sim is read-only |
| `simProjectData` | Object | Project name/code/scope from simulation header |
| `isDirty` | Boolean | True when unsaved operation changes exist |
| `currentMode` | String | `'operation'` \| `'simulation'` |
| `currentProjectCode` | String | Active project code (cloud sync key) |
| `currentUserRole` | String | `'member'` \| `'reviewer'` |
| `currentUserId` | String | Logged-in user ID |
| `activeChecklistType` | String | Which checklist is shown |
| `activeChecklistDiveKeys` | Object | Per-dive checklist selection `{ preOp: '1', postOp: '1' }` |
| `modalSection` | String | Which log array the open modal targets |
| `modalIndex` | Number\|null | `null` = new entry; number = editing existing |

---

## Design System

- **Dark theme**: `#111827` / `#1f2937` / `#374151`
- **Orange accent**: `#f39124` — brand color, borders, active nav, highlights
- **Blue accent**: `#459fd9` — secondary interactive elements
- Tailwind CDN JIT active — arbitrary values like `bg-[#f39124]` work
- Custom CSS classes in `index.html` `<style>` block (~lines 19–210):
  - `.chart-card` / `.chart-card-header` — section panels
  - `.kpi-card` / `.kpi-orange|blue|green|red` — dashboard metric tiles
  - `.nav-item` / `.nav-item.active` — sidebar navigation
  - `.login-bg` — login/mode screen gradient background
