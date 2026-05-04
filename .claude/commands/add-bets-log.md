# Add Bets Log Entry

Add a daily bets log entry for `$ARGUMENTS` (format: `YYYY-MM-DD`).

Example: `/add-bets-log 2026-04-21`

---

## Step 1: Validate arguments

Parse `$ARGUMENTS` as a date. If it is not a valid `YYYY-MM-DD` string, stop and tell the user.

## Step 2: Check for existing entry

Check whether `src/data/betsLog/$ARGUMENTS.ts` already exists. If it does, stop and tell the user.

## Step 3: Read source data

Read these files in parallel:

- `src/data/rithhmmPicks.ts` — filter to entries where `date === "$ARGUMENTS"`; these become the candidates. If no picks exist for the date, warn the user that candidates will need to be filled in manually, then continue.
- `src/data/betsLog/index.ts` — understand current imports and the `allLogs` array order.

Then search `src/content/plus-ev/` for a recap file whose frontmatter contains `recapDate` matching `$ARGUMENTS`:

```
grep -rl 'recapDate.*$ARGUMENTS' src/content/plus-ev/
```

If found, read that file in full. It contains a narrative and a markdown table showing which harness (Final / Claude / Perplexity / Gemini) chose which candidate.

## Step 4: Data completeness audit

Before writing anything, print a short table noting what was found:

| Field | Source | Status |
|---|---|---|
| candidates | `rithhmmPicks.ts` | ✓ / ✗ (count or "none found") |
| rithmm, dtm, projection, recentForm | `rithhmmPicks.ts` | ✓ / ✗ |
| boardResult | `rithhmmPicks.ts` (`result` field) | ✓ / ✗ |
| harness picks | Plus EV recap table | ✓ / partial / ✗ |
| finalDecision | Plus EV recap narrative | ✓ / ✗ |
| harness confidence & confidenceLabel | Not captured historically | **null** |
| candidateTiers | Not captured historically | **null** |
| gameTime | Not in Rithmm data | **""** |

If neither source has data for the date, stop and tell the user — there is nothing to build from.

## Step 5: Parse candidates from Rithmm picks

For each Rithmm pick on the date, parse the `pick` string to extract fields. The format is typically:
`"Player Name Over/Under LINE Market"` (e.g., `"Spencer Arrighetti Under 5.5 Pitcher Ks"`)

Extract:
- `player` — everything before the direction word
- `direction` — `"Over"` or `"Under"`
- `line` — the number immediately after the direction
- `market` — everything after the line number

Map remaining fields directly from the Rithmm pick:
- `id` — slugify the player's last name (lowercase, no spaces): e.g., `"arrighetti"`
- `matchup` — from `pick.matchup`
- `sport` — from `pick.sport`
- `odds` — parse `pick.odds` string to number (e.g., `"-144"` → `-144`)
- `rithmm` — from `pick.confidence`
- `breakEven` — calculate from odds:
  - If odds < 0: `Math.round(-odds / (-odds + 100) * 100 * 10) / 10`
  - If odds > 0: `Math.round(100 / (odds + 100) * 100 * 10) / 10`
- `projection` — from `pick.modelProjection`
- `dtm` — from `pick.dtm`
- `recent` — from `pick.recentForm`
- `gameTime` — `""` (not available in Rithmm data)
- `boardResult` — map `pick.result`: `"win"` → `"win"`, `"loss"` → `"loss"`, `"push"` → `"push"`, `"pending"` → `"void"`
- `color` — assign from this ordered palette, cycling if needed:
  `["#fbbf24", "#f472b6", "#38bdf8", "#a3e635", "#c084fc"]`

## Step 6: Parse harness picks from Plus EV recap

If a Plus EV recap was found, extract harness decisions from the markdown table.

The table has columns like `Final`, `Perplexity`, `Claude`, `Gemini`. A `✓` in a column means that harness picked that row's candidate.

Map column names to harness IDs:
- `Final` → `hermes` (orchestrator — if Final backed a pick, `hermes.pick = candidateId`; if the final call was PASS/SKIP, `hermes.pick = "skip"`)
- `Claude` → `claude`
- `Perplexity` → `perplexity`
- `Gemini` → `gemini`
- `ChatGPT` → `chatgpt` (may appear in narrative only)

For any harness **not mentioned** in the recap: default to `pick: "skip"` and note it as unknown in the report.

Determine each harness's `result`:
- `"correct"` if they avoided the loss (picked a winner, or correctly skipped)
- `"loss"` if they picked a losing candidate

Pull `resultNote` from the narrative where possible; otherwise use `""`.

## Step 7: Harness defaults

Use these fixed harness colors and IDs:

```ts
{ id: "hermes",     name: "Hermes",     color: "#34d399" }
{ id: "chatgpt",    name: "ChatGPT",    color: "#2dd4bf" }
{ id: "claude",     name: "Claude",     color: "#fb923c" }
{ id: "gemini",     name: "Gemini",     color: "#60a5fa" }
{ id: "perplexity", name: "Perplexity", color: "#c084fc" }
```

Set `confidence: null` and `confidenceLabel: null` for every harness — these were not captured for historical entries and the component renders them conditionally.

## Step 8: candidateTiers

Set **every tier value to `null`** — tier assignments are not recorded in Plus EV recaps:

```ts
candidateTiers: {
  arrighetti: { hermes: null, chatgpt: null, claude: null, gemini: null, perplexity: null },
  // one entry per candidate
}
```

## Step 9: finalDecision

From the Plus EV recap narrative:
- `action` — the final call: e.g., `"PASS"`, `"BET: Meyer U5.5 Ks"`
- `reason` — the core rationale (1–2 sentences from the narrative)
- `result` — `"correct"` or `"loss"` based on outcome
- `resultNote` — brief one-sentence outcome note

If no recap was found, use placeholder strings and note them in the report.

## Step 10: Write the data file

Save to `src/data/betsLog/$ARGUMENTS.ts` using the absolute repo path:

```ts
import type { DayLog } from "./types";

// Historical entry — harness confidence, confidenceLabel, and candidateTiers are null
// (not captured at time of decision). gameTime is "" (not in Rithmm source data).
const log: DayLog = {
  date: "$ARGUMENTS",
  displayDate: "...",   // e.g., "April 21, 2026"
  candidates: [ ... ],
  harnesses: [ ... ],
  candidateTiers: { ... },
  finalDecision: { ... },
};

export default log;
```

## Step 11: Update index.ts

Read `src/data/betsLog/index.ts`. Add the new import and include the log in `allLogs`, sorted by date ascending:

```ts
import log_2026_04_21 from "./2026-04-21";
// ...
export const allLogs = [...existingLogs, log_2026_04_21];
```

## Step 12: Report back

Tell the user:

- Date, display date, number of candidates
- Which harnesses had confirmed picks vs. defaulted to "skip" (unknown)
- Whether Plus EV recap was found and which harnesses it covered
- Explicit list of fields that are null/empty and need manual attention:
  - `gameTime` on all candidates — fill in if you have it
  - `harness.confidence` and `harness.confidenceLabel` on all harnesses — fill in if you recorded agent outputs
  - All `candidateTiers` values — fill in if you remember tier assignments
  - Any harness `resultNote` strings that are empty
- Remind the user to run `npx astro check` before considering the entry complete
