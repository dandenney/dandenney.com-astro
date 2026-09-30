import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { lintNoReservaitionsBody } from './content-quality.mjs';
import { renderNoResPrompt } from './prompt-renderers.mjs';

const testDir = path.dirname(fileURLToPath(import.meta.url));

function validNoresPacket(overrides = {}) {
  const base = {
    type: 'no-reservaitions',
    sourceInput: { location: 'Example Bistro', city: 'Nashville', items: ['Short Rib'] },
    location: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      infoUrl: 'https://example.com',
    },
    narrativeContext: {
      firsthand: {
        whyThere: 'Dinner after a show.',
        companionsOrOccasion: 'A birthday dinner.',
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [],
      missing: ['roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: false,
    },
    frontmatter: {
      title: `Example Bistro ${Date.now()}`,
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  };

  return {
    ...base,
    ...overrides,
    sourceInput: { ...base.sourceInput, ...(overrides.sourceInput || {}) },
    location: { ...base.location, ...(overrides.location || {}) },
    narrativeContext: { ...base.narrativeContext, ...(overrides.narrativeContext || {}) },
    frontmatter: { ...base.frontmatter, ...(overrides.frontmatter || {}) },
    bodyBrief: { ...base.bodyBrief, ...(overrides.bodyBrief || {}) },
  };
}

test('backfilled No Reservaitions prompts preserve the narrative-first contract', () => {
  const packet = validNoresPacket({
    narrativeContext: {
      researched: [{
        claim: 'The restaurant occupies a former pharmacy.',
        sourceUrl: 'https://example.com/about',
      }],
    },
  });

  const prompt = renderNoResPrompt(packet, '# Style pack\nWrite from inside the visit.');

  assert.match(prompt, /^## Narrative anchors$/m);
  assert.match(prompt, /Dinner after a show\./);
  assert.match(prompt, /former pharmacy/);
  assert.match(prompt, /^## Dan-approved calibration$/m);
  assert.match(prompt, /3-5 short paragraphs/);
  assert.doesNotMatch(prompt, /Include one clear trade-off or caveat/);
  assert.doesNotMatch(prompt, /End with one practical takeaway sentence/);
});

test('rejects source-artifact narration in published review copy', () => {
  const body = 'This entry gets the standard Zanies photo because phones were secured.';

  const issues = lintNoReservaitionsBody(body);

  assert.deepEqual(issues, [
    'Published review body must not narrate source artifacts or the publishing process: matched "This entry".',
    'Published review body must not narrate source artifacts or the publishing process: matched "the standard Zanies photo".',
  ]);
});

test('packet validator rejects venue names as tags', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-tags-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Busy Saturday at the bar.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: { location: 'Zanies', city: 'Nashville', items: ['State Park Blonde'] },
    location: {
      title: 'Zanies',
      address: '2025 8th Ave S',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7790, 36.1280',
      infoUrl: 'https://example.com',
    },
    narrativeContext: {
      firsthand: {
        whyThere: 'A comedy show at Zanies.',
        companionsOrOccasion: null,
        roomOrSetting: 'Busy Saturday at the bar.',
        strongestSensoryMemory: null,
      },
      researched: [],
      missing: ['companionsOrOccasion', 'strongestSensoryMemory'],
      followUpNeeded: false,
    },
    frontmatter: {
      title: 'Mark Normand',
      address: '2025 8th Ave S',
      city: 'nashville',
      state: 'tennessee',
      country: 'usa',
      coordinates: '-86.779, 36.128',
      description: 'A night at Zanies.',
      pubDate: '2026-08-22',
      tags: ['Zanies'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A comedy-club night.',
      mustInclude: ['State Park Blonde'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /must not repeat the title, venue, city, state, or neighborhood/);
});

test('packet validator requires narrative context before drafting', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-narrative-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(path.join(runDir, 'prompt.md'), 'Write a review.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: {
      location: 'Example Bistro',
      city: 'Nashville',
      items: ['Short Rib'],
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /packet\.narrativeContext is required/);
});

test('packet validator pauses when narrative follow-up is still needed', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-follow-up-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(path.join(runDir, 'prompt.md'), 'Write a review.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: {
      location: 'Example Bistro',
      city: 'Nashville',
      items: ['Short Rib'],
    },
    narrativeContext: {
      firsthand: {
        whyThere: null,
        companionsOrOccasion: null,
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [],
      missing: ['whyThere', 'roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: true,
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /narrative follow-up is required before drafting/);
});

test('packet validator requires followUpNeeded to be a boolean', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-follow-up-type-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Dinner after a show.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: {
      location: 'Example Bistro',
      city: 'Nashville',
      items: ['Short Rib'],
    },
    narrativeContext: {
      firsthand: {
        whyThere: 'Dinner after a show.',
        companionsOrOccasion: 'A birthday dinner.',
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [],
      missing: ['roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: 'false',
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /narrativeContext\.followUpNeeded must be a boolean/);
});

test('packet validator requires two grounded narrative anchors', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-anchors-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(path.join(runDir, 'prompt.md'), 'Write a review.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: {
      location: 'Example Bistro',
      city: 'Nashville',
      items: ['Short Rib'],
    },
    narrativeContext: {
      firsthand: {
        whyThere: 'Dinner after a show.',
        companionsOrOccasion: null,
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [],
      missing: ['companionsOrOccasion', 'roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: false,
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /at least two grounded narrative anchors/);
});

test('packet validator rejects undocumented firsthand anchor keys', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-firsthand-shape-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Bogus details.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: { location: 'Example Bistro', city: 'Nashville', items: ['Short Rib'] },
    narrativeContext: {
      firsthand: { bogusOne: 'x', bogusTwo: 'y' },
      researched: [],
      missing: [],
      followUpNeeded: false,
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /narrativeContext\.firsthand must contain exactly/);
});

test('packet validator requires sources for researched narrative anchors', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-anchor-source-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(path.join(runDir, 'prompt.md'), 'Write a review.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: {
      location: 'Example Bistro',
      city: 'Nashville',
      items: ['Short Rib'],
    },
    narrativeContext: {
      firsthand: {
        whyThere: 'Dinner after a show.',
        companionsOrOccasion: null,
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [{ claim: 'The restaurant occupies a former pharmacy.' }],
      missing: ['companionsOrOccasion', 'roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: false,
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /researched narrative anchor must include claim and sourceUrl/);
});

test('packet validator rejects invalid researched source URLs', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-anchor-url-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Dinner after a show.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: { location: 'Example Bistro', city: 'Nashville', items: ['Short Rib'] },
    narrativeContext: {
      firsthand: {
        whyThere: 'Dinner after a show.',
        companionsOrOccasion: null,
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [{ claim: 'The restaurant occupies a former pharmacy.', sourceUrl: 'not-a-url' }],
      missing: ['companionsOrOccasion', 'roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: false,
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /researched narrative anchor sourceUrl must be a valid http\(s\) URL/);
});

test('packet validator requires narrative sections in the writer prompt', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-prompt-contract-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(path.join(runDir, 'prompt.md'), 'Write a review.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: {
      location: 'Example Bistro',
      city: 'Nashville',
      items: ['Short Rib'],
    },
    narrativeContext: {
      firsthand: {
        whyThere: 'Dinner after a show.',
        companionsOrOccasion: 'A birthday dinner.',
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [],
      missing: ['roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: false,
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /prompt\.md must include a Narrative anchors section/);
});

test('packet validator requires Dan-approved calibration in the writer prompt', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-prompt-calibration-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(path.join(runDir, 'prompt.md'), '## Narrative anchors\n- Dinner after a show.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: {
      location: 'Example Bistro',
      city: 'Nashville',
      items: ['Short Rib'],
    },
    narrativeContext: {
      firsthand: {
        whyThere: 'Dinner after a show.',
        companionsOrOccasion: 'A birthday dinner.',
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [],
      missing: ['roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: false,
    },
    frontmatter: {
      title: 'Example Bistro',
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /prompt\.md must include a Dan-approved calibration section/);
});

test('packet validator requires exact prompt heading capitalization', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-prompt-case-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## narrative anchors\n- Dinner after a show.\n\n## dan-approved calibration\n- Use concrete scene and appetite.',
  );
  fs.writeFileSync(packetPath, JSON.stringify(validNoresPacket()));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /prompt\.md must include a Narrative anchors section/);
});

test('packet validator rejects empty required prompt sections', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-prompt-empty-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  fs.writeFileSync(packetPath, JSON.stringify(validNoresPacket()));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Narrative anchors section must contain content/);
});

test('packet validator rejects empty calibration sections', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-calibration-empty-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Dinner after a show.\n\n## Dan-approved calibration\n',
  );
  fs.writeFileSync(packetPath, JSON.stringify(validNoresPacket()));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /Dan-approved calibration section must contain content/);
});

test('packet validator enforces structured bodyBrief fields', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-body-brief-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Dinner after a show.\n- A birthday dinner.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  const packet = validNoresPacket();
  packet.bodyBrief = 'Write the review.';
  fs.writeFileSync(packetPath, JSON.stringify(packet));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /packet\.bodyBrief must contain angle, mustInclude, and mustAvoid/);
});

