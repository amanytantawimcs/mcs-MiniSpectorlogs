# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

No build step. Serve the static files with any HTTP server:

```bash
python -m http.server 3000
# or
node -e "require('http').createServer(require('fs').readFileSync.bind(null)).listen(3000)"
```

Open `http://localhost:3000`. The Service Worker (`sw.js`) only activates over HTTP(S), not `file://`.

## Architecture

**MiniSpector Log** is a single-file PWA for ROV inspection reporting. Everything lives in three files:

| File | Role |
|------|------|
| `index.html` | All UI markup (~88 KB). Tailwind CDN + inline `<style>` block for custom classes. |
| `js/renderer.js` | All app logic (~5100 lines). No modules — one global script. |
| `js/web-api-bridge.js` | Browser shim that exposes `window.electronAPI`. Wraps IndexedDB + Supabase. |
| `sw.js` | Service Worker for offline caching. |

### Three-Screen Flow

```
Login (User ID lookup) → Mode Select → Dashboard
```

The dashboard has two distinct nav modes toggled by `switchMode()`:
- **Operation** — live ROV logging (`#nav-operation-sections` visible)
- **Simulation** — mission planning (`#nav-simulation-section` visible, `#tab-simulation` replaces content area)

### The `window.electronAPI` Abstraction

`renderer.js` never touches IndexedDB or Supabase directly — it always calls `window.electronAPI.*`. `web-api-bridge.js` provides this in the browser. If the app ever runs in Electron, a preload script would replace it. Never bypass this layer.

Key methods renderer.js relies on:
- `saveReport(data)` / `loadReport(key)` — persist a named session
- `saveDraft()` / `loadDraft()` / `checkDraft()` — auto-save draft
- `exportWord({ data, templateName })` — Word export (downloads JSON in browser)
- `pushProject(code, data)` / `pullProject(code)` — Supabase cloud sync
- `saveSimFile()` / `loadSimFile()` — simulation sessions

## Core Data Patterns

### collectAllData() / populateUI(data)

These are the central serialization pair. `collectAllData()` reads every form element into a nested object; `populateUI(data)` restores it. When adding new form fields, both functions must be updated in sync. The returned object shape is:

```javascript
{
  projectName, projectCode, operationalIdAuto, scope, vessel, location,
  crewRows: [{ name, role, shift, signOn, signOff }],
  shiftLogs: [{ shiftNo, startDate, endDate, weather, visibility, temperature, notes, crew }],
  diveLogs, maintenanceLogs, hseReports, standbyLogs, faultLogs,  // arrays in currentReportData
  preDive: { [key]: { status, comment } },
  postDive: { thrusters, props, ... },   // booleans
  larsStatus, softwareStatus, auxToolStatus,
  cameraSystems, otherSensors,
  preOperationData,   // pushed from simulation via pushToOperation()
}
```

### currentReportData

The live log arrays are stored on this global, not in form DOM:

```javascript
currentReportData = { diveLogs, maintenanceLogs, hseReports, standbyLogs, faultLogs, shiftLogs }
```

Modal saves push into these arrays; `collectAllData()` reads from them; `populateUI()` writes back to them and re-renders the log containers.

### Modal System

`openModal(section, index)` sets `modalSection` / `modalIndex` globals and renders a form into `#modal-body`. `saveModal()` reads the form, pushes to `currentReportData[section]`, and calls the appropriate `render*()` function. Editing an existing entry passes `index`; new entries pass `null`.

## Design System

- **Dark theme**: backgrounds `#111827` / `#1f2937` / `#374151`
- **Orange accent**: `#f39124` (brand color, used for borders, active states, highlights)
- **Blue accent**: `#459fd9` (secondary interactive elements)
- Custom CSS classes defined in the `<style>` block (~lines 19–210 of index.html):
  - `.chart-card` / `.chart-card-header` / `.chart-title` — section card panels
  - `.kpi-card` / `.kpi-orange|blue|green|red` — dashboard metric cards
  - `.nav-item` / `.nav-item.active` — sidebar navigation
  - `.crew-row` — CSS-grid div rows in the crew table
- Tailwind CDN JIT is active, so arbitrary values like `bg-[#f39124]` work.

## Simulation ↔ Operation Connection

`pushToOperation()` in renderer.js:
1. Calls `collectSimState()` to snapshot the simulation
2. Stores result in `preOpData` global
3. Makes `#nav-preop-item` visible (hidden by default)
4. Navigates to the Pre-Op tab
5. Calls `renderProjectSimInfo()` which shows the sim badge and ROV tags in Project Details

The Dive Log modal reads `preOpData.rovs` to populate its ROV dropdown when simulation data exists.

## Cloud Sync (Supabase)

Credentials are embedded in `web-api-bridge.js`. The sync model:
- Each project is identified by a `projectCode` (e.g. `PRJ-MCS-2026-A3F7`)
- Devices join as `vessel` or `office` role via `activateCloudProject()`
- `syncToCloud()` is called after every manual save
- Offline writes go to `offlineQueue` (localStorage) and are flushed on reconnect
- `checkForCloudUpdates()` polls every 30 seconds when a project is active

## IndexedDB Schema

Database: `MiniSpectorDB` (v2). Stores: `reports`, `drafts`, `simDrafts`, `simFiles`, `syncQueue`, `users`, `sessions`. All records share the shape `{ key: string, value: object, timestamp: number }`.

## Key Globals in renderer.js

```javascript
currentReportData   // live log arrays
currentUserId       // logged-in user
currentMode         // 'operation' | 'simulation'
isDirty             // true when unsaved changes exist
preOpData           // snapshot pushed from simulation
simSelectedROVs     // Map<rovNumber, 'main'|'standby'>
simSharedData       // { scopeId, sensors, issues } shared across ROV tabs
modalSection        // active modal context key
modalIndex          // null = new entry, number = editing existing
```
