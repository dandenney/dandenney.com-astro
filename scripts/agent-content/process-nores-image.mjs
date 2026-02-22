#!/usr/bin/env node
import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';

function arg(name) {
  const i = process.argv.indexOf(name);
  if (i === -1) return null;
  return process.argv[i + 1] ?? null;
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

const input = arg('--input');
const slug = arg('--slug');
const outDir = arg('--out-dir');
const publicPrefix = arg('--public-prefix') ?? '/no-reserv-ai-tions';

if (!input || !slug || !outDir) {
  fail('Usage: node scripts/agent-content/process-nores-image.mjs --input <image-path> --slug <slug> --out-dir <repo/public/no-reserv-ai-tions> [--public-prefix /no-reserv-ai-tions]');
}
if (!fs.existsSync(input)) fail(`Input image not found: ${input}`);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nores-image-'));
const fullTmp = path.join(tmp, `${slug}-full.jpg`);
const thumbTmp = path.join(tmp, `${slug}-thumb.jpg`);

const fullOut = path.join(outDir, `${slug}.webp`);
const thumbOut = path.join(outDir, `${slug}-thumb.webp`);

try {
  // Resize to exact requested dimensions
  execFileSync('sips', ['-s', 'format', 'jpeg', '--resampleHeightWidth', '1875', '2500', input, '--out', fullTmp], { stdio: 'pipe' });
  execFileSync('sips', ['-s', 'format', 'jpeg', '--resampleHeightWidth', '240', '320', input, '--out', thumbTmp], { stdio: 'pipe' });

  // Convert to webp
  execFileSync('cwebp', ['-quiet', fullTmp, '-o', fullOut], { stdio: 'pipe' });
  execFileSync('cwebp', ['-quiet', thumbTmp, '-o', thumbOut], { stdio: 'pipe' });

  const result = {
    full: {
      file: fullOut,
      publicPath: `${publicPrefix}/${slug}.webp`
    },
    thumb: {
      file: thumbOut,
      publicPath: `${publicPrefix}/${slug}-thumb.webp`
    }
  };

  console.log(JSON.stringify(result, null, 2));
} catch (err) {
  fail(`Image processing failed: ${err.message}`);
} finally {
  try { fs.rmSync(tmp, { recursive: true, force: true }); } catch {}
}
