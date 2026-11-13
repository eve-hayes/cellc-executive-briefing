# Critical Path

A project planner with tasks and indented subtasks, durations, start, finish and due dates,
% complete, responsible people, predecessors, critical path and a live Gantt chart.

## What's in this folder

- `index.html` — the whole app: page, styles and code in one file. No build step and nothing to install.

## Run it

- Open `index.html` in any browser, or
- In Antigravity (or VS Code), open this folder and start any static preview / live server.

## Where projects are saved

Outside Claude, projects are saved in the browser's local storage. That means each person
and each device has its own projects. Use **⋯ → Export** (Microsoft Project XML, CSV or
JSON backup) and **⋯ → Import from file** to move plans between devices.

To give a team one shared set of projects, the save/load code (search for `persistence`
in `index.html`) needs to be connected to a database such as Supabase or Firebase.

## Deploy

Push this folder to a GitHub repository and import it in Vercel as a static site
(Framework preset: "Other", no build command, output directory: `.`).
