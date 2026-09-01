# Golf Section — Plan & Design Brief

Status: approved. Hand this to Fable for initial designs.
Written 2026-09-01.

---

## 1. The premise

Dan started playing golf in July 2026 and it became the primary hobby fast, partly
because Misty is into it too. The approach is unusual and it is the whole story of
the section: instead of grinding public courses, they bought *infrastructure*.

| Date | Venue | What it was |
| --- | --- | --- |
| 2026-07-27 | World Tour Golf Links, Myrtle Beach | First real round in ~20 years, best-ball with Blaine and Caleb |
| 2026-07-30 | Myrtlewood Golf Club, Myrtle Beach | Second round. "Turned curiosity into intent." |
| 2026-08-21 | Five Iron Golf Nashville | Trackman bays, one-off, likely rare |
| 2026-08-23 | GOLFTEC Nashville West | Game assessment with coach, then signed a **full year** of lessons + practice |
| 2026-08-25 | Topgolf Nashville | Now going **1–2x per week** |
| 2026-08-30 | PopStroke Nashville | Signed a **full year** |

Two vacation rounds, then a deliberate decision to learn the game indoors, with
data, before going back out. That arc is the spine of the section: **you can watch
someone get good on purpose.**

The design should feel like the reason it hooked him — from the GOLFTEC review:

> "The whole appeal is that the place strips golf down to motion, contact, pattern,
> and proof... For people wired to enjoy dashboards, diagnostics, and visible
> feedback loops, that is a legitimate good time."

That sentence is the design brief.

---

## 2. Decisions already made

| Question | Decision |
| --- | --- |
| Content architecture | **New standalone `golf-venues` collection.** NRAI reviews stay untouched at their existing URLs. Golf gets its own writeups with a golf-specific schema. |
| Visual identity | **Launch monitor / the lab.** Near-black bay, hot tracer accent, monospace telemetry, real charts. |
| Tracking scope | All four: practice sessions + metrics, rounds & scores, the bag, milestones & PRs. |
| Data entry | **TS data files + slash commands**, martingale-tracker pattern. `/add-golf-session`, `/add-round`. |
| Players | **Dan now, `player` field in the schema from day one** so Misty is a data change, not a refactor. |
| GOLFTEC data | **Summary numbers only.** Session/club averages and headline figures. Every metric optional. |
| URL | `/golf` |
| Prose | **Mixed.** AI-generated venue blurbs via the agent pipeline; hand-written progress/milestone notes. `aiGenerated` per entry. |

### Display name: **Ball Flight**

URL stays `/golf`. The section is titled **Ball Flight** — a literal launch-monitor
term that doubles as the metaphor for the whole arc, and pairs with the tracer motif
that runs through the design.

Keep the name in a single exported constant so it is trivial to change:

```ts
// src/data/golf/types.ts (or a small consts file)
export const GOLF_SECTION_NAME = "Ball Flight";
```

Names considered and set aside, in case one is wanted later for a sub-page or a
feed title: *Provisional*, *The Bay*, *Smash Factor*, *Face to Target*.

---

## 3. Content & data architecture

```
src/content/golf-venues/            <- markdown, new collection
  world-tour-golf-links.md
  myrtlewood-golf-club.md
  golftec-nashville-west.md
  topgolf-nashville.md
  popstroke-nashville.md
  five-iron-golf-nashville.md

src/data/golf/
  types.ts        <- all shared types (mirrors src/data/cases/types.ts style)
  sessions.ts     <- practice sessions, append-only
  rounds.ts       <- scored rounds, append-only
  bag.ts          <- current + retired equipment
  milestones.ts   <- narrative milestones (PRs are derived, not stored)
  utils.ts        <- derivations: PRs, trends, venue rollups, handicap-ish

src/pages/golf/
  index.astro           <- the dashboard
  venues/index.astro    <- venue grid
  venues/[slug].astro   <- venue detail
  sessions.astro        <- full session log + charts
  bag.astro             <- the bag

src/components/golf/    <- shared components (see §6)
src/styles/golf.css     <- shared section identity, .golf wrapper
```

**Why a separate collection, not a shared one:** the NRAI reviews are written in the
Bourdain voice about the *experience*. The golf writeups are about the *facility as
a place to get better* — surface, tech, practice value, whether you'd go back to
work rather than to hang. Topgolf legitimately deserves two different pieces of
writing. Each golf venue links out to its NRAI counterpart where one exists.

### `golf-venues` schema

