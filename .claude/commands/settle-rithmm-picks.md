Settle pending Rithmm picks for a given date by reading the Resolution section from the Obsidian daily note.

**Usage:** `/settle-rithmm-picks 2026-05-28`

The argument is a date in YYYY-MM-DD format.

## Step 1: Read source files

Read both files in parallel:
- The Obsidian daily note at `/Users/clawfather/Obsidian/Claw/Betting/Agents/Hermes/Daily/$ARGUMENTS.md`
- `src/data/rithhmmPicks.ts` in full

## Step 2: Find pending picks for this date

From `rithhmmPicks`, collect all entries where `date === "$ARGUMENTS"` and `result === "pending"`. If there are none, report "No pending picks found for $ARGUMENTS" and stop.

## Step 3: Parse the Resolution section

Prefer the top `## Reconciliation — ...` section in the Obsidian note. If that is absent, fall back to `## Reconciliation`, and only then to older `## Resolution` sections.

Older resolved lines look like:

```
- [pick text including odds] [`propType`] — **Win/Loss**. [description]
```

For current Hermes notes, also accept candidate outcome rows from the top reconciliation summary table or the `## Candidate tier-dispersion table`, where `Outcome` is recorded as `WIN`, `LOSS`, or `PUSH`.

Extract per resolution line:
- `result` from the bold label: `"win"`, `"loss"`, or `"push"`
- `propType` from the backtick tag if present (e.g. `` `combo-under` ``)
- `returnAmount` — only on `"win"` lines where a `Bet: $X` was recorded on the pick: calculate the **combined total returned** to both Dan and GardenOf (stake + profit for both) from the payout description if mentioned. If the payout is not described, omit `returnAmount` so it can be added manually later.

## Step 4: Match resolutions to pending picks

For each pending pick, fuzzy-match against resolution lines by comparing pick text (ignore odds). For each matched pending pick:

- Set `result` to `"win"`, `"loss"`, or `"push"`
- If the resolved propType differs from the pick's existing propType, update it
- If `result === "win"` and `betAmount` is set on the pick and a `returnAmount` could be calculated, set `returnAmount`
- If `result === "loss"`, set `returnAmount: 0` when `betAmount` is present on the pick

If a pending pick has **no matching resolution line**, leave it as `result: "pending"` and note it in the confirmation output.

## Step 5: Check for new propTypes

If any resolution line introduces a propType not in the `RithhmmPropType` union, add it to the union in `src/data/rithhmmPicks.ts`.

## Step 6: Edit the data file

Update each matched pending entry in place in `src/data/rithhmmPicks.ts` — do not reorder, remove, or re-append entries.

## Step 7: Commit

- Stage only `src/data/rithhmmPicks.ts`
- Commit with message: `settle(rithmm-picks): settle $ARGUMENTS picks`
- Do **not** push

## Step 8: Display confirmation

| # | Sport | Pick | Result | Bet | Return |
|---|---|---|---|---|---|
| 175 | NBA | Victor Wembanyama Under 13.5 Rebounds | win | $60.00 | $103.62 |
| 176 | MLB | Padres Moneyline | loss | $60.00 | $0.00 |

Use `—` for Bet/Return when not logged. List any picks that could not be matched and remain pending.
