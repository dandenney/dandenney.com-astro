#!/usr/bin/env node

/**
 * No ReservAItions review generator (Claude)
 *
 * 1. Research: Claude + web search resolves address, coordinates, info URL, and a few venue facts
 * 2. Draft: Claude writes the review from Dan's notes, calibrated on Dan's own rewritten reviews
 * 3. Sharpen: a second editing pass for wit and specificity (skip with --no-sharpen)
 * 4. Metadata: description + tags, then writes src/content/reviews/<slug>.md
 *
 * Usage:
 *   ANTHROPIC_API_KEY=... node scripts/generate-review.mjs \
 *     --location "Top of the Rock" --city "jasper" \
 *     --items "elk burger, pilsner, filet mignon, Oktoberfest, cookie cake" \
 *     --notes "End of Misty's birthday weekend of hikes. Long winding drive. Best restaurant view we've ever had."
 *
 * Optional: --state, --country, --title, --slug, --date YYYY-MM-DD, --hero-image <slug>,
 *           --hero-image-alt "...", --no-sharpen, --dry-run (print instead of writing), --force (overwrite)
 * Models:   REVIEW_MODEL (default claude-opus-5-5), REVIEW_RESEARCH_MODEL (default claude-sonnet-5-5)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REVIEWS_DIR = path.join(__dirname, '..', 'src', 'content', 'reviews');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const WRITER_MODEL = process.env.REVIEW_MODEL || 'claude-opus-5-5';
const RESEARCH_MODEL = process.env.REVIEW_RESEARCH_MODEL || 'claude-sonnet-5-5';

// Dan's own rewrites: the voice target. Read live so edits to these reviews refine the calibration.
const CALIBRATION_SLUGS = [
  'dutch-maid-bakery-cafe',
  'high-point-restaurant',
  'top-of-the-rock-restaurant-brewery',
  'lp',
  'the-shins',
];

const VOICE = `You write reviews for "No ReservAItions," the restaurant, bar, venue, and outing section of Dan Denney's personal site. Write as Dan ("we" when Misty or others were there, "I" sparingly), with the wit of Anthony Bourdain: a disappointed optimist who still shows up hungry.

What that means:
- Warmth first, wit second. He expects the world to let him down a little and is quietly delighted when a place doesn't. The humor is dry, rueful, and often aimed at himself or at the world's pretensions, never at the place, its staff, its town, or the people eating there.
- Generous to honest, unpretentious places. Skeptical of hype, trends, and anything trying too hard, but that skepticism is a wry aside, not a sneer.
- Appetite and place first. The food, the drinks, the room, the drive, the crowd, and why it mattered that day. Find the small human truth in an ordinary meal.
- Judgments, not descriptions. A little profanity when it lands. One or two lines worth quoting is plenty; not every sentence needs a punchline.
- Never a menu recap, never travel-brochure language ("gastronomic", "culinary journey", "nestled", "a feast for the senses", "hidden gem").

Rules:
- Only state facts that come from Dan's notes, the item list, or the provided venue facts. You may have opinions about them; you may not invent dishes, dialogue, service, or history. Use venue facts only when they deepen the visit; skip trivia that would just set up a joke.
- Never mention Anthony Bourdain or any writer, and never mention notes, research, photos, addresses, or AI.
- 3-5 short paragraphs, roughly 180-400 words. Plain markdown body only: no title, headings, lists, or frontmatter.
- End on something felt and specific to this visit, not a punchline and not a recommendation.`;

function parseArguments(argv) {
  const params = {};
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i].replace(/^--/, '');
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      params[key] = true;
    } else {
      params[key] = next;
      i++;
    }
  }
  for (const required of ['location', 'city', 'items']) {
    if (typeof params[required] !== 'string' || !params[required].trim()) {
      throw new Error(`Missing required parameter: --${required}`);
    }
  }
  return params;
}

async function claude({ model, system, prompt, maxTokens = 1500, tools, temperature }) {
  const body = {
    model,
    max_tokens: maxTokens,
    messages: [{ role: 'user', content: prompt }],
  };
  if (system) body.system = system;
  if (tools) body.tools = tools;
  if (temperature !== undefined) body.temperature = temperature;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Anthropic API error (${model}): ${data.error?.message || response.status}`);
  }
  return data.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('')
    .trim();
}

function extractJson(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1);
  return JSON.parse(candidate);
}

async function researchVenue(params) {
  const where = [params.city, params.state, params.country].filter(Boolean).join(', ');
  const prompt = `Look up "${params.location}" in ${where}. It may be a restaurant, bar, bakery, venue, concert, golf course, or attraction.

Return only JSON with exactly these keys:
- "address": full street address, or null
- "infoUrl": official website or event page, or null
- "coordinates": "<longitude>, <latitude>" in decimal degrees (example "-86.7816, 36.1627"), taken from a map listing or other source that states them, or null
- "state": state/province name, or null
- "country": canonical country name, or null
- "facts": array of 0-4 short, verified facts that give the place character (history, building, owners, neighborhood role, what it's known for). Not the address or location, no menu listings, no marketing copy.

Use null rather than guessing.`;

  try {
    const text = await claude({
      model: RESEARCH_MODEL,
      prompt,
      maxTokens: 2000,
      tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: 4 }],
    });
    return extractJson(text);
  } catch (error) {
    console.warn(`   ⚠️  Venue research failed: ${error.message}`);
    return { address: null, infoUrl: null, coordinates: null, state: null, country: null, facts: [] };
  }
}

async function geocode(params, venue) {
  const region = [params.city, params.state || venue.state].filter(Boolean).join(', ');
  const queries = [
    venue.address,
    venue.address?.replace(/\s+\d{5}(-\d{4})?$/, ''),
    venue.address?.replace(/^\d+\s+/, '').replace(/\s+\d{5}(-\d{4})?$/, ''),
    `${params.location}, ${region}`,
  ].filter(Boolean);

  for (const q of queries) {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q)}`;
      const response = await fetch(url, { headers: { 'User-Agent': 'dandenney.com review generator' } });
      const [hit] = await response.json();
      if (hit) return `${hit.lon}, ${hit.lat}`;
    } catch {
      // try the next query
    }
    await new Promise((resolve) => setTimeout(resolve, 1100));
  }
  return null;
}

function commonTags(limit = 40) {
  const counts = new Map();
  for (const file of fs.readdirSync(REVIEWS_DIR).filter((f) => /\.mdx?$/.test(f))) {
    const line = fs.readFileSync(path.join(REVIEWS_DIR, file), 'utf8').match(/^tags:\s*\[(.*)\]/m);
    for (const tag of line?.[1].match(/[a-z0-9-]+/g) || []) counts.set(tag, (counts.get(tag) || 0) + 1);
  }
  return [...counts.entries()]
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

function reviewBody(file) {
  const raw = fs.readFileSync(file, 'utf8');
  return raw.replace(/^---[\s\S]*?\n---\s*/, '').trim();
}

