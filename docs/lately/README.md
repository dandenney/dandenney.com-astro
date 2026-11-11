# Lately reviews

The public Spotify playlist [Lately](https://open.spotify.com/playlist/0bscM0iqnWBVzY9xMCHc4y)
is the source of truth for `/music/reviews`. Songs on it are listed newest add first.
Reviewed songs that were removed from it move to "Out of rotation".

## Pipeline (`scripts/lately/`)

1. `sync.ts` snapshots the playlist (track id + `added_at`) to `src/data/lately/playlist.json`.
   It uses Spotify client credentials, so no user token is needed.
2. `review.ts` builds an evidence packet for each queued song:
   - Spotify metadata (track, album, label)
   - lyrics from LRCLIB, matched on artist, title, and duration
   - listening notes: a 30-second preview (Deezer by ISRC, else Spotify's embed preview)
     described three times by `google/gemini-2.5-flash` through OpenRouter. Only what
     two passes agree on counts.
   - web research (Claude + web search) that returns sourced facts and an identity
     check. Facts are dropped unless sources confirm the artist. Public source
     links are labeled from each page's metadata ("Rolling Stone: Headline");
     `scripts/lately/retitle-sources.ts` re-labels existing Lately reviews.
3. A song is held (`src/data/lately/held.json`) when it has no lyrics and no audio, or
   no lyrics and fewer than 3 confirmed facts. That avoids writing around missing evidence.
4. Claude writes the review with `stylepack.md` (Aquarium Drunkard-leaning voice, hard
   grounding rules). A second pass fact-checks every claim against the packet and rewrites.
   If the check returns no report or body, it retries once, then marks the song failed
   rather than publishing the unchecked draft.
5. Output: `src/content/songs/<slug>.md` plus `src/data/lately/evidence/<slug>.json`
   (listening notes, sourced facts, draft, fact-check report, per-step cost). Lyrics
   text isn't stored.
6. If Lately holds a different Spotify release of a song that already has a non-legacy
   review, the song is skipped and mapped in `src/data/lately/aliases.json` so the
   existing review keeps its Lately position.

## Running

```sh
yarn lately:sync
yarn lately:review --added-within 30        # new adds
yarn lately:review --next 5                 # backlog, newest add first
yarn lately:review --rewrite-legacy 5       # redo old OpenAI reviews (no `pipeline` field)
yarn lately:review --id <spotifyId> --dry-run
```

Needs `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `ANTHROPIC_API_KEY`, `OPENROUTER_API_KEY`.
Models can be overridden with `LATELY_WRITER_MODEL`, `LATELY_RESEARCH_MODEL`, `LATELY_LISTEN_MODEL`.

`.github/workflows/lately-reviews.yml` runs daily and on demand, and commits to the
`lately/reviews` branch. If that PR is still open, the run adds to it instead of
opening another. If a song crashes the run, the finished songs are still committed.
Keep manual backlog runs to about 25 songs (~30 minutes, ~$6) so the PR stays readable.
