Add a new martingale bet for both Dan and GardenOf. Arguments: the pick and line separated by ` | `

Example: `/add-bet Brooklyn Under 104.5 Total Points | -114`

Parse `$ARGUMENTS` — everything before ` | ` is the pick, everything after is the line. If no ` | ` separator is present, ask the user to clarify.

## Step 1: Read the data file

Read `src/data/martingaleBets.ts` in full.

## Step 2: Add entries for Dan and GardenOf

For **each** owner (Dan, then GardenOf), independently:

1. Find the last **settled** bet for that owner (skip any `result: "pending"` entries). A bet counts for an owner if `owner === "Dan"` / `owner === "GardenOf"`. Bets with no `owner` field predate the GardenOf account split and count **only for Dan**, not for GardenOf.

2. Determine next action:
   - Last settled result was **win** → start new series
     - Next series letter = the letter after that bet's `seriesId` (A→B, B→C, etc.)
     - Calculate balance: `500` + sum of `(returnAmount - stakeOut)` for all that owner's settled bets (use 0 for loss `returnAmount`, skip pending)
     - Stake = `Math.max(10, Math.floor(balance / 15 / 10) * 10)`
   - Last settled result was **loss** → continue same series
     - Same `seriesId` as that bet
     - Stake = that bet's `amount × 2`

3. Next `id` = highest `id` in the entire `martingaleBets` array + 1 (for Dan), then + 1 more (for GardenOf).

4. Append to `martingaleBets` array in `src/data/martingaleBets.ts`:

```ts
{
  id: <next id>,
  owner: "Dan",           // or "GardenOf"
  date: "<today YYYY-MM-DD>",
  seriesId: "<calculated letter>",
  pick: "<pick from arguments>",
  line: "<line from arguments>",
  amount: <calculated stake>,
  result: "pending",
  stakeOut: <same as amount>,
  returnAmount: 0,
},
```

Add Dan's entry first, then GardenOf's entry immediately after.

## Step 3: Display summary

| Owner | Series | Stake | Pick | Line |
|---|---|---|---|---|
| Dan | V | $20 | Brooklyn Under 104.5 | -114 |
| GardenOf | Q | $20 | Brooklyn Under 104.5 | -114 |