function loadCalibration(excludeSlug) {
  return CALIBRATION_SLUGS.filter((slug) => slug !== excludeSlug)
    .map((slug) => path.join(REVIEWS_DIR, `${slug}.md`))
    .filter((file) => fs.existsSync(file))
    .map((file) => reviewBody(file));
}

function briefing(params, venue) {
  const facts = (venue.facts || []).map((fact) => `- ${fact}`).join('\n') || '- (none found)';
  return `Place: ${params.title || params.location}
Location: ${[params.city, params.state, params.country].filter(Boolean).join(', ')}
What we ate, drank, or did: ${params.items}
Dan's notes: ${params.notes || '(none provided — lean on the items and venue facts; do not invent a backstory)'}
Venue facts:
${facts}`;
}

async function draftReview(params, venue, examples) {
  const calibration = examples.map((body, i) => `<example ${i + 1}>\n${body}\n</example ${i + 1}>`).join('\n\n');
  const prompt = `Here are reviews Dan rewrote himself. They are the voice target. Match their wit, rhythm, and specificity; do not reuse their lines or structure.

${calibration}

Now write the review for this one:

${briefing(params, venue)}

Return only the review body.`;
  return claude({ model: WRITER_MODEL, system: VOICE, prompt, maxTokens: 1500, temperature: 1 });
}

async function sharpenReview(params, venue, draft) {
  const prompt = `Edit this draft review the way a great, warm editor would.

- Cut every line that could appear in a review of a different place.
- Cut filler, hedging, adjective piles, and any menu-recap sentences.
- Cut or soften any joke that sneers at the place, its staff, its town, or other diners. Keep the wit dry and rueful; it should read as affection with a raised eyebrow.
- Keep at most two or three real laugh lines. Let the rest be plain, specific, and felt.
- Make sure the ending lands on why this visit mattered, not on a gag.
- Keep every fact consistent with the briefing below; add no new facts.
- Keep 3-5 short paragraphs.

Briefing:
${briefing(params, venue)}

Draft:
${draft}

Return only the revised review body.`;
  return claude({ model: WRITER_MODEL, system: VOICE, prompt, maxTokens: 1500 });
}

