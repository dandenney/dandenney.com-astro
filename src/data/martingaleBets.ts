export type BetResult = "win" | "loss" | "pending";

export interface MartingaleBet {
  id: number;
  date: string;
  seriesId: string;
  pick: string;
  line: string;
  amount: number;
  result: BetResult;
  balanceImpact: number;
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
    balanceImpact: -30,
  },
  {
    id: 2,
    date: "2026-03-10",
    seriesId: "A",
    pick: "Wizards/Heat Under 242.5",
    line: "-110",
    amount: 60,
    result: "pending",
    balanceImpact: 0,
  },
];
