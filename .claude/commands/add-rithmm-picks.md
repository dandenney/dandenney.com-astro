Add Rithmm Smart Signal picks from an Obsidian daily note into `src/data/rithhmmPicks.ts`.

**Usage:** `/add-rithmm-picks 2026-04-22`

The argument is a date in YYYY-MM-DD format.

## Step 1: Read source files

Read both files in parallel:
- The Obsidian daily note at `/Users/clawfather/Obsidian/Claw/Betting/Agents/Hermes/Daily/$ARGUMENTS.md`
- `src/data/rithhmmPicks.ts` in full

## Step 2: Parse the Smart Signal board

Prefer the current Hermes-note structure:

1. `## Normalized candidates` — authoritative source for candidate fields.
2. `## Rithmm portfolio card` — use for `portfolioAction` / removal posture when helpful.
3. `## Smart Signal / Rithmm board` — intake summary only.

Older notes may still use `## Rithmm` or `## Smart Signal board` with `### MLB` / `### NBA` subsections. Support both formats.

For current notes, determine `sport` from the `- Sport/league:` line inside each `Candidate N:` block.

Older pick blocks may look like:
```
- [pick text] ([odds]), confidence [X]%
  - Model: [modelProjection]
  - DTM: [X]%
  - L10: [X/10]          ← also accept "Recent: L10 [X/10]"
  - Matchup: [matchup info, optional time]
  - Action: bet | watch | skip    ← optional
  - Bet: $[amount]                ← optional, only present if Action is "bet"
```

Current Hermes notes usually encode one candidate like:

```text
Candidate 1:
- Candidate ID: C1
- Sport/league: MLB
- Player/team/game: Astros vs Pirates
- Market: Moneyline
- Bet: Astros moneyline
- Line: moneyline
- Odds: -111
- Implied break-even: 52.6%
- Confidence: 63.6%
- Model projection: Rithmm MLB Model Predicts: Pirates 3.7 - 5.7 Astros
- DTM: 23.2%
- Recent hit rate / L10 / L5: L10 6/10
- Matchup: vs Pirates
- Game time: Today 7:10 PM
```

Extract these fields per pick:
- `pick` — pick text only, **no odds** (strip the `(-140)` / `(+112)` portion)
- `odds` — the odds string including sign, e.g. `"-140"` or `"+112"`
- `confidence` — numeric, e.g. `61.0`
- `modelProjection` — the value after `Model:`, e.g. `"1.4 Total Bases"`
- `dtm` — numeric percentage value after `DTM:`, e.g. `6.4` (drop the `%`)
- `recentForm` — the value after `L10:` / `Recent: L10` / the trailing ratio in `Recent hit rate / L10 / L5:`; normalize `"L10 6/10"` to `"6/10"`
- `matchup` — the value after `Matchup:`, **strip any trailing time** (e.g. `"vs Padres, 7:40 PM"` → `"vs Padres"`)
- `portfolioAction` — use the value after `Action:` (`"bet"`, `"watch"`, or `"skip"`) when present; for current portfolio-card notes, map `BET` / `BET for now` / `board keep` to `"bet"`, `WATCH` / `VERIFY` / `caution` to `"watch"`, and `REMOVE` / `skip` to `"skip"`
- `betAmount` — numeric dollar value after `Bet: $` (e.g. `60.00`); Hermes always writes the **combined total** for both Dan and GardenOf (e.g. `$60` means each person bets $30); use this number **as-is** with no multiplication; omit field entirely if line is absent

## Step 3: Parse results and propTypes

Prefer the top `## Reconciliation — ...` section when present. Older notes may still use `## Resolution`.

Older resolved lines may look like:
```
- [pick text including odds] [`propType`] — **Win/Loss**. [description]
```

For current reconciled notes, also accept candidate outcome tables inside the top reconciliation block or `## Candidate tier-dispersion table`, where the candidate row contains an `Outcome` column (`WIN` / `LOSS` / `PUSH`).

Match each reconciliation/result line to its Smart Signal pick by comparing the pick text (fuzzy match — ignore odds in the resolution line). Extract:
- `propType` from the backtick tag, e.g. `combo-under` — **use this if present**
- `result` from the bold label: `"win"`, `"loss"`, or `"push"`
- `returnAmount` — if `result` is `"win"` and a `Bet: $X` was recorded, this is the **combined total returned** to both Dan and GardenOf (stake + profit for both); Hermes writes the combined figure, use it **as-is**; omit and add manually later if not present.

If the resolution line has **no backtick propType tag**, infer `propType` from the pick text:
- "Over X.X Singles" → `hits-over`
- "Under X.X Singles" → `hits-under`
- "Under X.X Rebounds" → `rebounds-under`
- "Under X.X Points" → `points-under`
- "Under X.X Pitcher Strikeouts" → `pitcher-ks-under`
- "Moneyline" (anywhere in pick text) → `moneyline`
- "Over X.X …" (anything else) → `combo-over`
- "Under X.X …" (anything else) → `combo-under`

If a pick has **no matching resolution line**, set `result: "pending"` and infer `propType` from the pick text using the same rules above.

## Step 4: Check for new propTypes

Compare the propTypes found against the `RithhmmPropType` union in `src/data/rithhmmPicks.ts`. If any new values are needed:

1. Add them to the `RithhmmPropType` union in `src/data/rithhmmPicks.ts`
2. Add a corresponding badge entry in the `propTypeBadge` function in `src/pages/betting/rithmmm-picks.astro`, following the existing color pattern

## Step 5: Append picks

Determine next `id` = highest existing `id` in `rithhmmPicks` + 1.

Append one entry per pick to the `rithhmmPicks` array in `src/data/rithhmmPicks.ts`, in the order they appear in the Smart Signal board, with a `// YYYY-MM-DD` comment before the first pick of the date.

Include optional fields only when present — never write `portfolioAction: undefined` or similar:

```ts
  // 2026-04-22
  {
    id: <next id>,
    date: "2026-04-22",
    sport: "MLB",
    pick: "<pick text without odds>",
    odds: "<odds string>",
    confidence: <number>,
    modelProjection: "<model projection>",
    dtm: <number>,
    recentForm: "<X/10>",
    matchup: "<matchup without time>",
    propType: "<propType>",
    result: "win" | "loss" | "push" | "pending",
    portfolioAction: "bet",        // only if Action was logged
    betAmount: 50.00,              // only if Bet was logged — combined total (both players)
    returnAmount: 86.24,           // only on wins where payout is known — combined total (both players)
  },
```

## Step 6: Display confirmation

| # | Sport | Pick | Odds | Conf | PropType | Action | Bet | Result |
|---|---|---|---|---|---|---|---|---|
| 25 | MLB | TJ Rumfield Under 1.5 Total Bases | -140 | 61.0% | combo-under | bet | $25.00 | loss |

Use `—` for Action and Bet when not logged. Note any new propTypes added to the type definition.
