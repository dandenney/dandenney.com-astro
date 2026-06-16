import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Favicon checker — replicates how Google discovers and fetches a site's favicon.
 *
 * Google's documented algorithm:
 *   1. Crawl the page HTML with Googlebot.
 *   2. Look for <link rel="icon"> / "shortcut icon" / "apple-touch-icon" in the head.
 *   3. Fall back to /favicon.ico at the site root if no link tag is found.
 *   4. Fetch the icon file with Googlebot-Image. The page AND the icon must both be
 *      crawlable (not blocked by robots.txt) and the icon must be a valid square image.
 *
 * The browser can't set a custom User-Agent or fetch cross-origin, so the real lookup
 * has to happen here on the server.
 */

// User agents Google uses, per https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
const GOOGLEBOT_UA =
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const GOOGLEBOT_IMAGE_UA = 'Googlebot-Image/1.0';

const FETCH_TIMEOUT_MS = 10000;
const MAX_ICON_BYTES = 5 * 1024 * 1024; // 5MB safety cap

interface Diagnostic {
  level: 'pass' | 'warn' | 'fail';
  message: string;
}

interface Candidate {
  source: 'link' | 'fallback';
  rel: string | null;
  declaredSizes: string | null;
  requestedUrl: string;
  finalUrl: string | null;
  redirected: boolean;
  status: number | null;
  ok: boolean;
  contentType: string | null;
  sizeBytes: number | null;
  dimensions: { width: number; height: number } | null;
  format: string | null;
  dataUri: string | null;
  robotsAllowed: boolean | null;
  diagnostics: Diagnostic[];
}

async function fetchWithTimeout(url: string, ua: string, redirect: RequestRedirect = 'follow') {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, {
      headers: { 'User-Agent': ua, Accept: '*/*' },
      redirect,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

/** Normalize user input into a fetchable URL. */
function normalizeUrl(raw: string): URL | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    return new URL(withScheme);
  } catch {
    return null;
  }
}

/** Pull out the raw <link rel="...icon..."> tags from a page's <head>. */
function extractIconLinks(html: string): { raw: string; rel: string; href: string; sizes: string | null }[] {
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? html;
  const links: { raw: string; rel: string; href: string; sizes: string | null }[] = [];
  const linkRe = /<link\b[^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(head)) !== null) {
    const tag = m[0];
    const rel = tag.match(/\brel\s*=\s*["']?([^"'>]+)["']?/i)?.[1]?.trim().toLowerCase();
    if (!rel) continue;
    const isIcon = /(^|\s)(shortcut\s+icon|icon|apple-touch-icon(-precomposed)?|mask-icon|fluid-icon)(\s|$)/.test(rel);
    if (!isIcon) continue;
    const href = tag.match(/\bhref\s*=\s*["']?([^"'>\s]+)["']?/i)?.[1];
    if (!href) continue;
    const sizes = tag.match(/\bsizes\s*=\s*["']?([^"'>]+)["']?/i)?.[1]?.trim() ?? null;
    links.push({ raw: tag, rel, href, sizes });
  }
  return links;
}

