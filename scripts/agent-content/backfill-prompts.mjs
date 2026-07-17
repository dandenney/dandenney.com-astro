#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.join(__dirname, '..', '..');
const runsRoot = path.join(repoRoot, 'docs', 'agent-content-pipeline', 'runs');
const noresStylePath = path.join(repoRoot, 'docs', 'agent-content-pipeline', 'stylepack.no-reservaitions.md');
const musicStylePath = path.join(repoRoot, 'docs', 'agent-content-pipeline', 'stylepack.music-review.md');
const force = process.argv.includes('--force');

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function stringifyList(value) {
  return JSON.stringify(value ?? [], null, 0);
}

function sourceLines(sources = []) {
  return sources
    .map((source) => `- ${source.kind || 'source'}: ${source.url || ''}${source.note ? ` — ${source.note}` : ''}`)
    .join('\n');
}

function renderNoResPrompt(packet, stylePack) {
  const sourceInput = packet.sourceInput || {};
  const frontmatter = packet.frontmatter || {};
  const location = packet.location || {};
  const bodyBrief = packet.bodyBrief || {};
  const confidence = packet.confidence || 'unknown';
  const flags = packet.flags || [];

  return `# Reconstructed Quillan Prompt

This prompt artifact was backfilled after the original run so the run directory preserves the text-generation input. It is reconstructed from \`packet.json\`, the No Reservaitions style pack, and the published workflow contract.

## Task
Write the **Markdown body only** for a No Reservaitions review.

## Style pack
${stylePack.trim()}

## Packet grounding
- Run type: \`${packet.type}\`
- Title: \`${frontmatter.title || ''}\`
- Location label: \`${location.title || frontmatter.title || ''}\`
- Address: \`${frontmatter.address || ''}\`
- City/state/country: \`${frontmatter.city || ''}\`, \`${frontmatter.state || ''}\`, \`${frontmatter.country || ''}\`
- Coordinates: \`${frontmatter.coordinates || ''}\`
- Info URL: \`${frontmatter.infoUrl || ''}\`
- Description: \`${frontmatter.description || ''}\`
- Source items: ${stringifyList(sourceInput.items)}
- Source notes: ${sourceInput.notes || ''}
- Confidence: \`${confidence}\`
- Flags: ${stringifyList(flags)}

## Writing brief
- Angle: ${bodyBrief.angle || ''}
- Must include: ${stringifyList(bodyBrief.mustInclude)}
- Must avoid: ${stringifyList(bodyBrief.mustAvoid)}

## Sources to respect
${sourceLines(packet.sources)}

## Output instructions
- Write 220-420 words.
- Markdown body only. No frontmatter.
- Mention at least 2 specific items from \`sourceInput.items\`.
- Tie opinions to concrete details.
- Include one clear trade-off or caveat.
- Do not invent facts about ownership, history, or atmosphere beyond the packet.
- End with one practical takeaway sentence.
`;
}

function renderMusicPrompt(packet, stylePack) {
  const sourceInput = packet.sourceInput || {};
  const frontmatter = packet.frontmatter || {};
  const spotify = packet.spotify || {};
  const lyrics = packet.lyrics || {};
  const bodyBrief = packet.bodyBrief || {};
  const confidence = packet.confidence || 'unknown';
  const flags = packet.flags || [];

  return `# Reconstructed Quillan Prompt

This prompt artifact was backfilled after the original run so the run directory preserves the text-generation input. It is reconstructed from \`packet.json\`, the Music Reviews style pack, and the published workflow contract.

## Task
Write the **Markdown body only** for a music review.

## Style pack
${stylePack.trim()}

## Packet grounding
- Run type: \`${packet.type}\`
- Track: \`${spotify.track || frontmatter.title || ''}\`
- Artist: \`${spotify.artist || frontmatter.artist || ''}\`
- Artists: ${stringifyList(spotify.artists || frontmatter.artists)}
- Album: \`${spotify.album || frontmatter.album || ''}\`
- Release date: \`${spotify.releaseDate || frontmatter.releaseDate || ''}\`
- Spotify URL: \`${spotify.spotifyUrl || frontmatter.spotifyUrl || ''}\`
- Genres: ${stringifyList(spotify.genres || frontmatter.genres)}
- Duration (ms): \`${spotify.duration || frontmatter.duration || ''}\`
- Notes from intake: ${sourceInput.notes || ''}
- Confidence: \`${confidence}\`
- Flags: ${stringifyList(flags)}

## Lyrics status
- status: \`${lyrics.status || 'missing'}\`
- source: \`${lyrics.source || ''}\`
- text/snippet: ${lyrics.text || ''}

## Writing brief
- Angle: ${bodyBrief.angle || ''}
- Must include: ${stringifyList(bodyBrief.mustInclude)}
- Must avoid: ${stringifyList(bodyBrief.mustAvoid)}

## Sources to respect
${sourceLines(packet.sources)}

## Output instructions
- Write 220-420 words.
- Markdown body only. No frontmatter.
- Reference metadata from the packet.
- Use lyrics when provided; if lyrics are missing, include one explicit caveat sentence.
- Name one concrete musical or structural detail with caution language when needed.
- Do not pretend certainty where the packet is incomplete.
- Close with one plainspoken verdict sentence.
`;
}

if (!fs.existsSync(runsRoot)) fail(`Runs directory not found: ${runsRoot}`);
if (!fs.existsSync(noresStylePath)) fail(`Style pack not found: ${noresStylePath}`);
if (!fs.existsSync(musicStylePath)) fail(`Style pack not found: ${musicStylePath}`);

const noresStyle = readText(noresStylePath);
const musicStyle = readText(musicStylePath);
const packetPaths = walk(runsRoot).filter((file) => path.basename(file) === 'packet.json').sort();

let created = 0;
let updated = 0;
let skipped = 0;

for (const packetPath of packetPaths) {
  const runDir = path.dirname(packetPath);
  const promptPath = path.join(runDir, 'prompt.md');
  const packet = JSON.parse(readText(packetPath));
  const existing = fs.existsSync(promptPath) ? readText(promptPath).trim() : '';

  if (existing && !force) {
    skipped += 1;
    console.log(`↷ Skipped existing prompt: ${promptPath}`);
    continue;
  }

  let content;
  if (packet.type === 'no-reservaitions') {
    content = renderNoResPrompt(packet, noresStyle);
  } else if (packet.type === 'music-review') {
    content = renderMusicPrompt(packet, musicStyle);
  } else {
    fail(`Unsupported packet.type in ${packetPath}: ${packet.type}`);
  }

  fs.writeFileSync(promptPath, content, 'utf8');
  if (existing) {
    updated += 1;
    console.log(`♻️  Rewrote prompt: ${promptPath}`);
  } else {
    created += 1;
    console.log(`✅ Created prompt: ${promptPath}`);
  }
}

console.log(`\nSummary: created=${created} updated=${updated} skipped=${skipped} total=${packetPaths.length}`);
