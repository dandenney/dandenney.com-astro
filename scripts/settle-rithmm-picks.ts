/**
 * Settle pending Rithmm picks from ESPN's public scoreboard + box score APIs.
 *
 * Grades every pending pick (bet, watch, skip) once its game is final and at least
 * 3h past `gameTime`. Anything it can't grade with certainty stays pending.
 *
 *   node --experimental-strip-types --no-warnings scripts/settle-rithmm-picks.ts            # dry run
 *   APPLY=1 node --experimental-strip-types --no-warnings scripts/settle-rithmm-picks.ts    # write
 *   ... scripts/settle-rithmm-picks.ts --id 274 [--force]
 *   ... scripts/settle-rithmm-picks.ts --backtest [--since 2026-09-01]
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { rithhmmPicks, type RithhmmPick, type RithhmmPickResult } from "../src/data/rithhmmPicks.ts";

type Settled = Exclude<RithhmmPickResult, "pending">;

const PICKS_FILE = fileURLToPath(new URL("../src/data/rithhmmPicks.ts", import.meta.url));
const SETTLE_DELAY_MS = 3 * 60 * 60 * 1000;
const GAME_TIME_WINDOW_MS = 4 * 60 * 60 * 1000;

const args = process.argv.slice(2);
const argValue = (flag: string) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};
const APPLY = process.env.APPLY === "1";
const FORCE = args.includes("--force");
const BACKTEST = args.includes("--backtest");
const TARGET_ID = argValue("--id") ? Number(argValue("--id")) : null;
const SINCE = argValue("--since") ?? "2026-09-01";

const ESPN_PATHS: Partial<Record<RithhmmPick["sport"], string>> = {
  NFL: "football/nfl",
  NCAAF: "football/college-football",
  NBA: "basketball/nba",
  WNBA: "basketball/wnba",
  MLB: "baseball/mlb",
};

interface Team {
  names: string[];
  score: number;
}

interface Game {
  id: string;
  start: number;
  final: boolean;
  home: Team;
  away: Team;
}

type ParsedPick =
  | { kind: "moneyline"; team: string }
  | { kind: "spread"; team: string; line: number }
  | { kind: "total"; away: string; home: string; side: "over" | "under"; line: number }
  | { kind: "prop"; player: string; side: "over" | "under"; line: number; stats: StatRef[] };

interface StatRef {
  block: string;
  label: string;
}

const FOOTBALL_STATS: Record<string, StatRef[]> = {
  receptions: [{ block: "receiving", label: "REC" }],
  "receiving yards": [{ block: "receiving", label: "YDS" }],
  "rush attempts": [{ block: "rushing", label: "CAR" }],
  "rushing attempts": [{ block: "rushing", label: "CAR" }],
  "rushing yards": [{ block: "rushing", label: "YDS" }],
  "passing yards": [{ block: "passing", label: "YDS" }],
};

const PTS = { block: "", label: "PTS" };
const REB = { block: "", label: "REB" };
const AST = { block: "", label: "AST" };
const BASKETBALL_STATS: Record<string, StatRef[]> = {
  points: [PTS],
  rebounds: [REB],
  assists: [AST],
  blocks: [{ block: "", label: "BLK" }],
  steals: [{ block: "", label: "STL" }],
  "3 pointers": [{ block: "", label: "3PT" }],
  threes: [{ block: "", label: "3PT" }],
  "pts rebs": [PTS, REB],
  "points rebounds": [PTS, REB],
  "pts asts": [PTS, AST],
  "points assists": [PTS, AST],
  "rebs asts": [REB, AST],
  "rebounds assists": [REB, AST],
  "pts rebs asts": [PTS, REB, AST],
  "points rebounds assists": [PTS, REB, AST],
  pra: [PTS, REB, AST],
  "blocks steals": [{ block: "", label: "BLK" }, { block: "", label: "STL" }],
  "blks stls": [{ block: "", label: "BLK" }, { block: "", label: "STL" }],
};

function normalize(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['.’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizePlayer(s: string): string {
  return normalize(s)
    .split(" ")
    .filter((t) => !["jr", "sr", "ii", "iii", "iv", "v"].includes(t))
    .join(" ");
}

function parsePick(pick: RithhmmPick): ParsedPick | null {
  const text = pick.pick.trim().replace(/\s+(Run Line|Total Runs|Total Points)$/i, "");
  let m = text.match(/^(.+?)\s+Moneyline$/i);
  if (m) return { kind: "moneyline", team: m[1] };
  m = text.match(/^(.+?)\s+([+-]\d+(?:\.\d+)?)$/);
  if (m) return { kind: "spread", team: m[1], line: Number(m[2]) };
  m = text.match(/^(.+?)\s+(?:@|at)\s+(.+?)\s+(Over|Under)\s+(\d+(?:\.\d+)?)$/i);
  if (m) return { kind: "total", away: m[1], home: m[2], side: m[3].toLowerCase() as "over" | "under", line: Number(m[4]) };
  m = text.match(/^(.+?)\s+(Over|Under)\s+(\d+(?:\.\d+)?)\s+(.+)$/i);
  if (!m) return null;
  const table = pick.sport === "NFL" || pick.sport === "NCAAF" ? FOOTBALL_STATS : pick.sport === "NBA" || pick.sport === "WNBA" ? BASKETBALL_STATS : {};
  const stats = table[normalize(m[4])];
  if (!stats) return null;
  return { kind: "prop", player: m[1], side: m[2].toLowerCase() as "over" | "under", line: Number(m[3]), stats };
}

async function getJson(url: string): Promise<any> {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
  }
  return null;
}

const scoreboardCache = new Map<string, Promise<Game[]>>();
function scoreboard(sport: RithhmmPick["sport"], dateKey: string): Promise<Game[]> {
  const key = `${sport}:${dateKey}`;
  if (!scoreboardCache.has(key)) scoreboardCache.set(key, fetchScoreboard(ESPN_PATHS[sport]!, dateKey, sport === "NCAAF"));
  return scoreboardCache.get(key)!;
}

async function fetchScoreboard(path: string, dateKey: string, allGroups: boolean): Promise<Game[]> {
  const extra = allGroups ? "&groups=80&limit=300" : "&limit=300";
  const data = await getJson(`https://site.api.espn.com/apis/site/v2/sports/${path}/scoreboard?dates=${dateKey}${extra}`);
  const games: Game[] = [];
  for (const event of data?.events ?? []) {
    const comp = event.competitions?.[0];
    const home = comp?.competitors?.find((c: any) => c.homeAway === "home");
    const away = comp?.competitors?.find((c: any) => c.homeAway === "away");
    if (!home || !away) continue;
    const team = (c: any): Team => ({
      names: [c.team?.location, c.team?.name, c.team?.displayName, c.team?.shortDisplayName, c.team?.abbreviation]
        .filter(Boolean)
        .map(normalize),
      score: Number(c.score),
    });
    games.push({
      id: String(event.id),
      start: new Date(event.date).getTime(),
      final: comp.status?.type?.name === "STATUS_FINAL",
      home: team(home),
      away: team(away),
    });
  }
  return games;
}

const summaryCache = new Map<string, Promise<any>>();
function summary(sport: RithhmmPick["sport"], eventId: string): Promise<any> {
  if (!summaryCache.has(eventId)) {
    summaryCache.set(eventId, getJson(`https://site.api.espn.com/apis/site/v2/sports/${ESPN_PATHS[sport]}/summary?event=${eventId}`));
  }
  return summaryCache.get(eventId)!;
}

const easternDate = (ms: number) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date(ms)).replace(/-/g, "");

function candidateDateKeys(pick: RithhmmPick): string[] {
  const day = 24 * 60 * 60 * 1000;
  const anchor = pick.gameTime ? new Date(pick.gameTime).getTime() : new Date(`${pick.date}T17:00:00Z`).getTime();
  const offsets = pick.gameTime ? [0] : [0, -1, 1];
  return [...new Set(offsets.map((o) => easternDate(anchor + o * day)))];
}

/** Team names in `matchup` ("Rams vs 49ers", "@ Dolphins", "Falcons at Packers"); every one must be in the game. */
function matchupTeams(matchup: string): string[] {
  return matchup
    .split(/\s+(?:@|vs\.?|at)\s+|^(?:@|vs\.?|at)\s+/i)
    .map((t) => t.trim())
    .filter(Boolean);
}

