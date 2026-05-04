# Add Bets Log Entry

Add a daily bets log entry for `$ARGUMENTS` (format: `YYYY-MM-DD`).

Example: `/add-bets-log 2026-04-21`

---

## Step 1: Validate arguments

Parse `$ARGUMENTS` as a date. If it is not a valid `YYYY-MM-DD` string, stop and tell the user.

## Step 2: Check for existing entry

Check whether `src/data/betsLog/$ARGUMENTS.ts` already exists. If it does, stop and tell the user.

## Step 3: Read source data

Check for the Hermes Daily file first — it is the authoritative source and supersedes all others:

```
/Users/dandenney/Documents/claw/Betting/Agents/Hermes/Daily/$ARGUMENTS.md
```

If it exists, read it in full. It contains:
- **Normalized candidates** — all candidate fields including rithmm %, breakEven, projection, DTM, recent hit rate, matchup, game time
- **Harness responses** — ChatGPT / Claude / Gemini / Perplexity individual analysis with tier tables and confidence values
- **Consensus summary** (`Other` section) — harness votes table summarizing each harness's pick, confidence, main reason, and main risk
- **Final decision** — Hermes auditor recommendation (PASS or BET), reason, and any user override
- **Reconciliation** — board results table with actual outcomes for each candidate, and harness result tables

If the Hermes Daily file exists, **skip Rithmm picks and Plus EV recap** — the Hermes file has everything.

If the Hermes Daily file does **not** exist, fall back:
- Read `src/data/rithhmmPicks.ts` and filter to `date === "$ARGUMENTS"`
- Search `src/content/plus-ev/` for a file with `recapDate: "$ARGUMENTS"` and read it if found

Also read `src/data/betsLog/index.ts` to understand current imports and `allLogs` order.

## Step 4: Data completeness audit

Print a short table before writing anything:

| Field | Source | Status |
|---|---|---|
| candidates (all fields) | Hermes Daily | ✓ / ✗ |
| harness picks | Hermes Daily (consensus summary) | ✓ / partial / ✗ |
| harness confidence & tiers | Hermes Daily (harness responses) | ✓ / null |
| boardResult per candidate | Hermes Daily (reconciliation) | ✓ / ✗ |
| finalDecision | Hermes Daily (final decision) | ✓ / ✗ |

If the Hermes Daily file was not found, replace rows above with the fallback sources (Rithmm picks / Plus EV recap) and note which fields remain null.

If no data source has anything for the date, stop and tell the user.

## Step 5: Extract candidates from Hermes Daily

From the **Normalized candidates** section, extract each candidate:

- `id` — slugify the player's last name (lowercase, no spaces): e.g., `"arrighetti"`. Use a short distinguishing prefix if two players share a last name (e.g., `"wsmith"`)
- `player` — full name as written
- `sport` — `"NBA"` or `"MLB"`
- `market` — the stat market (e.g., `"Blocks"`, `"Total Bases"`, `"Pitcher Ks"`)
- `direction` — `"Under"` or `"Over"`
- `line` — numeric line value
- `odds` — numeric (e.g., `-139`)
- `rithmm` — Rithmm win chance as a number (e.g., `66.7`)
- `breakEven` — implied break-even as a number (e.g., `58.2`)
- `projection` — model projection string (e.g., `"0.72 blocks"`)
- `dtm` — DTM as a number (e.g., `20.5`)
- `recent` — recent hit rate string (e.g., `"L10 6/10"`)
- `matchup` — matchup string (e.g., `"vs Pistons"`)
- `gameTime` — game time string (e.g., `"6:00 PM"`)
- `boardResult` — from the **Reconciliation → Board results** table: `"win"` / `"loss"` / `"push"` / `"void"`
- `color` — assign from this ordered palette, cycling if needed:
  `["#fbbf24", "#f472b6", "#38bdf8", "#a3e635", "#c084fc"]`

If the Hermes Daily file is absent, parse candidates from `rithhmmPicks.ts` per the fallback rules in Step 5F below.

## Step 5F: Fallback — parse candidates from Rithmm picks

_(Skip this step if the Hermes Daily file was found.)_

For each Rithmm pick on the date, parse the `pick` string (format: `"Player Name Over/Under LINE Market"`):
- `player` — everything before the direction word
- `direction` — `"Over"` or `"Under"`
- `line` — number immediately after the direction
- `market` — everything after the line number

Map remaining fields:
- `id` — slugify last name
- `matchup` — from `pick.matchup`
- `sport` — from `pick.sport`
- `odds` — parse `pick.odds` string to number
- `rithmm` — from `pick.confidence`
- `breakEven` — calculate: odds < 0 → `Math.round(-odds / (-odds + 100) * 100 * 10) / 10`; odds > 0 → `Math.round(100 / (odds + 100) * 100 * 10) / 10`
- `projection` — from `pick.modelProjection`
- `dtm` — from `pick.dtm`
- `recent` — from `pick.recentForm`
- `gameTime` — `""` (not in Rithmm data)
- `boardResult` — map `pick.result`: `"win"` / `"loss"` / `"push"` / `"pending"` → `"void"`
- `color` — from the ordered palette

