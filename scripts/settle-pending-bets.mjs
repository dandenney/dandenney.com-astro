#!/usr/bin/env node
/**
 * settle-pending-bets.mjs
 *
 * NBA bet settlement helper.
 *
 * Supports:
 * - Matchup totals/spreads: "Team A @ Team B Over 214.5", "Toronto Raptors +7"
 * - Player props: "Jalen Duren Over 23.5 Points", etc.
 *
 * Scheduling model:
 * - Bets may include `eventId` + `scheduledStart`
 * - By default, a pending bet is only eligible once `scheduledStart + 3h <= now`
 * - Fallback: if metadata is missing, completed games are still searched heuristically
 *
 * CLI:
 * - node scripts/settle-pending-bets.mjs
 * - node scripts/settle-pending-bets.mjs --bet-id 22
 * - APPLY=1 node scripts/settle-pending-bets.mjs [--force]
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BETS_FILE = path.join(ROOT, "src/data/martingaleBets.ts");
const SCOREBOARD_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";
const SUMMARY_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary";

const APPLY = process.env.APPLY === "1";
const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const betIdIndex = args.indexOf("--bet-id");
const TARGET_BET_ID = betIdIndex >= 0 ? Number(args[betIdIndex + 1]) : null;
const SETTLE_DELAY_MS = 3 * 60 * 60 * 1000;

const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
const toDateKey = (iso) => iso.replace(/-/g, "");
const plusDays = (isoDate, delta) => {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0, 10);
};

function normalizeToken(s) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function parseMatchupTotalPick(pick) {
  const total = pick.match(/^(.*?)\s*@\s*(.*?)\s+(Over|Under)\s+([0-9]+(?:\.[0-9]+)?)$/i);
  if (total) {
    return {
      type: "matchup-total",
      awayRaw: total[1].trim(),
      homeRaw: total[2].trim(),
      side: total[3].toLowerCase(),
      line: Number(total[4]),
    };
  }

  const spread = pick.match(/^(.*?)\s+([+-][0-9]+(?:\.[0-9]+)?)$/i);
  if (spread) {
    return {
      type: "team-spread",
      teamRaw: spread[1].trim(),
      line: Number(spread[2]),
    };
  }

  return null;
}

function parsePlayerPropPick(pick) {
  const m = pick.match(/^(.*?)\s+(Over|Under)\s+([0-9]+(?:\.[0-9]+)?)\s+(Points|Assists|Rebounds|Threes)$/i);
  if (!m) return null;
  return {
    type: "player-prop",
    playerRaw: m[1].trim(),
    side: m[2].toLowerCase(),
    line: Number(m[3]),
    statLabel: m[4].toLowerCase(),
  };
}

function parsePick(pick) {
  return parseMatchupTotalPick(pick) ?? parsePlayerPropPick(pick);
}

function parseBetsFromSource(src) {
  const bets = [];
  for (const match of src.matchAll(/\{([^{}]+)\}/gs)) {
    const block = match[0];
    const inner = match[1];
    const get = (rx) => inner.match(rx)?.[1];
    const id = get(/\bid:\s*(\d+)/);
    const owner = get(/owner:\s*["'](.+?)["']/) ?? "Dan";
    const date = get(/date:\s*["'](.+?)["']/);
    const pick = get(/pick:\s*["'](.+?)["']/);
    const line = get(/line:\s*["'](.+?)["']/);
    const amount = get(/amount:\s*([0-9]+(?:\.[0-9]+)?)/);
    const result = get(/result:\s*["'](win|loss|pending)["']/);
    const eventId = get(/eventId:\s*["'](.+?)["']/) ?? null;
    const scheduledStart = get(/scheduledStart:\s*["'](.+?)["']/) ?? null;
    if (!id || !date || !pick || !line || !amount || !result) continue;
    bets.push({
      id: Number(id),
      owner,
      date,
      pick,
      line,
      amount: Number(amount),
      result,
      eventId,
      scheduledStart,
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

async function fetchGamesFor(dateIso, { completedOnly = false } = {}) {
  const dates = [plusDays(dateIso, -1), dateIso, plusDays(dateIso, 1)].map(toDateKey);
  const games = [];

  for (const dateKey of dates) {
    const res = await fetch(`${SCOREBOARD_BASE}?dates=${dateKey}`);
    if (!res.ok) continue;
    const data = await res.json();

    for (const event of data?.events ?? []) {
      const comp = event?.competitions?.[0];
      if (!comp) continue;
      const completed = Boolean(comp?.status?.type?.completed);
      if (completedOnly && !completed) continue;

      const competitors = comp?.competitors ?? [];
      const home = competitors.find((c) => c.homeAway === "home");
      const away = competitors.find((c) => c.homeAway === "away");
      if (!home || !away) continue;

      const mapTeam = (teamRow, scoreRow) => ({
        displayName: teamRow?.team?.displayName,
        shortDisplayName: teamRow?.team?.shortDisplayName,
        abbreviation: teamRow?.team?.abbreviation,
        score: Number(scoreRow?.score),
      });

      games.push({
        eventId: event.id,
        date: event.date,
        completed,
        home: mapTeam(home, home),
        away: mapTeam(away, away),
      });
    }
  }

  return games;
}

const summaryCache = new Map();
async function fetchGameSummary(eventId) {
  if (summaryCache.has(eventId)) return summaryCache.get(eventId);
  const res = await fetch(`${SUMMARY_BASE}?event=${eventId}`);
  if (!res.ok) return null;
  const data = await res.json();
  summaryCache.set(eventId, data);
  return data;
}

function teamMatches(pickTeamRaw, gameTeam) {
  const pick = normalizeToken(pickTeamRaw);
  const candidates = [gameTeam.displayName, gameTeam.shortDisplayName, gameTeam.abbreviation]
    .filter(Boolean)
    .map(normalizeToken);
  return candidates.some((cand) => pick.includes(cand) || cand.includes(pick));
}

function findMatchingGame(parsedPick, games) {
  if (parsedPick.type === "matchup-total") {
    return games.find((g) => teamMatches(parsedPick.awayRaw, g.away) && teamMatches(parsedPick.homeRaw, g.home));
  }
  if (parsedPick.type === "team-spread") {
    return games.find((g) => teamMatches(parsedPick.teamRaw, g.away) || teamMatches(parsedPick.teamRaw, g.home));
  }
  return null;
}

function playerNameMatches(targetName, espnName) {
  return normalizeToken(targetName) === normalizeToken(espnName);
}

const PROP_STAT_LABEL_MAP = {
  points: ["PTS", "points"],
  assists: ["AST", "assists"],
  rebounds: ["REB", "rebounds"],
  threes: ["3PT", "threePointFieldGoalsMade-threePointFieldGoalsAttempted"],
};

function getPlayerStatValue(summary, playerRaw, statLabel) {
  const groups = summary?.boxscore?.players ?? [];
  const wanted = PROP_STAT_LABEL_MAP[statLabel];
  if (!wanted) return null;

  for (const group of groups) {
    for (const statBlock of group.statistics ?? []) {
      const labels = statBlock.labels ?? [];
      const keys = statBlock.keys ?? [];
      let statIndex = labels.findIndex((label) => wanted.includes(label));
      if (statIndex < 0) statIndex = keys.findIndex((key) => wanted.includes(key));
      if (statIndex < 0) continue;

      for (const athlete of statBlock.athletes ?? []) {
        const name = athlete?.athlete?.displayName;
        if (!name || !playerNameMatches(playerRaw, name)) continue;
        const rawValue = athlete.stats?.[statIndex];
        if (rawValue == null) return null;
        if (statLabel === "threes") {
          const made = String(rawValue).split("-")[0];
          const n = Number(made);
          return Number.isFinite(n) ? n : null;
        }
        const n = Number(rawValue);
        return Number.isFinite(n) ? n : null;
      }
    }
  }
  return null;
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

function isEligibleBySchedule(bet) {
  if (FORCE) return true;
  if (!bet.scheduledStart) return true;
  const scheduled = new Date(bet.scheduledStart).getTime();
  if (!Number.isFinite(scheduled)) return true;
  return Date.now() >= scheduled + SETTLE_DELAY_MS;
}

function settleSpread(game, parsedPick) {
  const pickIsAway = teamMatches(parsedPick.teamRaw, game.away);
  const pickScore = pickIsAway ? game.away.score : game.home.score;
  const oppScore = pickIsAway ? game.home.score : game.away.score;
  if (!Number.isFinite(pickScore) || !Number.isFinite(oppScore)) return null;
  return pickScore + parsedPick.line > oppScore;
}

const src = await fs.readFile(BETS_FILE, "utf-8");
const allBets = parseBetsFromSource(src);
let pending = allBets.filter((b) => b.result === "pending");
if (TARGET_BET_ID != null) pending = pending.filter((b) => b.id === TARGET_BET_ID);

if (!pending.length) {
  console.log(TARGET_BET_ID != null ? `No pending bet found for id ${TARGET_BET_ID}.` : "No pending bets.");
  process.exit(0);
}

let nextSrc = src;
const decisions = [];
const gamesCache = new Map();

for (const bet of pending) {
  if (!isEligibleBySchedule(bet)) {
    console.log(`Skip bet ${bet.id}: not eligible until ~3h after ${bet.scheduledStart}`);
    continue;
  }

  const parsed = parsePick(bet.pick);
  if (!parsed) {
    console.log(`Skip bet ${bet.id}: unsupported pick format (${bet.pick})`);
    continue;
  }

  const games = gamesCache.get(bet.date) ?? await fetchGamesFor(bet.date, { completedOnly: true });
  gamesCache.set(bet.date, games);

  let game = null;
  if (bet.eventId) game = games.find((g) => String(g.eventId) === String(bet.eventId)) ?? null;
  if (!game && parsed.type !== "player-prop") game = findMatchingGame(parsed, games);

  if (parsed.type === "matchup-total") {
    if (!game) {
      console.log(`No completed game found yet for bet ${bet.id}: ${bet.pick}`);
      continue;
    }
    const total = game.home.score + game.away.score;
    const isWin = parsed.side === "over" ? total > parsed.line : total < parsed.line;
    decisions.push({ betId: bet.id, owner: bet.owner, key: pairKey(bet), result: isWin ? "win" : "loss", baseReturn: isWin ? americanReturn(bet.amount, bet.line) : 0 });
    continue;
  }

  if (parsed.type === "team-spread") {
    if (!game) {
      console.log(`No completed game found yet for bet ${bet.id}: ${bet.pick}`);
      continue;
    }
    const isWin = settleSpread(game, parsed);
    decisions.push({ betId: bet.id, owner: bet.owner, key: pairKey(bet), result: isWin ? "win" : "loss", baseReturn: isWin ? americanReturn(bet.amount, bet.line) : 0 });
    continue;
  }

  if (parsed.type === "player-prop") {
    const candidateGames = game ? [game] : games;
    let statValue = null;
    for (const candidate of candidateGames) {
      const summary = await fetchGameSummary(candidate.eventId);
      const found = getPlayerStatValue(summary, parsed.playerRaw, parsed.statLabel);
      if (found == null) continue;
      statValue = found;
      break;
    }
    if (statValue == null) {
      console.log(`No completed player box score found yet for bet ${bet.id}: ${bet.pick}`);
      continue;
    }
    const isWin = parsed.side === "over" ? statValue > parsed.line : statValue < parsed.line;
    decisions.push({ betId: bet.id, owner: bet.owner, key: pairKey(bet), result: isWin ? "win" : "loss", baseReturn: isWin ? americanReturn(bet.amount, bet.line) : 0 });
  }
}

const grouped = new Map();
for (const d of decisions) {
  const list = grouped.get(d.key) ?? [];
  list.push(d);
  grouped.set(d.key, list);
}

for (const list of grouped.values()) {
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