/** Games to search, grouped by ESPN date and ordered most-likely first (the pick's own date). */
async function candidateGameGroups(pick: RithhmmPick): Promise<Game[][]> {
  const groups = await Promise.all(candidateDateKeys(pick).map((d) => scoreboard(pick.sport, d)));
  const t = pick.gameTime ? new Date(pick.gameTime).getTime() : null;
  const teams = matchupTeams(pick.matchup);
  return groups.map((games) =>
    games.filter(
      (g) =>
        (t == null || Math.abs(g.start - t) <= GAME_TIME_WINDOW_MS) &&
        teams.every((name) => teamIs(name, g.home) || teamIs(name, g.away)),
    ),
  );
}

const teamIs = (raw: string, team: Team) => team.names.includes(normalize(raw));

function uniqueGame(games: Game[], match: (g: Game) => boolean): Game | null | "ambiguous" {
  const found = games.filter(match);
  if (found.length > 1) return "ambiguous";
  return found[0] ?? null;
}

interface Grade {
  result?: Settled;
  reason?: string;
  detail?: string;
}

function compare(value: number, side: "over" | "under", line: number): Settled {
  if (value === line) return "push";
  return (side === "over" ? value > line : value < line) ? "win" : "loss";
}

function readPlayerStats(box: any, player: string, stats: StatRef[]): number | null | "dnp" | "missing" {
  const wanted = normalizePlayer(player);
  let appeared = false;
  let listedWithoutStats = false;
  const values = new Map<string, number>();
  for (const team of box?.boxscore?.players ?? []) {
    for (const block of team.statistics ?? []) {
      const labels: string[] = block.labels ?? [];
      for (const athlete of block.athletes ?? []) {
        if (normalizePlayer(athlete.athlete?.displayName ?? "") !== wanted) continue;
        const row: string[] = athlete.stats ?? [];
        if (!row.length || athlete.didNotPlay) {
          listedWithoutStats = true;
          continue;
        }
        appeared = true;
        for (const ref of stats) {
          if (ref.block && block.name !== ref.block) continue;
          const i = labels.indexOf(ref.label);
          if (i < 0) continue;
          const n = Number(String(row[i]).split("-")[0]);
          if (Number.isFinite(n)) values.set(ref.label, n);
        }
      }
    }
  }
  if (!appeared) return listedWithoutStats ? "dnp" : "missing";
  // Football box scores only list players under categories they recorded a stat in.
  let total = 0;
  for (const ref of stats) total += values.get(ref.label) ?? (ref.block ? 0 : NaN);
  return Number.isFinite(total) ? total : null;
}

