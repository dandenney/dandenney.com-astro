Add a new DraftKings bet. Arguments: the pick and line separated by ` | `

Example: `/add-dk Brooklyn Under 104.5 Total Points | -114`

Parse `$ARGUMENTS` — everything before ` | ` is the pick, everything after is the line. If no ` | ` separator is present, ask the user to clarify.

## Step 1: Read the data file

Read `src/data/draftKingsBets.ts` in full.

## Step 2: Determine series state and stake

Find the last DK bet entry (by position in the array, regardless of result).

Determine next action:
- Last result was **win** → new series
  - Next series letter = letter after last bet's `seriesId` (A→B, B→C, etc.)
  - Calculate balance: `750` + sum of `(returnAmount - stakeOut)` for all settled bets (skip pending; for void bets `returnAmount` equals `stakeOut` so net impact is 0)
  - Stake = `Math.max(10, Math.floor(balance / 15 / 10) * 10)`
- Last result was **loss** → continue same series
  - Same `seriesId`
  - Stake = last bet's `stakeOut × 2`
- Last result was **void** → continue same series, same stake as the voided bet

Next `id` = highest `id` in the `dkBets` array + 1.

## Step 3: Append entry

Append to `dkBets` array in `src/data/draftKingsBets.ts`:

```ts
{
  id: <next id>,
  date: "<today YYYY-MM-DD>",
  seriesId: "<calculated letter>",
  pick: "<pick from arguments>",
  line: "<line from arguments>",
  stakeOut: <calculated stake>,
  result: "pending",
  returnAmount: 0,
},
```

## Step 4: Display summary

| Series | Stake | Pick | Line |
|---|---|---|---|
| J | $960 | Brooklyn Under 104.5 | -114 |
