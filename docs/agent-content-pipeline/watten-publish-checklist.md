# Watten Publish Checklist (Pre-PR Gate)

## 1) Packet validation
- [ ] Packet JSON matches correct schema file
- [ ] `confidence` + `sources` present
- [ ] `flags` surfaced in PR notes

## 2) Frontmatter validation

### No Reservaitions (`src/content/reviews/*.md`)
- [ ] Required fields present: `title`, `address`, `city`, `state`, `country`, `coordinates`, `description`, `pubDate`, `tags`, `aiGenerated`
- [ ] `coordinates` format is `lng, lat` (example: `-86.7816, 36.1627`)
- [ ] `coordinates` parse to valid numeric ranges (lng -180..180, lat -90..90)
- [ ] `city`/`state` normalized (lowercase/hyphen where expected)
- [ ] `pubDate` format `YYYY-MM-DD`
- [ ] `tags` non-empty array
- [ ] If image provided: generated assets exist
  - `public/no-reserv-ai-tions/<slug>.webp` (2500x1875)
  - `public/no-reserv-ai-tions/<slug>-thumb.webp` (320x240)
- [ ] If image provided: `heroImage` in frontmatter is set to `<slug>` (basename only)

### Music (`src/content/songs/*.md`)
- [ ] Required fields present: `title`, `artist`, `artists`, `album`, `releaseDate`, `spotifyUrl`, `spotifyId`, `albumArt`, `duration`, `genres`, `pubDate`, `tags`, `aiGenerated`
- [ ] Packet includes `lyrics.status|text|source`
- [ ] If `lyrics.status = missing`, `flags` includes `lyrics-missing` and PR notes list lookup attempts
- [ ] Spotify URL and ID consistent
- [ ] `duration` is integer milliseconds
- [ ] `artists` and `genres` arrays non-empty when data exists

## 3) File/path/slug rules
- [ ] Filename slug matches project conventions
- [ ] Target collection path is correct
- [ ] Duplicate slug/file check run before write

## 4) Content quality gates
- [ ] Body aligns with section style pack
- [ ] No unsupported factual claims outside packet/notes
- [ ] Contains at least one caveat/trade-off sentence

## 5) Project checks
- [ ] Run `yarn` install if needed
- [ ] Run collection/schema check (Astro build or relevant script)
- [ ] Optional: run `yarn build` before PR for full confidence

## 6) PR requirements
- [ ] Include source packet summary
- [ ] Include assumptions + confidence level
- [ ] Include fallback notes for missing fields
- [ ] Label PR as `content/ai-assisted`
