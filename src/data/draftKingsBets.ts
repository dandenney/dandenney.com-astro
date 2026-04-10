export type DKBetResult = "win" | "loss" | "void" | "pending";

export interface DKBet {
  id: number;
  date: string;
  seriesId?: string;
  pick: string;
  line: string;
  stakeOut: number;
  result: DKBetResult;
  returnAmount?: number;
  isBonus?: boolean;
  notes?: string;
}

export const dkStartingBalance = 750;
// Promo/bonus cash credited at account open — not winnings, not real cash deposit
export const dkStartingBonusCash = 33.00;

export const dkBets: DKBet[] = [
  // Series A
  {
    id: 1,
    date: "2026-03-23",
    seriesId: "A",
    pick: "Amen Thompson Over 18.5",
    line: "-107",
    stakeOut: 50,
    result: "win",
    returnAmount: 98.72,
  },
  // Bonus bet
  {
    id: 2,
    date: "2026-03-24",
    pick: "Karl-Anthony Towns Under 21.5 Total Points",
    line: "-113",
    stakeOut: 0,
    result: "win",
    returnAmount: 20.83,
    isBonus: true,
  },
  // Series B — Loss 1
  {
    id: 3,
    date: "2026-03-24",
    seriesId: "B",
    pick: "Devin Booker Over 26.5 Total Points",
    line: "-114",
    stakeOut: 50,
    result: "loss",
    returnAmount: 0,
  },
  // Bonus bets
  {
    id: 4,
    date: "2026-03-25",
    pick: "Gary Payton II Over 11.5",
    line: "+100",
    stakeOut: 0,
    result: "loss",
    returnAmount: 0,
    isBonus: true,
  },
  {
    id: 5,
    date: "2026-03-25",
    pick: "BKN @ GS Over 217.5",
    line: "-105",
    stakeOut: 0,
    result: "loss",
    returnAmount: 0,
    isBonus: true,
  },
  // Series C (Profit Bonus promotion — lower starting stake)
  {
    id: 6,
    date: "2026-03-25",
    seriesId: "C",
    pick: "New York Yankees",
    line: "-126",
    stakeOut: 20,
    result: "win",
    returnAmount: 43.80,
    notes: "Profit Bonus",
  },
  // Bonus bets
  {
    id: 7,
    date: "2026-03-26",
    pick: "PIT @ NYM Over 7",
    line: "-108",
    stakeOut: 0,
    result: "win",
    returnAmount: 23.14,
    isBonus: true,
  },
  {
    id: 8,
    date: "2026-03-26",
    pick: "Baltimore Orioles Money Line",
    line: "-143",
    stakeOut: 0,
    result: "win",
    returnAmount: 17.48,
    isBonus: true,
  },
  // Series D
  {
    id: 9,
    date: "2026-03-26",
    seriesId: "D",
    pick: "Everson Pereira Under 0.5 Hits",
    line: "-118",
    stakeOut: 20,
    result: "win",
    returnAmount: 45.40,
  },
  // Bonus bets
  {
    id: 10,
    date: "2026-03-27",
    pick: "Brice Sensabaugh Over 5.5 Rebounds + Assists",
    line: "-123",
    stakeOut: 0,
    result: "win",
    returnAmount: 20.32,
    isBonus: true,
  },
  {
    id: 11,
    date: "2026-03-27",
    pick: "Jalen Johnson Under 17.5 Rebounds + Assists",
    line: "-123",
    stakeOut: 0,
    result: "win",
    returnAmount: 20.32,
    isBonus: true,
  },
  {
    id: 12,
    date: "2026-03-27",
    pick: "Jay Huff Under 1.5 Blocks",
    line: "-107",
    stakeOut: 0,
    result: "win",
    returnAmount: 23.36,
    isBonus: true,
  },
  // Series B — Loss 2
  {
    id: 13,
    date: "2026-03-28",
    seriesId: "B",
    pick: "Tyrese Maxey Under 34.5 Pts + Rebs + Asts",
    line: "-114",
    stakeOut: 50,
    result: "loss",
    returnAmount: 0,
  },
  // Series B — Win
  {
    id: 14,
    date: "2026-03-29",
    seriesId: "B",
    pick: "Dejounte Murray Under 11.5 Rebounds + Assists",
    line: "-131",
    stakeOut: 100,
    result: "win",
    returnAmount: 176.33,
  },
  // Series E
  {
    id: 15,
    date: "2026-03-30",
    seriesId: "E",
    pick: "Rudy Gobert Under 12.5 Rebounds",
    line: "-136",
    stakeOut: 30,
    result: "win",
    returnAmount: 52.05,
  },
  // Series F — Loss 1
  {
    id: 16,
    date: "2026-03-31",
    seriesId: "F",
    pick: "Duncan Robinson Over 4.5 Rebounds + Assists",
    line: "-147",
    stakeOut: 30,
    result: "loss",
    returnAmount: 0,
  },
  // Series F — Loss 2
  {
    id: 17,
    date: "2026-04-01",
    seriesId: "F",
    pick: "Jayson Tatum Under 37.5 Pts + Rebs + Asts",
    line: "-113",
    stakeOut: 60,
    result: "loss",
    returnAmount: 0,
  },
  // Series F — Win
  {
    id: 18,
    date: "2026-04-02",
    seriesId: "F",
    pick: "Toumani Camara Over 14.5 Points",
    line: "-114",
    stakeOut: 120,
    result: "win",
    returnAmount: 225.26,
  },
  // Series G
  {
    id: 19,
    date: "2026-04-03",
    seriesId: "G",
    pick: "Josh Giddey Under 17.5 Rebs + Asts",
    line: "-111",
    stakeOut: 30,
    result: "win",
    returnAmount: 57.02,
  },
  // Series H
  {
    id: 20,
    date: "2026-04-04",
    seriesId: "H",
    pick: "Dylan Harper Under 15.5 Points and Assists",
    line: "-103",
    stakeOut: 30,
    result: "win",
    returnAmount: 59.12,
  },
  // Series I — Void (stake refunded)
  {
    id: 21,
    date: "2026-04-05",
    seriesId: "I",
    pick: "Dejounte Murray Under 12.5 Rebounds + Assists",
    line: "-115",
    stakeOut: 30,
    result: "void",
    returnAmount: 30,
  },
  // Series I — re-bet same stake after void
  {
    id: 22,
    date: "2026-04-06",
    seriesId: "I",
    pick: "Joel Embiid Under 40.5 Points + Rebounds + Assists",
    line: "-117",
    stakeOut: 30,
    result: "loss",
    returnAmount: 0,
  },
  // Series I — re-bet same stake after void
  {
    id: 23,
    date: "2026-04-07",
    seriesId: "I",
    pick: "Cam Schlittler Pitcher to Record a Win",
    line: "+108",
    stakeOut: 60,
    result: "loss",
    returnAmount: 0,
  },
  // Bonus bet
  {
    id: 24,
    date: "2026-04-07",
    pick: "Cleveland Guardians Moneyline",
    line: "-141",
    stakeOut: 0,
    result: "win",
    returnAmount: 3.54,
    isBonus: true,
  },
  // Series I — re-bet same stake after void
  {
    id: 25,
    date: "2026-04-08",
    seriesId: "I",
    pick: "Detroit Tigers -1.5",
    line: "+108",
    stakeOut: 120,
    result: "loss",
    returnAmount: 0,
  },
  // Series I — re-bet same stake after void
  {
    id: 26,
    date: "2026-04-09",
    seriesId: "I",
    pick: "RJ Barrett Under 30.5 Total Points + Assists + Rebounds",
    line: "-119",
    stakeOut: 240,
    result: "pending",
    returnAmount: 0,
  },
];

export const getDKReturnAmount = (bet: DKBet): number => {
  if (bet.result === "pending") return 0;
  return Number((bet.returnAmount ?? 0).toFixed(2));
};

export const getDKNetImpact = (bet: DKBet): number =>
  Number((getDKReturnAmount(bet) - bet.stakeOut).toFixed(2));

/** First bet in a new series: largest multiple of 10 where balance >= 15× stake */
export const getDKNewSeriesStake = (balance: number): number =>
  Math.max(10, Math.floor(balance / 15 / 10) * 10);
