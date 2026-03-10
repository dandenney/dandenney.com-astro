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
    result: "loss",
    balanceImpact: -30,
  },
  {
    id: 2,
    date: "2026-03-10",
    pick: "Wizards/Heat Under 242.5",
    line: "-110",
    amount: 60,
    result: "pending",
    balanceImpact: 0,
  },
];
