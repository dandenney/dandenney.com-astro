// Imports a Stock Yardage export (https://stock-yardage.netlify.app → Export) into
// src/data/golf/yardages.json, which /golf and /golf/bag read. Keeps the derived
// card per player and drops the raw shots.
// Usage: yarn golf:yardages <stock-yardage-YYYY-MM-DD.json>
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "src/data/golf/yardages.json");
const SUPPORTED_VERSION = 1;
const SITE_CLUBS = new Set(["driver", "3w", "5w", "hybrid", "4i", "5i", "6i", "7i", "8i", "9i", "pw", "gw", "sw", "lw", "putter"]);
const VENUES = ["golftec", "topgolf", "range", "course"] as const;

type Spread = { low: number; typical: number; high: number; n: number };
type Pair = { tee?: Spread; ground?: Spread };
type Club = { id: string; label: string; short: string; site?: string; carry?: Pair; total?: Pair; venues?: Record<string, Spread> };
type Player = { id: string; name: string; card?: Club[] };
type Export = { format?: string; version?: number; exportedAt?: string; goodShots?: number; players?: Player[] };

const file = process.argv[2];
if (!file) {
  console.error("Usage: yarn golf:yardages <stock-yardage export .json>");
  process.exit(1);
}

const data = JSON.parse(readFileSync(file, "utf8")) as Export;
if (data.format !== "stock-yardage") throw new Error(`${file} isn't a Stock Yardage export`);
if ((data.version ?? 0) > SUPPORTED_VERSION) throw new Error(`Export version ${data.version} is newer than this script (${SUPPORTED_VERSION})`);

const spread = (s: unknown): Spread | undefined => {
  if (!s || typeof s !== "object") return undefined;
  const { low, typical, high, n } = s as Spread;
  return [low, typical, high, n].every((v) => typeof v === "number" && Number.isFinite(v)) ? { low, typical, high, n } : undefined;
};
const pair = (p?: Pair) => {
  const out: Pair = {};
  const tee = spread(p?.tee);
  const ground = spread(p?.ground);
  if (tee) out.tee = tee;
  if (ground) out.ground = ground;
  return out;
};

const players = (data.players ?? []).map((p) => ({
  id: String(p.id),
  name: String(p.name),
  card: (p.card ?? []).map((c) => {
    const venues: Record<string, Spread> = {};
    for (const v of VENUES) {
      const s = spread(c.venues?.[v]);
      if (s) venues[v] = s;
    }
    return {
      id: String(c.id),
      label: String(c.label),
      short: String(c.short),
      ...(c.site && SITE_CLUBS.has(c.site) ? { site: c.site } : {}),
      carry: pair(c.carry),
      total: pair(c.total),
      venues,
    };
  }),
}));

const out = { format: "stock-yardage", version: SUPPORTED_VERSION, exportedAt: data.exportedAt ?? null, goodShots: data.goodShots ?? 5, players };
writeFileSync(OUT, `${JSON.stringify(out, null, 2)}\n`);

for (const p of players) {
  const logged = p.card.filter((c) => c.carry.tee || c.carry.ground);
  console.log(`${p.name}: ${logged.length} of ${p.card.length} clubs with good shots`);
}
console.log(`Wrote ${OUT}`);
