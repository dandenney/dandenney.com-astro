export type BetResult = "win" | "loss" | "pending";

export interface MartingaleBet {
  id: number;
  owner?: "Dan" | "GardenOf";
  date: string;
  seriesId: string;
  pick: string;
  line: string;
  amount: number;
  result: BetResult;
  // Cashflow model (explicit ledger):
  // - stakeOut is always debited at bet placement.
  // - returnAmount is only credited after settlement (0 for losses, undefined for pending).
  stakeOut?: number;
  returnAmount?: number;
  // Legacy field retained for backward compatibility with older rows/history.
  // New calculations should prefer stakeOut/returnAmount via helpers below.
  balanceImpact?: number;
}

export interface HysaBenchmarkConfig {
  principal: number;
  annualYield: number;
  asOfDate?: string;
}

export const startingBalance = 500;

export const hysaBenchmark: HysaBenchmarkConfig = {
  principal: 500,
  annualYield: 0.042,
};

export const martingaleBets: MartingaleBet[] = [
  {
    id: 1,
    date: "2026-03-09",
    seriesId: "A",
    pick: "Knicks -2.5",
    line: "-106",
    amount: 30,
    result: "loss",
    stakeOut: 30,
    returnAmount: 0,
    balanceImpact: -30,
  },
  {
    id: 2,
    date: "2026-03-10",
    seriesId: "A",
    pick: "Wizards/Heat Under 242.5",
    line: "-110",
    amount: 60,
    result: "loss",
    stakeOut: 60,
    returnAmount: 0,
    balanceImpact: -60,
  },
  {
    id: 3,
    date: "2026-03-10",
    seriesId: "B",
    pick: "Lakers +3",
    line: "-112",
    amount: 30,
    result: "win",
    stakeOut: 30,
    returnAmount: 56.79,
    balanceImpact: 56.79,
  },
  {
    id: 4,
    date: "2026-03-11",
    seriesId: "A",
    pick: "Nuggets -6.5",
    line: "-110",
    amount: 120,
    result: "win",
    stakeOut: 120,
    returnAmount: 229.09,
    balanceImpact: 229.09,
  },
  {
    id: 5,
    date: "2026-03-12",
    seriesId: "C",
    pick: "Celtics +6.5",
    line: "-106",
    amount: 30,
    result: "win",
    stakeOut: 30,
    returnAmount: 58.3,
    balanceImpact: 58.3,
  },
  {
    id: 6,
    date: "2026-03-13",
    seriesId: "D",
    pick: "Scoot Henderson Over 4.5 Assists",
    line: "+100",
    amount: 30,
    result: "loss",
    stakeOut: 30,
    returnAmount: 0,
    balanceImpact: 0,
  },
  {
    id: 7,
    date: "2026-03-14",
    seriesId: "D",
    pick: "CHA@SA Over",
    line: "-112",
    amount: 60,
    result: "win",
    stakeOut: 60,
    returnAmount: 217.36,
    balanceImpact: 217.36,
  },
  {
    id: 8,
    owner: "Dan",
    date: "2026-03-15",
    seriesId: "D",
    pick: "Justin Edwards Over 11.5 Points",
    line: "-112",
    amount: 30,
    result: "pending",
    stakeOut: 30,
  },
  {
    id: 9,
    owner: "GardenOf",
    date: "2026-03-15",
    seriesId: "A",
    pick: "Justin Edwards Over 11.5 Points",
    line: "-112",
    amount: 30,
    result: "pending",
    stakeOut: 30,
  },
];

export const getStakeOut = (bet: MartingaleBet): number =>
  Number((bet.stakeOut ?? bet.amount).toFixed(2));

export const getReturnAmount = (bet: MartingaleBet): number => {
  if (bet.result === "pending") return 0;
  if (typeof bet.returnAmount === "number") return Number(bet.returnAmount.toFixed(2));

  // Legacy migration fallback for older records that only stored net impact.
  if (typeof bet.balanceImpact === "number") {
    return Number((bet.balanceImpact > 0 ? bet.balanceImpact : 0).toFixed(2));
  }

  return 0;
};

export const getNetImpact = (bet: MartingaleBet): number =>
  Number((getReturnAmount(bet) - getStakeOut(bet)).toFixed(2));
