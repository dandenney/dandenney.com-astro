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

// Fake starter ledger (small and realistic-ish): deposits/withdrawals are represented
// as cash in/out at entry level, so equity is start + sum(amountIn - amountOut).
export const capitalGameEntries: CapitalGameEntry[] = [
  {
    id: "cg-001",
    date: "2026-01-03",
    asset: "SPY",
    assetClass: "stock",
    side: "long",
    amountIn: 22,
    amountOut: 0,
    realizedPL: 22,
    status: "closed",
    notes: "Quick momentum scalp after CPI drift.",
    tags: ["day-trade", "index"],
  },
  {
    id: "cg-002",
    date: "2026-01-15",
    asset: "GC",
    assetClass: "commodity",
    side: "long",
    amountIn: 14,
    amountOut: 0,
    realizedPL: 14,
    status: "closed",
    notes: "Gold bounce into resistance.",
    tags: ["futures", "swing"],
  },
  {
    id: "cg-003",
    date: "2026-02-04",
    asset: "BTC",
    assetClass: "crypto",
    side: "long",
    amountIn: 31,
    amountOut: 0,
    realizedPL: 31,
    status: "closed",
    notes: "Took partial into strength.",
    tags: ["crypto", "swing"],
  },
  {
    id: "cg-004",
    date: "2026-02-11",
    asset: "TSLA",
    assetClass: "stock",
    side: "short",
    amountIn: 0,
    amountOut: 38,
    realizedPL: -38,
    status: "closed",
    notes: "Squeezed out; respected stop.",
    tags: ["equity", "loss"],
  },
  {
    id: "cg-005",
    date: "2026-02-20",
    asset: "ETH",
    assetClass: "crypto",
    side: "long",
    amountIn: 47,
    amountOut: 0,
    realizedPL: 47,
    status: "closed",
    notes: "Breakout continuation.",
    tags: ["crypto", "trend"],
  },
  {
    id: "cg-006",
    date: "2026-03-02",
    asset: "AAPL",
    assetClass: "stock",
    side: "long",
    amountIn: 0,
    amountOut: 21,
    realizedPL: -21,
    status: "closed",
    notes: "Gap failed, took planned loss.",
    tags: ["equity", "risk"],
  },
  {
    id: "cg-007",
    date: "2026-03-05",
    asset: "NQ",
    assetClass: "other",
    side: "long",
    amountIn: 18,
    amountOut: 0,
    realizedPL: 18,
    status: "open",
    notes: "Runner still open; partial realized.",
    tags: ["index", "open"],
  },
  {
    id: "cg-008",
    date: "2026-03-11",
    asset: "SOL",
    assetClass: "crypto",
    side: "long",
    amountIn: 36,
    amountOut: 0,
    realizedPL: 36,
    status: "closed",
    notes: "Momentum rotation; scaled out into spike.",
    tags: ["crypto", "winner"],
  },
];

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
