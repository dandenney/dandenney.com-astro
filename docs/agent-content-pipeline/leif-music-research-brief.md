# Leif Music Research Brief (Lyrics-First)

Use this brief for every music run before Quillan writes.

## Objective
Build a `music-review` packet with validated Spotify metadata and lyrics research.

## Required outputs
- `spotify` object filled
- `lyrics` object filled:
  - `status`: `provided|fetched|missing`
  - `text`: lyrics text or `null`
  - `source`: source URL or `null`
- `sources[]` with each lookup attempt and result note
- `flags[]` includes `lyrics-missing` when unresolved

## Lyrics lookup sequence
1. Use user-provided lyrics when present
2. Search official/licensed lyric pages
3. Search public lyric pages and capture source URL
4. If blocked/unavailable, set `missing` and document attempts

## Quality bar
- No fabricated lyric lines
- No un-attributed lyric snippets
- Confidence should drop when lyrics are missing

## Handoff
Return one complete `packet.json` that passes schema validation.
