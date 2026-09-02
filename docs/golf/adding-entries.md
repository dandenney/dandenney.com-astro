# Ball Flight: adding entries

The golf section at `/golf` is driven by four TypeScript data files plus a
markdown collection. Nothing on the pages is typed in by hand except the
venue writeups and the origin note; records, trends, and venue rollups are
derived at build time in `src/data/golf/utils.ts`.

## Quick path

- `/add-golf-session <free text>` logs a practice session, flags PRs, type
  checks, commits, and pushes.
- `/add-round <free text>` does the same for a scored round.

## Files

| File | What it holds | Rule |
| --- | --- | --- |
| `src/data/golf/sessions.ts` | Practice sessions with per-club summary numbers | Append only, sequential `id` |
| `src/data/golf/rounds.ts` | Scored rounds, including PopStroke putting cards | Append only, sequential `id` |
| `src/data/golf/bag.ts` | Clubs, balls, gear. Retired items keep their row | `replaced` on the newer item points at the old `id` |
| `src/data/golf/milestones.ts` | Narrative moments. `annotate: true` puts it on the chart | Only when it deserves a sentence |
| `src/content/golf-venues/*.md` | One writeup per venue, golf-specific voice | `nraiSlug` links to the No Reserv-AI-tions review |

## Conventions

- Every metric is optional. Log what GOLFTEC shows, skip the rest.
- Session numbers are averages, except `longest`, which is the best single shot.
- `clubPath` positive is in-to-out. `faceToTarget` positive is open.
- Rounds where only a relative score is known use `toPar`. When `score` and
  `par` are both present, `toPar` is derived and should be omitted.
- Assessment `score` is a projected 18-hole score, so lower is better. GOLFTEC starts everyone at a goal of 125.
- Link an assessment to its session with `assessmentId` on the session and `sessionId` on the assessment.
- `player` is `"dan"` today. Misty is a data change, not a refactor.
- Hand-written prose (`takeaway`, `note`, `why`, `verdict`) has no em dashes.

## Adding a venue

1. Create `src/content/golf-venues/<slug>.md` with the schema in
   `src/content.config.ts`. `heroImage` is a site-relative path.
2. Set `membership` (`annual` | `visit` | `one-off`) and `cadence` when
   there is a rhythm worth showing.
3. Sessions and rounds reference the venue by slug, so add the venue first.
