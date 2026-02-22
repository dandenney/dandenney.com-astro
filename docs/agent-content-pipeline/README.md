# Agent Content Pipeline (Leif → Quillan → Watten)

Purpose: replace ad-hoc GitHub Action prompting with a structured, agent-first flow for generating and publishing:
- No Reservaitions reviews
- Music reviews

## Roles
- **Leif (Research/Data):** produce structured content packet with sources + confidence
- **Quillan (Writer):** draft markdown body in section-specific style, grounded in packet
- **Watten (Publisher):** validate frontmatter/path/slug/schema, write file, open PR
- **Shelby (Orchestrator):** route, enforce contracts, QA gate, summarize run

## Flow
1. Intake from Dan
   - No reservaitions can include a photo attachment
2. Leif creates packet JSON
   - For music: Leif must run lyrics research (web search + source validation) and populate `lyrics.status|text|source`
3. Quillan drafts review body from packet + style pack
4. Watten publishes file and opens PR
   - For no-reservaitions with image, Watten generates:
     - `public/no-reserv-ai-tions/<slug>.webp` (2500x1875)
     - `public/no-reserv-ai-tions/<slug>-thumb.webp` (320x240)
5. Shelby posts summary + risks/assumptions

## Music lyrics requirement
- Lyrics are a required research step for music runs.
- Leif attempts lyrics retrieval in this order:
  1) User-provided lyrics (if present)
  2) Licensed/official lyric pages
  3) Public lyric sources with clear attribution
- Packet must include:
  - `lyrics.status`: `provided|fetched|missing`
  - `lyrics.text`: lyric text or `null`
  - `lyrics.source`: source URL or `null`
- If lyrics remain missing, Leif must set a `lyrics-missing` flag and explain attempt history in `sources` notes.

## Primary Decision
- Agent pipeline is primary path
- GitHub Actions retained as temporary fallback

## Pilot Plan
- 1 No Reservaitions item
- 1 Music review item
- Measure:
  - formatting correctness
  - frontmatter validity
  - edit distance after Dan review
  - time-to-PR

If both pilots pass, keep this pipeline as default and deprecate old generation workflows.
