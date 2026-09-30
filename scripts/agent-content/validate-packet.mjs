#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function ok(msg) {
  console.log(`✅ ${msg}`);
}

function isHttpUrl(value) {
  try {
    const url = new URL(String(value));
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function isUri(value) {
  try {
    return Boolean(new URL(String(value)).protocol);
  } catch {
    return false;
  }
}

function markdownSectionContent(text, heading) {
  const marker = `## ${heading}`;
  const start = text.indexOf(marker);
  if (start === -1) return '';
  const afterHeading = text.slice(start + marker.length).replace(/^\s*\n/, '');
  const nextHeading = afterHeading.search(/^##\s+/m);
  return (nextHeading === -1 ? afterHeading : afterHeading.slice(0, nextHeading)).trim();
}

function requireSiblingArtifact(basePath, filename, label) {
  const sibling = path.join(path.dirname(basePath), filename);
  if (!fs.existsSync(sibling)) {
    fail(`${label} missing required sibling artifact: ${filename}`);
  }
  const content = fs.readFileSync(sibling, 'utf8').trim();
  if (!content) {
    fail(`${label} sibling artifact is empty: ${filename}`);
  }
  return sibling;
}

function required(obj, fields, label) {
  for (const f of fields) {
    if (obj?.[f] === undefined || obj?.[f] === null || obj?.[f] === '') {
      fail(`${label}.${f} is required`);
    }
  }
}

const packetPath = process.argv[2];
if (!packetPath) fail('Usage: node scripts/agent-content/validate-packet.mjs <packet.json>');
if (!fs.existsSync(packetPath)) fail(`File not found: ${packetPath}`);

const packet = readJson(packetPath);
const promptPath = requireSiblingArtifact(packetPath, 'prompt.md', 'run');
required(packet, ['type', 'sourceInput', 'frontmatter', 'bodyBrief', 'sources', 'confidence'], 'packet');

if (!['music-review', 'no-reservaitions'].includes(packet.type)) {
  fail(`packet.type must be music-review or no-reservaitions; got ${packet.type}`);
}

if (!Array.isArray(packet.sources) || packet.sources.length === 0) {
  fail('packet.sources must be a non-empty array');
}
for (const source of packet.sources) {
  if (!source || typeof source !== 'object' || !String(source.kind || '').trim() || !isUri(source.url)) {
    fail('each packet source must include a valid URL and kind');
  }
}

if (
  !packet.bodyBrief
  || typeof packet.bodyBrief !== 'object'
  || Array.isArray(packet.bodyBrief)
  || !String(packet.bodyBrief.angle || '').trim()
  || !Array.isArray(packet.bodyBrief.mustInclude)
  || !Array.isArray(packet.bodyBrief.mustAvoid)
) {
  fail('packet.bodyBrief must contain angle, mustInclude, and mustAvoid');
}

if (!['high', 'medium', 'low'].includes(packet.confidence)) {
  fail('packet.confidence must be high|medium|low');
}

if (packet.type === 'no-reservaitions') {
  required(packet, ['narrativeContext'], 'packet');
  required(packet.narrativeContext, ['firsthand', 'researched', 'missing', 'followUpNeeded'], 'narrativeContext');
  if (typeof packet.narrativeContext.followUpNeeded !== 'boolean') {
    fail('narrativeContext.followUpNeeded must be a boolean');
  }
  if (packet.narrativeContext.followUpNeeded === true) {
    fail('narrative follow-up is required before drafting');
  }

  if (!Array.isArray(packet.narrativeContext.researched)) {
    fail('narrativeContext.researched must be an array');
  }
  if (!Array.isArray(packet.narrativeContext.missing)) {
    fail('narrativeContext.missing must be an array');
  }

  const firsthand = packet.narrativeContext.firsthand;
  const firsthandKeys = ['whyThere', 'companionsOrOccasion', 'roomOrSetting', 'strongestSensoryMemory'];
  const actualFirsthandKeys = firsthand && typeof firsthand === 'object' && !Array.isArray(firsthand)
    ? Object.keys(firsthand).sort()
    : [];
  if (
    actualFirsthandKeys.length !== firsthandKeys.length
    || firsthandKeys.some((key) => !Object.hasOwn(firsthand || {}, key))
    || actualFirsthandKeys.some((key) => !firsthandKeys.includes(key))
    || firsthandKeys.some((key) => firsthand[key] !== null && typeof firsthand[key] !== 'string')
  ) {
    fail(`narrativeContext.firsthand must contain exactly ${firsthandKeys.join(', ')} with string or null values`);
  }

  for (const anchor of packet.narrativeContext.researched) {
    if (!String(anchor?.claim || '').trim() || !String(anchor?.sourceUrl || '').trim()) {
      fail('each researched narrative anchor must include claim and sourceUrl');
    }
    if (!isHttpUrl(anchor.sourceUrl)) {
      fail('each researched narrative anchor sourceUrl must be a valid http(s) URL');
    }
  }

  const firsthandAnchors = Object.values(packet.narrativeContext.firsthand || {})
    .filter((value) => String(value || '').trim().length > 0);
  const researchedAnchors = packet.narrativeContext.researched
    .filter((item) => String(item?.claim || '').trim().length > 0);
  if (firsthandAnchors.length + researchedAnchors.length < 2) {
    fail('narrativeContext must include at least two grounded narrative anchors across firsthand details and researched claims');
  }

  const prompt = fs.readFileSync(promptPath, 'utf8');
  if (!/^## Narrative anchors\s*$/m.test(prompt)) {
    fail('prompt.md must include a Narrative anchors section');
  }
  if (!markdownSectionContent(prompt, 'Narrative anchors')) {
    fail('prompt.md Narrative anchors section must contain content');
  }
  if (!/^## Dan-approved calibration\s*$/m.test(prompt)) {
    fail('prompt.md must include a Dan-approved calibration section');
  }
  if (!markdownSectionContent(prompt, 'Dan-approved calibration')) {
    fail('prompt.md Dan-approved calibration section must contain content');
  }

  required(packet, ['location'], 'packet');
  required(packet.location, ['title', 'address', 'city', 'state', 'country', 'coordinates'], 'location');
  required(packet.sourceInput, ['location', 'city'], 'sourceInput');
  required(packet.frontmatter, ['title', 'address', 'city', 'state', 'country', 'coordinates', 'description', 'pubDate', 'tags', 'aiGenerated'], 'frontmatter');

  if (!Array.isArray(packet.frontmatter.tags) || packet.frontmatter.tags.length < 1) {
    fail('frontmatter.tags must be a non-empty array');
  }

  const tags = packet.frontmatter.tags.map((tag) => String(tag));
  const isGolf = tags.includes('golf');

  if (tags.length > 4) {
    fail('frontmatter.tags must contain 1-4 broad routing-safe categories');
  }

  const normalize = (value) => String(value || '').trim().toLowerCase();
  const forbiddenTags = new Set([
    packet.frontmatter.title,
    packet.frontmatter.slug,
    packet.sourceInput.location,
    packet.sourceInput.city,
    packet.sourceInput.state,
    packet.sourceInput.neighborhood,
    packet.frontmatter.city,
    packet.frontmatter.state,
  ].map(normalize).filter(Boolean));

  if (tags.some((tag) => forbiddenTags.has(normalize(tag)))) {
    fail('frontmatter.tags must not repeat the title, venue, city, state, or neighborhood');
  }

  if (isGolf) {
    if (tags.length !== 1 || tags[0] !== 'golf') {
      fail('golf no-reservaitions entries must use frontmatter.tags exactly ["golf"]');
    }

    const hasItems = Array.isArray(packet.sourceInput.items) && packet.sourceInput.items.length > 0;
    const hasNotes = String(packet.sourceInput.notes || '').trim().length > 0;
    if (!hasItems && !hasNotes) {
      fail('golf no-reservaitions entries must include either sourceInput.items or a non-empty sourceInput.notes freeform note');
    }
  } else if (!Array.isArray(packet.sourceInput.items) || packet.sourceInput.items.length < 1) {
    fail('sourceInput.items must be an array with at least 1 item for non-golf no-reservaitions entries');
  }

  if (packet.frontmatter.heroImage) {
    const hero = String(packet.frontmatter.heroImage);
    if (hero.includes('/') || hero.includes('\\') || hero.includes('.webp')) {
      fail('frontmatter.heroImage must be basename only (e.g. "melt-n-dip"), not a path/extension');
    }
  }

  const raw = String(packet.frontmatter.coordinates || '');
  const parts = raw.split(',').map((p) => p.trim());
  if (parts.length !== 2) fail('frontmatter.coordinates must be "lng, lat"');
  const lng = Number(parts[0]);
  const lat = Number(parts[1]);
  if (Number.isNaN(lng) || Number.isNaN(lat)) fail('frontmatter.coordinates must contain numeric longitude, latitude');
  if (lng < -180 || lng > 180 || lat < -90 || lat > 90) fail('frontmatter.coordinates out of range');
} else {
  required(packet.sourceInput, ['spotifyUrl'], 'sourceInput');
  required(packet, ['spotify'], 'packet');
  required(packet.spotify, ['track', 'artist', 'album', 'spotifyId', 'spotifyUrl', 'duration'], 'spotify');
  required(packet.frontmatter, ['title', 'artist', 'artists', 'album', 'releaseDate', 'spotifyUrl', 'spotifyId', 'duration', 'genres', 'pubDate', 'tags', 'aiGenerated'], 'frontmatter');
}

ok(`Packet valid: ${path.basename(packetPath)} (${packet.type})`);
ok(`Found prompt artifact: ${path.basename(promptPath)}`);