```ts
const golfVenues = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/golf-venues" }),
  schema: z.object({
    title: z.string(),
    // course | range | simulator | putting | coaching
    format: z.enum(["course", "range", "simulator", "putting", "coaching"]),
    city: z.string(),
    state: z.string().optional(),
    country: z.string(),
    coordinates: z.string().optional(),   // "lng, lat" — matches NRAI convention
    address: z.string().optional(),
    infoUrl: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    summary: z.string(),

    // course-only, all optional
    par: z.number().optional(),
    yardage: z.number().optional(),
    holes: z.number().optional(),
    designer: z.string().optional(),
    opened: z.number().optional(),

    // membership context — the whole point of this section
    membership: z.enum(["annual", "visit", "one-off"]).default("visit"),
    cadence: z.string().optional(),        // "1-2x per week"

    // cross-link to the No Reserv-AI-tions review
    nraiSlug: z.string().optional(),

    pubDate: z.coerce.date(),
    aiGenerated: z.boolean().default(false),
  }),
});
```

### `src/data/golf/types.ts`

```ts
export type Player = "dan" | "misty";

export type Club =
  | "driver" | "3w" | "5w" | "hybrid"
  | "4i" | "5i" | "6i" | "7i" | "8i" | "9i"
  | "pw" | "gw" | "sw" | "lw" | "putter";

/** Every metric optional — GOLFTEC gives summary numbers, and which ones vary. */
export interface ClubMetrics {
  club: Club;
  shots?: number;
  carry?: number;         // yards, avg
  total?: number;         // yards, avg
  longest?: number;       // yards, best single shot in the session
  clubSpeed?: number;     // mph
  ballSpeed?: number;     // mph
  smashFactor?: number;   // ballSpeed / clubSpeed
  launchAngle?: number;   // degrees
  backSpin?: number;      // rpm
  clubPath?: number;      // degrees, + = in-to-out
  faceToTarget?: number;  // degrees, + = open
  note?: string;
}

export interface Session {
  id: number;                       // sequential, append-only, never reassign
  player: Player;
  date: string;                     // ISO
  venueSlug: string;                // -> golf-venues entry
  kind: "lesson" | "practice" | "range" | "simulator";
  coach?: string;
  durationMin?: number;
  focus?: string;                   // "keeping the face from closing"
  clubs: ClubMetrics[];
  takeaway?: string;                // hand-written, 1-3 sentences
  aiGenerated?: boolean;
}

export interface Round {
  id: number;
  player: Player;
  date: string;
  venueSlug: string;
  format: "stroke" | "best-ball" | "scramble" | "putting";
  holesPlayed: 9 | 18;
  tees?: string;
  par?: number;
  score?: number;                   // total strokes
  holes?: number[];                 // optional hole-by-hole
  partners?: string[];              // ["Blaine", "Caleb"]
  conditions?: string;
  putts?: number;
  fairways?: { hit: number; of: number };
  gir?: { hit: number; of: number };
  note?: string;
}

export interface BagItem {
  id: string;
  category: "wood" | "iron" | "wedge" | "putter" | "ball" | "gear";
  club?: Club;
  brand: string;
  model: string;
  loft?: string;
  shaft?: string;
  acquired?: string;                // ISO
  retired?: string;                 // ISO, null = in the bag
  replaced?: string;                // id of the item it replaced
  price?: number;
  why?: string;                     // hand-written
  verdict?: string;                 // hand-written, after use
}

export interface Milestone {
  id: number;
  player: Player;
  date: string;
  kind: "first" | "pr" | "decision" | "note";
  title: string;                    // "First par"
  detail?: string;                  // hand-written
  venueSlug?: string;
  sessionId?: number;
  roundId?: number;
}
```

### `utils.ts` derivations (not stored, computed)

- `getPRs(player)` — longest drive, best carry per club, best smash, low round, low 9,
  fewest putts. Each returns value + date + venue so the UI can cite the moment.
- `getClubTrend(player, club, metric)` — chronological series for charting.
- `getVenueStats(slug)` — visits, sessions, rounds, best score, first/last visit.
- `getStreak()` — sessions in the last 30 days, for the "cadence" readout.
- `isPR(session, metric)` — used by `/add-golf-session` to auto-flag new records.

---

## 4. Visual identity — "the bay"

**This section is dark-only**, same as No Reserv-AI-tions. Wrap in a `.golf` class on
`<html>` and define explicit colors in `src/styles/golf.css`. **Never use `dark:`
variants here** — BaseHead's theme script strips `.dark` for light-theme visitors,
so `dark:` rules will silently drop out. Copy the pattern from `src/styles/nrai.css`,
including the header colour overrides and the forced-dark theme toggle.

### Palette

