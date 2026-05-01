#!/usr/bin/env node
/**
 * Generates the HTML block for a past month's shared stash links.
 * Output can be pasted directly into the archive section of library.astro.
 *
 * Usage:
 *   node scripts/stash-archive.mjs           # previous month
 *   node scripts/stash-archive.mjs 2026-04   # specific month
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load env from process.env first, then fall back to .env.local
function loadEnv() {
  const env = {}
  const envPath = resolve(__dirname, '../.env.local')
  try {
    const content = readFileSync(envPath, 'utf8')
    for (const line of content.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '')
      env[key] = val
    }
  } catch {
    // .env.local not found — rely on process.env
  }
  return env
}

const env = loadEnv()
const SUPABASE_URL = process.env.STASH_SUPABASE_URL ?? env.STASH_SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.STASH_SUPABASE_SERVICE_KEY ?? env.STASH_SUPABASE_SERVICE_KEY
const USER_ID = '2707742d-e22f-4649-aeea-aee83f243753'

function getPreviousMonth() {
  const now = new Date()
  const year = now.getUTCMonth() === 0 ? now.getUTCFullYear() - 1 : now.getUTCFullYear()
  const mon = now.getUTCMonth() === 0 ? 12 : now.getUTCMonth()
  return `${year}-${String(mon).padStart(2, '0')}`
}

function formatMonthLabel(month) {
  const [year, mon] = month.split('-').map(Number)
  const date = new Date(Date.UTC(year, mon - 1, 1))
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

function formatDate(isoString) {
  const d = new Date(isoString)
  return d.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })
}

async function fetchLinks(month) {
  const [year, mon] = month.split('-').map(Number)
  const nextYear = mon === 12 ? year + 1 : year
  const nextMon = mon === 12 ? 1 : mon + 1
  const rangeStart = `${month}-01T00:00:00.000Z`
  const rangeEnd = `${nextYear}-${String(nextMon).padStart(2, '0')}-01T00:00:00.000Z`

  const url = `${SUPABASE_URL}/rest/v1/links?user_id=eq.${USER_ID}&is_shared=eq.true&status=eq.stashed&shared_at=gte.${rangeStart}&shared_at=lt.${rangeEnd}&select=url,title,notes,media_type,shared_at&order=shared_at.asc`

  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    },
  })

  if (!res.ok) throw new Error(`Supabase query failed: ${res.status}`)
  return res.json()
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function main() {
  const month = process.argv[2] ?? getPreviousMonth()

  if (!/^\d{4}-\d{2}$/.test(month)) {
    console.error('Invalid month format. Use YYYY-MM')
    process.exit(1)
  }

  const links = await fetchLinks(month)

  if (links.length === 0) {
    console.log(`No shared links found for ${month}`)
    return
  }

  const monthLabel = formatMonthLabel(month)

  const items = links.map((link) => {
    const tag = link.media_type === 'video' ? 'Watched' : 'Read'
    const dateLabel = formatDate(link.shared_at)
    const dateIso = new Date(link.shared_at).toISOString()
    const notesHtml = link.notes
      ? `\n          <span class="notes">\n            ${escapeHtml(link.notes)}\n          </span>`
      : ''
    return `        <li>
          <a class="link" href="${escapeHtml(link.url)}">
            ${escapeHtml(link.title)}
          </a>${notesHtml}
          <span class="meta">
            ${tag}&nbsp;
            <time datetime="${dateIso}"> ${dateLabel} </time>
          </span>
        </li>`
  }).join('\n\n')

  const output = `
      <h2
        class="px-6 lg:px-10 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100"
      >
        ${monthLabel}
      </h2>

      <ul class="library-links has-links">
${items}
      </ul>
`

  console.log(output)
  console.log(`\n// ${links.length} link(s) for ${monthLabel}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
