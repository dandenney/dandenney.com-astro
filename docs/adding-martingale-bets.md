# Adding Martingale Bets

Instructions for adding a new bet to the tracker.

## Martingale system rules

The martingale strategy tracks bets in **series**. Each series is identified by a letter (A, B, C, ...).

1. **A series starts** with a single bet and **ends with a win**.
2. **On a loss**, the series continues — the next bet **doubles** the previous stake.
3. **On a win**, the series is complete. The next bet starts a **new series** with a fresh stake.
4. **First bet in a new series**: the largest multiple of $10 where the person's balance is at least 15× the stake. Formula: `Math.floor(balance / 15 / 10) * 10`, minimum $10. This is implemented in `getNewSeriesStake()` in `martingaleBets.ts`.
5. **"Next Stake" while in a series** (after a loss): always 2× the last bet's stake.

### Hero display states

The hero card shows the current state for each owner (Dan, GardenOf):

| State | When | Shows |
|---|---|---|
| **Pending** | There's an active (unsettled) bet | The pick, line, series, and next stake if it loses (2×) |
| **Continuing Series** | Last bet was a loss, no new bet placed | Current series letter, next stake (2× last), amber status |
| **New Series Ready** | Last bet was a win, no new bet placed | Next series letter, fresh stake from balance, green status |

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

## Step 2: Settling a bet

When a result comes in, update the existing entry in `martingaleBets.ts`:

```ts
result: "win",           // or "loss"
returnAmount: 56.79,      // total returned (stake + profit); 0 for losses
```

Leave `stakeOut` as-is — it represents the debit at placement time.

### Dan/Garden split rule (important)

When Dan and GardenOf both place the same bet and both win:

1. Compute combined return for both bets
2. Split evenly to cents
3. If there is an odd penny, **GardenOf gets the extra penny**

Example:
- Combined return: `152.73`
- Dan: `76.36`
- GardenOf: `76.37`

## Daily auto-settlement cron

A GitHub Actions workflow now runs daily:

- File: `.github/workflows/settle-pending-bets.yml`
- Script: `scripts/settle-pending-bets.mjs`

Current behavior:
- Scans pending bets in `martingaleBets.ts`
- Matches completed NBA games (ESPN scoreboard + summary APIs)
- Settles supported matchup totals (`Team A @ Team B Over/Under X`)
- Settles supported team spreads (`Team Name +7`, `Team Name -4.5`)
- Settles supported player props:
  - `Player Over/Under X Points`
  - `Player Over/Under X Assists`
  - `Player Over/Under X Rebounds`
  - `Player Over/Under X Threes`
- Uses `scheduledStart` + ~3 hours as the default earliest settlement window when available
- Supports targeted resolution via `node scripts/settle-pending-bets.mjs --bet-id <id>`
- Applies Dan/Garden split + odd-penny-to-Garden rule for paired wins
- Commits/pushes updates automatically when changes exist

For best auto-settlement reliability, keep picks in one of these formats:

- `<Away Team> @ <Home Team> Over|Under <Total>`
- `<Team Name> +7` or `<Team Name> -4.5`
- `<Player Name> Over|Under <Line> Points|Assists|Rebounds|Threes`
