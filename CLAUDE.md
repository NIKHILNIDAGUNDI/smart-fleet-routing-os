# Project: Smart Fleet Routing OS — Ashok Leyland / Switch Mobility / City Transit

## What This Is
A production-grade transit dispatch operating system for Chandapura Depot 44 (Bengaluru).
- 122 Switch Electric Buses (real KA51AH/AJ registrations, real tested ranges 62–136 km)
- 130 Form 4 Schedules across 4 shifts (Night Halt 71, General 39, Shift A 10, Shift B 10)  
- 9 core corridors (328H, 600F, 360K, KBS-3A, 500DC, 356Z, 361C, 399C + Depot Hub)

## Architecture
Single-page vanilla HTML/CSS/JS app (~257 KB). No build step.  
- Leaflet.js for GIS radar map  
- Chart.js for telemetry visualizations  
- Dual-mode color system (light/dark, strict color theory)

## Key Files
- `src/smart_fleet_routing.html` — Main application (all 6 views)
- `data/fleet_data.json` — 122-bus fleet dataset
- `data/Form 4 *.xlsx` — City Transit schedule source data (4 shift types)
- `docs/DECISION_RATIONALE.md` — Full engineering rationale

## Rules
- Preserve the Slide 4 Allocation Matrix logic (bus categories A/B/C × time slots × route difficulty)
- Maintain dual-mode color system — never use neon colors
- All bus data must match real City Transit/Switch Mobility registrations
- Keep the CC-CV charging kinetics model accurate (1.08%/min CC, 0.44%/min CV)
- 2.8 MW substation cap must be enforced in charger scheduling