test('packet validator enforces canonical source objects', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-sources-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Dinner after a show.\n- A birthday dinner.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  const packet = validNoresPacket({ sources: ['https://example.com'] });
  fs.writeFileSync(packetPath, JSON.stringify(packet));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /each packet source must include a valid URL and kind/);
});

test('packet validator requires the schema location object', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-location-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Dinner after a show.\n- A birthday dinner.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  const packet = validNoresPacket();
  delete packet.location;
  fs.writeFileSync(packetPath, JSON.stringify(packet));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /packet\.location is required/);
});

test('packet validator accepts the canonical narrative-ready contract', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-valid-'));
  const packetPath = path.join(runDir, 'packet.json');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Dinner after a show.\n- A birthday dinner.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  fs.writeFileSync(packetPath, JSON.stringify(validNoresPacket()));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Packet valid/);
});

test('publisher runs packet validation before publishing', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-publish-validation-'));
  const packetPath = path.join(runDir, 'packet.json');
  const bodyPath = path.join(runDir, 'body.md');
  fs.writeFileSync(path.join(runDir, 'prompt.md'), 'Write a review.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: { location: 'Example Bistro', city: 'Nashville', items: ['Short Rib'] },
    narrativeContext: {
      firsthand: {
        whyThere: null,
        companionsOrOccasion: null,
        roomOrSetting: null,
        strongestSensoryMemory: null,
      },
      researched: [],
      missing: ['whyThere', 'companionsOrOccasion', 'roomOrSetting', 'strongestSensoryMemory'],
      followUpNeeded: true,
    },
    frontmatter: {
      title: `Publish Validation ${Date.now()}`,
      address: '123 Main St',
      city: 'nashville',
      state: 'tennessee',
      country: 'United States',
      coordinates: '-86.7816, 36.1627',
      description: 'Dinner at Example Bistro.',
      pubDate: '2026-09-29',
      tags: ['american'],
      aiGenerated: true,
    },
    bodyBrief: {
      angle: 'A neighborhood dinner.',
      mustInclude: ['Short Rib'],
      mustAvoid: ['unsupported claims'],
    },
    sources: [{ url: 'https://example.com', kind: 'official-site' }],
    confidence: 'high',
  }));
  fs.writeFileSync(bodyPath, 'A grounded body without source narration.');

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'publish-from-packet.mjs'),
    '--packet', packetPath,
    '--body', bodyPath,
    '--dry-run',
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /narrative follow-up is required before drafting/);
});

test('publisher blocks no-reservaitions body with source-artifact narration', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-quality-'));
  const packetPath = path.join(runDir, 'packet.json');
  const bodyPath = path.join(runDir, 'body.md');
  fs.writeFileSync(
    path.join(runDir, 'prompt.md'),
    '## Narrative anchors\n- Dinner after a show.\n- A birthday dinner.\n\n## Dan-approved calibration\n- Use concrete scene and appetite.',
  );
  fs.writeFileSync(packetPath, JSON.stringify(validNoresPacket({
    frontmatter: { title: `Quality Gate ${Date.now()}` },
  })));
  fs.writeFileSync(bodyPath, 'The photo shows two burgers.');

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'publish-from-packet.mjs'),
    '--packet', packetPath,
    '--body', bodyPath,
    '--dry-run',
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /must not narrate source artifacts/);
});
