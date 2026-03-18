#!/usr/bin/env node
/**
 * settle-pending-bets.mjs
 *
 * Daily settlement helper for pending NBA over/under bets with explicit matchup text:
 *   "Team A @ Team B Over 214.5"
 *
 * Data source: ESPN public NBA scoreboard endpoint (no API key).
 *
 * Behavior:
 * - Finds pending bets in src/data/martingaleBets.ts
 * - Matches completed games by team names + bet date
 * - Computes win/loss from final total and over/under line
 * - Sets result + returnAmount in martingaleBets.ts
 * - For paired Dan/Garden bets with same pick/date/line/amount that WIN,
 *   splits combined return and gives odd penny to GardenOf.
 *
 * Env:
 *   APPLY=1   write changes (default is dry-run)
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BETS_FILE = path.join(ROOT, "src/data/martingaleBets.ts");
const APPLY = process.env.APPLY === "1";

const SCOREBOARD_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";

const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
const toDateKey = (iso) => iso.replace(/-/g, "");
const plusDays = (isoDate, delta) => {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0, 10);
};

function normalizeToken(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parsePick(pick) {
  const m = pick.match(/^(.*?)\s*@\s*(.*?)\s+(Over|Under)\s+([0-9]+(?:\.[0-9]+)?)$/i);
  if (!m) return null;
  return {
    awayRaw: m[1].trim(),
    homeRaw: m[2].trim(),
    side: m[3].toLowerCase(),
    totalLine: Number(m[4]),
  };
}

function parseBetsFromSource(src) {
  const bets = [];
  for (const match of src.matchAll(/\{([^{}]+)\}/gs)) {
    const block = match[0];
    const inner = match[1];
    const id = inner.match(/\bid:\s*(\d+)/)?.[1];
    const owner = inner.match(/owner:\s*["'](.+?)["']/)?.[1] ?? "Dan";
    const date = inner.match(/date:\s*["'](.+?)["']/)?.[1];
    const pick = inner.match(/pick:\s*["'](.+?)["']/)?.[1];
    const line = inner.match(/line:\s*["'](.+?)["']/)?.[1];
    const amount = inner.match(/amount:\s*([0-9]+(?:\.[0-9]+)?)/)?.[1];
    const result = inner.match(/result:\s*["'](win|loss|pending)["']/)?.[1];
    if (!id || !date || !pick || !line || !amount || !result) continue;
    bets.push({
      id: Number(id),
      owner,
      date,
      pick,
      line,
      amount: Number(amount),
      result,
      block,
    });
  }
  return bets;
}

function americanReturn(amount, line) {
  const odds = Number(line);
  if (!Number.isFinite(odds) || odds === 0) return null;
  const profit = odds > 0 ? amount * (odds / 100) : amount * (100 / Math.abs(odds));
  return round2(amount + profit);
}

async function fetchCompletedGamesFor(dateIso) {
  const dates = [plusDays(dateIso, -1), dateIso, plusDays(dateIso, 1)].map(toDateKey);
  const games = [];

  for (const dateKey of dates) {
    const url = `${SCOREBOARD_BASE}?dates=${dateKey}`;
    const res = await fetch(url);
    if (!res.ok) continue;
    const data = await res.json();
    const events = data?.events ?? [];

    for (const event of events) {
      const comp = event?.competitions?.[0];
      if (!comp) continue;
      const completed = Boolean(comp?.status?.type?.completed);
      if (!completed) continue;

      const competitors = comp?.competitors ?? [];
      const home = competitors.find((c) => c.homeAway === "home");
      const away = competitors.find((c) => c.homeAway === "away");
      if (!home || !away) continue;

      const homeTeam = home.team ?? {};
      const awayTeam = away.team ?? {};
      const homeScore = Number(home.score);
      const awayScore = Number(away.score);
      if (!Number.isFinite(homeScore) || !Number.isFinite(awayScore)) continue;

      games.push({
        eventId: event.id,
        date: event.date,
        home: {
          displayName: homeTeam.displayName,
          shortDisplayName: homeTeam.shortDisplayName,
          abbreviation: homeTeam.abbreviation,
          score: homeScore,
        },
        away: {
          displayName: awayTeam.displayName,
          shortDisplayName: awayTeam.shortDisplayName,
          abbreviation: awayTeam.abbreviation,
          score: awayScore,
        },
      });
    }
  }

  return games;
}

function teamMatches(pickTeamRaw, gameTeam) {
  const pick = normalizeToken(pickTeamRaw);
  const candidates = [
    gameTeam.displayName,
    gameTeam.shortDisplayName,
    gameTeam.abbreviation,
  ]
    .filter(Boolean)
    .map(normalizeToken);

  return candidates.some((cand) => pick.includes(cand) || cand.includes(pick));
}

function findMatchingGame(parsedPick, games) {
  return games.find(
    (g) =>
      teamMatches(parsedPick.awayRaw, g.away) &&
      teamMatches(parsedPick.homeRaw, g.home),
  );
}

function updateBetBlock(source, betId, nextResult, nextReturnAmount) {
  const blockRe = new RegExp(`\\{[^{}]*?\\bid:\\s*${betId}\\b[^{}]*?\\n\\s*\\},?`, "gs");
  const match = source.match(blockRe);
  if (!match?.length) return source;

  let block = match[0];
  block = block.replace(/result:\s*["']pending["']/, `result: "${nextResult}"`);

  if (/returnAmount:\s*[0-9.]+/.test(block)) {
    block = block.replace(/returnAmount:\s*[0-9.]+/, `returnAmount: ${nextReturnAmount}`);
  } else {
    block = block.replace(/(stakeOut:\s*[0-9.]+,\n)/, `$1    returnAmount: ${nextReturnAmount},\n`);
  }

  return source.replace(blockRe, block);
}

function pairKey(bet) {
  return `${bet.date}::${bet.pick}::${bet.line}::${bet.amount}`;
}

const src = await fs.readFile(BETS_FILE, "utf-8");
const allBets = parseBetsFromSource(src);
const pending = allBets.filter((b) => b.result === "pending");

if (!pending.length) {
  console.log("No pending bets.");
  process.exit(0);
}

let nextSrc = src;
const decisions = [];

for (const bet of pending) {
  const parsed = parsePick(bet.pick);
  if (!parsed) {
    console.log(`Skip bet ${bet.id}: unsupported pick format (${bet.pick})`);
    continue;
  }

  const games = await fetchCompletedGamesFor(bet.date);
  const game = findMatchingGame(parsed, games);
  if (!game) {
    console.log(`No completed game found yet for bet ${bet.id}: ${bet.pick}`);
    continue;
  }

  const total = game.home.score + game.away.score;
  const isWin = parsed.side === "over" ? total > parsed.totalLine : total < parsed.totalLine;

  decisions.push({
    betId: bet.id,
    owner: bet.owner,
    key: pairKey(bet),
    result: isWin ? "win" : "loss",
    baseReturn: isWin ? americanReturn(bet.amount, bet.line) : 0,
  });
}

const grouped = new Map();
for (const d of decisions) {
  const list = grouped.get(d.key) ?? [];
  list.push(d);
  grouped.set(d.key, list);
}

for (const [_, list] of grouped.entries()) {
  const dan = list.find((d) => d.owner === "Dan");
  const garden = list.find((d) => d.owner === "GardenOf");

  if (dan && garden && dan.result === "win" && garden.result === "win") {
    const combined = round2((dan.baseReturn ?? 0) + (garden.baseReturn ?? 0));
    const danPart = Math.floor((combined / 2) * 100) / 100;
    const gardenPart = round2(combined - danPart);
    dan.baseReturn = danPart;
    garden.baseReturn = gardenPart;
  }
}

for (const d of decisions) {
  if (d.baseReturn == null) {
    console.log(`Skip bet ${d.betId}: invalid line/odds`);
    continue;
  }
  nextSrc = updateBetBlock(nextSrc, d.betId, d.result, d.baseReturn.toFixed(2));
  console.log(`Set bet ${d.betId} → ${d.result} (returnAmount: ${d.baseReturn.toFixed(2)})`);
}

if (nextSrc === src) {
  console.log("No changes.");
  process.exit(0);
}

if (!APPLY) {
  console.log("\nDry-run complete (set APPLY=1 to write changes).");
  process.exit(0);
}

await fs.writeFile(BETS_FILE, nextSrc, "utf-8");
console.log(`\nUpdated ${path.relative(ROOT, BETS_FILE)}.`);
