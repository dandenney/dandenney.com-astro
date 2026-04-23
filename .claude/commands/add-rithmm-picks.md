Add Rithmm Smart Signal picks from an Obsidian daily note into `src/data/rithhmmPicks.ts`.

**Usage:** `/add-rithmm-picks 2026-04-22`

The argument is a date in YYYY-MM-DD format.

## Step 1: Read source files

Read both files in parallel:
- The Obsidian daily note at `/Users/dandenney/Documents/claw/Betting/Daily/$ARGUMENTS.md`
- `src/data/rithhmmPicks.ts` in full

## Step 2: Parse the Smart Signal board

Find the `## Smart Signal board` section in the Obsidian note. It is split into `### MLB` and `### NBA` subsections — use those to determine the `sport` field for each pick.

Each pick looks like:
```
- [pick text] ([odds]), confidence [X]%
  - Model: [modelProjection]
  - DTM: [X]%
  - L10: [X/10]
  - Matchup: [matchup info, optional time]
```

Extract these fields per pick:
- `pick` — pick text only, **no odds** (strip the `(-140)` / `(+112)` portion)
- `odds` — the odds string including sign, e.g. `"-140"` or `"+112"`
- `confidence` — numeric, e.g. `61.0`
- `modelProjection` — the value after `Model:`, e.g. `"1.4 Total Bases"`
- `dtm` — numeric percentage value after `DTM:`, e.g. `6.4` (drop the `%`)
- `recentForm` — the value after `L10:`, e.g. `"9/10"`
- `matchup` — the value after `Matchup:`, **strip any trailing time** (e.g. `"vs Padres, 7:40 PM"` → `"vs Padres"`)

## Step 3: Parse results and propTypes

Find the `## Resolution` section. Each resolved line looks like:
```
- [pick text including odds] [`propType`] — **Win/Loss**. [description]
```

Match each resolution line to its Smart Signal pick by comparing the pick text (fuzzy match — ignore odds in the resolution line). Extract:
- `propType` from the backtick tag, e.g. `combo-under`
- `result` from the bold label: `"win"`, `"loss"`, or `"push"`

If a pick has **no matching resolution line**, set `result: "pending"` and infer `propType` from the pick text:
- "Over X.X Singles" → `hits-over`
- "Under X.X Singles" → `hits-under`
- "Under X.X Rebounds" → `rebounds-under`
- "Under X.X Points" → `points-under`
- "Under X.X Pitcher Strikeouts" → `pitcher-ks-under`
- "Over X.X …" (anything else) → `combo-over`
- "Under X.X …" (anything else) → `combo-under`

## Step 4: Check for new propTypes

Compare the propTypes found against the `RithhmmPropType` union in `src/data/rithhmmPicks.ts`. If any new values are needed:

1. Add them to the `RithhmmPropType` union in `src/data/rithhmmPicks.ts`
2. Add a corresponding badge entry in the `propTypeBadge` function in `src/pages/rithmmm-picks.astro`, following the existing color pattern

## Step 5: Append picks

Determine next `id` = highest existing `id` in `rithhmmPicks` + 1.

Append one entry per pick to the `rithhmmPicks` array in `src/data/rithhmmPicks.ts`, in the order they appear in the Smart Signal board, with a `// YYYY-MM-DD` comment before the first pick of the date:

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
  },
```

## Step 6: Display confirmation

| # | Sport | Pick | Odds | Conf | PropType | Result |
|---|---|---|---|---|---|---|
| 25 | MLB | TJ Rumfield Under 1.5 Total Bases | -140 | 61.0% | combo-under | loss |

List all added picks. Note any new propTypes that were added to the type definition.