/** Lightweight image dimension sniffing from the first bytes of common formats. */
function sniffImage(bytes: Uint8Array, contentType: string | null): {
  format: string | null;
  dimensions: { width: number; height: number } | null;
} {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const len = bytes.length;

  // PNG
  if (len >= 24 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return { format: 'PNG', dimensions: { width: dv.getUint32(16), height: dv.getUint32(20) } };
  }
  // GIF
  if (len >= 10 && bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
    return { format: 'GIF', dimensions: { width: dv.getUint16(6, true), height: dv.getUint16(8, true) } };
  }
  // ICO — pick the largest entry in the directory
  if (len >= 6 && dv.getUint16(0, true) === 0 && dv.getUint16(2, true) === 1) {
    const count = dv.getUint16(4, true);
    let best: { width: number; height: number } | null = null;
    for (let i = 0; i < count; i++) {
      const off = 6 + i * 16;
      if (off + 1 >= len) break;
      const w = bytes[off] === 0 ? 256 : bytes[off];
      const h = bytes[off + 1] === 0 ? 256 : bytes[off + 1];
      if (!best || w * h > best.width * best.height) best = { width: w, height: h };
    }
    return { format: 'ICO', dimensions: best };
  }
  // JPEG — scan for a Start-of-Frame marker
  if (len >= 4 && bytes[0] === 0xff && bytes[1] === 0xd8) {
    let off = 2;
    while (off + 9 < len) {
      if (bytes[off] !== 0xff) { off++; continue; }
      const marker = bytes[off + 1];
      const isSOF = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isSOF) {
        return { format: 'JPEG', dimensions: { width: dv.getUint16(off + 7), height: dv.getUint16(off + 5) } };
      }
      off += 2 + dv.getUint16(off + 2);
    }
    return { format: 'JPEG', dimensions: null };
  }
  // SVG (vector — no pixel dimensions)
  const head = new TextDecoder().decode(bytes.slice(0, 256)).trim();
  if ((contentType?.includes('svg')) || head.startsWith('<svg') || (head.startsWith('<?xml') && head.includes('<svg'))) {
    return { format: 'SVG', dimensions: null };
  }
  // WebP
  if (len >= 12 && bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[8] === 0x57 && bytes[9] === 0x45) {
    return { format: 'WebP', dimensions: null };
  }
  return { format: null, dimensions: null };
}

