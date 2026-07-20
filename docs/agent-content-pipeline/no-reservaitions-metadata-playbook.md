# No Reservaitions Metadata Playbook

Purpose: make the research + metadata part of the No Reservaitions workflow deterministic enough that a run can survive weak search results, partial official sites, and venue/event ambiguity.

This playbook was written after reviewing the current corpus plus 10 packet-era examples.

## Why this needs a playbook

Corpus scan of `src/content/reviews/*.md` found recurring legacy inconsistencies:

- 14 reviews missing `state`
- 37 reviews missing `infoUrl`
- 42 reviews missing `tags`
- 120 reviews using non-ISO-looking `pubDate` strings
- 1 review missing `coordinates`

Those older files are useful history, but they are **not** the standard to copy forward.

## Default research order (Firecrawl-first)

1. **Check for duplicates first**
   - Search `src/content/reviews/*.md` for likely title/slug collisions.
   - If Dan explicitly wants a title override, use that for the final slug but still research the real venue/entity.

2. **Find the official domain with `web_search`**
   - Query shape:
     - `"<venue> <city> official site"`
     - `"<venue> <city> address official"`
     - for events: `"<artist/event> <venue> <city> official"`
   - Prefer the official venue/site domain over review/listing aggregators.

3. **Extract the official site before falling back**
   - Use `web_extract` on the homepage.
   - If the homepage is sparse, probe likely subpages:
     - `/contact`
     - `/venue-info`
     - `/menu`
     - `/faq`
     - `/about`
   - For concerts/venues, `venue-info` and event detail pages often carry the usable address.

4. **Capture the canonical metadata fields**
   - `title`
   - `address`
   - `city`
   - `state`
   - `country`
   - `coordinates`
   - `infoUrl`
   - `description`
   - `tags`

5. **Geocode only after you have an exact address**
   - Use Nominatim/OpenStreetMap on the exact street address.
   - Store coordinates in **`longitude, latitude`** order.
   - Do not infer coordinates from neighborhood-only language.

6. **Separate public facts from Dan’s firsthand details**
   - Publicly verified: venue identity, address, city/state, official URL, map coordinates.
   - Dan-only unless corroborated: dish list, drink list, opener, atmosphere, how the night felt.
   - Use public sources to anchor the place; use Dan’s input to anchor the review voice.

7. **Normalize into a packet, not ad-hoc notes**
   - `packet.json`
   - `prompt.md`
   - `body.md`
   - optional `notes.md`

8. **Publish and verify**
   - `yarn agent:packet:validate ...`
   - `yarn agent:content:publish ...`
   - `fnm exec --using=$(cat .nvmrc) npx astro check`
   - `fnm exec --using=$(cat .nvmrc) yarn build`
   - commit + push to `main` unless Dan explicitly asked for draft/local-only
   - verify the live URL separately from local build success

## Canonical metadata rules

### Required frontmatter shape

```yaml
---
title: "Junior"
address: "907 Dickerson Pike, Nashville, TN 37207"
city: "nashville"
state: "tennessee"
country: "United States"
coordinates: "-86.7732307, 36.1876196"
description: "A sharp East Nashville dinner at Junior with porridge bread, summer vegetables, lamb tartar, Amish chicken, a German pilsner, and a Syrah blend that kept the table lingering."
heroImageAlt: "Roasted Amish chicken at Junior with sauce on the plate, side dishes in the background, and a glass of red wine on the table"
infoUrl: "https://www.juniornashville.com"
pubDate: "2026-07-10"
tags: ["nashville","tennessee","east-nashville","dinner","wine","french"]
aiGenerated: true
heroImage: "junior"
---
```

### Normalization rules

- `title`
  - Default: the venue/entity name.
  - Exception: if Dan explicitly wants an event/artist title override, use that title for frontmatter and slug.
- `address`
  - Prefer the official site.
  - If the official site is unavailable, use the best corroborated public listing and lower confidence.
- `city`
  - Lowercase.
  - Use hyphens for multi-word city slugs when that is the repo convention.
- `state`
  - Lowercase slug form, e.g. `tennessee`, `new-york`.
- `country`
  - Use canonical names like `United States`.
  - Do **not** use `usa` in new packets.
- `coordinates`
  - Always a quoted string in `lng, lat` order.
- `infoUrl`
  - Best case: official venue/event page.
  - Next best: official home/contact page.
  - Fallback: stable public listing when official pages are blocked or absent.
  - `null` is acceptable only when explicitly documented in `flags`/`notes`.
- `description`
  - One sentence.
  - Lead with the actual experience, not generic marketing.
- `tags`
  - 4-6 tags is the sweet spot.
  - Include geography plus cuisine/event type plus one or two specific anchors.
- `pubDate`
  - Always `YYYY-MM-DD`.
- `heroImage`
  - Basename only, no path, only when an image exists.

## Canonical packet source shape

Use this shape in `packet.json`:

```json
{
  "url": "https://www.juniornashville.com/contact",
  "kind": "official-site",
  "note": "Lists address as 907 Dickerson Pike, Nashville, TN 37207 and phone number (615) 964-7077."
}
```

Recommended `kind` values:

- `official-site`
- `official-event-page`
- `official-menu`
- `geocode`
- `listing`
- `search-result`
- `social-search`
- `user-note`
- `image-evidence`

If richer internal notes are useful while researching, keep them in `notes.md`, but normalize `packet.json` to the canonical `url` / `kind` / `note` structure.

