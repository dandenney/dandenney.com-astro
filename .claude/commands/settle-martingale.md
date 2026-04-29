Settle pending martingale bets for Dan and GardenOf.

**Usage:**
- `/settle-martingale won 73.56` — won, with combined return of $73.56
- `/settle-martingale lost` — lost

Parse `$ARGUMENTS`: first word is `won` or `lost`. If `won`, the second word is the combined dollar return across both bets.

## Steps

1. Read `src/data/martingaleBets.ts` in full.

2. Find all entries where `result: "pending"`. These are the bets to settle.

3. **If lost:**
   - Set `result: "loss"` and `returnAmount: 0` on every pending entry.

4. **If won:**
   - The provided return amount is the **combined** return for all pending bets.
   - If there are 2 pending bets (one Dan, one GardenOf):
     - Split **proportionally** based on each bet's `stakeOut` (or `amount` if `stakeOut` is absent).
     - `totalStake = danStake + gardenOfStake`
     - Dan: `Math.floor(total * 100 * danStake / totalStake) / 100`
     - GardenOf: `Math.round((total - danAmount) * 100) / 100`
     - (GardenOf absorbs any odd-penny rounding remainder.)
     - If both stakes are equal, this reduces to the old 50/50 split.
   - If there is only 1 pending bet, assign the full return amount to it.
   - Set `result: "win"` and `returnAmount: <calculated amount>` on each entry.

5. Edit `src/data/martingaleBets.ts` to update the affected entries in place (do not reorder or remove entries).

6. Commit and push:
   - If there are unstaged changes to other files, stash them first (`git stash`).
   - Run `git pull --rebase` to sync with remote.
   - If you stashed, restore with `git stash pop`.
   - Stage only `src/data/martingaleBets.ts` and commit with message format:
     `settle(martingale-bets): settle <pick> <result> (<return> return, <split> split)`
   - Push to remote.

7. Display a confirmation:

| Owner | Result | Return |
|---|---|---|
| Dan | win | $36.78 |
| GardenOf | win | $36.78 |

(or loss with $0.00)
