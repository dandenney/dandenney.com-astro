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
- Coordinates must be decimal degrees and valid ranges.
- If source confidence is weak, include notes in `sources` and set `confidence` lower.
- Do not output coordinates with extra quotes or brackets.
- Prefer official location site + map provider corroboration.

## Handoff
Return one complete `packet.json` that passes schema validation and can be mapped in Mapbox without manual edits.
