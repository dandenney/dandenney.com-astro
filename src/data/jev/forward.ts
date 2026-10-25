// The forward test: Jev scores made before each game, joined with the pick and its result.
// Scores come from scripts/jev/score-pick.ts via /log-rithmm.
import { rithhmmPicks, type RithhmmPick } from "@/data/rithhmmPicks";
import forwardScores from "@/data/jev/forwardScores.json";

interface StoredScore {
  model: string;
  scoredAt: string;
  answers: {
    will_hit: { noul: number };
    form_backs_pick: { noul: number };
    bet_type: { choice: string; confidence: number };
    lean: { score: number; confidence: number; probabilities: Record<string, number> };
  };
}

export interface ForwardPick {
  pick: RithhmmPick;
  model: string;
  scoredAt: string;
  /** True only when the score was made before the scheduled start. */
  scoredBeforeGame: boolean;
  willHit: number;
  formBacksPick: number;
  lean: number;
  leanConfidence: number;
  /** Break-even hit rate for the sportsbook price. */
  breakEven: number;
  /** The rule from the course: bet when Jev's probability clears break-even. */
  ruleWouldBet: boolean;
  /** What actually happened with your money. */
  placed: boolean;
}

const americanOdds = (odds: string) => Number(odds.replace(/[^\d+-]/g, ""));

export function breakEvenFor(odds: string) {
  const n = americanOdds(odds);
  return n < 0 ? -n / (-n + 100) : 100 / (n + 100);
}

export function payoutFor(odds: string) {
  const n = americanOdds(odds);
  return n < 0 ? 100 / -n : n / 100;
}

const scores = (forwardScores as { picks: Record<string, StoredScore> }).picks;

export const forwardPicks: ForwardPick[] = rithhmmPicks.flatMap((pick) => {
  const score = scores[pick.id];
  if (!score) return [];
  const breakEven = breakEvenFor(pick.odds);
  const willHit = score.answers.will_hit.noul;
  return [
    {
      pick,
      model: score.model,
      scoredAt: score.scoredAt,
      scoredBeforeGame: !!pick.gameTime && new Date(score.scoredAt) < new Date(pick.gameTime),
      willHit,
      formBacksPick: score.answers.form_backs_pick.noul,
      lean: score.answers.lean.score,
      leanConfidence: score.answers.lean.confidence,
      breakEven,
      ruleWouldBet: willHit > breakEven,
      placed: pick.portfolioAction === "bet",
    },
  ];
});

/** Picks that count: scored before the game and settled as a win or loss. */
export const forwardSettled = forwardPicks.filter(
  (entry) => entry.scoredBeforeGame && (entry.pick.result === "win" || entry.pick.result === "loss"),
);

/** Units on a flat 1-unit stake per pick. */
export function flatUnits(entries: ForwardPick[]) {
  return entries.reduce((total, entry) => total + (entry.pick.result === "win" ? payoutFor(entry.pick.odds) : -1), 0);
}
