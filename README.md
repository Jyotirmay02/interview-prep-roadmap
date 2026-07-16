# Interview Prep Roadmap 🗺️

A **curated, free-resources learning path** for software-engineering interviews —
**DSA · Low-Level Design · High-Level/System Design · Behavioral · Mock practice** —
with a **built-in progress tracker**.

- ✅ Only **free** resources (no paid courses, no piracy)
- ✅ **Progress saves in your browser** (localStorage) — no login, no backend
- ✅ **Single static page** — open the file directly or host free on GitHub Pages
- ✅ **Easy to edit**: the whole roadmap lives in one file, `data.js`
- ✅ Filters (All / To-do / Done), per-section + overall progress, "hours remaining", export/import progress

> **Status: pilot.** The structure is solid; the content is a starter set meant to be
> refined. Links are curated starting points — verify/customize them for your target role.

## Use it

Just open `index.html` in a browser:

```bash
open index.html          # macOS
# or double-click the file
```

Check items off as you go — your progress is saved automatically in that browser.
Use **Export progress** to back up or move your progress to another device/browser,
and **Import** to restore it.

## Host it for free (GitHub Pages)

Push this folder to a GitHub repo, then enable **Settings → Pages → Deploy from branch → main → /root**.
Your roadmap will be live at `https://<user>.github.io/<repo>/` for anyone to use.

## Customize the roadmap

Everything is in **`data.js`** — no build step. Each section has a list of items:

```js
{ id: "dsa-neetcode-roadmap",           // unique & stable (progress is keyed by id)
  title: "NeetCode Roadmap",
  type: "practice",                      // video | article | practice | course | repo | book
  provider: "NeetCode",
  url: "https://neetcode.io/roadmap",
  hours: 40,
  note: "The backbone: work the roadmap topic by topic." }
```

Add, remove, or reorder items and sections freely. Keep `id`s stable once people
start tracking progress against them.

## Roadmap for the project itself

Ideas to grow this from a pilot into something richer:

- [ ] Multiple tracks/presets (e.g. "Frontend", "Backend", "Amazon-focused", "New grad")
- [ ] Per-item time-spent logging and a simple weekly study schedule/streak
- [ ] Tags & search/filter by topic; "next up" suggestion
- [ ] Notes per item (saved locally) and a personal mistakes/retro log
- [ ] Community-contributed roadmaps via simple JSON PRs
- [ ] Verify/refresh all resource links; add difficulty and prerequisite ordering
- [ ] Optional cloud sync of progress (opt-in) instead of localStorage-only
- [ ] Import a roadmap from a URL/gist

## Contributing

The best contribution is **better curation**: higher-signal free resources, correct
links, sensible ordering, and realistic time estimates. Edit `data.js` and open a PR.

## License

MIT — see [LICENSE](LICENSE).
