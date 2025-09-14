import { Client } from '@notionhq/client';
import fs from 'node:fs';
import path from 'node:path';

function tryLoadEnvLocal() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) {
      process.env[key] = val;
    }
  }
}

async function main() {
  // Try process.env first, then load from .env.local if missing
  let token = process.env.NOTION_TOKEN;
  let databaseId = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) {
    tryLoadEnvLocal();
    token = process.env.NOTION_TOKEN;
    databaseId = process.env.NOTION_DATABASE_ID;
  }
  if (!token || !databaseId) {
    console.error('Missing NOTION_TOKEN or NOTION_DATABASE_ID env vars.');
    process.exit(1);
  }

  const notion = new Client({ auth: token, notionVersion: '2025-09-03' });
  try {
    const db = await notion.databases.retrieve({ database_id: databaseId });
    const sources = db.data_sources || [];
    if (!sources.length) {
      console.log('No data sources found on this database.');
      process.exit(2);
    }
    console.log('Data sources for database:', databaseId);
    for (const s of sources) {
      console.log(`- name: ${s.name || '(unnamed)'}\n  id: ${s.id}`);
    }
    // Print first id plainly for easy capture in scripts
    console.log(`\nFIRST_DATA_SOURCE_ID=${sources[0].id}`);
  } catch (err) {
    console.error('Failed to retrieve database data sources:', err?.message || err);
    process.exit(3);
  }
}

main();
