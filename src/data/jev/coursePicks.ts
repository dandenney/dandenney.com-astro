// Joins settled Rithmm picks with the Jev answers saved by scripts/jev/run-rithmm-picks.ts.
// Everything the Jev mini course shows comes from here, computed at build time.
import { rithhmmPicks, type RithhmmPick } from "@/data/rithhmmPicks";
import jevRun from "@/data/jev/rithmmPicksJev.json";

export type BetType = "moneyline" | "spread" | "game_total" | "player_over" | "player_under";

export interface JevAnswers {
  willHit: number;
  formBacksPick: number;
  betType: BetType;
  betTypeConfidence: number;
  betTypeProbabilities: Record<BetType, number>;
  lean: number;
  leanConfidence: number;
  leanProbabilities: [number, number, number];
}

export interface CoursePick {
  id: number;
  date: string;
  sport: RithhmmPick["sport"];
  pick: string;
  matchup: string;
  odds: string;
  recentForm?: string;
  modelProjection?: string;
  /** Rithmm's stated confidence as a probability, when it gave one. */
  rithmm: number | null;
  win: boolean;
  /** Break-even hit rate implied by the odds. */
  breakEven: number;
  /** Profit in units on a 1-unit win. */
  payout: number;
  labeledType: BetType;
  facts: JevAnswers;
  withRithmm: JevAnswers;
}

export const jevModel: string = jevRun.model;

const americanOdds = (odds: string) => Number(odds.replace(/[^\d+-]/g, ""));

export function breakEvenFor(odds: string) {
  const n = americanOdds(odds);
  return n < 0 ? -n / (-n + 100) : 100 / (n + 100);
}

function payoutFor(odds: string) {
  const n = americanOdds(odds);
  return n < 0 ? 100 / -n : n / 100;
}

function betTypeFor(propType: RithhmmPick["propType"]): BetType {
  if (propType === "moneyline") return "moneyline";
  if (propType === "run-line" || propType === "spread") return "spread";
  if (propType.startsWith("game-total")) return "game_total";
  return propType.endsWith("-over") ? "player_over" : "player_under";
}

function readAnswers(response: any): JevAnswers {
  const { will_hit, form_backs_pick, bet_type, lean } = response.answers;
  return {
    willHit: will_hit.noul,
    formBacksPick: form_backs_pick.noul,
    betType: bet_type.choice,
    betTypeConfidence: bet_type.confidence,
    betTypeProbabilities: bet_type.probabilities,
    lean: lean.score,
    leanConfidence: lean.confidence,
    leanProbabilities: [lean.probabilities["0"], lean.probabilities["1"], lean.probabilities["2"]],
  };
}

const responses = jevRun.picks as Record<string, { withRithmm: any; withoutRithmm: any }>;

export const coursePicks: CoursePick[] = rithhmmPicks
  .filter((pick) => responses[pick.id] && (pick.result === "win" || pick.result === "loss"))
  .map((pick) => ({
    id: pick.id,
    date: pick.date,
    sport: pick.sport,
    pick: pick.pick,
    matchup: pick.matchup,
    odds: pick.odds,
    recentForm: pick.recentForm,
    modelProjection: pick.modelProjection,
    rithmm: pick.confidence != null ? pick.confidence / 100 : null,
    win: pick.result === "win",
    breakEven: breakEvenFor(pick.odds),
    payout: payoutFor(pick.odds),
    labeledType: betTypeFor(pick.propType),
    facts: readAnswers(responses[pick.id].withoutRithmm),
    withRithmm: readAnswers(responses[pick.id].withRithmm),
  }));

/** Picks Rithmm gave a confidence for, so all three sources can be compared on the same set. */
export const comparablePicks = coursePicks.filter((pick) => pick.rithmm != null);

/** The slice of a pick the browser widgets need, kept small because it ships in the page. */
export function toClientPick(pick: CoursePick) {
  return {
    id: pick.id,
    date: pick.date,
    sport: pick.sport,
    pick: pick.pick,
    matchup: pick.matchup,
    odds: pick.odds,
    recentForm: pick.recentForm ?? null,
    modelProjection: pick.modelProjection ?? null,
    rithmm: pick.rithmm,
    win: pick.win,
    breakEven: Number(pick.breakEven.toFixed(4)),
    payout: pick.payout,
    facts: pick.facts.willHit,
    withRithmm: pick.withRithmm.willHit,
  };
}

export type ClientPick = ReturnType<typeof toClientPick>;

export type Source = "rithmm" | "facts" | "withRithmm";

export const sourceLabels: Record<Source, string> = {
  rithmm: "Rithmm's confidence",
  facts: "Jev, facts only",
  withRithmm: "Jev, with Rithmm's projection",
};

export function probabilityFrom(pick: CoursePick, source: Source) {
  return source === "rithmm" ? pick.rithmm! : pick[source].willHit;
}

/** Share of (winner, loser) pairs where the winner got the higher number. 0.5 is a coin flip. */
export function rankingSkill(picks: CoursePick[], source: Source) {
  let credit = 0;
  let pairs = 0;
  for (const winner of picks) {
    if (!winner.win) continue;
    for (const loser of picks) {
      if (loser.win) continue;
      pairs++;
      const a = probabilityFrom(winner, source);
      const b = probabilityFrom(loser, source);
      credit += a > b ? 1 : a === b ? 0.5 : 0;
    }
  }
  return credit / pairs;
}

export function unitsFor(picks: CoursePick[]) {
  return picks.reduce((total, pick) => total + (pick.win ? pick.payout : -1), 0);
}

/** 95% Wilson interval for a hit rate. */
function wilson(hits: number, n: number) {
  const z = 1.96;
  const p = hits / n;
  const center = (p + (z * z) / (2 * n)) / (1 + (z * z) / n);
  const spread = (z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n))) / (1 + (z * z) / n);
  return [center - spread, center + spread] as const;
}

export interface CalibrationBin {
  label: string;
  n: number;
  stated: number;
  hit: number;
  low: number;
  high: number;
}

/** Groups picks into bins of roughly equal size so each point has enough picks to mean something. */
export function calibrationBins(picks: CoursePick[], source: Source, binCount = 5): CalibrationBin[] {
  const sorted = [...picks].sort((a, b) => probabilityFrom(a, source) - probabilityFrom(b, source));
  const size = Math.ceil(sorted.length / binCount);
  const bins: CalibrationBin[] = [];
  for (let start = 0; start < sorted.length; start += size) {
    const group = sorted.slice(start, start + size);
    const hits = group.filter((pick) => pick.win).length;
    const stated = group.reduce((total, pick) => total + probabilityFrom(pick, source), 0) / group.length;
    const [low, high] = wilson(hits, group.length);
    const first = probabilityFrom(group[0], source);
    const last = probabilityFrom(group[group.length - 1], source);
    bins.push({
      label: `${Math.round(first * 100)}–${Math.round(last * 100)}%`,
      n: group.length,
      stated,
      hit: hits / group.length,
      low,
      high,
    });
  }
  return bins;
}
