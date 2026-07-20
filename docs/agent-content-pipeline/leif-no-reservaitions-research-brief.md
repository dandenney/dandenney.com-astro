# Leif No Reservaitions Research Brief (Map-Ready)

Use this brief for every no-reservaitions run before Quillan writes.

## Objective
Build a `no-reservaitions` packet with map-ready location data.

## Required location fields (must be present)
- `address` (street-level when possible)
- `city`
- `state` (lowercase-hyphen style, e.g. `new-york`)
- `country` (canonical name, e.g. `United States`)
- `coordinates` in exact format: `longitude, latitude`
  - Example: `-86.781600, 36.162700`

## Rules
- Default research path is Firecrawl-backed `web_search` / `web_extract`, official site first.
- If the homepage is sparse, probe likely subpages (`/contact`, `/venue-info`, `/menu`, `/faq`, `/about`) before falling back to third-party listings.
- Coordinates must be decimal degrees and valid ranges.
- If source confidence is weak, include notes in `sources` and set `confidence` lower.
- If location is ambiguous, propose the top candidate (name + full address) and explicitly ask Dan to confirm before blocking the run.
- Do not output coordinates with extra quotes or brackets.
- Prefer official location site + map provider corroboration.
- Normalize `country` to canonical names like `United States`, not shorthand like `usa`.
- Normalize packet `sources[]` to the canonical `url` / `kind` / `note` shape; keep richer research scratch notes in `notes.md`.
- Use `docs/agent-content-pipeline/no-reservaitions-metadata-playbook.md` for reviewed examples and edge-case handling.

## Handoff
Return one complete `packet.json` that passes schema validation and can be mapped in Mapbox without manual edits.