```css
.golf {
  --gf-bay:    oklch(14% 0.014 250);  /* the room, page background */
  --gf-panel:  oklch(18% 0.016 250);  /* module surfaces */
  --gf-raised: oklch(22% 0.018 250);  /* hover / active surface */
  --gf-line:   oklch(95% 0.01 250 / 0.12);
  --gf-ink:    oklch(96% 0.006 250);  /* primary text + numerals */
  --gf-dim:    oklch(68% 0.012 250);  /* labels, units, axes */

  --gf-tracer: oklch(85% 0.20 130);   /* hot chartreuse — the ball, the arc, PRs */
  --gf-miss:   oklch(75% 0.16 65);    /* amber — dispersion, off-target, misses */
  --gf-cool:   oklch(78% 0.13 220);   /* cyan — comparison / secondary series */
  --gf-turf:   oklch(45% 0.09 150);   /* deep green — grounding, course content */
}
```

Restraint is the point. The bay is nearly black; the tracer green is the only thing
allowed to be loud, and it is reserved for **the ball and the records**. Amber only
for a miss or a negative delta. Cyan only when two series need separating (Dan vs
Misty later; carry vs total; this month vs last).

### Type

- **Telemetry / numerals:** a technical mono with true tabular figures —
  `IBM Plex Mono` or `JetBrains Mono`. Every number in the section is monospaced and
  tabular so columns lock. Uppercase, wide-tracked (`0.12em`) for metric labels.
- **Display:** a wide/expanded grotesk for big readouts and page titles —
  `Space Grotesk` or `Archivo Expanded`. Big numbers get `font-variant-numeric:
  tabular-nums` and optical sizing.
- **Prose:** keep it quiet. System serif or the existing body stack, generous
  measure, ~68ch. The writing should read like notes in a lab notebook, not a blog.
- Deliberately **not** Anton or Special Elite — those belong to No Reserv-AI-tions.

### Texture & atmosphere

Instead of NRAI's film grain, the bay gets:

- A very faint **projector glow** — a radial gradient from top-center, as if the
  simulator screen is the room's light source. `opacity ~0.05`.
- A **1px grid** on panel backgrounds at low opacity, like a target screen.
  `background-image: linear-gradient(...)` at 24px, `opacity 0.04`.
- Hairline rules, never boxes with heavy borders. `--gf-line` at 1px.
- No drop shadows. Depth comes from surface lightness steps, not blur.

### Motion

GSAP is already a dependency. Rules:

- **Tracer arcs draw.** Any ball-flight path animates via `stroke-dashoffset` from
  full to zero, ~700ms, `power2.out`. This is the section's signature move — use it
  on the hero and on session cards, nowhere else.
- **Numbers count up** on first view, ~500ms, tabular so there's no layout shift.
  Only for hero-scale numerals, not table cells.
- **Charts wipe in** left-to-right on intersection, once.
- Everything respects `prefers-reduced-motion: reduce` — arcs render complete,
  numbers render final, no wipes.
- No parallax. No scroll-jacking on the index.

---

## 5. The pages

### `/golf` — the dashboard

The one page that has to be gorgeous. Reads top to bottom as: *where I am right now →
what I've been doing → where I've been → what I'm swinging → how it started.*

**Hero — "the bay."** Full-bleed dark. A single large tracer arc drawn in SVG across
the viewport, ending at a ball. Overlaid, in the launch-monitor readout language:

```
BALL FLIGHT                                    NASHVILLE · 2026
──────────────────────────────────────────────────────────────
  Two vacation rounds in July. Then a year of lessons,
  a year of PopStroke, and Topgolf twice a week.
  Learning a game on purpose, with the receipts.

  SESSIONS  12      ROUNDS  2      VENUES  6      DAYS IN  36
```

The four counters are the first thing that establishes this is a data section. They
count up. `DAYS IN` is computed from the first round date, which is a nice quiet flex.

**Personal records board.** The emotional core. A horizontal strip of record tiles:
longest drive, best 7-iron carry, low 9, low 18, fewest putts, best smash factor.
Each tile: the number huge in tracer green, the metric label in mono caps above, and
below in dim mono, *where and when* it happened, linking to that session or round.
Records that are new within 14 days get a small `NEW` flag. Tiles with no data yet
render as an honest empty state — a dashed outline and `— NOT YET —` — because the
absence is part of the story right now.

**Progress chart.** The chart that proves the thesis. X = time since 2026-07-27.
Y = a chosen metric, with a small segmented control to switch it (7-iron carry /
club speed / longest drive / score to par). Line in tracer green, points as small
circles, dispersion band in amber where the data supports it. Session markers along
the X axis, hoverable, showing date + venue + value. Annotate the two big narrative
moments directly on the chart: "First round in 20 years" and "Signed the year at
GOLFTEC." Those annotations are what make it a story rather than a graph.

**Recent activity.** A reverse-chronological log, mono, dense, ledger-like. One row
per session or round: date, venue, kind, the headline number, a one-line takeaway.
Rounds and sessions visually distinguished by a leading glyph, not by colour.
Cap at ~8 with a link to `/golf/sessions`.

