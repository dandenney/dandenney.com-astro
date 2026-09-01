Log a scored round for the Ball Flight golf section. Arguments: free text, e.g. `/add-round PopStroke black +4 with Misty` or `/add-round Myrtlewood 18 holes, shot 104, 38 putts, with Blaine`.

Parse `$ARGUMENTS` for venue, date, format, holes, and any scoring. Ask when the venue or format is ambiguous. Do not invent numbers.

## Step 1: Read the data

Read `src/data/golf/rounds.ts` and `src/data/golf/types.ts` in full. Venue slugs are the filenames in `src/content/golf-venues/` without the extension.

## Step 2: Build the entry

- `id`: highest existing `id` in `rounds` + 1. Append only; never reorder or reuse ids.
- `player`: `"dan"` unless told otherwise.
- `date`: ISO `YYYY-MM-DD`. "today" means the current date.
- `venueSlug`: existing slug. PopStroke → `popstroke-nashville`.
- `format`: `stroke` | `best-ball` | `scramble` | `putting`. PopStroke rounds are always `putting`.
- `holesPlayed`: `9` or `18`. PopStroke courses are 18.
- `course`: for venues with multiple layouts, e.g. `"Black"` or `"Blue"` at PopStroke.
- `tees`, `par`, `score`, `putts`, `fairways`, `gir`, `holes`, `conditions`, `partners`: only when given.
- `toPar`: use when only a relative score is known (PopStroke reports `+3`). When both `score` and `par` are known, omit `toPar`; it is derived.
- `note`: hand-written, 1-2 sentences, no em dashes.

Append to the `rounds` array in `src/data/golf/rounds.ts`. Multiple rounds on one day are separate entries.

## Step 3: Detect records

Compare against prior rounds for the same player: low 18 and low 9 (stroke play with a `score`), fewest putts, and low putting card (`toPar` on `putting` rounds). Lower is better for all of them. Note any new record.

If it is a story-worthy first (first scored 18, first round under 100, first par), append a `Milestone` of `kind: "first"` or `"pr"` to `src/data/golf/milestones.ts` with `roundId` set.

## Step 4: Verify and commit

Run `npx astro check`. Then commit straight to `main` with `feat(golf): log <venue> round <date>` and push.

## Step 5: Summary

Show the round as one table row (date, venue, format, score or to-par, putts) with a `PR` marker where it applies, and the new round id.
