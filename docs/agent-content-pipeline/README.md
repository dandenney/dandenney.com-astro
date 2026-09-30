# Agent Content Pipeline (Leif → Quillan → Watten)

Purpose: replace ad-hoc GitHub Action prompting with a structured, agent-first flow for generating and publishing:
- No Reservaitions reviews
- Music reviews

## Roles
- **Leif (Research/Data):** produce structured content packet with sources + confidence
- **Quillan (Writer):** draft markdown body in section-specific style, grounded in packet
- **Watten (Publisher):** validate frontmatter/path/slug/schema, write file, and prepare the publish summary
- **Shelby (Orchestrator):** route, enforce contracts, QA gate, summarize run

## Flow
1. Intake from Dan (usually via Discord)
   - No reservaitions can include a photo attachment
   - Treat the Discord-provided venue name, city/location hint, dish/drink list, event bill, title override, occasion, why-they-were-there context, and image as the starting intake to research against
   - Capture firsthand narrative anchors when supplied: companions or occasion, room/arrival, and strongest sensory memory
   - If the intake and public research still leave fewer than two grounded narrative anchors, ask Dan one compact follow-up before drafting rather than writing around the missing experience
   - For golf No Reservaitions entries, the minimum intake can instead be course/venue name + location hint + a freeform note; food/drink details are optional secondary context
2. Leif creates packet JSON
   - For no-reservaitions: address + coordinates are required for map compatibility
   - Coordinates format must be exactly: `longitude, latitude` (example: `-86.7816, 36.1627`)
   - For no-reservaitions: Leif must resolve each user-mentioned dish/drink against the official menu or best corroborated source when possible, capturing canonical item names, key components, and confidence instead of leaving raw nouns uninterpreted
   - Leif must research narrative context beyond metadata: venue/building history, owners, neighborhood or regional role, and why those facts matter to this visit
   - Every no-reservaitions packet must include `narrativeContext` with `firsthand`, sourced `researched` claims, `missing`, and `followUpNeeded`; validation requires at least two grounded anchors and blocks drafting while follow-up remains necessary
   - For golf-tagged no-reservaitions entries, Leif should anchor on the course/facility metadata first; menu-style dish/drink resolution is optional and only needed when those details materially shape the experience
   - If a dish remains ambiguous after research and that ambiguity would materially weaken the review, pause and ask Dan a follow-up rather than guessing
   - For music: Leif must run lyrics research (web search + source validation) and populate `lyrics.status|text|source`
3. Shelby/Quillan materializes a concrete `prompt.md` from the packet + style pack
   - For no-reservaitions, the prompt should carry an observant, worldly, appetite-first, unsentimental, lightly wry sensibility without imitating a named writer's exact voice
   - Every no-reservaitions prompt must include `## Narrative anchors` and `## Dan-approved calibration`
   - Dan's approved Dutch Maid Bakery & Cafe and High Point Restaurant revisions are the calibration standard for scene, appetite, humor, sensory specificity, and emotional presence; copy the qualities, never their wording or cadence
   - The prompt should explicitly forbid mentioning source artifacts like "the photo" or "the image" inside the published prose; those are for grounding, not for narration
   - For golf-tagged entries, the prompt should shift from meal narrative to outing narrative: course character, pace, conditions, standout moments, and whether any food/drinks actually changed the feel of the stop
4. Quillan drafts review body from `prompt.md`
   - The draft should place the reader inside a specific scene and connect food or drink to people, place, history, appetite, or occasion
   - Reject drafts that survive the swap-name test, substitute abstract order-analysis for lived experience, or force a caveat/practical takeaway
5. Watten publishes file and prepares the delivery summary
   - For no-reservaitions with image, Watten generates:
     - `public/no-reserv-ai-tions/<slug>.webp` (2500x1875)
     - `public/no-reserv-ai-tions/<slug>-thumb.webp` (320x240)
6. Shelby posts summary + risks/assumptions and, for publish-mode runs, the git/live-verification result

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

### Pause behavior (default)
If full lyrics are unavailable from reliable sources, the workflow pauses before drafting.
Shelby returns a blocker message and waits for Dan to provide lyrics or approve fallback mode.

## Primary Decision
- Agent pipeline is primary path
- GitHub Actions retained as temporary fallback

## Research briefs
- No Reservaitions (map-ready): `leif-no-reservaitions-research-brief.md`
- Music (lyrics-first): `leif-music-research-brief.md`
- No Reservaitions metadata playbook: `no-reservaitions-metadata-playbook.md`

## Pilot Plan
- 1 No Reservaitions item
- 1 Music review item
- Measure:
  - formatting correctness
  - frontmatter validity
  - edit distance after Dan review
  - time-to-publish

If both pilots pass, keep this pipeline as default and deprecate old generation workflows.