**Venues strip.** Six cards, one per venue, each showing format, visit count, and
membership status. Annual memberships get a small persistent badge — that's the
unusual part of the approach and it should be visible. Links to `/golf/venues`.

**The bag preview.** A compact row of the clubs currently in play, distance-ordered.
Links to `/golf/bag`.

**Origin note.** Closes the page. Short hand-written prose about how this started,
sitting in the quiet body type. The one place on the page with no numbers.

### `/golf/venues` — the grid

Six cards. Grouped or filterable by `format` (course / range / simulator / putting /
coaching), because "where I play" means five different things now and that's
interesting rather than messy. Each card: hero image with a dark wash, title, city,
format tag, visit count, best score if it's a course, and membership badge. Optional
small map, reusing the NRAI map component if it's cleanly extractable — otherwise
skip it in v1.

### `/golf/venues/[slug]` — venue detail

- Hero image, name, format, address, link out.
- A stat block: visits, first visit, last visit, sessions here, rounds here, best
  score, longest drive recorded here.
- The golf writeup prose.
- Every session and round logged at this venue, in a table.
- A "read the No Reserv-AI-tions review" link where `nraiSlug` is set. This
  cross-link matters — it's the seam between the two voices and should feel
  intentional, styled as a deliberate hand-off, not a footnote.

### `/golf/sessions` — the log

The full ledger. Filterable by venue, kind, and club. Each session expands to show
the club-by-club metric table. Any value that was a PR at the time gets a tracer-green
marker. The design job here is **density done well** — this should look like a good
terminal, with locked tabular columns and hairline rules, not like a card list.

### `/golf/bag` — the equipment

Distance-ordered layout, longest club at the top, matching how a bag is actually
organised in the head. Per club: brand, model, loft, shaft, acquired date, and where
data exists, **the average carry pulled from sessions** — the bag and the metrics
should visibly talk to each other. Retired gear appears below in a dimmed "out of the
bag" group with what replaced it, so the upgrade path is legible over time. Balls and
non-club gear in their own group.

---

## 6. Components

```
src/components/golf/
  Tracer.astro          <- the SVG ball-flight arc, parametrized by carry/apex/curve
  MetricReadout.astro   <- label + value + unit + optional delta, the atom of the section
  RecordTile.astro      <- PR tile with citation link and empty state
  ProgressChart.astro   <- inline SVG line chart, no library, metric switcher
  SessionRow.astro      <- one ledger row, expandable
  ClubTable.astro       <- the club-by-club metrics table
  VenueCard.astro       <- venue grid card
  BagRow.astro          <- one club in the bag, with derived carry
  StatBlock.astro       <- the label/number grid used on venue + index
```

Charts should be **hand-built inline SVG**, not a charting library. The data volumes
are tiny, the aesthetic is specific, and adding a dependency for six data points is
the wrong trade. `dataviz` conventions still apply for axes, contrast, and legends.

---

## 7. Build phases

1. **Data layer.** `types.ts`, `utils.ts`, seed `sessions.ts` / `rounds.ts` /
   `bag.ts` / `milestones.ts` with what exists today (2 rounds, the GOLFTEC
   assessment, the Topgolf and Five Iron visits, the PopStroke rounds). Register the
   `golf-venues` collection. Migrate the six venues into golf writeups.
2. **Fable designs** the index hero, the record board, the progress chart, and one
   venue detail. Everything else follows from those four.
3. **Build** `/golf`, then venues, then sessions, then bag.
4. **Slash commands** `/add-golf-session` and `/add-round`, modelled on `/add-bet`,
   including automatic PR detection and `npx astro check` before commit.
5. **Pipeline extension** — a `golf-venue` packet type in the agent pipeline for the
   venue blurbs. Follows the existing Leif → Quillan → Watten → Shelby contract with a
   golf-specific research brief (facility, surface, tech, practice value) rather than
   the food-and-drink one.
6. **Nav** — add to `Header.astro` once there's enough content to justify it.

### Stretch, later

A Three.js ball-flight tier for a single hero shot, in the manner of the Shannan
Gilbert story page — real trajectory from real launch numbers, apex and carry to
scale. Only worth building once the GOLFTEC data is actually flowing, and only if it
teaches something the SVG tracer can't.

---

## 8. Repo constraints for whoever builds this

- TypeScript for all new files; `@/` alias, never relative imports.
- `npx astro check` is the gate. No test suite.
- Commit straight to `main`, `feat(golf): ...` convention. No branches, no PRs.
- Layout shell: `<main>` wraps `Header` + content with `relative shadow-xs z-10`;
  `<Footer />` sits outside `<main>`, directly in `<body>`.
- Session and round `id`s are append-only. Never reorder or reassign.
- Dark-only section — see §4. No `dark:` variants inside `.golf`.
- Hand-written prose: no em dashes.
- Scoped or specific CSS selectors; check for side effects on shared selectors.
