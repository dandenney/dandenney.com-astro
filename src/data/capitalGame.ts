import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export type AssetClass = "stock" | "commodity" | "crypto" | "other";
export type PositionSide = "long" | "short";
export type EntryStatus = "open" | "closed";

export interface CapitalGameEntry {
  id: string;
  date: string; // YYYY-MM-DD
  asset: string;
  assetClass: AssetClass;
  side: PositionSide;
  amountIn: number;
  amountOut: number;
  realizedPL?: number;
  status: EntryStatus;
  notes?: string;
  tags: string[];
}

export interface CapitalGameConfig {
  startingCapital: number;
  monthlyTargetRate: number;
}

export const capitalGameConfig: CapitalGameConfig = {
  startingCapital: 1000,
  monthlyTargetRate: 0.1,
};

const REAL_LEDGER_PATH = fileURLToPath(new URL("./capitalGameLedger.real.json", import.meta.url));

// Emergency fallback only. Used if the canonical real ledger file is missing,
// unreadable, invalid JSON, or has no valid entries.
export const capitalGameFallbackEntries: CapitalGameEntry[] = [
  {
    id: "fallback-001",
    date: "2026-03-01",
    asset: "SPY",
    assetClass: "stock",
    side: "long",
    amountIn: 10,
    amountOut: 0,
    realizedPL: 10,
    status: "closed",
    notes: "Fallback sample entry.",
    tags: ["fallback"],
  },
];

export interface CapitalGameLedgerLoadResult {
  entries: CapitalGameEntry[];
  source: "real" | "fallback";
  message?: string;
  path: string;
}

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string");

const isValidEntry = (value: unknown): value is CapitalGameEntry => {
  if (!value || typeof value !== "object") return false;

  const entry = value as Record<string, unknown>;

  return (
    typeof entry.id === "string" &&
    typeof entry.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(entry.date) &&
    typeof entry.asset === "string" &&
    ["stock", "commodity", "crypto", "other"].includes(String(entry.assetClass)) &&
    ["long", "short"].includes(String(entry.side)) &&
    typeof entry.amountIn === "number" &&
    Number.isFinite(entry.amountIn) &&
    typeof entry.amountOut === "number" &&
    Number.isFinite(entry.amountOut) &&
    (typeof entry.realizedPL === "undefined" ||
      (typeof entry.realizedPL === "number" && Number.isFinite(entry.realizedPL))) &&
    ["open", "closed"].includes(String(entry.status)) &&
    (typeof entry.notes === "undefined" || typeof entry.notes === "string") &&
    isStringArray(entry.tags)
  );
};

export const loadCapitalGameEntries = async (): Promise<CapitalGameLedgerLoadResult> => {
  try {
    const raw = await readFile(REAL_LEDGER_PATH, "utf-8");
    const parsed = JSON.parse(raw) as unknown;

    if (!Array.isArray(parsed)) {
      return {
        entries: capitalGameFallbackEntries,
        source: "fallback",
        message: "Real ledger is not an array.",
        path: REAL_LEDGER_PATH,
      };
    }

    const validEntries = parsed.filter(isValidEntry);

    if (validEntries.length === 0) {
      return {
        entries: capitalGameFallbackEntries,
        source: "fallback",
        message: "Real ledger has no valid entries.",
        path: REAL_LEDGER_PATH,
      };
    }

    return {
      entries: validEntries,
      source: "real",
      path: REAL_LEDGER_PATH,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown ledger read error.";

    return {
      entries: capitalGameFallbackEntries,
      source: "fallback",
      message,
      path: REAL_LEDGER_PATH,
    };
  }
};

export interface EquityPoint {
  date: string;
  equity: number;
  targetEquity: number;
  netFlow: number;
}

export const sortEntriesByDate = (entries: CapitalGameEntry[]): CapitalGameEntry[] =>
  [...entries].sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));

export const getNetFlow = (entry: CapitalGameEntry): number =>
  Number((entry.amountIn - entry.amountOut).toFixed(2));

const monthDiff = (from: Date, to: Date): number =>
  (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());

export const buildEquityCurve = (
  entries: CapitalGameEntry[],
  config: CapitalGameConfig,
): EquityPoint[] => {
  const sorted = sortEntriesByDate(entries);
  const startDate = sorted[0] ? new Date(`${sorted[0].date}T00:00:00`) : new Date();

  let equity = config.startingCapital;

  return sorted.map((entry) => {
    const netFlow = getNetFlow(entry);
    equity = Number((equity + netFlow).toFixed(2));

    const entryDate = new Date(`${entry.date}T00:00:00`);
    const elapsedMonths = Math.max(monthDiff(startDate, entryDate), 0);
    const targetEquity = Number(
      (config.startingCapital * Math.pow(1 + config.monthlyTargetRate, elapsedMonths + 1)).toFixed(
        2,
      ),
    );

    return {
      date: entry.date,
      equity,
      targetEquity,
      netFlow,
    };
  });
};
