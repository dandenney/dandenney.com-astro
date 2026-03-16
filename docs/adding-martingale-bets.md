# Adding Martingale Bets

Instructions for adding a new bet to the tracker and keeping the shipp.ai signal matching up to date.

## Information needed for a new bet

Provide all of these:

| Field | Example | Notes |
|---|---|---|
| Owner | `Dan` or `GardenOf` | Optional — omit if not owner-specific |
| Date | `2026-03-15` | ISO format |
| Series | `D` | Letter of the current active series |
| Pick | `Justin Edwards Over 11.5 Points` | Full description as placed |
| Line | `-112` | American odds string |
| Amount | `30` | Dollar amount staked |

Result is always `"pending"` for new bets. `stakeOut` equals the amount.

## Step 1: Add the bet to `martingaleBets.ts`

File: `src/data/martingaleBets.ts`

Append to the `martingaleBets` array. Use the next sequential integer for `id` (check the current highest in the file).

```ts
{
  id: 12,
  owner: "Dan",
  date: "2026-03-15",
  seriesId: "D",
  pick: "Justin Edwards Over 11.5 Points",
  line: "-112",
  amount: 30,
  result: "pending",
  stakeOut: 30,
},
```

Leave `returnAmount` off for pending bets. Add it (along with updating `result`) when the bet settles.

## Step 2: Update signal matching in `matching.ts`

File: `src/server/shipp/matching.ts`

The `nbaTokens` list drives two things:
1. Whether a bet's pick is recognized as NBA (enabling sport-level signal matching)
2. Whether team/player tokens in the pick overlap with signal team names

**Check after every new bet:**

- If the pick contains a **player name** not already in `nbaTokens`, add their last name (and first name only if the last name is too generic). Follow the existing pattern — `"scoot"` and `"henderson"` for Scoot Henderson, `"edwards"` for Justin Edwards.
- If the pick contains a **team name or abbreviation** (e.g. `CHA`, `SA`, `Celtics`) not already covered, add lowercase tokens for the team's city, nickname, and common abbreviation.

Current list for reference (as of March 2026):

```ts
const nbaTokens = [
  "lakers", "celtics", "knicks", "wizards", "heat",
  "nuggets", "trail", "blazers",
  "scoot", "henderson",           // Scoot Henderson
  "edwards",                      // Justin Edwards
  "sensabaugh",                   // Brice Sensabaugh
  "suns", "phoenix", "pho",       // Phoenix Suns
  "bos", "boston",                // Boston Celtics (abbrev)
  "sixers", "philadelphia",
];
```

Add entries here as new players or teams appear in picks. Keep entries lowercase.

## Step 3: Settling a bet

When a result comes in, update the existing entry in `martingaleBets.ts`:

```ts
result: "win",           // or "loss"
returnAmount: 56.79,     // total returned (stake + profit); 0 for losses
```

Leave `stakeOut` as-is — it represents the debit at placement time.
