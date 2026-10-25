Log Rithmm picks from screenshots and score them with Jev before the game. This replaces the Hermes/Obsidian intake for the forward test.

**Usage:** `/log-rithmm` with screenshots attached: the Rithmm card(s) and the sportsbook screen(s) for the same picks. Free text after the command can say bet or pass, the stake, and who funded it, e.g. `/log-rithmm bet $60 both` or `/log-rithmm pass`.

## Step 1: Read the screenshots and the data file

Read `src/data/rithhmmPicks.ts` in full. From the screenshots, identify which image is the Rithmm card and which is the sportsbook (DraftKings unless the screen shows another book). One message may contain several picks; pair each Rithmm pick with its sportsbook screen by player/team and market.

If a Rithmm pick has no sportsbook screen, stop and ask for one. Passes need a real price too (a bet slip screenshot without placing it is fine), otherwise the forward test only sees the bets that were placed.

## Step 2: Extract fields

From the **Rithmm card**:
- `pick` — Rithmm's pick text without odds, e.g. `"Gunnar Henderson Over 1.5 Total Bases"`
- `rithmmOdds` — Rithmm's price, e.g. `"-114"`
- `confidence`, `modelProjection`, `dtm`, `recentForm` (normalize `"L10 6/10"` to `"6/10"`), `matchup` (no time)
- `sport`
- `gameTime` — the scheduled start as ISO 8601 with offset. Cards say things like "Today 7:10 PM"; times are Eastern (`America/New_York`), so 7:10 PM on 2026-10-26 is `"2026-10-26T19:10:00-04:00"` during daylight time and `-05:00` otherwise. If the card shows no time, look up the game start rather than guessing.

From the **sportsbook screen**:
- `book` — `{ name: "DraftKings", pick: "<the book's wording>", odds: "<the book's price>" }`
- `odds` — the same value as `book.odds`. On forward picks `odds` is always the sportsbook price; break-even and Jev both use it.

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

- Bet: `portfolioAction: "bet"`, `betAmount` (combined total for both bettors, as-is), and `bettors` (`"dan"` or `"dan-and-gardenOf"`). Ask if the stake or funding isn't clear from the message or the ticket.
- Pass: `portfolioAction: "skip"`, plus `passReason` if one was given.
- Undecided: `portfolioAction: "watch"`.

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

Rule is `bet` when Jev's `will_hit` is above break-even for the book price, otherwise `pass`. Call out any line mismatch, any pick scored after its start time, and any disagreement between the rule and your call.
