#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.join(__dirname, '..', '..');

function arg(name) {
  const i = process.argv.indexOf(name);
  if (i === -1) return null;
  return process.argv[i + 1] ?? null;
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function yamlValue(v) {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  if (Array.isArray(v)) return JSON.stringify(v);
  return `"${String(v).replace(/"/g, '\\"')}"`;
}

function toFrontmatter(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === null || v === undefined) continue;
    lines.push(`${k}: ${yamlValue(v)}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

const packetPath = arg('--packet');
const bodyPath = arg('--body');
const imagePath = arg('--image');
const dryRun = process.argv.includes('--dry-run');

if (!packetPath || !bodyPath) {
  fail('Usage: node scripts/agent-content/publish-from-packet.mjs --packet <packet.json> --body <body.md> [--image <photo>] [--dry-run]');
}
if (!fs.existsSync(packetPath)) fail(`Packet not found: ${packetPath}`);
if (!fs.existsSync(bodyPath)) fail(`Body not found: ${bodyPath}`);

const packet = JSON.parse(fs.readFileSync(packetPath, 'utf8'));
const body = fs.readFileSync(bodyPath, 'utf8').trim();

if (!packet?.type) fail('packet.type missing');
if (!packet?.frontmatter) fail('packet.frontmatter missing');

let outputDir;
let filename;

if (packet.type === 'no-reservaitions') {
  outputDir = path.join(repoRoot, 'src', 'content', 'reviews');
  filename = `${slugify(packet.frontmatter.title)}.md`;
} else if (packet.type === 'music-review') {
  outputDir = path.join(repoRoot, 'src', 'content', 'songs');
  const artist = packet.frontmatter.artist || packet.spotify?.artist || 'unknown-artist';
  const track = packet.frontmatter.title || packet.spotify?.track || 'unknown-track';
  filename = `${slugify(artist)}-${slugify(track)}.md`;
} else {
  fail(`Unsupported packet.type: ${packet.type}`);
}

const outPath = path.join(outputDir, filename);
if (fs.existsSync(outPath)) {
  fail(`Target file already exists: ${outPath}`);
}

// Optional image processing for no-reservaitions posts
let imageSummary = null;
if (packet.type === 'no-reservaitions' && imagePath) {
  if (!fs.existsSync(imagePath)) fail(`Image not found: ${imagePath}`);
  const slug = slugify(packet.frontmatter.title);
  const noresOutDir = path.join(repoRoot, 'public', 'no-reserv-ai-tions');
  const processor = path.join(repoRoot, 'scripts', 'agent-content', 'process-nores-image.mjs');

  const raw = execFileSync('node', [processor, '--input', imagePath, '--slug', slug, '--out-dir', noresOutDir, '--public-prefix', '/no-reserv-ai-tions'], { encoding: 'utf8' });
  const result = JSON.parse(raw);

  // Site templates expect heroImage as basename (without path/extension)
  packet.frontmatter.heroImage = slug;
  packet.frontmatter.heroImageAlt = packet.frontmatter.heroImageAlt || `${packet.frontmatter.title} photo`;
  imageSummary = result;
}

const content = `${toFrontmatter(packet.frontmatter)}${body}\n`;

if (dryRun) {
  console.log(`🧪 Dry run OK. Would write: ${outPath}`);
  if (packet.type === 'no-reservaitions' && imagePath) {
    console.log(`🧪 Image dry run target dir: ${path.join(repoRoot, 'public', 'no-reserv-ai-tions')}`);
  }
  process.exit(0);
}

fs.writeFileSync(outPath, content, 'utf8');
console.log(`✅ Wrote ${outPath}`);
if (imageSummary) {
  console.log(`✅ Wrote image: ${imageSummary.full.file}`);
  console.log(`✅ Wrote thumb: ${imageSummary.thumb.file}`);
}