async function grade(pick: RithhmmPick): Promise<Grade> {
  if (!ESPN_PATHS[pick.sport]) return { reason: `unsupported sport ${pick.sport}` };
  const parsed = parsePick(pick);
  if (!parsed) return { reason: "unsupported pick format" };
  if (parsed.kind === "prop" && pick.sport === "MLB") return { reason: "MLB props unsupported" };

  for (const games of await candidateGameGroups(pick)) {
    const g = await gradeIn(pick, parsed, games);
    if (g.result || (g.reason !== "game not found" && g.reason !== "player not found in a box score")) return g;
  }
  return { reason: parsed.kind === "prop" ? "player not found in a box score" : "game not found" };
}

async function gradeIn(pick: RithhmmPick, parsed: ParsedPick, games: Game[]): Promise<Grade> {
  if (parsed.kind === "prop") {
    const hits: { game: Game; value: number | null }[] = [];
    for (const game of games) {
      const value = readPlayerStats(await summary(pick.sport, game.id), parsed.player, parsed.stats);
      if (value === "missing") continue;
      if (value === "dnp") return { reason: "player did not play" };
      hits.push({ game, value });
    }
    if (hits.length > 1) return { reason: "player found in multiple games" };
    if (!hits.length) return { reason: "player not found in a box score" };
    const { game, value } = hits[0];
    if (!game.final) return { reason: "game not final" };
    if (value == null) return { reason: "stat missing from box score" };
    return { result: compare(value, parsed.side, parsed.line), detail: `${value} vs ${parsed.side} ${parsed.line}` };
  }

  const game =
    parsed.kind === "total"
      ? uniqueGame(games, (g) => teamIs(parsed.away, g.away) && teamIs(parsed.home, g.home))
      : uniqueGame(games, (g) => teamIs(parsed.team, g.home) || teamIs(parsed.team, g.away));
  if (game === "ambiguous") return { reason: "multiple games match" };
  if (!game) return { reason: "game not found" };
  if (!game.final) return { reason: "game not final" };
  const score = `${game.away.score}-${game.home.score}`;

  if (parsed.kind === "total") {
    const total = game.home.score + game.away.score;
    return { result: compare(total, parsed.side, parsed.line), detail: `total ${total} (${score})` };
  }
  const isHome = teamIs(parsed.team, game.home);
  const margin = isHome ? game.home.score - game.away.score : game.away.score - game.home.score;
  if (parsed.kind === "moneyline") {
    return { result: margin === 0 ? "push" : margin > 0 ? "win" : "loss", detail: `final ${score}` };
  }
  return { result: compare(margin + parsed.line, "over", 0), detail: `final ${score}, margin ${margin}` };
}