## Step 6: Extract harnesses from Hermes Daily

Use the **Consensus summary → Harness votes** table as the primary source for each harness's pick and confidence. Use the **Harness responses** section for tier classifications. Use the **Reconciliation → Harness results** table for results and result notes.

When multiple run variants exist (e.g., "risk-audited Hermes run" vs "alternate canonical note run"), always use the **primary / risk-audited run**.

For each harness, extract:
- `pick` — candidate `id` they recommended, or `"skip"` if they recommended PASS/SKIP
- `pickLabel` — short label (e.g., `"Carter U1.5 Blocks"`, `"SKIP"`, `"PASS"`)
- `confidence` — numeric confidence value from the harness response (e.g., `74`), or `null` if not stated
- `confidenceLabel` — what the confidence refers to (e.g., `"skip confidence"`, `"win probability"`, `"practical win probability"`), or `null`
- `result` — `"correct"` if the harness avoided a loss (picked a winner or correctly skipped); `"loss"` if they picked a loser
- `resultNote` — 1–2 sentence summary pulled from the reconciliation table or narrative

Use these fixed harness IDs and colors:

```ts
{ id: "hermes",     name: "Hermes",     color: "#34d399" }
{ id: "chatgpt",    name: "ChatGPT",    color: "#2dd4bf" }
{ id: "claude",     name: "Claude",     color: "#fb923c" }
{ id: "gemini",     name: "Gemini",     color: "#60a5fa" }
{ id: "perplexity", name: "Perplexity", color: "#c084fc" }
```

For `hermes` specifically: `hermes` is the orchestrator/auditor. Its `pick` is `"skip"` unless the Hermes auditor itself recommended a specific candidate (rare). Its confidence is `null` unless explicitly stated.

If a harness is not mentioned in the Hermes Daily file, default to `pick: "skip"`, `confidence: null`, `confidenceLabel: null`, and note it as unknown.

If the Hermes Daily file is absent, fall back to the Plus EV recap table (`Final` → hermes, `Claude` → claude, `Perplexity` → perplexity, `Gemini` → gemini, `ChatGPT` → chatgpt). Set all confidence values to `null`.

## Step 7: Build candidateTiers from Hermes Daily

From each **harness response**, find the candidate tier table (columns: Candidate, Tier/Classification, Fragility). Map tier values:
- `Tier 1` → `1`
- `Tier 2` → `2`
- `Tier 3` → `3`
- `Reject` / not listed → `null`

`hermes` is the orchestrator and always gets `null` for every candidate tier.

Structure:
```ts
candidateTiers: {
  carter:     { hermes: null, chatgpt: 2, claude: 2, gemini: 1, perplexity: 1 },
  // one entry per candidate id
}
```

If the Hermes Daily file is absent, set all tier values to `null`.

## Step 8: Build finalDecision from Hermes Daily

From the **Final decision** section:
- `action` — the auditor's call: `"PASS"` or the bet (e.g., `"Carter U1.5 Blocks"`)
- `reason` — 1–2 sentence rationale from the final decision narrative
- `result` — `"correct"` or `"loss"` based on the reconciliation outcome
- `resultNote` — brief outcome note; if a user override occurred, mention it (e.g., `"User override to Kwan at -132 lost on two singles. PASS was correct."`)

If the Hermes Daily file is absent, derive from the Plus EV recap narrative.

## Step 9: Write the data file

Save to `src/data/betsLog/$ARGUMENTS.ts` using the absolute repo path.

Include a source comment at the top:
- If Hermes Daily was used: `// Source: /Users/dandenney/Documents/claw/Betting/Agents/Hermes/Daily/$ARGUMENTS.md`
- If fallback sources were used: `// Historical entry — Hermes Daily not found. Candidates from rithhmmPicks.ts; harness picks from Plus EV recap. Confidence, confidenceLabel, and candidateTiers are null.`

```ts
import type { DayLog } from "./types";

// Source: ...
const log: DayLog = {
  date: "$ARGUMENTS",
  displayDate: "...",
  candidates: [ ... ],
  harnesses: [ ... ],
  candidateTiers: { ... },
  finalDecision: { ... },
};

export default log;
```

## Step 10: Update index.ts

Read `src/data/betsLog/index.ts`. Add the new import and include the log in `allLogs`, sorted by date ascending.

## Step 11: Report back

Tell the user:

- Date, display date, number of candidates
- Primary source used (Hermes Daily or fallbacks)
- Which harnesses had confirmed picks vs. defaulted to skip
- Any fields that are still null/empty and need manual attention
- Remind the user to run `npx astro check` before considering the entry complete
