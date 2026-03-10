export type BetResult = "win" | "loss" | "pending";

export interface MartingaleBet {
  id: number;
  date: string;
  pick: string;
  line: string;
  amount: number;
  result: BetResult;
  balanceImpact: number;
}

export const startingBalance = 1000;

export const martingaleBets: MartingaleBet[] = [
  {
    id: 1,
    date: "2026-03-09",
    pick: "Knicks -2.5",
    line: "-106",
    amount: 30,
    result: "pending",
    balanceImpact: 0,
  },
];