/** Minimal robots.txt parser — is `path` allowed for the given UA token? */
function isAllowedByRobots(robotsTxt: string, uaToken: string, path: string): boolean {
  const lines = robotsTxt.split(/\r?\n/).map((l) => l.replace(/#.*$/, '').trim());
  // Collect rule groups keyed by user-agent.
  const groups: { agents: string[]; rules: { allow: boolean; value: string }[] }[] = [];
  let current: { agents: string[]; rules: { allow: boolean; value: string }[] } | null = null;
  let lastWasAgent = false;
  for (const line of lines) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const field = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    if (field === 'user-agent') {
      if (!current || !lastWasAgent) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
    } else if ((field === 'allow' || field === 'disallow') && current) {
      current.rules.push({ allow: field === 'allow', value });
      lastWasAgent = false;
    } else {
      lastWasAgent = false;
    }
  }

  const token = uaToken.toLowerCase();
  // Prefer a group matching the specific token, else fall back to "*".
  const specific = groups.find((g) => g.agents.some((a) => token.includes(a) && a !== '*'));
  const wildcard = groups.find((g) => g.agents.includes('*'));
  const group = specific ?? wildcard;
  if (!group) return true;

  // Longest-match rule wins (per the robots spec).
  let decision: boolean | null = null;
  let matchLen = -1;
  for (const rule of group.rules) {
    if (rule.value === '') {
      if (!rule.allow) continue; // empty Disallow = allow all, no path constraint
    }
    const pattern = rule.value;
    if (matchesRobotsPattern(path, pattern) && pattern.length > matchLen) {
      decision = rule.allow;
      matchLen = pattern.length;
    }
  }
  return decision ?? true;
}

function matchesRobotsPattern(path: string, pattern: string): boolean {
  if (pattern === '') return false;
  // Translate robots wildcards (* and $) into a regex.
  const anchoredEnd = pattern.endsWith('$');
  const body = anchoredEnd ? pattern.slice(0, -1) : pattern;
  const escaped = body.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
  const re = new RegExp('^' + escaped + (anchoredEnd ? '$' : ''));
  return re.test(path);
}

async function inspectCandidate(
  iconUrl: string,
  source: 'link' | 'fallback',
  rel: string | null,
  declaredSizes: string | null,
  robotsTxt: string | null,
): Promise<Candidate> {
  const candidate: Candidate = {
    source,
    rel,
    declaredSizes,
    requestedUrl: iconUrl,
    finalUrl: null,
    redirected: false,
    status: null,
    ok: false,
    contentType: null,
    sizeBytes: null,
    dimensions: null,
    format: null,
    dataUri: null,
    robotsAllowed: null,
    diagnostics: [],
  };

  // robots.txt check (Googlebot-Image must be allowed to fetch the icon).
  if (robotsTxt !== null) {
    try {
      const path = new URL(iconUrl).pathname + new URL(iconUrl).search;
      candidate.robotsAllowed = isAllowedByRobots(robotsTxt, 'googlebot-image', path);
      if (!candidate.robotsAllowed) {
        candidate.diagnostics.push({
          level: 'fail',
          message: 'Blocked by robots.txt — Googlebot-Image is disallowed from fetching this path.',
        });
      }
    } catch {
      /* ignore */
    }
  }

  try {
    const res = await fetchWithTimeout(iconUrl, GOOGLEBOT_IMAGE_UA);
    candidate.status = res.status;
    candidate.ok = res.ok;
    candidate.finalUrl = res.url;
    candidate.redirected = res.redirected;
    candidate.contentType = res.headers.get('content-type');

    if (!res.ok) {
      candidate.diagnostics.push({
        level: 'fail',
        message: `Icon returned HTTP ${res.status} — Google can't fetch it.`,
      });
      return candidate;
    }

    const buf = new Uint8Array(await res.arrayBuffer());
    candidate.sizeBytes = buf.length;
    if (buf.length > MAX_ICON_BYTES) {
      candidate.diagnostics.push({ level: 'warn', message: 'Icon is unusually large (>5MB).' });
    }

    const { format, dimensions } = sniffImage(buf, candidate.contentType);
    candidate.format = format;
    candidate.dimensions = dimensions;

    const isImageType = candidate.contentType?.startsWith('image/');
    if (!isImageType && !format) {
      candidate.diagnostics.push({
        level: 'fail',
        message: `Not served as an image (content-type: ${candidate.contentType ?? 'none'}).`,
      });
    }

    // Build a data URI so the preview shows exactly what Googlebot-Image received.
    if (buf.length <= MAX_ICON_BYTES) {
      const mime = candidate.contentType?.split(';')[0] || (format ? `image/${format.toLowerCase()}` : 'application/octet-stream');
      // Base64 encode in chunks to avoid call-stack limits.
      let binary = '';
      for (let i = 0; i < buf.length; i += 0x8000) {
        binary += String.fromCharCode(...buf.subarray(i, i + 0x8000));
      }
      candidate.dataUri = `data:${mime};base64,${btoa(binary)}`;
    }

    // Dimension diagnostics (Google needs a square icon, min 8x8, ideally a multiple of 48px).
    if (dimensions) {
      const { width, height } = dimensions;
      if (width < 8 || height < 8) {
        candidate.diagnostics.push({ level: 'fail', message: `Too small (${width}×${height}). Google requires at least 8×8.` });
      } else if (width !== height) {
        candidate.diagnostics.push({ level: 'warn', message: `Not square (${width}×${height}). Google prefers a square icon.` });
      } else if (width % 48 !== 0) {
        candidate.diagnostics.push({ level: 'warn', message: `${width}×${height} is valid, but Google prefers a multiple of 48px (48, 96, 144…).` });
      } else {
        candidate.diagnostics.push({ level: 'pass', message: `${width}×${height} — good size for Google.` });
      }
    } else if (format === 'SVG') {
      candidate.diagnostics.push({ level: 'pass', message: 'SVG (scalable) — Google supports SVG favicons.' });
    }

    if (candidate.ok && !candidate.diagnostics.some((d) => d.level === 'fail')) {
      candidate.diagnostics.unshift({ level: 'pass', message: 'Fetched successfully by Googlebot-Image.' });
    }
  } catch (err) {
    candidate.diagnostics.push({
      level: 'fail',
      message: `Request failed: ${(err as Error).name === 'AbortError' ? 'timed out' : (err as Error).message}.`,
    });
  }

  return candidate;
}

export const GET: APIRoute = async ({ url }) => {
  const input = url.searchParams.get('url') ?? '';
  const target = normalizeUrl(input);

  if (!target) {
    return json({ error: 'Please provide a valid URL or domain.' }, 400);
  }

  const result: {
    input: string;
    normalizedUrl: string;
    page: { status: number | null; ok: boolean; finalUrl: string | null; error: string | null };
    rawLinkTags: string[];
    robotsFound: boolean;
    candidates: Candidate[];
    verdict: { level: 'pass' | 'warn' | 'fail'; message: string };
  } = {
    input,
    normalizedUrl: target.toString(),
    page: { status: null, ok: false, finalUrl: null, error: null },
    rawLinkTags: [],
    robotsFound: false,
    candidates: [],
    verdict: { level: 'fail', message: '' },
  };

  // 1. Fetch robots.txt (so we can evaluate crawlability like Google does).
  let robotsTxt: string | null = null;
  try {
    const robotsRes = await fetchWithTimeout(new URL('/robots.txt', target).toString(), GOOGLEBOT_UA);
    if (robotsRes.ok) {
      robotsTxt = await robotsRes.text();
      result.robotsFound = true;
    }
  } catch {
    /* no robots.txt is fine */
  }

  // 2. Fetch the page HTML with Googlebot.
  let html = '';
  let pageUrl = target.toString();
  try {
    const pageRes = await fetchWithTimeout(target.toString(), GOOGLEBOT_UA);
    result.page.status = pageRes.status;
    result.page.ok = pageRes.ok;
    result.page.finalUrl = pageRes.url;
    pageUrl = pageRes.url || pageUrl;
    if (pageRes.ok) {
      html = await pageRes.text();
    } else {
      result.page.error = `Page returned HTTP ${pageRes.status}.`;
    }
  } catch (err) {
    result.page.error = `Couldn't load the page: ${(err as Error).name === 'AbortError' ? 'timed out' : (err as Error).message}.`;
  }

  // 3. Discover icon <link> tags, resolve them, and queue the /favicon.ico fallback.
  const seen = new Set<string>();
  const queue: { url: string; source: 'link' | 'fallback'; rel: string | null; sizes: string | null }[] = [];

  if (html) {
    const links = extractIconLinks(html);
    for (const link of links) {
      result.rawLinkTags.push(link.raw);
      try {
        const resolved = new URL(link.href, pageUrl).toString();
        if (seen.has(resolved)) continue;
        seen.add(resolved);
        queue.push({ url: resolved, source: 'link', rel: link.rel, sizes: link.sizes });
      } catch {
        /* skip unparseable href */
      }
    }
  }

  // Always check the root /favicon.ico fallback, like Google does.
  const fallback = new URL('/favicon.ico', target).toString();
  if (!seen.has(fallback)) {
    seen.add(fallback);
    queue.push({ url: fallback, source: 'fallback', rel: null, sizes: null });
  }

  // 4. Fetch each candidate with Googlebot-Image.
  result.candidates = await Promise.all(
    queue.map((c) => inspectCandidate(c.url, c.source, c.rel, c.sizes, robotsTxt)),
  );

  // 5. Overall verdict.
  const usable = result.candidates.find(
    (c) => c.ok && c.robotsAllowed !== false && !c.diagnostics.some((d) => d.level === 'fail'),
  );
  if (!result.page.ok && result.candidates.every((c) => !c.ok)) {
    result.verdict = { level: 'fail', message: "Couldn't reach the site or find any favicon Google could use." };
  } else if (usable) {
    const where = usable.source === 'link' ? 'a declared <link> icon' : 'the /favicon.ico fallback';
    result.verdict = { level: 'pass', message: `Google should be able to show a favicon from ${where}.` };
  } else if (result.candidates.some((c) => c.ok)) {
    result.verdict = { level: 'warn', message: 'A favicon was found, but it has issues that may stop Google from using it.' };
  } else {
    result.verdict = { level: 'fail', message: 'No favicon Google could fetch was found.' };
  }

  return json(result, 200);
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}
