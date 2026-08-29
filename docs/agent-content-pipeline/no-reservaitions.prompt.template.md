# Quillan Prompt Template — No Reservaitions

Use this as the canonical starting template for `prompt.md` in No Reservaitions runs.

```md
Write a finished No Reservaitions review body for Dan Denney's site.

Write it as if Anthony Bourdain were narrating Dan's actual experience from memory: articulate, worldly, appetite-first, observant, unsentimental, and capable of finding meaning in what people order and why. Do **not** imitate catchphrases, parody his cadence, or turn every review into the same performance.

## Voice
- Write like a sharp human remembering a real night, not an agent summarizing notes.
- Be specific, judgmental in the useful sense, and willing to say why a choice mattered.
- Treat food and drink as signals of mood, place, character, appetite, excess, restraint, or local logic.
- For golf-tagged entries, treat the course/facility and the outing itself as the primary subject; food and drinks are secondary unless they clearly shaped the experience.
- Prefer concrete interpretation over generic praise.
- Avoid boilerplate trade-off language and generic recommendation formulas.
- Do not invent facts.

## Venue facts you may rely on
- Title: <TITLE>
- Venue/entity: <VENUE>
- Address: <ADDRESS>
- City/state/country: <CITY>, <STATE>, <COUNTRY>
- Coordinates for frontmatter: <LNG_LAT>
- Official info URL: <INFO_URL>
- Any corroborated public facts: <PUBLIC_FACTS>

## Resolved item research you may rely on
- Resolved dishes/drinks: <RESOLVED_ITEMS>
- Items that remain ambiguous: <UNRESOLVED_ITEMS>
- Confidence notes: <ITEM_CONFIDENCE>
- For golf-tagged entries, this section can be sparse or empty when food/drink details were not central.

## Firsthand details from Dan
- Visit date: <YYYY-MM-DD>
- Items / drinks / bill: <ITEMS>
- Atmosphere / observed details: <DETAILS>
- Golf/outing notes when relevant: <GOLF_DETAILS>
- Visual corroboration notes: <PHOTO_NOTES>
- Title override notes if any: <TITLE_OVERRIDE>

## Writing goals
- Make the reader feel what actually happened.
- Mention at least 2 concrete specifics from Dan's details or resolved item research.
- Explain at least one choice: why a dish, drink, or ordering sequence mattered.
- For golf-tagged entries, that "choice" can instead be about course selection, playing conditions, pacing, companions, or what made the outing memorable.
- Find meaning in the order, not just the ingredients.
- For golf-tagged entries, find meaning in the outing, not just the scorecard or amenities list.
- Judge the experience, not just the branding.
- If this is a bar stop / coffee stop / quick hit rather than a full meal, let the form fit the stop.

## Hard constraints
- 4 short paragraphs.
- No headings.
- No bullet points.
- No sentence that mentions "the photo," "the image," "the picture," or that otherwise narrates the existence of source materials.
- Do not flatten unresolved dishes into raw nouns if menu research suggests a fuller composed dish.
- If an item is unresolved, either describe it cautiously or leave it out rather than guessing.
- No repeated stock openings or stock closings.
- End with an earned final judgment, not a generic consumer tip.
```

## Why this template exists

The old OpenClaw-era workflow appears not to have preserved the full writer prompt reliably. This file exists so the current Hermes-native workflow has one durable, inspectable prompt skeleton instead of relying only on a style pack plus reconstructed run prompts.
