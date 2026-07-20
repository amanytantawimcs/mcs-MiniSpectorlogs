# Pre-Publish Implementation Plan

**Project:** MiniSpector Log  
**Date:** 2026-05-09  
**Status:** Pending fixes before publish

---

## Audit Summary

The core architecture is sound — `collectAllData()`/`populateUI()` round-trips correctly, cloud sync flows work, viewer mode is enforced. There are **3 critical data gaps** and **1 deployment risk** to fix before publishing.

---

## Critical Fix 1: SysArch Not Persisted in Simulation Draft

**File:** `js/renderer.js` — `collectSimState()` at line 552

**Problem:** `collectSimState()` does not include `simSharedData.sysarch`. If the user refreshes mid-simulation, all machines and equipment built in SysArch are lost.

**Fix — add to the `collectSimState()` return object:**
```js
sysarch: {
    machines: (simSharedData.sysarch?.machines || []).map(m => ({...m})),
    equipment: (simSharedData.sysarch?.equipment || []).map(e => ({...e}))
}
```

**Also needed:** wherever the sim draft is restored on returning to simulation, assign `simSharedData.sysarch` back from the draft data.

---

## Critical Fix 2: Equipment Never Reaches Operation

**File:** `js/renderer.js` — `pushToOperation()` at line 756

**Problem:** `pushToOperation()` builds `preOpData` with `machines` but has **no `equipment` field**. Everything in the equipment table is silently dropped when pushing to operation.

**Fix — add to the `preOpData` object (around line 771):**
```js
equipment: (simSharedData.sysarch?.equipment || []).map(e => ({
    name: e.name || '', model: e.model || '',
    serial: e.serial || '', status: e.status || 'operational',
    origin: 'simulation'
})),
```

Then in `renderProjectSimInfo()`, add a second list for equipment so the Pre-Op tab reflects it alongside machines.

---

## Critical Fix 3: Issues Not Pushed to Operation

**File:** `js/renderer.js` — `pushToOperation()` at line 756

**Problem:** `collectSimState()` correctly saves issues to the draft (line 563). But `pushToOperation()` never copies `simSharedData.issues` into `preOpData`. Flagged sensor/equipment issues from simulation vanish on push.

**Fix — add to the `preOpData` object (around line 771):**
```js
issues: (simSharedData.issues || []).map(i => ({
    title: i.title, description: i.description,
    severity: i.severity || 'minor', status: i.status || 'open',
    sensorLink: i.sensorLink || ''
})),
```

Then in `renderPreOpTab()` or `renderProjectSimInfo()`, display a "Flagged Issues" section when `preOpData.issues?.length > 0`.

---

## Critical Fix 4: Service Worker Cache Never Busts

**File:** `sw.js` — line 5

**Problem:** `const CACHE_NAME = 'minispector-v1'` is hardcoded. After deploying a new version, users will continue receiving stale JS/HTML until they manually clear their browser cache.

**Fix:** Bump the cache name string on every deploy:
```js
const CACHE_NAME = 'minispector-v2'; // bump on every deploy
```

For a permanent solution, add a deploy script that does a find-replace on the version string automatically before each release.

---

## Verification Checklist

Run through this manually before publishing.

### Sim → Op Full Flow
- [ ] Create simulation, add ROVs, add sensors, add machines, add equipment, flag an issue
- [ ] Refresh browser — verify SysArch data survives (Fix 1)
- [ ] Push to Operation — Project Details prefills, sensors populate, Pre-Op tab appears
- [ ] Verify machines list appears on Pre-Op tab
- [ ] Verify equipment list appears on Pre-Op tab (Fix 2)
- [ ] Verify flagged issues appear on Pre-Op tab (Fix 3)
- [ ] Open Dive Log modal — ROV dropdown shows ROVs from simulation

### Save / Load Round-Trip
- [ ] Fill all Operation tabs → Save as file → Reload page → Load file → all fields intact
- [ ] `collectAllData()` → JSON → `populateUI()` — no fields lost (especially `preOperationData`)

### Viewer Mode
- [ ] Reviewer login with valid project code — dashboard loads correctly
- [ ] All edit buttons, modals, add-row actions are blocked
- [ ] Tab navigation still works
- [ ] Reviewer logout returns cleanly to login screen

### Offline / Cloud Sync
- [ ] Disconnect network → make changes → reconnect → `offlineQueue` flushes to Supabase
- [ ] Cloud pull on reviewer login populates all fields correctly

---

## Priority Order

| # | Fix | File | Risk if Skipped |
|---|-----|------|-----------------|
| 1 | SysArch in `collectSimState` | renderer.js ~line 552 | User loses SysArch on browser refresh |
| 2 | Equipment in `preOpData` | renderer.js ~line 771 | Equipment silently dropped on push |
| 3 | Issues in `preOpData` | renderer.js ~line 771 | Flagged issues lost on push to operation |
| 4 | SW cache versioning | sw.js line 5 | Users get stale app after every deploy |

---

## Architecture Notes (For Reference)

### What transfers Sim → Op today (working)
- Project name, code, scope
- Selected ROVs (number + role)
- Sensors (filtered: required + included optional + custom), with calibration/test state
- Machines list (name, model, IP, status)
- Project Details fields (prefilled in DOM)

### What does NOT transfer today (gaps above)
- Equipment inventory (Fix 2)
- Flagged issues (Fix 3)
- SysArch is not draft-persisted (Fix 1)

### Data Flow Reference
```
Simulation tab
  └─ simSharedData  { sensors, issues, sysarch: { machines, equipment } }
  └─ simSelectedROVs  Map<rovNumber, 'main'|'standby'>
  └─ simProjectData  { name, code, scope }
         │
         │  pushToOperation()
         ▼
      preOpData  (global, survives mode switch)
         │
         │  renderPreOpTab() / renderProjectSimInfo()
         ▼
  Pre-Op tab UI  +  Dive Log ROV dropdown
         │
         │  collectAllData()
         ▼
  Saved in report JSON / IndexedDB draft / Supabase cloud
```
