# CONTEXT / HANDOFF — Interview Prep Roadmap

> Purpose of this file: let a future AI session (or contributor) resume without
> re-explaining history. If you're an AI assistant: read this, then `README.md` and
> `data.js`, then continue.

## What this project is
A single static web page: a **curated, free-resources interview-prep roadmap**
(DSA · LLD · HLD · Behavioral · Mock) with a **browser-based progress tracker**
(checkboxes saved in localStorage; per-section + overall progress bars; hours-remaining;
All/To-do/Done filters; export/import/reset).

## Origin / why it exists
Grew out of a brainstorm about helping people prep for interviews in a structured way.
The original throwaway idea (download & re-host paid Udemy courses) was **deliberately
dropped** — that violates ToS/copyright. We pivoted to the legal, higher-value version:
curate **free** resources into an ordered path + track progress. Personal-use, no piracy.

## Current state — PILOT
- ✅ Working single-page app, verified in a browser (rendering + progress tracking)
- ✅ Public on GitHub: https://github.com/Jyotirmay02/interview-prep-roadmap
- ⏳ Content is a **starter set** (5 sections, 21 items, ~260h). Links are curated but
  meant to be refined. This is the main thing to iterate on.
- ⏳ GitHub Pages not yet enabled (one step to make it live/shareable).

## Key design decisions
- **All roadmap content lives in `data.js`** (`window.ROADMAP`) — no build step. Editing
  this file is the primary way to change the roadmap. Item `id`s must stay stable
  (progress is keyed by id in localStorage).
- **No backend / no login**: progress in `localStorage`; export/import JSON for portability.
- **Free resources only.**
- Item types: video | article | practice | course | repo | book. Each has hours + note.

## Immediate next steps (agreed)
1. Enable **GitHub Pages** (Settings → Pages → main / root) → live at
   `https://jyotirmay02.github.io/interview-prep-roadmap/`.
2. Refine `data.js` content with the owner's inputs (better/curated resources, ordering,
   realistic hours; possibly role-specific tracks).
3. See README "Roadmap for the project itself" for richer ideas: multiple tracks/presets,
   study schedule/streaks, per-item notes, search/tags, optional cloud sync.

## How to resume work with an AI assistant
Open this folder and say:
> "Read CONTEXT.md, README.md, and data.js in this repo, then let's work on <X>."
