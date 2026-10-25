// The exact Jev request used for every Rithmm pick. Shared by scripts/jev/run-rithmm-picks.ts
// and the course widgets, so the post always shows what was actually sent.
import type { RithhmmPick } from "@/data/rithhmmPicks";

export const questions = {
  will_hit: {
    type: "noul",
    instructions: "Will this bet win?",
    criteria: {
      true: "The pick as written wins when the game is settled",
      false: "The pick as written loses",
    },
  },
  form_backs_pick: {
    type: "noul",
    instructions: "Does the player's or team's recent form support this pick?",
    criteria: {
      true: "The recent form record points the same direction as the pick",
      false: "Recent form is mixed, thin, or points the other way",
    },
  },
  bet_type: {
    type: "choice",
    instructions: "What kind of bet is this?",
    criteria: {
      moneyline: "A team to win the game outright",
      spread: "A team to cover a point spread or run line",
      game_total: "The combined score of both teams over or under a number",
      player_over: "A player stat over a number (hits, points, rebounds, receptions, and so on)",
      player_under: "A player stat under a number",
    },
  },
  lean: {
    type: "score",
    instructions: "How strong is the case for placing this bet at these odds?",
    criteria: [
      "Pass; the case doesn't justify the price",
      "Lean; some support, but a small stake at most",
      "Play; the case clearly beats the price",
    ],
  },
};

export type Variant = "withRithmm" | "withoutRithmm";

type PickFacts = Pick<RithhmmPick, "date" | "sport" | "matchup" | "pick" | "odds" | "recentForm" | "modelProjection">;

/** Facts a bettor would have before the game. Never the result or stakes. */
export function stateFor(pick: PickFacts, variant: Variant) {
  const state: Record<string, unknown> = {
    date: pick.date,
    sport: pick.sport,
    matchup: pick.matchup,
    pick: pick.pick,
    odds: pick.odds,
  };
  if (pick.recentForm) state.recentForm = pick.recentForm;
  if (variant === "withRithmm" && pick.modelProjection) state.modelProjection = pick.modelProjection;
  return state;
}
