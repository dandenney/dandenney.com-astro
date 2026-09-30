# Leif No Reservaitions Research Brief (Narrative- and Map-Ready)

Use this brief for every No Reservaitions run before Quillan writes.

## Objective

Build a packet that is both map-ready and rich enough to support a remembered, place-specific review. Address and menu facts alone are not draft-ready narrative material.

## Required location fields

- `address` (street-level when possible)
- `city`
- `state` (lowercase-hyphen style, e.g. `new-york`)
- `country` (canonical name, e.g. `United States`)
- `coordinates` in exact `longitude, latitude` format

## Required narrative context

Every packet must include `narrativeContext`:

```json
{
  "firsthand": {
    "whyThere": "string or null",
    "companionsOrOccasion": "string or null",
    "roomOrSetting": "string or null",
    "strongestSensoryMemory": "string or null"
  },
  "researched": [
    {
      "claim": "A concise narrative fact about the venue, building, owners, neighborhood, or regional role.",
      "sourceUrl": "https://source.example/"
    }
  ],
  "missing": ["roomOrSetting"],
  "followUpNeeded": false
}
```

A packet needs at least two grounded narrative anchors across non-empty firsthand fields and sourced researched claims.

## Research path

1. Start with Dan's venue, location hint, dishes, drinks, occasion, title override, and supplied media.
2. Identify the official site and extract the homepage.
3. Probe `/about`, `/history`, `/our-story`, `/contact`, `/menu`, `/faq`, and venue-specific pages when available.
4. Search credible local journalism, historical organizations, tourism sources, and interviews for usable context about the building, owners, neighborhood, or regional role.
5. Resolve each mentioned dish or drink against the official menu or best corroborated source when possible.
6. Geocode the exact address and preserve coordinates as `longitude, latitude`.
7. Record only claims that can be sourced; do not turn marketing language into fact without attribution.

## Follow-up decision

Set `followUpNeeded: true` and pause before drafting when fewer than two useful narrative anchors remain, or when the missing firsthand details would force the writer to invent the experience.

Ask Dan one compact question covering the missing material:

> What brought you there, who were you with or what was the occasion, what did the room feel like, and what taste, smell, interaction, or detail stayed with you most?

Do not ask when the initial message and reliable research already provide enough grounded scene and meaning.

## General rules

- If source confidence is weak, explain it in `sources` or `notes.md` and lower `confidence`.
- If location is ambiguous, propose the top candidate and ask Dan to confirm.
- Prefer official location sources plus map-provider corroboration.
- Normalize packet `sources[]` to `url` / `kind` / `note`.
- Keep richer scratch notes in `notes.md`.
- Use the metadata playbook for edge cases.

## Handoff

Return a complete `packet.json` that passes validation, contains at least two grounded narrative anchors, needs no outstanding follow-up, and can be mapped without manual edits.
