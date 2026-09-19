<!-- Notes from a Wilted Gardenia — README -->

<div align="center">

```
  ·  ✦  ·
        ╔══════════════════════════════════════════════════════════╗
        ║                                                          ║
        ║       N O T E S   F R O M   A   W I L T E D            ║
        ║                 G A R D E N I A                         ║
        ║                                                          ║
        ║         the silence of things left unsaid               ║
        ║                                                          ║
        ╚══════════════════════════════════════════════════════════╝
  ·  ✦  ·
```

*A quiet digital archive of standalone poems and curated anthologies.*

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/license-private-b5a28a?style=flat-square)

</div>

---

## Table of Contents

- [What This Is](#what-this-is)
- [Design Philosophy](#design-philosophy)
- [Site Map & Pages](#site-map--pages)
- [Feature Reference](#feature-reference)
- [Content System](#content-system)
- [Personalization Features](#personalization-features)
- [Architecture Overview](#architecture-overview)
- [Configuration Reference](#configuration-reference)
- [Curating Start Here](#curating-start-here)
- [Image Export](#image-export)
- [Development Guide](#development-guide)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Colophon](#colophon)

---

## What This Is

**Notes from a Wilted Gardenia** is a literary web archive — a place to preserve and present poems, standalone notes, and curated anthologies in an atmosphere of quiet editorial care. It is not a blog. It is not a portfolio. It is an archive that has the patience of pressed flowers.

The content is managed entirely through a **Google Sheets spreadsheet**, so adding or editing entries requires no code changes. The site reads live CSV exports from the sheet on every load.

This site is open to contributions from multiple authors. Each entry carries its own attribution, and the curator's role is to assemble, arrange, and tend to the collection — not to claim authorship of every piece within it.

---

## Design Philosophy

```
  Bruised parchment.   Candlelight over ink.   Editorial silence.
```

The aesthetic draws from literary journals, handwritten correspondence, and the faded elegance of archival documents. Every visual decision reinforces restraint:

- **Typography**: `Cormorant Garamond` (poetry body, titles) + `Inter` (metadata, UI) + `Newsreader` (introductions). All weights are light — never bold where italic will do.
- **Colour**: Two themes — a warm `parchment` light mode and a deep `bruised-ink` dark mode. Both avoid pure black and pure white, preferring toned, aged hues.
- **Motion**: Floating gardenia petals drift across the viewport (toggleable). Background: a faint botanical engraving watermark. All animations are slow, unhurried.
- **Spacing**: Generous vertical rhythm. Poetry lines breathe. Nothing crowds.

---

## Site Map & Pages

```
  /                    → Home
  /archive             → Archive (all notes)
  /notes               → redirects → /archive
  /poem/:id            → Individual poem view
  /anthologies         → Curated collections list
  /colophon            → About the archive
  /about               → redirects → /colophon
  /note                → redirects → /colophon
  /*                   → 404 · "Unpenned Page"
```

### Home `/`

The landing page is a layered, editorial front page:

```
  ┌─────────────────────────────────────────────┐
  │  [Header — title + nav + controls]          │
  ├─────────────────────────────────────────────┤
  │  Hero: site title, tagline                  │
  │  ────────────────── ✦ ──────────────────    │
  │  On This Day  (anniversary notes)           │
  │  ────────────────── ✦ ──────────────────    │
  │  Start Here   (first-visit reading path)    │
  │    — hidden once reading history detected   │
  │  ────────────────── ✦ ──────────────────    │
  │  Recently Read (last 4 opened notes)        │
  │    — hidden for first-time visitors         │
  │  ────────────────── ✦ ──────────────────    │
  │  Latest Notes (most recent 6 poems)         │
  │  ────────────────── ✦ ──────────────────    │
  │  [Footer]                                   │
  └─────────────────────────────────────────────┘
```

### Archive `/archive`

A full browsable list of all notes with rich filtering:

```
  ┌─────────────────────────────────────────────┐
  │  Search bar  [text search across all fields]│
  │                                             │
  │  Mood chips:  Heartbreak  Love  Solitude    │
  │               Resilience  Memory            │
  │                                             │
  │  Tag chips:   [all unique tags, sorted]     │
  │                                             │
  │  [ ] Bookmarked only                        │
  │                                             │
  │  ── Results (N notes) ──────────────────    │
  │                                             │
  │  ♡  Title · Author                   ▾ Pre  │
  │     Date  · Tags                            │
  │     [Intro preview — toggled]               │
  │                                             │
  └─────────────────────────────────────────────┘
```

- **Mood filter** selects all poems whose tags overlap with a predefined emotional bucket.
- **Tag filter** drills down to poems with a specific granular tag.
- **Bookmarked only** shows only device-saved poems.
- Multiple filters stack (AND across types, OR within moods).
- A transparency notice appears when the Bookmarked filter is active: *"Showing notes bookmarked on this device · Local only."*

### Poem View `/poem/:id`

The reading experience for an individual note:

```
  ┌─────────────────────────────────────────────┐
  │  ← Archive                                  │
  │                                             │
  │  Title                                      │
  │  by Author Name                             │
  │                                             │
  │  Introduction / epigraph (italic)           │
  │                                             │
  │  ─────────────────────────────────────      │
  │                                             │
  │  [Poem body — stanza by stanza]             │
  │                                             │
  │  ─────────────────────────────────────      │
  │                                             │
  │  Published · Date                           │
  │  N stanzas · N words · ~N min read          │
  │  Tags: [tag] [tag] [tag]                    │
  │                                             │
  │  ── Reader Tools ────────────────────────   │
  │  [ Share ]  [ Save / Saved ]  [ Export ↓ ] │
  │                                             │
  │  ── Navigate ────────────────────────────   │
  │  ← Previous Note          Next Note →       │
  │                                             │
  │  ── Echoes & Resonances · Kindred Notes ─   │
  │  [Related poem card] [Related] [Related]    │
  └─────────────────────────────────────────────┘
```

### Anthologies `/anthologies`

Cards for curated themed collections, each with title, subtitle, description, and an optional external link.

### Colophon `/colophon`

The archive's self-description — its purpose, curation philosophy, and a note on the nature of the collection.

---

## Feature Reference

### 🌿 Floating Petals

A canvas-based ambient animation of translucent gardenia petals drifting across the page. Controlled by a toggle button in the header. The preference is persisted in `localStorage` under `wilted_petals_enabled`.

> Toggle: **⊛ Petals / ✕ Petals** button in header controls.

---

### 🎲 Surprise Me / Random Note

A shuffle button in the header navigates to a randomly selected poem. It always excludes the poem currently being read, guaranteeing a fresh destination.

> Available at all times from the header; on mobile, inside the **⋯ Options** menu.

---

### 📅 On This Day

On the home page, any poem whose publication month and day match today's date (across any year) is surfaced in an anniversary card. The card shows:
- The year the note was written
- The title and a brief excerpt
- A direct link to the poem

This section is invisible on days without matching poems.

---

### 🏁 Start Here

A curated numbered reading path designed for first-time arrivals. Entries and their accompanying curator notes are defined in `src/data/config.js` under `START_HERE_IDS`. This section automatically hides once the reader has accumulated any reading history on their device.

---

### 📖 Recently Read

Appears on the home page once at least one poem has been read. Displays a shelf of the 4 most recently opened notes, in reverse chronological order of reading. Powered by the `wilted_reading_history` localStorage key.

---

### 🔖 Bookmarks

A device-local bookmark system (no account required). Bookmarks persist in `localStorage` as an array of poem IDs under `wilted_bookmarks`.

| Location | Interaction |
|---|---|
| Poem view — Reader Tools | "Save" button; turns to "Saved ✓" when active |
| Archive list row | Ribbon icon (♡ / ♡ filled) adjacent to the title |
| NoteCard (home page cards) | Corner ribbon icon |
| Archive filter bar | "Bookmarked only" chip to show saved notes |

---

### 🌡️ Mood Browsing

Five broad emotional themes, each mapping to a set of granular tags. Selecting a mood chip in the Archive shows all poems with at least one matching tag.

| Mood | Tags included |
|---|---|
| Heartbreak & Longing | heartbreak, longing, separation, regret, sorrow, loss, grief, melancholy |
| Love & Devotion | love, romance, devotion, admiration, tenderness, passion, affection |
| Solitude & Introspection | solitude, introspection, insomnia, silence, night, midnight, shadows, quiet |
| Resilience & Hope | resilience, hope, determination, empowerment, healing, dawn, renewal, strength |
| Memory & Ephemera | memory, nostalgia, time, decay, autumn, winter, petals, leaves, fragrance |

---

### 🔗 Share

On the poem view, the **Share** button uses the native Web Share API on supported platforms (Android, iOS, macOS Safari). On unsupported platforms (most desktop browsers), it falls back to copying the poem's direct URL to the clipboard, briefly showing "Copied!" confirmation.

The canonical URL format is: `https://[origin]/poem/[poem-id]`

---

### 🖼️ Image Export

Generates a downloadable PNG image card of the full poem — suitable for sharing on social media or saving as a keepsake. The export engine:

- Renders on an **HTML5 Canvas** at **1080 × 1350px** base resolution (portrait, Instagram-ratio)
- Scales canvas height dynamically if the poem is long enough to require it
- Adapts font size and line height based on total line count
- Renders the title, author, all stanzas (with stanza gaps), and a footer watermark
- Background: warm parchment tone (`#f5ede0`)
- Fonts: Cormorant Garamond (serif, loaded from Google Fonts)

> **Export ↓** button in Reader Tools on the poem view.

---

### 🌗 Dark / Light Theme

A full two-theme system toggled from the header. The preference is persisted in `localStorage` under `wilted_theme`. Themes are implemented as CSS custom property sets on the `[data-theme]` attribute of `<html>`.

```
  ☀  Light: warm parchment background, sepia ink
  ☽  Dark:  bruised-indigo background, moonlit cream text
```

---

### 🔗 Related Poems (Kindred Notes)

At the bottom of every poem view, up to 3 thematically related poems are shown. Relatedness is computed by **tag overlap count**, with ties broken by publication date (newest first). The section is hidden when no tag overlap exists.

---

### 📱 Mobile-Responsive Header

On screens ≤ 768px, the row of header controls (Petals, Surprise Me, Theme) collapses into a single **⋯ Options** dropdown to prevent the site title from wrapping or crowding. The menu dismisses on:
- Clicking outside
- Pressing Escape

---

### ⏳ Loading & Error States

| State | Display |
|---|---|
| Loading | Rotating literary placeholder lines (*"Letting the ink settle…"*, *"Pressing petals between pages…"*, etc.) |
| Error | Poetic error message (*"The ink has faded from these leaves…"*) with an expandable technical details drawer |

---

## Content System

All content is served from a **Google Spreadsheet** published as CSV. No database, no backend, no CMS login required.

### Google Sheets Schema — Notes (Poems)

| Column | Required | Description |
|---|---|---|
| `id` | Recommended | URL-safe slug (e.g. `night-notes-03`). Auto-generated from `name` if omitted. |
| `name` | **Yes** | Title of the poem / note |
| `author` | No | Author name. Defaults to `"Unrecorded Author"` if blank. |
| `intro` | No | 1–2 line epigraph, dedication, or setup note (shown in italic above the poem) |
| `contents` | **Yes** | Full poem body. Use `\n` for line breaks; blank lines between stanzas become stanza breaks. |
| `publish_date` | Recommended | `YYYY-MM-DD` format. Powers chronological sorting and "On This Day". |
| `tags` | Recommended | Semicolon-separated list of lowercase tags (e.g. `love;memory;autumn`) |

> **Column aliases accepted**: `title` → `name`, `poet` → `author`, `excerpt` → `intro`, `content` / `body` → `contents`, `date` → `publish_date`, `tag` → `tags`.

### Google Sheets Schema — Anthologies

| Column | Required | Description |
|---|---|---|
| `id` | Recommended | URL-safe slug |
| `title` | **Yes** | Collection name |
| `author` | No | Curator/editor name (defaults to `DEFAULT_CURATOR`) |
| `subtitle` | No | Short secondary title |
| `description` | No | Longer prose description of the collection |
| `link_url` | No | External URL for the collection (e.g. Substack, PDF link) |
| `status_or_tag` | No | A label such as `ongoing`, `complete`, `limited` |

### Adding a New Poem

1. Open the Google Spreadsheet → **notes** tab.
2. Add a new row with at minimum `name` and `contents`.
3. Fill in `id` (recommended), `author`, `intro`, `publish_date`, and `tags`.
4. Save. The site fetches live on every page load — **no deploy needed**.

> If the `id` column is left blank, the site will auto-generate one from the title. This is fine but the URL will be unstable if the title ever changes. Prefer explicit stable slugs.

### Mood & Tag Taxonomy

Tags are free-form and lowercase. The only structured layer on top of them is the **Mood Map** in `src/data/config.js`. To add a new mood bucket or assign new tags to an existing one, edit `MOOD_MAP`:

```js
// src/data/config.js
export const MOOD_MAP = {
  "Heartbreak & Longing": ["heartbreak", "longing", /* ... */],
  "My New Mood": ["newtag1", "newtag2"],
};
```

No restart or redeploy is needed for mood map changes — the map is bundled at build time.

---

## Personalization Features

All personalization is **device-local** and **requires no account**. Data lives in `localStorage` and never leaves the reader's browser.

```
  ┌──────────────────────────────────────────────────────┐
  │  localStorage keys used by the archive               │
  │                                                      │
  │  wilted_bookmarks          array of poem IDs         │
  │  wilted_reading_history    array of {id, readAt}     │
  │  wilted_theme              "light" | "dark"          │
  │  wilted_petals_enabled     "true" | "false"          │
  └──────────────────────────────────────────────────────┘
```

To clear all personalization data, open browser DevTools → Application → Local Storage → delete all keys prefixed `wilted_`.

---

## Architecture Overview

### Directory Structure

```
NotesFromWiltedGardenia/
├── index.html                  # Root HTML, Google Fonts, meta tags
├── vite.config.js              # Vite build config
├── netlify.toml                # Netlify build + SPA redirect rule
├── package.json
├── .oxlintrc.json              # Linter config (oxlint)
│
└── src/
    ├── main.jsx                # React DOM entry point
    ├── App.jsx                 # Router + ContentProvider + layout shell
    ├── index.css               # Entire design system (CSS custom properties,
    │                           # themes, components, animations, responsive)
    │
    ├── context/
    │   ├── ContentContext.jsx  # Provider: fetches & parses both CSVs
    │   ├── contextDefinition.js
    │   └── useContent.js       # Consumer hook
    │
    ├── data/
    │   ├── config.js           # CSV URLs, MOOD_MAP, START_HERE_IDS,
    │   │                       # DEFAULT_AUTHOR, DEFAULT_CURATOR, fallbacks
    │   ├── usePoems.js         # Convenience re-export of poems from context
    │   └── useAnthologies.js   # Convenience re-export of anthologies
    │
    ├── hooks/
    │   ├── useBookmarks.js         # localStorage bookmark CRUD
    │   ├── useReadingHistory.js    # localStorage reading history (max 20)
    │   └── useDocumentTitle.js     # Per-page <title> updater
    │
    ├── utils/
    │   ├── poemHelpers.js      # getStanzaCount, getWordCount, getReadMinutes
    │   ├── relatedPoems.js     # Tag-overlap based related poem scorer
    │   └── exportPoemImage.js  # Canvas-based full-poem PNG exporter
    │
    ├── components/
    │   ├── Header.jsx              # Nav, controls, mobile menu
    │   ├── Footer.jsx
    │   ├── NoteCard.jsx            # Home page poem card with bookmark
    │   ├── AnthologyCard.jsx       # Anthology preview card
    │   ├── FloatingPetals.jsx      # Canvas petal animation
    │   ├── GardeniaBackgroundMotif.jsx  # SVG watermark
    │   ├── GardeniaEmblem.jsx      # Decorative emblem SVG
    │   ├── PetalDivider.jsx        # Section divider element
    │   ├── OnThisDay.jsx           # Anniversary poem highlight
    │   ├── RecentlyRead.jsx        # Last 4 read poems shelf
    │   ├── StartHere.jsx           # Curated first-visit reading path
    │   ├── LoadingState.jsx        # Rotating literary skeleton
    │   └── ErrorState.jsx          # Poetic error display
    │
    └── pages/
        ├── Home.jsx            # Landing page, assembles home sections
        ├── Archive.jsx         # Filterable poem list
        ├── PoemView.jsx        # Individual poem reader
        ├── Anthologies.jsx     # Collections list
        └── Colophon.jsx        # About / archive note
```

### Data Flow

```
  Google Sheets (published as CSV)
          │
          │  fetch() on app mount
          ▼
  ContentContext  (ContentProvider)
  ├── Papa.parse() → normalised poem objects
  ├── Papa.parse() → normalised anthology objects
  └── exposes { poems, anthologies, loading, error } via useContent()
          │
          ├──► Home.jsx       (latest notes, OnThisDay, RecentlyRead, StartHere)
          ├──► Archive.jsx    (filtered list with mood/tag/search/bookmark)
          ├──► PoemView.jsx   (single poem + related + reader tools)
          └──► Anthologies.jsx
```

### LocalStorage Keys

| Key | Type | Purpose |
|---|---|---|
| `wilted_bookmarks` | `string[]` (JSON) | Array of bookmarked poem IDs |
| `wilted_reading_history` | `{id, readAt}[]` (JSON) | Ordered reading history (newest first, max 20 entries) |
| `wilted_theme` | `"light"` \| `"dark"` | UI colour theme preference |
| `wilted_petals_enabled` | `"true"` \| `"false"` | Whether ambient petals are shown |

---

## Configuration Reference

All site-wide configuration lives in `src/data/config.js`.

```js
// Data source URLs (Google Sheets → File → Share → Publish to web → CSV)
export const NOTES_CSV_URL       = "https://docs.google.com/...";
export const ANTHOLOGIES_CSV_URL = "https://docs.google.com/...";

// Author attribution fallback (shown when a poem has no recorded author)
export const DEFAULT_AUTHOR  = "Unrecorded Author";

// Curator name (shown on anthology cards when no curator field is specified)
export const DEFAULT_CURATOR = "Rahul Gouri";

// Emotional mood buckets → tag arrays (used by Archive mood filter chips)
export const MOOD_MAP = { ... };

// Curated reading path for first-time visitors (edit freely)
export const START_HERE_IDS = [
  { id: "note-1", note: "Curator's note for this entry..." },
];

// Fallback content if CSVs are unreachable (can be left empty [])
export const FALLBACK_POEMS      = [];
export const FALLBACK_ANTHOLOGIES = [];
```

---

## Curating Start Here

The **Start Here** section on the home page surfaces a numbered reading path for new visitors. It hides automatically once any reading history is detected on the device.

To curate the path:

1. Open `src/data/config.js`
2. Edit the `START_HERE_IDS` array:

```js
export const START_HERE_IDS = [
  {
    id: "your-poem-slug",            // must match the poem's `id` field exactly
    note: "A short curator's note — one or two evocative sentences.",
  },
  // aim for 3–5 entries; more becomes unwieldy for a first visit
];
```

3. Save and redeploy (or `npm run dev` to preview locally).

> Poems whose IDs don't exist in the live sheet are silently skipped — no errors are thrown.

---

## Image Export

The **Export ↓** button on any poem view generates a **1080 × 1350px PNG** (or taller, if the poem requires it). The canvas renderer:

1. Fills the background with parchment (`#f5ede0`)
2. Draws a thin decorative border frame
3. Renders the poem title (large, Cormorant Garamond)
4. Renders the author attribution line below
5. Renders all stanzas with appropriate line wrapping and stanza gaps
6. Adds a footer watermark: *"Notes from a Wilted Gardenia"*
7. Triggers a browser file download as `[poem-title].png`

Font scaling is automatic — longer poems reduce font size to fit all lines without clipping. The renderer uses `document.fonts.load()` to await web font availability before drawing, ensuring serif fonts render correctly rather than falling back to system fonts.

---

## Development Guide

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with hot module replacement.

### Lint

```bash
npm run lint
```

Uses [oxlint](https://oxc.rs/docs/guide/usage/linter.html) — a fast Rust-based linter. Configuration in `.oxlintrc.json`.

### Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

### Connecting Your Own Google Sheet

1. Create a Google Spreadsheet with two tabs: **notes** and **anthologies**.
2. Go to **File → Share → Publish to web**.
3. For each tab: select the tab name → choose `Comma-separated values (.csv)` → click **Publish**.
4. Copy the generated URLs into `src/data/config.js`.
5. Save and restart the dev server — the site will now load your content.

---

## Deployment

The site is pre-configured for **Netlify**.

```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to   = "/index.html"
  status = 200
```

The redirect rule is essential for client-side routing — without it, direct URL access to `/poem/some-id` would return a 404 from Netlify's edge nodes.

**To deploy:**
1. Push to your connected Git repository (GitHub / GitLab / Bitbucket).
2. Netlify auto-deploys on every push to `main`.

Or deploy manually by dragging the `/dist` folder into Netlify's drop zone at `app.netlify.com`.

---

## Design System

The entire design system lives in `src/index.css` as CSS custom properties.

### Colour Tokens (abridged)

```
  Light theme                              Dark theme
  ─────────────────────────────────        ──────────────────────────────────
  --bg-page       #f9f4ed  (parchment)     --bg-page       #1a1520  (deep plum)
  --ink-primary   #2a1f14  (dark sepia)    --ink-primary   #e8ddd0  (cream)
  --ink-muted     #7a6a58  (warm grey)     --ink-muted     #8a7d70  (muted moon)
  --accent        #8b6f4e  (earth brown)   --accent        #c9a87c  (aged gold)
  --border        #d4c4a8  (aged paper)    --border        #3a2f3a  (velvet)
```

### Typography

```
  --font-serif    'Cormorant Garamond', Georgia, serif
  --font-sans     'Inter', system-ui, sans-serif
  --font-news     'Newsreader', Georgia, serif
```

### Responsive Breakpoints

```
  900px   → header navigation collapses
  768px   → header controls become ⋯ Options dropdown
  640px   → single-column home layout, tighter padding
```

---

## Colophon

*Notes from a Wilted Gardenia* is assembled and tended by **Rahul Gouri**, who serves as the archive's curator — not necessarily as the sole author of its contents. The site is intentionally open: poems by other authors may be included, attributed to their respective voices.

The name comes from the particular quality of silence that exists after something has been said too late, or not at all.

> *"A wilted gardenia still holds its fragrance long after the petals have bruised."*

---

<div align="center">

```
         ·  ✦  ·
  the silence of things left unsaid
         ·  ✦  ·
```

</div>
