import type { MartingaleBet } from "../../data/martingaleBets";
import type { NormalizedShippSignal } from "./types";

const STOP_WORDS = new Set([
  "over",
  "under",
  "alt",
  "spread",
  "moneyline",
  "team",
  "total",
  "points",
  "assists",
  "rebounds",
  "threes",
  "and",
  "the",
  "vs",
]);

const tokenize = (value: string): string[] =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 3 && !STOP_WORDS.has(part));

const getTeamTokens = (signal: NormalizedShippSignal): string[] => {
  const fromTeams = [signal.home, signal.away]
    .filter(Boolean)
    .flatMap((team) => tokenize(team!));

  const fromGameId = signal.gameId ? tokenize(signal.gameId) : [];
  return Array.from(new Set([...fromTeams, ...fromGameId]));
};

const inferBetSport = (bet: MartingaleBet): string | null => {
  const pick = bet.pick.toLowerCase();

  // Lightweight, intentionally narrow: infer NBA only for now based on known team tokens.
  // This keeps matching conservative and avoids false positives while we validate UX.
  const nbaTokens = [
    "lakers",
    "celtics",
    "knicks",
    "wizards",
    "heat",
    "nuggets",
    "trail",
    "blazers",
    "scoot",
    "henderson",
    "edwards",              // Justin Edwards
    "sensabaugh",           // Brice Sensabaugh
    "suns", "phoenix", "pho", // Phoenix Suns
    "bos", "boston",            // Boston Celtics (abbrev; "celtics" already above)
    "sixers",
    "philadelphia",
    "cavaliers", "cleveland", "cle", // Cleveland Cavaliers
    "bucks", "milwaukee", "mil",     // Milwaukee Bucks
    "thunder", "oklahoma", "okc",    // Oklahoma City Thunder
    "nets", "brooklyn", "bkn",       // Brooklyn Nets
  ];

  return nbaTokens.some((token) => pick.includes(token)) ? "nba" : null;
};

export interface BetSignalMatch {
  signal: NormalizedShippSignal;
  reasons: string[];
}

export const matchSignalsForBet = (
  bet: MartingaleBet,
  signals: NormalizedShippSignal[],
): BetSignalMatch[] => {
  const pickTokens = tokenize(bet.pick);
  const inferredSport = inferBetSport(bet);

  return signals
    .map((signal) => {
      const reasons: string[] = [];
      const signalTokens = getTeamTokens(signal);
      const sharedTokens = pickTokens.filter((token) => signalTokens.includes(token));

      if (sharedTokens.length) {
        reasons.push(`Team token overlap: ${sharedTokens.join(", ")}`);
      }

      if (inferredSport && signal.sport?.toLowerCase() === inferredSport) {
        reasons.push(`Sport alignment: ${inferredSport.toUpperCase()}`);
      }

      return { signal, reasons };
    })
    .filter((match) => match.reasons.length > 0)
    .sort((a, b) => b.signal.receivedAt.localeCompare(a.signal.receivedAt));
};
