#!/usr/bin/env node
/**
 * Syncs archived Readwise Reader items into src/data/libraryLinks.ts.
 *
 * Deterministic repo logic only: fetch, normalize, write the generated data file
 * if it changed. Git/cron orchestration lives outside this script.
 *
 * Usage:
 *   node scripts/sync-obsidian-library.mjs            # write file when changed
 *   node scripts/sync-obsidian-library.mjs --dry-run  # print generated output
 */

import { existsSync, readFileSync, writeFileSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, '..')
const OUTPUT_FILE = join(REPO_ROOT, 'src/data/libraryLinks.ts')
const HERMES_ENV_FILE = '/Users/clawfather/.hermes/.env'
const LOCAL_ENV_FILE = join(REPO_ROOT, '.env.local')
const API_BASE = 'https://readwise.io/api/v3/list/'
const PAGE_SIZE = 100
const DRY_RUN = process.argv.includes('--dry-run')

function loadEnvFile(path) {
  if (!existsSync(path)) return
  const content = readFileSync(path, 'utf8')
  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const eq = line.indexOf('=')
    if (eq === -1) continue
    const key = line.slice(0, eq).trim()
    const value = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '')
    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}

function loadEnv() {
  loadEnvFile(LOCAL_ENV_FILE)
  loadEnvFile(HERMES_ENV_FILE)
}

function getToken() {
  loadEnv()
  const token =
    process.env.READWISE_API_TOKEN?.trim() ||
    process.env.READWISE_TOKEN?.trim() ||
    ''

  if (!token) {
    throw new Error('Missing READWISE_API_TOKEN (checked process.env, .env.local, and ~/.hermes/.env)')
  }

  return token
}

