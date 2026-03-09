export type BetResult = "win" | "loss";

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
  { id: 1, date: "2026-02-10", pick: "Knicks ML", line: "-118", amount: 25, result: "loss", balanceImpact: -25 },
  { id: 2, date: "2026-02-11", pick: "Lakers +4.5", line: "-110", amount: 50, result: "loss", balanceImpact: -50 },
  { id: 3, date: "2026-02-12", pick: "Nuggets ML", line: "-122", amount: 100, result: "win", balanceImpact: 82 },
  { id: 4, date: "2026-02-15", pick: "Celtics -3.5", line: "-108", amount: 25, result: "win", balanceImpact: 23 },
  { id: 5, date: "2026-02-16", pick: "Kings ML", line: "+102", amount: 25, result: "loss", balanceImpact: -25 },
  { id: 6, date: "2026-02-17", pick: "Suns -2.5", line: "-110", amount: 50, result: "loss", balanceImpact: -50 },
  { id: 7, date: "2026-02-18", pick: "Mavs ML", line: "-115", amount: 100, result: "loss", balanceImpact: -100 },
  { id: 8, date: "2026-02-19", pick: "Warriors +5.5", line: "-105", amount: 200, result: "win", balanceImpact: 190 },
  { id: 9, date: "2026-02-21", pick: "Bucks ML", line: "-120", amount: 25, result: "win", balanceImpact: 21 },
  { id: 10, date: "2026-02-22", pick: "Heat +2.5", line: "-110", amount: 25, result: "loss", balanceImpact: -25 },
];