## Ten reviewed examples to keep in mind

1. **Junior** — ideal restaurant pattern
   - Official home, contact, and menu pages all usable.
   - Best model for restaurant metadata + menu corroboration.

2. **Kaleo** — event-title override pattern
   - Dan wanted the review titled `Kaleo`, not `The Pinnacle`.
   - Correct move: keep venue metadata public-facing, but let title/slug follow Dan’s event-title request.

3. **GEODIS Park** — official venue-info pattern
   - Official matchday page + exact street geocode.
   - Good model for sports/stadium reviews.

4. **Funny Library Coffee Shop** — user-provided-address fallback
   - No official venue URL verified during the run.
   - Acceptable only because the address came directly from Dan and the packet flags the limitation.

5. **Vaco Nashville Meetup** — city/metro ambiguity pattern
   - User framing was “Nashville,” but the public office listing geocoded to Brentwood.
   - Keep the precise address and document the ambiguity explicitly.

6. **Skeeter’s** — one-page official-site success case
   - Official location page carried the address and enough context in one stop.
   - Fast path when the business website is small but complete.

7. **Aubrey’s** — Cloudflare-blocked official site pattern
   - Official URL discovered from search results, then corroborated with listing + geocode.
   - Good fallback when direct fetches are blocked from the agent environment.

8. **Chautauqua Festival 2026** — event-in-a-park pattern
   - Event page anchors the festival; park geocode anchors the map location.
   - Best pattern for recurring community/festival entries.

9. **VN Pho** — no-clean-official-site fallback
   - Map provider + exact-address geocode can be sufficient when public evidence is clean and confidence stays honest.

10. **Fleming’s** — historical backfill caution
   - Useful as a backfill example, but it shows why the new rules matter: `country` should now be `United States`, not `usa`.

## Example meta blocks

### Restaurant example: Junior

```json
{
  "frontmatter": {
    "title": "Junior",
    "address": "907 Dickerson Pike, Nashville, TN 37207",
    "city": "nashville",
    "state": "tennessee",
    "country": "United States",
    "coordinates": "-86.7732307, 36.1876196",
    "description": "A sharp East Nashville dinner at Junior with porridge bread, summer vegetables, lamb tartar, Amish chicken, a German pilsner, and a Syrah blend that kept the table lingering.",
    "infoUrl": "https://www.juniornashville.com",
    "pubDate": "2026-07-10",
    "tags": ["nashville", "tennessee", "east-nashville", "dinner", "wine", "french"],
    "aiGenerated": true,
    "heroImage": "junior",
    "heroImageAlt": "Roasted Amish chicken at Junior with sauce on the plate, side dishes in the background, and a glass of red wine on the table"
  }
}
```

### Event/venue example: Kaleo

```json
{
  "frontmatter": {
    "title": "Kaleo",
    "address": "910 Exchange Ln, Nashville, TN 37203",
    "city": "nashville",
    "state": "tennessee",
    "country": "United States",
    "coordinates": "-86.7849304, 36.1601131",
    "description": "Kaleo at The Pinnacle in Nashville with Dawes opening, Chicken Scratch in hand, and PBRs under green lights and a giant suspended diamond.",
    "infoUrl": "https://thepinnaclenashville.com/events/detail/?event_id=1294407",
    "pubDate": "2026-07-19",
    "tags": ["concert", "nashville", "tennessee", "the-pinnacle", "kaleo", "pbr"],
    "aiGenerated": true,
    "heroImage": "kaleo",
    "heroImageAlt": "Photo of Kaleo performing beneath green spotlights and a large suspended diamond-shaped set piece at The Pinnacle in Nashville"
  }
}
```

### Ambiguous/no-official-url example: Funny Library Coffee Shop

```json
{
  "frontmatter": {
    "title": "Funny Library Coffee Shop",
    "address": "1 Music Square W, Nashville, TN 37203",
    "city": "nashville",
    "state": "tennessee",
    "country": "United States",
    "coordinates": "-86.793321, 36.151555",
    "description": "Playful breakfast stop with polished plates and coffee that keeps pace.",
    "infoUrl": null,
    "pubDate": "2026-03-22",
    "tags": ["breakfast", "coffee", "cafe"],
    "aiGenerated": true
  },
  "flags": [
    "address provided directly by Dan",
    "no official venue URL verified during this run"
  ]
}
```

## Common failure modes and what to do

- **Web search returns nothing useful**
  - Retry with the entity + city + `official`.
  - Search for the official domain first, then extract subpages directly.

- **Official site is JS-heavy / sparse / blocked**
  - Keep the official URL as the target truth.
  - Use search-result discovery plus a corroborating listing/geocode source.
  - Lower confidence instead of inventing certainty.

- **Event page is harder to extract than the venue page**
  - Use the venue page for address and the event page for bill/title/date context.

- **User gave a specific address but no URL**
  - Geocode the exact address.
  - Set `infoUrl: null` only if the notes/flags say why.

- **Metro-area naming mismatch**
  - Preserve the exact geocoded address.
  - Explain the mismatch in `flags` or `notes.md`.

## Recommended done definition for metadata

A No Reservaitions run is metadata-complete when:

- the official entity or best fallback source trail is documented
- `address`, `city`, `state`, `country`, and `coordinates` are filled and normalized
- `infoUrl` is either present or explicitly missing with a note
- `tags` and `description` are specific to the real experience
- the packet, published file, and final live URL all agree on the entity being reviewed
