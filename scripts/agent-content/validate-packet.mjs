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
required(packet, ['type', 'sourceInput', 'frontmatter', 'bodyBrief', 'sources', 'confidence'], 'packet');

if (!['music-review', 'no-reservaitions'].includes(packet.type)) {
  fail(`packet.type must be music-review or no-reservaitions; got ${packet.type}`);
}

if (!Array.isArray(packet.sources) || packet.sources.length === 0) {
  fail('packet.sources must be a non-empty array');
}

if (!['high', 'medium', 'low'].includes(packet.confidence)) {
  fail('packet.confidence must be high|medium|low');
}

if (packet.type === 'no-reservaitions') {
  required(packet.sourceInput, ['location', 'city', 'items'], 'sourceInput');
  if (!Array.isArray(packet.sourceInput.items) || packet.sourceInput.items.length < 1) {
    fail('sourceInput.items must be an array with at least 1 item');
  }
  required(packet.frontmatter, ['title', 'address', 'city', 'state', 'country', 'coordinates', 'description', 'pubDate', 'tags', 'aiGenerated'], 'frontmatter');

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
