/**
 * Stock yardages, imported from the Stock Yardage app
 * (https://stock-yardage.netlify.app) with `yarn golf:yardages <export.json>`.
 * Each club's numbers are its last five good shots: low, typical (median),
 * high, split by tee and no tee, plus the same per venue.
 */
import data from "@/data/golf/yardages.json";
import type { Club, Player } from "@/data/golf/types";

export type YardageVenue = "golftec" | "topgolf" | "range" | "course";

export const YARDAGE_VENUE_LABEL: Record<YardageVenue, string> = {
  golftec: "GOLFTEC",
  topgolf: "Topgolf",
  range: "Range",
  course: "Course",
};

export interface YardageSpread {
  low: number;
  typical: number;
  high: number;
  n: number;
}

export interface YardageClub {
  id: string;
  label: string;
  short: string;
  /** Matching site club key, when the app club has one */
  site?: Club;
  carry: { tee?: YardageSpread; ground?: YardageSpread };
  total: { tee?: YardageSpread; ground?: YardageSpread };
  venues: Partial<Record<YardageVenue, YardageSpread>>;
}

export interface YardagePlayer {
  id: string;
  name: string;
  card: YardageClub[];
}

export interface YardageFile {
  format: "stock-yardage";
  version: number;
  exportedAt: string | null;
  goodShots: number;
  players: YardagePlayer[];
}

const file = data as YardageFile;

export const YARDAGE_APP_URL = "https://stock-yardage.netlify.app";

export function yardagesExportedAt(): string | null {
  return file.exportedAt;
}

export function yardageGoodShots(): number {
  return file.goodShots;
}

/** A player's card, only the clubs with at least one good shot, in bag order. */
export function getYardages(player: Player): YardageClub[] {
  const p = file.players.find((x) => x.id === player);
  if (!p) return [];
  return p.card.filter((c) => c.carry.tee || c.carry.ground);
}

/** Players with any yardage, in file order. */
export function getYardagePlayers(): YardagePlayer[] {
  return file.players
    .map((p) => ({ ...p, card: p.card.filter((c) => c.carry.tee || c.carry.ground) }))
    .filter((p) => p.card.length > 0);
}

/** Stock carry for a site club: no-tee typical, or tee for the driver or when that's all there is. */
export function getStockCarry(player: Player, club: Club): { typical: number; low: number; high: number; tee: boolean } | undefined {
  const c = getYardages(player).find((x) => x.site === club);
  if (!c) return undefined;
  const preferTee = club === "driver" || !c.carry.ground;
  const s = preferTee ? (c.carry.tee ?? c.carry.ground) : c.carry.ground;
  if (!s) return undefined;
  return { typical: s.typical, low: s.low, high: s.high, tee: preferTee && !!c.carry.tee };
}

/** Axis bounds that fit every club on the card, on 25-yard steps. */
export function yardageAxis(clubs: YardageClub[]): { min: number; max: number; ticks: number[] } {
  const all = clubs.flatMap((c) => [c.carry.tee, c.carry.ground]).filter((s): s is YardageSpread => !!s);
  const step = 25;
  if (!all.length) return { min: 0, max: 250, ticks: [0, 50, 100, 150, 200, 250] };
  const min = Math.max(0, Math.floor((Math.min(...all.map((s) => s.low)) - 5) / step) * step);
  const max = Math.ceil((Math.max(...all.map((s) => s.high)) + 5) / step) * step;
  const ticks: number[] = [];
  for (let t = min; t <= max; t += step) ticks.push(t);
  return { min, max, ticks };
}

