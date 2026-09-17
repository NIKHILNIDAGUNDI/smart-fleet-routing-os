# Ashok Leyland — Smart Fleet Routing OS

Smart Bus Scheduling & Fleet Routing Operating System for **Ashok Leyland • Switch Mobility • City Transit**.

**Scope:** Chandapura Depot 44 Pilot — 122 Switch Electric Buses • 130 Form 4 Schedules • 9 Core Bengaluru Corridors

## Project Structure

```
Ashok Leyland/
├── index.html                  # Entry point (loads src/smart_fleet_routing.html)
├── src/
│   └── smart_fleet_routing.html  # Main application (257 KB single-page app)
├── data/
│   ├── fleet_data.json           # 122 Switch Electric Bus fleet data
│   ├── Form 4 *.xlsx             # City Transit Form 4 schedule spreadsheets (4 shifts)
│   ├── OHM_004-*.xlsx            # Inspection check sheet
│   └── SCH DATA NH new (1).xlsx  # Night halt schedule data
├── docs/
│   ├── DECISION_RATIONALE.md     # Engineering rationale & comparative analysis
│   └── Project Titles & Statement for students.pdf
├── screenshots/                  # 18 verification screenshots (dark + light mode)
└── assets/                       # Static assets (images, icons)
```

## Tech Stack

- **UI Layout:** Bento Grid with Glassmorphism & GSAP Draggable
- **Animations:** View Transitions API (fullscreen morphological expansions)
- **Testing:** Playwright E2E suites

- **Frontend:** Vanilla HTML/CSS/JavaScript (single-page application with Bento Grid layout)
- **Maps:** Leaflet.js 1.9.4 (interactive GIS radar map)
- **Charts:** Chart.js 4.4.1 (fleet telemetry, substation load curves)
- **Typography:** Inter + JetBrains Mono (Google Fonts)
- **Color System:** Strict color-theory dual-mode (light/dark) with zero neon

## Key Features

1. **Radar GIS Map** — 9 glowing corridors with 28 live animated buses
2. **AI Schedule Solver** — 130 Form 4 schedules with Slide 4 Matrix compliance
3. **Charger & Substation Management** — 16 CCS-2 bays, 2.8 MW load modeling, BESCOM ToU tariffs
4. **24-Hour Dispatch Timeline** — Interactive Gantt across 4 operational shifts
5. **Fleet Telemetry Matrix** — 122 buses with SOH vs range scatter plot
6. **AI Operations Assistant** — Natural language transit queries + stress simulator

## Running

Open `index.html` in a browser. No build step required.
