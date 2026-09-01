/**
 * Derivations for the Ball Flight section. Nothing here is stored; PRs,
 * trends, venue rollups, and the cadence readout are all computed from
 * sessions.ts and rounds.ts at build time.
 */

import { sessions } from "@/data/golf/sessions";
import { rounds } from "@/data/golf/rounds";
import { bag } from "@/data/golf/bag";
import { milestones } from "@/data/golf/milestones";
import {
  CLUB_ORDER,
  CLUB_SHORT,
  GOLF_EPOCH,
  type BagItem,
  type Club,
  type ClubMetricKey,
  type ClubMetrics,
  type Milestone,
  type Player,
  type Round,
  type Session,
} from "@/data/golf/types";

/* ---------- dates & formatting ---------- */

const DAY_MS = 86_400_000;

export function parseDate(iso: string): Date {
  return new Date(`${iso}T12:00:00Z`);
}

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function daysBetween(fromIso: string, toIso: string): number {
  return Math.round((parseDate(toIso).getTime() - parseDate(fromIso).getTime()) / DAY_MS);
}

/** "AUG 23" */
export function fmtDateShort(iso: string): string {
  return parseDate(iso)
    .toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" })
    .toUpperCase();
}

/** "Aug 23, 2026" */
export function fmtDateFull(iso: string): string {
  return parseDate(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "2026.08.23", the ledger form */
export function fmtDateStamp(iso: string): string {
  return iso.replaceAll("-", ".");
}

export function fmtToPar(n: number): string {
  if (n === 0) return "E";
  return n > 0 ? `+${n}` : `${n}`;
}

export function fmtNum(n: number, decimals = 0): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/* ---------- access ---------- */

function byDate<T extends { date: string; id: number }>(a: T, b: T): number {
  return a.date.localeCompare(b.date) || a.id - b.id;
}

export function getSessions(player?: Player): Session[] {
  return sessions.filter((s) => !player || s.player === player).sort(byDate);
}

export function getRounds(player?: Player): Round[] {
  return rounds.filter((r) => !player || r.player === player).sort(byDate);
}

export function getMilestones(player?: Player): Milestone[] {
  return milestones.filter((m) => !player || m.player === player).sort(byDate);
}

export function isCourseRound(r: Round): boolean {
  return r.format !== "putting";
}

export function roundToPar(r: Round): number | undefined {
  if (typeof r.toPar === "number") return r.toPar;
  if (typeof r.score === "number" && typeof r.par === "number") return r.score - r.par;
  return undefined;
}

export function sessionHref(id: number): string {
  return `/golf/sessions#s-${id}`;
}

export function roundHref(id: number): string {
  return `/golf/sessions#r-${id}`;
}

export const SESSION_KIND_LABEL: Record<Session["kind"], string> = {
  lesson: "Lesson",
  practice: "Practice",
  range: "Range",
  simulator: "Simulator",
};

export const ROUND_FORMAT_LABEL: Record<Round["format"], string> = {
  stroke: "Stroke play",
  "best-ball": "Best ball",
  scramble: "Scramble",
  putting: "Putting",
};

/* ---------- counters ---------- */

export interface Counters {
  sessions: number;
  rounds: number;
  puttingRounds: number;
  venues: number;
  daysIn: number;
}

export function getCounters(player: Player, asOf = todayIso()): Counters {
  const s = getSessions(player);
  const r = getRounds(player);
  const venueSet = new Set([...s.map((x) => x.venueSlug), ...r.map((x) => x.venueSlug)]);
  return {
    sessions: s.length,
    rounds: r.filter(isCourseRound).length,
    puttingRounds: r.filter((x) => !isCourseRound(x)).length,
    venues: venueSet.size,
    daysIn: Math.max(0, daysBetween(GOLF_EPOCH, asOf)),
  };
}

/** Sessions and rounds in the trailing window, for the cadence readout. */
export function getStreak(player: Player, days = 30, asOf = todayIso()): number {
  const cutoff = parseDate(asOf).getTime() - days * DAY_MS;
  const inWindow = (d: string) => parseDate(d).getTime() >= cutoff;
  return (
    getSessions(player).filter((s) => inWindow(s.date)).length +
    getRounds(player).filter((r) => inWindow(r.date)).length
  );
}

/* ---------- activity ledger ---------- */

export interface ActivityItem {
  type: "session" | "round";
  id: number;
  date: string;
  venueSlug: string;
  /** "Lesson", "Best ball", ... */
  kind: string;
  /** The one number that matters for this entry, already formatted */
  headline?: string;
  headlineUnit?: string;
  note?: string;
  href: string;
  partners?: string[];
}

function sessionHeadline(s: Session): { value: string; unit: string } | undefined {
  const driver = s.clubs.find((c) => c.club === "driver");
  const drive = driver?.longest ?? driver?.total ?? driver?.carry;
  if (drive) return { value: fmtNum(drive), unit: "yd drive" };
  const seven = s.clubs.find((c) => c.club === "7i");
  if (seven?.carry) return { value: fmtNum(seven.carry), unit: "yd 7i carry" };
  const any = s.clubs.find((c) => c.carry ?? c.total);
  if (any) {
    const v = any.carry ?? any.total ?? 0;
    return { value: fmtNum(v), unit: `yd ${CLUB_SHORT[any.club]}${any.carry ? " carry" : ""}` };
  }
  if (s.durationMin) return { value: fmtNum(s.durationMin), unit: "min" };
  return undefined;
}

function roundHeadline(r: Round): { value: string; unit: string } | undefined {
  if (typeof r.score === "number") {
    const tp = roundToPar(r);
    return { value: fmtNum(r.score), unit: tp === undefined ? "" : `(${fmtToPar(tp)})` };
  }
  const tp = roundToPar(r);
  if (tp !== undefined) return { value: fmtToPar(tp), unit: r.course ? r.course.toLowerCase() : "" };
  return undefined;
}

export function toActivity(item: Session | Round): ActivityItem {
  if ("clubs" in item) {
    const h = sessionHeadline(item);
    return {
      type: "session",
      id: item.id,
      date: item.date,
      venueSlug: item.venueSlug,
      kind: SESSION_KIND_LABEL[item.kind],
      headline: h?.value,
      headlineUnit: h?.unit,
      note: item.takeaway ?? item.focus,
      href: sessionHref(item.id),
      partners: item.partners,
    };
  }
  const h = roundHeadline(item);
  return {
    type: "round",
    id: item.id,
    date: item.date,
    venueSlug: item.venueSlug,
    kind: ROUND_FORMAT_LABEL[item.format],
    headline: h?.value,
    headlineUnit: h?.unit,
    note: item.note,
    href: roundHref(item.id),
    partners: item.partners,
  };
}

/** Sessions and rounds merged, newest first. */
export function getActivity(player?: Player, limit?: number): ActivityItem[] {
  const merged = [...getSessions(player), ...getRounds(player)]
    .sort(byDate)
    .reverse()
    .map(toActivity);
  return typeof limit === "number" ? merged.slice(0, limit) : merged;
}

/* ---------- venues ---------- */

export interface VenueStats {
  /** distinct days on site */
  visits: number;
  sessions: number;
  rounds: number;
  puttingRounds: number;
  firstVisit?: string;
  lastVisit?: string;
  bestScore?: number;
  bestToPar?: number;
  longestDrive?: number;
}

export function getVenueStats(slug: string, player?: Player): VenueStats {
  const s = getSessions(player).filter((x) => x.venueSlug === slug);
  const r = getRounds(player).filter((x) => x.venueSlug === slug);
  const dates = [...s.map((x) => x.date), ...r.map((x) => x.date)].sort();
  const scored = r.filter((x) => typeof x.score === "number");
  const toPars = r.map(roundToPar).filter((v): v is number => typeof v === "number");
  const drives = s
    .flatMap((x) => x.clubs)
    .filter((c) => c.club === "driver")
    .map((c) => c.longest ?? c.total ?? c.carry)
    .filter((v): v is number => typeof v === "number");
  return {
    visits: new Set(dates).size,
    sessions: s.length,
    rounds: r.filter(isCourseRound).length,
    puttingRounds: r.filter((x) => !isCourseRound(x)).length,
    firstVisit: dates[0],
    lastVisit: dates[dates.length - 1],
    bestScore: scored.length ? Math.min(...scored.map((x) => x.score as number)) : undefined,
    bestToPar: toPars.length ? Math.min(...toPars) : undefined,
    longestDrive: drives.length ? Math.max(...drives) : undefined,
  };
}

/* ---------- personal records ---------- */

export type PRKey =
  | "longestDrive"
  | "sevenIronCarry"
  | "smashFactor"
  | "lowEighteen"
  | "lowNine"
  | "fewestPutts"
  | "lowPutting";

export interface PRRecord {
  key: PRKey;
  label: string;
  /** Present when data exists */
  display?: string;
  unit?: string;
  date?: string;
  venueSlug?: string;
  href?: string;
  /** Set within the last 14 days */
  isNew: boolean;
  /** What would fill the tile, for the empty state */
  hint: string;
}

const HIGHER_IS_BETTER: ClubMetricKey[] = [
  "carry",
  "total",
  "longest",
  "clubSpeed",
  "ballSpeed",
  "smashFactor",
];

interface Best<T> {
  value: number;
  source: T;
}

function bestOf<T>(items: T[], pick: (t: T) => number | undefined, lower = false): Best<T> | undefined {
  let best: Best<T> | undefined;
  for (const source of items) {
    const value = pick(source);
    if (typeof value !== "number") continue;
    if (!best || (lower ? value < best.value : value > best.value)) best = { value, source };
  }
  return best;
}

function driveDistance(c: ClubMetrics): number | undefined {
  return c.longest ?? c.total ?? c.carry;
}

export function getPRs(player: Player, asOf = todayIso()): PRRecord[] {
  const s = getSessions(player);
  const r = getRounds(player);
  const isNew = (date?: string) => !!date && daysBetween(date, asOf) <= 14;

  const sessionClubs = s.flatMap((session) => session.clubs.map((club) => ({ session, club })));

  const drive = bestOf(sessionClubs.filter((x) => x.club.club === "driver"), (x) =>
    driveDistance(x.club),
  );
  const seven = bestOf(sessionClubs.filter((x) => x.club.club === "7i"), (x) => x.club.carry);
  const smash = bestOf(sessionClubs, (x) => x.club.smashFactor);
  const low18 = bestOf(
    r.filter((x) => isCourseRound(x) && x.holesPlayed === 18 && x.format === "stroke"),
    (x) => x.score,
    true,
  );
  const low9 = bestOf(
    r.filter((x) => isCourseRound(x) && x.holesPlayed === 9 && x.format === "stroke"),
    (x) => x.score,
    true,
  );
  const putts = bestOf(r.filter(isCourseRound), (x) => x.putts, true);
  const lowPutting = bestOf(r.filter((x) => !isCourseRound(x)), roundToPar, true);

  const fromSession = (
    key: PRKey,
    label: string,
    hint: string,
    unit: string,
    b: Best<{ session: Session; club: ClubMetrics }> | undefined,
    format: (v: number) => string = (v) => fmtNum(v),
  ): PRRecord => ({
    key,
    label,
    hint,
    unit: b ? unit : undefined,
    display: b ? format(b.value) : undefined,
    date: b?.source.session.date,
    venueSlug: b?.source.session.venueSlug,
    href: b ? sessionHref(b.source.session.id) : undefined,
    isNew: isNew(b?.source.session.date),
  });

  const fromRound = (
    key: PRKey,
    label: string,
    hint: string,
    unit: string,
    b: Best<Round> | undefined,
    format: (v: number) => string = (v) => fmtNum(v),
  ): PRRecord => ({
    key,
    label,
    hint,
    unit: b ? unit : undefined,
    display: b ? format(b.value) : undefined,
    date: b?.source.date,
    venueSlug: b?.source.venueSlug,
    href: b ? roundHref(b.source.id) : undefined,
    isNew: isNew(b?.source.date),
  });

  return [
    fromSession("longestDrive", "Longest drive", "First driver session on a monitor", "yds", drive),
    fromSession("sevenIronCarry", "7-iron carry", "First 7-iron carry number from GOLFTEC", "yds", seven),
    fromSession("smashFactor", "Smash factor", "Ball speed over club speed", "", smash, (v) => v.toFixed(2)),
    fromRound("lowEighteen", "Low 18", "First scored stroke-play round", "", low18),
    fromRound("lowNine", "Low 9", "First scored nine", "", low9),
    fromRound("fewestPutts", "Fewest putts", "First round with putts counted", "", putts),
    fromRound("lowPutting", "Low putting round", "A PopStroke card", "to par", lowPutting, fmtToPar),
  ];
}

/**
 * Which (club, metric) values in each session were a record at the time.
 * Computed chronologically so the ledger can mark the moment, not just the
 * current best.
 */
export function getSessionPRFlags(player: Player): Map<number, Set<string>> {
  const flags = new Map<number, Set<string>>();
  const running = new Map<string, number>();
  for (const session of getSessions(player)) {
    const set = new Set<string>();
    for (const club of session.clubs) {
      for (const metric of HIGHER_IS_BETTER) {
        const value = club[metric];
        if (typeof value !== "number") continue;
        const key = `${club.club}:${metric}`;
        const prev = running.get(key);
        if (prev === undefined || value > prev) {
          running.set(key, value);
          set.add(key);
        }
      }
    }
    flags.set(session.id, set);
  }
  return flags;
}

/** True when `value` for club/metric beats every prior session's number. */
export function isPR(player: Player, club: Club, metric: ClubMetricKey, value: number, beforeDate: string): boolean {
  if (!HIGHER_IS_BETTER.includes(metric)) return false;
  const prior = getSessions(player)
    .filter((s) => s.date < beforeDate)
    .flatMap((s) => s.clubs)
    .filter((c) => c.club === club)
    .map((c) => c[metric])
    .filter((v): v is number => typeof v === "number");
  return prior.length === 0 || value > Math.max(...prior);
}

/* ---------- trends ---------- */

export interface TrendPoint {
  date: string;
  value: number;
  sessionId: number;
  venueSlug: string;
}

export function getClubTrend(player: Player, club: Club, metric: ClubMetricKey): TrendPoint[] {
  const out: TrendPoint[] = [];
  for (const s of getSessions(player)) {
    const c = s.clubs.find((x) => x.club === club);
    const value = c?.[metric];
    if (typeof value === "number") {
      out.push({ date: s.date, value, sessionId: s.id, venueSlug: s.venueSlug });
    }
  }
  return out;
}

/* ---------- the bag ---------- */

export interface BagRowData {
  item: BagItem;
  /** Average carry across all sessions logging this club, yards */
  avgCarry?: number;
  /** Best single shot */
  longest?: number;
  sessionsLogged: number;
  replacedBy?: BagItem;
}

function clubIndex(c?: Club): number {
  return c ? CLUB_ORDER.indexOf(c) : CLUB_ORDER.length;
}

export function getBag(player: Player): { inBag: BagRowData[]; retired: BagRowData[]; other: BagRowData[] } {
  const s = getSessions(player);
  const replacedBy = new Map<string, BagItem>();
  for (const item of bag) if (item.replaced) replacedBy.set(item.replaced, item);

  const rowsFor = (item: BagItem): BagRowData => {
    const metrics = item.club ? s.flatMap((x) => x.clubs).filter((c) => c.club === item.club) : [];
    const carries = metrics.map((c) => c.carry).filter((v): v is number => typeof v === "number");
    const longs = metrics.map((c) => c.longest).filter((v): v is number => typeof v === "number");
    return {
      item,
      avgCarry: carries.length ? Math.round(carries.reduce((a, b) => a + b, 0) / carries.length) : undefined,
      longest: longs.length ? Math.max(...longs) : undefined,
      sessionsLogged: metrics.length,
      replacedBy: replacedBy.get(item.id),
    };
  };

  const sorted = [...bag].sort((a, b) => clubIndex(a.club) - clubIndex(b.club));
  const isClub = (i: BagItem) => i.category !== "ball" && i.category !== "gear";
  return {
    inBag: sorted.filter((i) => isClub(i) && !i.retired).map(rowsFor),
    retired: sorted.filter((i) => !!i.retired).map(rowsFor),
    other: sorted.filter((i) => !isClub(i) && !i.retired).map(rowsFor),
  };
}

/** Clubs currently in play with any logged distance, longest first. */
export function getBagPreview(player: Player): BagRowData[] {
  return getBag(player).inBag;
}
