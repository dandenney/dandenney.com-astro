import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { lintNoReservaitionsBody } from './content-quality.mjs';

const testDir = path.dirname(fileURLToPath(import.meta.url));

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
  fs.writeFileSync(path.join(runDir, 'prompt.md'), 'Write a review.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    sourceInput: { location: 'Zanies', city: 'Nashville', items: ['State Park Blonde'] },
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
    bodyBrief: 'Write the review.',
    sources: ['https://example.com'],
    confidence: 'high',
  }));

  const result = spawnSync(process.execPath, [
    path.join(testDir, 'validate-packet.mjs'),
    packetPath,
  ], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /must not repeat the title, venue, city, state, or neighborhood/);
});

test('publisher blocks no-reservaitions body with source-artifact narration', () => {
  const runDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-quality-'));
  const packetPath = path.join(runDir, 'packet.json');
  const bodyPath = path.join(runDir, 'body.md');
  fs.writeFileSync(path.join(runDir, 'prompt.md'), 'Write a review.');
  fs.writeFileSync(packetPath, JSON.stringify({
    type: 'no-reservaitions',
    frontmatter: { title: `Quality Gate ${Date.now()}` },
  }));
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
