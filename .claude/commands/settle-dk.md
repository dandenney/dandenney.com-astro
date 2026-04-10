Settle pending DraftKings bets.

**Usage:**
- `/settle-dk won 23.45` — won, with return of $23.45
- `/settle-dk lost` — lost

Parse `$ARGUMENTS`: first word is `won` or `lost`. If `won`, the second word is the dollar return amount.

## Steps

1. Read `src/data/draftKingsBets.ts` in full.

2. Find all entries where `result: "pending"`. These are the bets to settle.

3. **If lost:**
   - Set `result: "loss"` and `returnAmount: 0` on every pending entry.

4. **If won:**
   - Set `result: "win"` and `returnAmount: <provided amount>` on every pending entry.
   - If there are multiple pending entries (unusual), assign the full return to each (or ask for clarification if amounts are ambiguous).

5. Edit `src/data/draftKingsBets.ts` to update the affected entries in place (do not reorder or remove entries).

6. Display a confirmation:

| Series | Result | Stake | Return |
|---|---|---|---|
| I | win | $480.00 | $23.45 |

(or loss with $0.00 return)
