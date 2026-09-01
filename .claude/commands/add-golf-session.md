Log a practice session for the Ball Flight golf section. Arguments: free text describing the session, e.g. `/add-golf-session GOLFTEC lesson today, 7i avg 118 carry 125 total, club speed 78, driver longest 214`.

Parse `$ARGUMENTS` for the venue, date, kind, and any club numbers. Ask for anything that is genuinely ambiguous (which venue, which club a number belongs to). Do not invent numbers that were not given.

## Step 1: Read the data

Read `src/data/golf/sessions.ts` and `src/data/golf/types.ts` in full. Venue slugs are the filenames in `src/content/golf-venues/` without the extension.

## Step 2: Build the entry

- `id`: highest existing `id` in `sessions` + 1. Append only; never reorder or reuse ids.
- `player`: `"dan"` unless told otherwise (`"misty"` is valid).
- `date`: ISO `YYYY-MM-DD`. "today" means the current date.
- `venueSlug`: must match an existing venue slug. GOLFTEC → `golftec-nashville-west`, Topgolf → `topgolf-nashville`, Five Iron → `five-iron-golf-nashville`.
- `kind`: `lesson` | `practice` | `range` | `simulator`. GOLFTEC with a coach is `lesson`, GOLFTEC practice bay is `practice`, Topgolf is `range`.
- `coach`, `durationMin`, `focus`, `partners`: only when mentioned.
- `clubs`: one `ClubMetrics` object per club mentioned. Every field is optional. Use summary numbers only (session averages, plus `longest` for the best single shot). Units: yards, mph, degrees, rpm. `clubPath` positive = in-to-out, `faceToTarget` positive = open.
- `takeaway`: 1-3 sentences if Dan gave one. Hand-written prose, so no em dashes.

Append to the `sessions` array in `src/data/golf/sessions.ts`.

## Step 3: Detect records

Before writing, compare each new club number against prior sessions for the same club using the same rule as `isPR()` in `src/data/golf/utils.ts` (higher is better for `carry`, `total`, `longest`, `clubSpeed`, `ballSpeed`, `smashFactor`). Note which values are new personal records.

If a record deserves a sentence (first 200-yard drive, first time over a round number), also append a `Milestone` of `kind: "pr"` to `src/data/golf/milestones.ts` with `sessionId` set. Do not create milestones for routine improvements.

## Step 4: Verify and commit

Run `npx astro check`. Then commit straight to `main` with `feat(golf): log <venue> session <date>` and push.

## Step 5: Summary

Show a table of the club numbers logged, with a `PR` marker on any new record, and the new session id.
