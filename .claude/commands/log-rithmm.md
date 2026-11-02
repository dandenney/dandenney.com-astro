Log Rithmm picks from screenshots and score them with Jev before the game. This replaces the Hermes/Obsidian intake for the forward test.

**Usage:** `/log-rithmm` with screenshots attached: the Rithmm card(s) and the sportsbook screen(s) for the same picks. Free text after the command can say bet or pass, the stake, and who funded it, e.g. `/log-rithmm bet $60 both` or `/log-rithmm pass`. The stake is always the combined total: `$60 both` means $30 from Dan and $30 from GardenOf; `$30 dan` means Dan alone.

**Check before betting (preferred):** send the Rithmm card(s) with DraftKings bet slips that haven't been placed, and either no decision or `check`. Log the picks as `watch`, score them with Jev, and reply with the rule's bet/pass for each so Dan can decide before putting money down. When Dan then sends the placed receipts (or says which ones he passed), follow **Step 9** to record the decisions on the same picks. Don't append them again.

## Step 1: Read the screenshots and the data file

Read `src/data/rithhmmPicks.ts` in full. From the screenshots, identify which image is the Rithmm card and which is the sportsbook (DraftKings unless the screen shows another book). One message may contain several picks; pair each Rithmm pick with its sportsbook screen by player/team and market.

If a Rithmm pick has no sportsbook screen, stop and ask for one. Passes need a real price too (a bet slip screenshot without placing it is fine), otherwise the forward test only sees the bets that were placed.

## Step 2: Extract fields

From the **Rithmm card**:
- `pick` — Rithmm's pick text without odds, e.g. `"Gunnar Henderson Over 1.5 Total Bases"`
- `rithmmOdds` — Rithmm's price, e.g. `"-114"`
- `confidence` — the win % for the side Rithmm picks, e.g. `68`
- `modelProjection` — the card's projection line if it shows one; for win-% cards without a projection, write `"Rithmm favors Under 5.5, 68% to 32%"`
- `edge` — the card's EDGE %, e.g. `22.7`. Don't write it to `dtm`; we haven't confirmed they're the same measure. Only fill `dtm` if the card literally says DTM.
- `recentForm` (normalize `"L10 6/10"` to `"6/10"`), `matchup` (no time)
- `sport`
- `gameTime` — the scheduled start as ISO 8601 with offset. Cards and tickets show times in Dan's phone's zone, Central (`America/Chicago`): 12:00 PM on 2026-10-25 is `"2026-10-25T12:00:00-05:00"` during daylight time and `-06:00` after early November. Sanity check: the sportsbook receipt's timestamp should be a few minutes before `loggedAt`. If the card shows no time, look up the game start rather than guessing.

From the **sportsbook screen**:
- `book` — `{ name: "DraftKings", pick: "<the book's wording>", odds: "<the book's price>" }`
- `odds` — the same value as `book.odds`. On forward picks `odds` is always the sportsbook price; break-even and Jev both use it.
- `potentialReturn` — the ticket's "Total Payout" (stake + profit, combined, as-is), only on placed bets. Settlement copies it to `returnAmount` on a win.

Set the rest:
- `date` — the game date, `YYYY-MM-DD`
- `loggedAt` — now, ISO 8601 with offset
- `propType` — infer from the pick text using the rules in `.claude/commands/add-rithmm-picks.md` (Step 3), adding a new type and badge if needed (Step 4 there)
- `result: "pending"`

## Step 3: Check the line (deterministic, no Jev)

Compare the line number and side in Rithmm's pick and the book's pick (e.g. Over 1.5 vs Over 2.5, -1.5 vs +1.5). If they differ:
- `portfolioAction: "skip"` and `passReason: "line-moved"`
- Say so in the confirmation. The pick is still logged and scored; it just isn't bet.

## Step 4: Record the decision

- Bet: `portfolioAction: "bet"`, `betAmount`, and `bettors`. `betAmount` is the combined total, written as-is and never multiplied or split: `bet $60 both` → `betAmount: 60`, `bettors: "dan-and-gardenOf"` ($30 each); `bet $30 dan` → `betAmount: 30`, `bettors: "dan"`. Ask if the stake or funding isn't clear from the message or the ticket.
- Pass: `portfolioAction: "skip"`, plus `passReason` if one was given.
- Undecided, or a pre-bet check: `portfolioAction: "watch"`, with no `betAmount`, `bettors` or `potentialReturn`.

## Step 5: Append

Next `id` = highest existing `id` + 1. Append to `rithhmmPicks` with a `// YYYY-MM-DD` comment before the first pick of a new date. Never reorder or reassign ids. Omit optional fields that have no value.

## Step 6: Score with Jev

Run, with every new id:

```bash
fnm exec --using=22 node --experimental-strip-types --no-warnings --env-file=.env.local scripts/jev/score-pick.ts --id <id> [--id <id> ...]
```

In a remote environment without `.env.local`, drop `--env-file` and make sure `TYPESAFE_API_KEY` is set. If the script prints a "scored after gameTime" warning, report it: that pick won't count toward the forward test. Never rescore with `--force` after the game has started.

## Step 7: Commit and push

Run `npx astro check`, then stage `src/data/rithhmmPicks.ts` and `src/data/jev/forwardScores.json` (plus the tracker page if a badge was added) and commit to `main`:

`add(rithmm-picks): log <date> picks with Jev scores`

Push.

## Step 8: Confirm

| # | Pick | Rithmm | Book | Break-even | Jev | Rule | Your call |
|---|---|---|---|---|---|---|---|
| 262 | Gunnar Henderson Over 1.5 Total Bases | -114 | -107 | 51.7% | 0.47 | pass | bet $60 |

Rule is `bet` when Jev's `will_hit` is above break-even for the book price, otherwise `pass`. Call out any line mismatch, any pick scored after its start time, and any disagreement between the rule and your call. For a pre-bet check, the "Your call" column is `watch`; end with a one-line summary of the rule's picks, e.g. `Jev says bet 266, 267, 269; pass 268.`

## Step 9: Record the decisions after a pre-bet check

When Dan sends the placed receipts for picks that are already logged as `watch` (or says which he bet and which he passed):

1. Match each receipt to its `watch` pick by date, player/team, and market. Never append a duplicate or create a new id.
2. **Placed:** set `portfolioAction: "bet"`, `betAmount` and `bettors` (same rules as Step 4; use the receipt's Wager if the message doesn't say), and `potentialReturn` from the receipt's Total Payout. If the receipt's price differs from the slip's, update both `odds` and `book.odds` to the receipt price and say so; the break-even and rule then use the price that was actually bet. Don't rescore.
3. **Passed:** set `portfolioAction: "skip"`, plus `passReason` if one was given (`"jev-pass"` when Dan passed because the rule said pass).
4. If the receipt's line differs from the logged pick's (e.g. Over 10.5 vs Over 11.5), stop and ask; that's a different bet from the one Jev scored.
5. Any `watch` pick from the check that has no receipt once its game has started was not bet: set it to `skip` and tell Dan, so the tracker doesn't treat it as undecided.

Run `npx astro check`, commit `src/data/rithhmmPicks.ts` to `main` as `add(rithmm-picks): record <date> bets after Jev check`, push, and confirm with the Step 8 table, with "Your call" now showing each decision.