async function requestJson(params, token) {
  const url = `${API_BASE}?${new URLSearchParams(params).toString()}`
  const response = await fetch(url, {
    headers: {
      Authorization: `Token ${token}`,
      Accept: 'application/json',
      'User-Agent': 'dandenney.com library sync/1.0',
    },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Readwise request failed (${response.status}): ${body.slice(0, 300)}`)
  }

  return response.json()
}

async function fetchArchivedItems(token) {
  const items = []
  let nextPageCursor = null

  while (true) {
    const params = {
      location: 'archive',
      page_size: String(PAGE_SIZE),
      with_content: 'true',
    }
    if (nextPageCursor) params.pageCursor = nextPageCursor

    const data = await requestJson(params, token)
    items.push(...(data.results ?? []))

    if (!data.nextPageCursor) break
    nextPageCursor = data.nextPageCursor
  }

  return items
}

function parseDate(value) {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

function toPacificDate(value) {
  const date = parseDate(value)
  if (!date) return null
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

function cleanText(value) {
  if (!value) return ''
  return value
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function trimToWordBoundary(value, limit = 220) {
  const text = cleanText(value)
  if (!text) return ''
  if (text.length <= limit) return text
  const sliced = text.slice(0, limit - 1)
  const lastSpace = sliced.lastIndexOf(' ')
  const base = (lastSpace > 40 ? sliced.slice(0, lastSpace) : sliced).replace(/[\s,;:.!-]+$/g, '')
  return `${base}…`
}

function toKind(item) {
  return item.category === 'video' ? 'watched' : 'read'
}

function normalizeItems(items) {
  return items
    .filter((item) => item?.location === 'archive')
    .map((item) => {
      const title = cleanText(item.title) || '(untitled)'
      const url = item.source_url || item.url || ''
      const created =
        toPacificDate(item.last_moved_at) ||
        toPacificDate(item.updated_at) ||
        toPacificDate(item.saved_at) ||
        toPacificDate(item.created_at)

      const description =
        trimToWordBoundary(item.summary) ||
        trimToWordBoundary(item.notes) ||
        trimToWordBoundary(item.content)

      return {
        title,
        url,
        description: description || undefined,
        created,
        kind: toKind(item),
        archivedAt: item.last_moved_at || item.updated_at || item.saved_at || item.created_at || '',
      }
    })
    .filter((item) => item.url && item.created)
}

function readExistingLinks() {
  if (!existsSync(OUTPUT_FILE)) return []

  const source = readFileSync(OUTPUT_FILE, 'utf8')
  const transformed = source
    .replace(/export interface LibraryLink[\s\S]*?}\n\n/, '')
    .replace(/export const libraryLinks: LibraryLink\[\] = /, 'return ')

  try {
    const links = Function(transformed)()
    return Array.isArray(links) ? links : []
  } catch {
    return []
  }
}

function mergeLinks(existingLinks, freshLinks) {
  const mergedByUrl = new Map()

  for (const link of existingLinks) {
    if (!link?.url || !link?.created || !link?.title) continue
    mergedByUrl.set(link.url, {
      title: cleanText(link.title),
      url: link.url,
      description: cleanText(link.description) || undefined,
      created: link.created,
      kind: link.kind === 'watched' ? 'watched' : 'read',
      archivedAt: `${link.created}T00:00:00-07:00`,
    })
  }

  for (const link of freshLinks) {
    const existing = mergedByUrl.get(link.url)
    if (!existing) {
      mergedByUrl.set(link.url, link)
      continue
    }

    const existingArchivedAt = existing.archivedAt || `${existing.created}T00:00:00-07:00`
    if ((link.archivedAt || '') >= existingArchivedAt) {
      mergedByUrl.set(link.url, {
        ...existing,
        ...link,
        description: link.description || existing.description,
      })
    }
  }

  return [...mergedByUrl.values()]
    .sort((a, b) => {
      const byCreated = b.created.localeCompare(a.created)
      if (byCreated !== 0) return byCreated
      const byArchivedAt = (b.archivedAt || '').localeCompare(a.archivedAt || '')
      if (byArchivedAt !== 0) return byArchivedAt
      return a.title.localeCompare(b.title)
    })
    .map(({ archivedAt, ...rest }) => rest)
}

function generateTypeScript(links) {
  const items = links
    .map((link) => {
      const lines = [
        '  {',
        `    title: ${JSON.stringify(link.title)},`,
        `    url: ${JSON.stringify(link.url)},`,
      ]
      if (link.description) {
        lines.push(`    description: ${JSON.stringify(link.description)},`)
      }
      lines.push(`    created: ${JSON.stringify(link.created)},`)
      lines.push(`    kind: ${JSON.stringify(link.kind)},`)
      lines.push('  },')
      return lines.join('\n')
    })
    .join('\n')

  return `// Auto-generated by scripts/sync-obsidian-library.mjs from the Readwise Reader archive — do not edit manually

export interface LibraryLink {
  title: string
  url: string
  description?: string
  created: string
  kind?: 'read' | 'watched'
}

export const libraryLinks: LibraryLink[] = [
${items}
]
`
}

async function main() {
  const token = getToken()
  console.log('Fetching archived Readwise items...')
  const items = await fetchArchivedItems(token)
  console.log(`Found ${items.length} archived item(s)`)

  const freshLinks = normalizeItems(items)
  const existingLinks = readExistingLinks()
  const links = mergeLinks(existingLinks, freshLinks)
  console.log(`Normalized ${freshLinks.length} fresh archive link(s)`) 
  console.log(`Merged to ${links.length} total library link(s)`)

  const ts = generateTypeScript(links)

  if (DRY_RUN) {
    console.log('\n--- Output ---')
    console.log(ts)
    return
  }

  const existing = existsSync(OUTPUT_FILE) ? readFileSync(OUTPUT_FILE, 'utf8') : ''

  if (existing === ts) {
    console.log('No changes — library is already up to date')
    return
  }

  writeFileSync(OUTPUT_FILE, ts, 'utf8')
  console.log(`Wrote ${links.length} links to ${OUTPUT_FILE}`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exit(1)
})
