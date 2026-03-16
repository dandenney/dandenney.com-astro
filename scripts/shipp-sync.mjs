/**
 * shipp-sync.mjs
 *
 * Self-contained Shipp.ai sync script for GitHub Actions.
 * Fetches live signals, generates a pregame checkpoint packet for every
 * pending martingale bet, and writes the result to src/data/shipp-state.json.
 *
 * Required env vars:
 *   SHIPP_API_KEY          – your Shipp API key
 *   SHIPP_CONNECTION_IDS   – comma-separated connection IDs
 *
 * Optional env vars:
 *   SHIPP_CHECKPOINT       – one of T-120 | T-30 | T-10 | LOCK (default: T-120)
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const STATE_FILE = path.join(ROOT, "src/data/shipp-state.json");
const BETS_FILE = path.join(ROOT, "src/data/martingaleBets.ts");

const SHIPP_BASE_URL = "https://api.shipp.ai/api/v1";
const MAX_SIGNALS = 100;
const CHECKPOINT_ORDER = ["T-120", "T-30", "T-10", "LOCK"];

// ── env ───────────────────────────────────────────────────────────────────────

const API_KEY = process.env.SHIPP_API_KEY;
const CONNECTION_IDS = (process.env.SHIPP_CONNECTION_IDS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const CHECKPOINT = process.env.SHIPP_CHECKPOINT ?? "T-120";

if (!API_KEY) { console.error("Missing SHIPP_API_KEY"); process.exit(1); }
if (!CONNECTION_IDS.length) { console.error("Missing SHIPP_CONNECTION_IDS"); process.exit(1); }
if (!CHECKPOINT_ORDER.includes(CHECKPOINT)) { console.error(`Invalid SHIPP_CHECKPOINT: ${CHECKPOINT}`); process.exit(1); }

// ── state ─────────────────────────────────────────────────────────────────────

async function readState() {
  try {
    const parsed = JSON.parse(await fs.readFile(STATE_FILE, "utf-8"));
    return {
      version: 1,
      updatedAt: null,
      connections: {},
      latestSignals: [],
      checkpoints: { byBetId: {} },
      ...parsed,
      checkpoints: { byBetId: parsed.checkpoints?.byBetId ?? {} },
    };
  } catch {
    return { version: 1, updatedAt: null, connections: {}, latestSignals: [], checkpoints: { byBetId: {} } };
  }
}

async function writeState(state) {
  const payload = {
    ...state,
    updatedAt: new Date().toISOString(),
    latestSignals: state.latestSignals.slice(0, MAX_SIGNALS),
  };
  await fs.writeFile(STATE_FILE, JSON.stringify(payload, null, 2) + "\n", "utf-8");
}

// ── normalize ──────────────────────────────────────────────────────────────────

function asString(v) { return typeof v === "string" && v.trim() ? v.trim() : null; }
function asNumber(v) {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") { const n = Number(v); if (Number.isFinite(n)) return n; }
  return null;
}
function firstString(row, keys) {
  for (const k of keys) { const v = asString(row[k]); if (v) return v; }
  return null;
}
function getCursorId(row) { return firstString(row, ["attribution_id", "event_id", "id"]); }

function normalizeRow(row, connectionId) {
  const receivedAt = new Date().toISOString();
  const eventCursor = getCursorId(row);
  const wallClockStart = firstString(row, ["wall_clock_start", "scheduled"]);
  const gameId = firstString(row, ["game_id"]);
  const rawId = [connectionId, eventCursor ?? gameId ?? "unknown", wallClockStart ?? receivedAt].join(":");
  return {
    id: rawId,
    connectionId,
    eventCursor,
    gameId,
    sport: firstString(row, ["sport"]),
    eventType: firstString(row, ["type", "category"]),
    description: firstString(row, ["desc", "description"]),
    period: asNumber(row.game_period),
    gameClock: firstString(row, ["game_clock"]),
    home: firstString(row, ["home", "home_team"]),
    away: firstString(row, ["away", "away_team"]),
    homePoints: asNumber(row.home_points),
    awayPoints: asNumber(row.away_points),
    wallClockStart,
    wallClockEnd: firstString(row, ["wall_clock_end"]),
    receivedAt,
    raw: row,
  };
}

function mergeSignals(existing, incoming) {
  const map = new Map();
  for (const s of [...incoming, ...existing]) map.set(s.id, s);
  return [...map.values()]
    .sort((a, b) => b.receivedAt.localeCompare(a.receivedAt))
    .slice(0, MAX_SIGNALS);
}

// ── shipp fetch ────────────────────────────────────────────────────────────────

async function fetchConnection(connectionId, sinceEventId, since) {
  const url = new URL(`${SHIPP_BASE_URL}/connections/${connectionId}`);
  url.searchParams.set("api_key", API_KEY);
  const body = { limit: 100 };
  if (sinceEventId) body.since_event_id = sinceEventId;
  else if (since) body.since = since;
  const res = await fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Shipp ${connectionId} (${res.status}): ${await res.text()}`);
  return (await res.json()).data ?? [];
}

// ── pending bets (parsed from martingaleBets.ts) ───────────────────────────────

async function getPendingBets() {
  const src = await fs.readFile(BETS_FILE, "utf-8");
  const pending = [];
  for (const match of src.matchAll(/\{([^{}]+)\}/gs)) {
    const block = match[1];
    if (!block.includes('result: "pending"') && !block.includes("result: 'pending'")) continue;
    const id = block.match(/\bid:\s*(\d+)/)?.[1];
    const pick = block.match(/pick:\s*["'](.+?)["']/)?.[1];
    const owner = block.match(/owner:\s*["'](.+?)["']/)?.[1] ?? "Dan";
    if (id && pick) pending.push({ id: Number(id), pick, owner });
  }
  return pending;
}

// ── matching ───────────────────────────────────────────────────────────────────

const STOP_WORDS = new Set([
  "over", "under", "alt", "spread", "moneyline", "team", "total",
  "points", "assists", "rebounds", "threes", "and", "the", "vs",
]);
const NBA_TOKENS = [
  "lakers", "celtics", "knicks", "wizards", "heat", "nuggets", "trail", "blazers",
  "scoot", "henderson", "edwards", "sensabaugh", "sixers", "philadelphia",
];

function tokenize(v) {
  return v.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/)
    .map((p) => p.trim())
    .filter((p) => p.length >= 3 && !STOP_WORDS.has(p));
}

function getTeamTokens(signal) {
  const fromTeams = [signal.home, signal.away].filter(Boolean).flatMap(tokenize);
  const fromGameId = signal.gameId ? tokenize(signal.gameId) : [];
  return Array.from(new Set([...fromTeams, ...fromGameId]));
}

function inferSport(pick) {
  const lower = pick.toLowerCase();
  return NBA_TOKENS.some((t) => lower.includes(t)) ? "nba" : null;
}

function matchSignals(bet, signals) {
  const pickTokens = tokenize(bet.pick);
  const sport = inferSport(bet.pick);
  return signals
    .map((signal) => {
      const reasons = [];
      const shared = pickTokens.filter((t) => getTeamTokens(signal).includes(t));
      if (shared.length) reasons.push(`Team overlap: ${shared.join(", ")}`);
      if (sport && signal.sport?.toLowerCase() === sport) reasons.push(`Sport: ${sport.toUpperCase()}`);
      return { signal, reasons };
    })
    .filter((m) => m.reasons.length > 0)
    .sort((a, b) => b.signal.receivedAt.localeCompare(a.signal.receivedAt));
}

// ── checkpoint scoring ─────────────────────────────────────────────────────────

function isPregame(signal) {
  const text = `${signal.eventType ?? ""} ${signal.description ?? ""}`.toLowerCase();
  const hasPregameKeyword = ["pregame", "lineup", "odds", "spread", "injury", "status", "starting", "market"]
    .some((k) => text.includes(k));
  const looksInGame =
    (typeof signal.period === "number" && signal.period > 0) ||
    Boolean(signal.gameClock) ||
    typeof signal.homePoints === "number" ||
    typeof signal.awayPoints === "number";
  return hasPregameKeyword || !looksInGame;
}

function scoreCheckpoint(checkpoint, signals) {
  const negative = signals.filter((s) => {
    const text = `${s.eventType ?? ""} ${s.description ?? ""}`.toLowerCase();
    return ["injury", "questionable", "out", "suspended", "late scratch"].some((t) => text.includes(t));
  }).length;
  const evidence = signals.length;

  if (checkpoint === "LOCK") {
    return {
      recommendation: evidence >= 2 && negative === 0 ? "Bet" : evidence > 0 ? "Reduce Stake" : "No Bet",
      confidence: evidence >= 2 ? 80 : evidence === 1 ? 60 : 30,
      reason: evidence > 0 ? "Final lock checkpoint." : "LOCK reached without enough data.",
      insufficientData: evidence === 0,
    };
  }
  if (negative > 0) return { recommendation: "No Bet", confidence: 25, reason: "Negative pregame indicators.", insufficientData: false };
  if (evidence >= 2) return { recommendation: "Bet", confidence: checkpoint === "T-120" ? 60 : checkpoint === "T-30" ? 70 : 78, reason: "Pregame signals aligned.", insufficientData: false };
  if (evidence === 1) return { recommendation: "Reduce Stake", confidence: 52, reason: "Only one pregame signal.", insufficientData: false };
  return { recommendation: "No Bet", confidence: 20, reason: "Insufficient pregame data.", insufficientData: true };
}

// ── main ───────────────────────────────────────────────────────────────────────

const defaultSince = () => new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();

console.log(`\nShipp sync — checkpoint: ${CHECKPOINT}`);
console.log(`Connections: ${CONNECTION_IDS.join(", ")}\n`);

const state = await readState();

for (const connectionId of CONNECTION_IDS) {
  const conn = state.connections[connectionId] ?? { sinceEventId: null, lastRunAt: null, lastSuccessAt: null, lastError: null };
  state.connections[connectionId] = { ...conn, lastRunAt: new Date().toISOString(), lastError: null };
  try {
    const rows = await fetchConnection(connectionId, conn.sinceEventId, conn.sinceEventId ? undefined : defaultSince());
    const normalized = rows.map((r) => normalizeRow(r, connectionId));
    const lastCursor = [...rows].reverse().map(getCursorId).find(Boolean) ?? conn.sinceEventId;
    state.connections[connectionId] = { ...state.connections[connectionId], sinceEventId: lastCursor, lastSuccessAt: new Date().toISOString() };
    state.latestSignals = mergeSignals(state.latestSignals, normalized);
    console.log(`✓ ${connectionId}: ${rows.length} events, cursor → ${lastCursor}`);
  } catch (err) {
    state.connections[connectionId].lastError = err.message;
    console.error(`✗ ${connectionId}: ${err.message}`);
  }
}

const pendingBets = await getPendingBets();
console.log(`\nPending bets: ${pendingBets.length}`);

const generatedAt = new Date().toISOString();
state.checkpoints = state.checkpoints ?? { byBetId: {} };

for (const bet of pendingBets) {
  const betKey = String(bet.id);
  const existing = state.checkpoints.byBetId[betKey] ?? [];
  const prev = [...existing].sort((a, b) => b.generatedAt.localeCompare(a.generatedAt))[0];
  const pregameMatches = matchSignals(bet, state.latestSignals).map((m) => m.signal).filter(isPregame).slice(0, 8);
  const scored = scoreCheckpoint(CHECKPOINT, pregameMatches);

  const packet = {
    betId: bet.id,
    seriesId: undefined, // not needed by display but kept for parity
    checkpoint: CHECKPOINT,
    recommendation: scored.recommendation,
    confidence: scored.confidence,
    status: CHECKPOINT === "LOCK" ? "locked" : "active",
    reason: scored.reason,
    insufficientData: scored.insufficientData,
    matchedSignalsCount: pregameMatches.length,
    matchedSignalIds: pregameMatches.map((s) => s.id),
    generatedAt,
    deltaFromLast: {
      previousCheckpoint: prev?.checkpoint ?? null,
      previousRecommendation: prev?.recommendation ?? null,
      confidenceChange: scored.confidence - (prev?.confidence ?? 0),
      evidenceChange: pregameMatches.length - (prev?.matchedSignalsCount ?? 0),
      newSignalsSinceLast: prev
        ? pregameMatches.filter((s) => s.receivedAt > prev.generatedAt).length
        : pregameMatches.length,
    },
  };

  const filtered = existing.filter(
    (p) => CHECKPOINT_ORDER.indexOf(p.checkpoint) < CHECKPOINT_ORDER.indexOf(CHECKPOINT),
  );
  state.checkpoints.byBetId[betKey] = [...filtered, packet].sort((a, b) =>
    a.generatedAt.localeCompare(b.generatedAt),
  );

  console.log(`  Bet ${bet.id} — ${bet.pick}: ${scored.recommendation} (${scored.confidence}% confidence, ${pregameMatches.length} signals)`);
}

await writeState(state);
console.log("\n✓ shipp-state.json written\n");