const round2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

function americanReturn(stake: number, odds: string): number | null {
  const o = Number(odds);
  if (!Number.isFinite(o) || o === 0) return null;
  return round2(stake + (o > 0 ? (stake * o) / 100 : (stake * 100) / Math.abs(o)));
}

function returnFor(pick: RithhmmPick, result: Settled): number | null | undefined {
  if (pick.betAmount == null) return undefined;
  if (result === "loss") return 0;
  if (result === "push") return pick.betAmount;
  return pick.potentialReturn ?? americanReturn(pick.betAmount, pick.odds);
}

function applyToSource(src: string, pick: RithhmmPick, result: Settled, returnAmount: number | undefined): string {
  const blockRe = new RegExp(`\\n  \\{\\n    id: ${pick.id},\\n[\\s\\S]*?\\n  \\},?`);
  const block = src.match(blockRe)?.[0];
  if (!block || !block.includes('result: "pending"')) throw new Error(`Couldn't find pending block for pick ${pick.id}`);
  let next = block.replace('result: "pending"', `result: "${result}"`);
  if (returnAmount != null && !/returnAmount:/.test(next)) {
    const anchor = /\n    potentialReturn: [^\n]*,/.test(next) ? /(\n    potentialReturn: [^\n]*,)/ : /(\n    betAmount: [^\n]*,)/;
    next = next.replace(anchor, `$1\n    returnAmount: ${returnAmount},`);
  }
  return src.replace(block, next);
}

async function backtest() {
  const picks = rithhmmPicks.filter((p) => p.result !== "pending" && p.date >= SINCE && (TARGET_ID == null || p.id === TARGET_ID));
  let agree = 0;
  const mismatches: string[] = [];
  const skipped: string[] = [];
  for (const pick of picks) {
    const g = await grade(pick);
    if (!g.result) {
      skipped.push(`#${pick.id} ${pick.pick}: ${g.reason}`);
      continue;
    }
    const expectedReturn = returnFor(pick, g.result);
    // Hand-entered legacy returns sometimes round and sometimes truncate the cent.
    const returnOk = pick.returnAmount == null || expectedReturn == null || Math.abs(pick.returnAmount - expectedReturn) <= 0.011;
    if (g.result === pick.result && returnOk) agree++;
    else mismatches.push(`#${pick.id} ${pick.pick}: recorded ${pick.result} ${pick.returnAmount ?? "-"}, graded ${g.result} ${expectedReturn ?? "-"} (${g.detail})`);
  }
  console.log(`Backtest since ${SINCE}: ${agree}/${picks.length} agree, ${mismatches.length} mismatch, ${skipped.length} skipped`);
  for (const m of mismatches) console.log(`  MISMATCH ${m}`);
  for (const s of skipped) console.log(`  skip ${s}`);
}

async function settle() {
  const now = Date.now();
  const pending = rithhmmPicks.filter((p) => p.result === "pending" && (TARGET_ID == null || p.id === TARGET_ID));
  if (!pending.length) {
    console.log("No pending Rithmm picks.");
    return;
  }
  let src = readFileSync(PICKS_FILE, "utf-8");
  const original = src;
  for (const pick of pending) {
    if (!FORCE && pick.gameTime && now < new Date(pick.gameTime).getTime() + SETTLE_DELAY_MS) {
      console.log(`#${pick.id} ${pick.pick}: waiting until 3h after ${pick.gameTime}`);
      continue;
    }
    const g = await grade(pick);
    if (!g.result) {
      console.log(`#${pick.id} ${pick.pick}: left pending (${g.reason})`);
      continue;
    }
    const returnAmount = returnFor(pick, g.result);
    if (returnAmount === null) {
      console.log(`#${pick.id} ${pick.pick}: left pending (can't compute return from odds ${pick.odds})`);
      continue;
    }
    src = applyToSource(src, pick, g.result, returnAmount);
    console.log(`#${pick.id} ${pick.pick} [${pick.portfolioAction ?? "-"}] → ${g.result}${returnAmount != null ? ` (returnAmount ${returnAmount})` : ""}: ${g.detail}`);
  }
  if (src === original) {
    console.log("No changes.");
  } else if (APPLY) {
    writeFileSync(PICKS_FILE, src);
    console.log("Updated src/data/rithhmmPicks.ts.");
  } else {
    console.log("Dry run (set APPLY=1 to write).");
  }
}

await (BACKTEST ? backtest() : settle());
