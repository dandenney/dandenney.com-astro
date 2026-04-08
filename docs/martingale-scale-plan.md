# Martingale Tracker: Scale Plan

Planning notes for maintaining the tracker as data grows to 6 months / 1 year.

Written April 2026 (~55 bets, ~4 weeks in). At the current pace, expect ~650 bets at 6 months and ~1,300 at a year.

---

## Anticipated Concerns

### 1. File size in `martingaleBets.ts`

At ~1,300 bets the file will be 20–25k lines. TypeScript and the build are fine with this, but human ergonomics and the auto-settlement script's string-based file writes become error-prone.

**Plan:** Split into quarterly files, re-exported as a combined array. No downstream code changes needed — the page and settlement script both consume `martingaleBets` unchanged.

```ts
// src/data/martingaleBets.ts
import { bets2026Q1 } from "./martingaleBets/2026-q1";
import { bets2026Q2 } from "./martingaleBets/2026-q2";
export const martingaleBets = [...bets2026Q1, ...bets2026Q2];
```

New bets always go in the current-quarter file. The settlement script targets that file directly.

**Trigger:** When the single file starts feeling unwieldy (~300 bets / 3 months).

---

### 2. Series letter exhaustion

Series is already at `R` after 4 weeks. A–Z will be exhausted around month 3–4 depending on win/loss streaks.

**Decision (make before it happens):** Use a year prefix after Z.

- Format: `2026-A`, `2026-B`, ... then `2027-A`, `2027-B`, ...
- Rationale: keeps series letters short in display and makes historical data self-documenting
- Alternative considered and rejected: double letters (AA, AB...) — less readable in the history table

Update the `seriesId` field type in `MartingaleBet` if it's ever narrowed beyond `string`.

**Trigger:** When series Z is approaching.

---

### 3. Tracker UI: history length

At a year of data the full bet history table becomes very long. Plan for incremental UX improvements:

- Default view shows current/recent series; full history is expandable or paginated
- Filter by series letter or date range
- Stats section adds rolling 30-day and 90-day windows alongside all-time totals

None of these are breaking changes — implement as needed.

**Trigger:** Around 6 months, when scrolling the table becomes annoying.

---

### 4. HYSA benchmark

Currently anchored to start date and $500 principal. Stays valid at any scale — no structural changes needed.

---

## What Requires No Changes

- `MartingaleBet` interface — already well-structured
- Helper functions (`getStakeOut`, `getReturnAmount`, `getNetImpact`, `getNewSeriesStake`) — scale fine
- Build/deploy pipeline — static output, no concern
- Auto-settlement script logic — just needs to target the right quarterly file if data is split

---

## Decision Timeline

| Milestone | Action |
|---|---|
| Series Z approaching (~month 3–4) | Adopt year-prefix series naming (`2026-A`, etc.) |
| ~300 bets / ~3 months | Split data file into quarterly files |
| ~6 months | Add date-range filtering to tracker UI |
| ~1 year | Evaluate year-over-year stats view |
