# MiniSpector Log — App Flow & Planning

This file tracks the intended user flow, implemented features, and planned enhancements.

---

## Current User Flow

```
Launch app
    │
    ▼
LOGIN SCREEN
  Member login (ID + PIN)  →  full access (edit, log, export, sync)
  Review Access (project code only)  →  read-only viewer mode
    │
    ▼
MODE SELECTION (2-step)
  ┌──────────────────────────────────────────────────────┐
  │  Step 1:  [New Project]        [Join / Continue]     │
  │                                                      │
  │  Step 2A (New):                                      │
  │    [Start with Simulation ★]  [Skip to Operation]    │
  │                                                      │
  │  Step 2B (Join):                                     │
  │    [Cloud Code]  [Local Sessions from SQLite]        │
  └──────────────────────────────────────────────────────┘
    │
    ▼
SIMULATION (planning)
  → Choose scope → Select ROVs → Configure sensors & equipment
  → Push to Operation  ──→  simulation locks (read-only)
    │
    ▼
OPERATION (execution)
  Project Details → Crew & Shifts → Packing List & Equipment
  Mobilization → Setup → Operations → Close-Out → Demob
    │
    ▼
SAVE / EXPORT / SYNC
  Auto-save draft (every 3 min)
  Manual save → SQLite + optional JSON backup
  Sync button → Supabase cloud
  Export → Word (.docx) / Excel (.xlsx)
```

---

## Implemented Features

### Storage
- [x] SQLite offline storage (Electron desktop) — reports, sim files, drafts, packing list
- [x] IndexedDB offline storage (browser / PWA)
- [x] Supabase cloud sync (online, both platforms)
- [x] Offline queue (localStorage) — flushed on reconnect

### Auth & Access
- [x] Member login (ID + PIN) — full edit access
- [x] Review Access (project code) — read-only viewer mode, green badge
- [x] Reviewer cannot save, edit, or export

### Mode Flow
- [x] New Project → Simulation first (recommended) or skip to Operation
- [x] Join → by cloud project code (Supabase pull)
- [x] Join → by local session (SQLite list of recent reports + sim files)
- [x] Switch mode button (header) — toggles between Op and Sim while preserving state

### Workflow Integrity
- [x] Simulation locks read-only after Push to Operation
- [x] Unlock & Re-edit with confirmation (warns re-push required)
- [x] Second push shows before/after diff (sensor/machine/equipment counts)
- [x] Project code guard — warns before changing an active syncing code
- [x] Scope change guard — warns before resetting all sim data
- [x] ROV lock — blocks remove/role-change if ROV has dive log entries
- [x] Mode switch dirty check — auto-saves draft if Operation has unsaved changes

### Cloud
- [x] Manual Sync button in header (spinner → synced/offline states)
- [x] Auto sync after every manual save
- [x] 30-second polling for cloud updates (reviewer side)
- [x] Offline queue flush on reconnect

### Export
- [x] Word export (.docx) — full operation report
- [x] Word export — simulation report
- [x] Excel export — packing list (sensors, machines, hardware tabs)

---

## Planned Enhancements

### Security / Role System
**Problem:** Any user with a Member ID can enter the app with full edit access.  
The app needs two distinct roles beyond the current member/reviewer split:

| Role | Who | Access |
|------|-----|--------|
| **Engineer** | ROV operators, field crew | Full edit — logs, simulation, export, sync |
| **Manager / Reviewer** | Project managers, clients, office | View only — read all data, no editing |

**Options being considered:**

**Option A — Role stored in Supabase user record**
- Each user ID has a `role` field in the `users` table: `'engineer'` or `'manager'`
- On login, `getUserName()` also fetches the role
- Renderer applies read-only mode if role is `'manager'`
- Pro: centrally controlled. Con: requires internet to verify role on first login.

**Option B — PIN-based role**
- Engineers use a 4-digit PIN, managers use a different PIN or no PIN
- Role determined locally at login time
- Pro: works offline. Con: PIN can be shared.

**Option C — Hybrid (recommended)**
- Role stored in Supabase user record (Option A)
- Cached locally in SQLite/IndexedDB after first login
- Offline fallback uses cached role
- Managers can only enter via the "Review Access" project-code flow

**Implementation needed:**
- [ ] Add `role` field to Supabase `users` table
- [ ] `getUserName()` returns `{ name, role }` and caches role locally
- [ ] On login, set `currentUserRole` based on fetched role (not just reviewer vs member)
- [ ] Engineer role: full access (current member behaviour)
- [ ] Manager role: same as current reviewer mode but entered through member login flow
- [ ] Separate PIN screen for engineers vs managers

### Other Planned Items
- [ ] Project code lock — show visual lock icon on the project code field once syncing
- [ ] Crew removal warning — alert if crew member is referenced in shift/dive logs
- [ ] Operational ID collision detection — warn if two devices generate the same ID
- [ ] Notification when cloud update is available (currently silent poll)
- [ ] Export complete project package (sim + operation together) as a single archive