async function generateMetadata(params, review) {
  const prompt = `From this review of ${params.location}, return only JSON with:
- "description": one sentence, 15-25 words, plain and specific (what the visit was and what we had), no hype
- "tags": 2-4 lowercase hyphenated tags for cuisine, venue type, or activity. Prefer these existing tags: ${commonTags().join(', ')}. No city, state, or place names, no occasions, no generic "restaurant"

Review:
${review}`;
  const text = await claude({ model: RESEARCH_MODEL, prompt, maxTokens: 400 });
  return extractJson(text);
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

function normalizeState(value) {
  if (!value) return null;
  return String(value).toLowerCase().trim().replace(/\s+/g, '-');
}

function normalizeCoordinates(value) {
  if (!value) return null;
  const parts = String(value).replace(/["']/g, '').split(',').map((p) => p.trim());
  if (parts.length !== 2) return null;
  const [lng, lat] = parts.map(Number);
  if (Number.isNaN(lng) || Number.isNaN(lat)) return null;
  if (lng < -180 || lng > 180 || lat < -90 || lat > 90) return null;
  return `${lng.toFixed(6)}, ${lat.toFixed(6)}`;
}

const quote = (value) => JSON.stringify(String(value));

function buildMarkdown(params, venue, metadata, review) {
  const state = normalizeState(params.state || venue.state);
  const coordinates = normalizeCoordinates(venue.coordinates);
  const lines = [
    '---',
    `title: ${quote(params.title || params.location)}`,
    venue.address ? `address: ${quote(venue.address)}` : '# address: ""',
    `city: ${quote(params.city.toLowerCase())}`,
    state ? `state: ${quote(state)}` : '# state: ""',
    `country: ${quote(params.country || venue.country || 'United States')}`,
    coordinates ? `coordinates: ${quote(coordinates)}` : '# coordinates: "-86.781600, 36.162700"',
    `description: ${quote(metadata.description || '')}`,
    `heroImage: ${quote(typeof params['hero-image'] === 'string' ? params['hero-image'] : 'placeholder')}`,
    `heroImageAlt: ${quote(typeof params['hero-image-alt'] === 'string' ? params['hero-image-alt'] : 'Placeholder image')}`,
    venue.infoUrl ? `infoUrl: ${quote(venue.infoUrl)}` : '# infoUrl: ""',
    `pubDate: ${quote(typeof params.date === 'string' ? params.date : new Date().toISOString().split('T')[0])}`,
    `tags: ${JSON.stringify(metadata.tags || [])}`,
    'aiGenerated: true',
    '---',
    '',
    review.trim(),
    '',
  ];
  return lines.join('\n');
}

async function main() {
  console.log('🍽️  No ReservAItions review generator\n');

  if (!ANTHROPIC_API_KEY) {
    console.error('❌ Missing ANTHROPIC_API_KEY.');
    process.exit(1);
  }

  try {
    const params = parseArguments(process.argv.slice(2));
    const slug = typeof params.slug === 'string' ? params.slug : slugify(params.title || params.location);
    const outputPath = path.join(REVIEWS_DIR, `${slug}.md`);

    if (fs.existsSync(outputPath) && !params.force && !params['dry-run']) {
      throw new Error(`${path.relative(process.cwd(), outputPath)} already exists (use --force to overwrite)`);
    }
    if (!params.notes) {
      console.warn('   ⚠️  No --notes given. Reviews are much better with why you went, who was there, and what stuck.\n');
    }

    console.log(`🔍 Researching ${params.location} (${RESEARCH_MODEL})...`);
    const venue = await researchVenue(params);
    if (!normalizeCoordinates(venue.coordinates)) {
      venue.coordinates = await geocode(params, venue);
    }
    console.log(`   Address: ${venue.address || '—'}`);
    console.log(`   Coordinates: ${venue.coordinates || '—'}`);
    console.log(`   Facts: ${(venue.facts || []).length}\n`);
    if (!normalizeCoordinates(venue.coordinates)) {
      console.warn('   ⚠️  No coordinates found; the review will not appear on the map until you add them.\n');
    }

    console.log(`✍️  Drafting (${WRITER_MODEL})...`);
    let review = await draftReview(params, venue, loadCalibration(slug));

    if (!params['no-sharpen']) {
      console.log('🔪 Sharpening...');
      review = await sharpenReview(params, venue, review);
    }

    console.log('🏷️  Metadata...\n');
    const metadata = await generateMetadata(params, review);
    const markdown = buildMarkdown(params, venue, metadata, review);

    if (params['dry-run']) {
      console.log(markdown);
      return;
    }

    fs.writeFileSync(outputPath, markdown, 'utf8');
    console.log(`✅ Wrote ${path.relative(process.cwd(), outputPath)}`);
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

main();
