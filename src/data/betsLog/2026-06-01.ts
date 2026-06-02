import type { DayLog } from "./types";

// Source: /Users/clawfather/Obsidian/Claw/Betting/Agents/Hermes/Daily/2026-06-01.md
const log: DayLog = {
  date: "2026-06-01",
  displayDate: "June 1, 2026",
  candidates: [
    {
      id: "nationals",
      color: "#fbbf24",
      player: "Nationals",
      matchup: "Nationals vs Marlins",
      sport: "MLB",
      market: "Moneyline",
      direction: "Over",
      line: 0,
      odds: -142,
      rithmm: 63.0,
      breakEven: 58.7,
      projection: "Marlins 3.7 - 5.5 Nationals",
      dtm: 10.5,
      recent: "L10 6/10",
      gameTime: "5:45 PM",
      boardResult: "loss",
    },
    {
      id: "reds",
      color: "#f472b6",
      player: "Reds",
      matchup: "Reds vs Royals",
      sport: "MLB",
      market: "Moneyline",
      direction: "Over",
      line: 0,
      odds: -126,
      rithmm: 60.5,
      breakEven: 55.8,
      projection: "Royals 3.5 - 4.8 Reds",
      dtm: 8.9,
      recent: "L10 6/10",
      gameTime: "6:10 PM",
      boardResult: "loss",
    },
  ],
  harnesses: [
    {
      id: "hermes",
      name: "Hermes",
      color: "#34d399",
      pick: "skip",
      pickLabel: "BET ALL portfolio / no harness review logged",
      confidence: null,
      confidenceLabel: "placed-portfolio day; no harness outputs logged",
      result: "loss",
      resultNote:
        "Hermes recorded this as a real placed post-Martingale portfolio day: Dan bet both visible Rithmm moneyline picks with no harness responses logged beforehand. Both legs lost, so the portfolio process result for the day was 0-2.",
    },
    {
      id: "chatgpt",
      name: "ChatGPT",
      color: "#2dd4bf",
      pick: "skip",
      pickLabel: "No harness output logged",
      confidence: null,
      confidenceLabel: null,
      result: "loss",
      resultNote:
        "No ChatGPT harness response was present in the Hermes note, so this row is an ungraded placeholder rather than a model decision.",
    },
    {
      id: "claude",
      name: "Claude",
      color: "#fb923c",
      pick: "skip",
      pickLabel: "No harness output logged",
      confidence: null,
      confidenceLabel: null,
      result: "loss",
      resultNote:
        "No Claude harness response was present in the Hermes note, so this row is an ungraded placeholder rather than a model decision.",
    },
    {
      id: "gemini",
      name: "Gemini",
      color: "#60a5fa",
      pick: "skip",
      pickLabel: "No harness output logged",
      confidence: null,
      confidenceLabel: null,
      result: "loss",
      resultNote:
        "No Gemini harness response was present in the Hermes note, so this row is an ungraded placeholder rather than a model decision.",
    },
    {
      id: "perplexity",
      name: "Perplexity",
      color: "#c084fc",
      pick: "skip",
      pickLabel: "No harness output logged",
      confidence: null,
      confidenceLabel: null,
      result: "loss",
      resultNote:
        "No Perplexity harness response was present in the Hermes note, so this row is an ungraded placeholder rather than a model decision.",
    },
  ],
  candidateTiers: {
    nationals: { hermes: null, chatgpt: null, claude: null, gemini: null, perplexity: null },
    reds: { hermes: null, chatgpt: null, claude: null, gemini: null, perplexity: null },
  },
  finalDecision: {
    action: "BET ALL portfolio (2 Rithmm picks; exact bankroll impact unknown)",
    reason:
      "The Hermes daily note records a real placed post-Martingale portfolio day: Dan bet both visible Rithmm MLB moneyline picks, and no harness responses or evidence-backed auditor removals were logged before settlement. The correct site-quality interpretation is an actual two-leg portfolio entry, not a paper lean and not a tracking-only board.",
    result: "loss",
    resultNote:
      "Both placed legs lost: Nationals moneyline lost 7-3 to the Marlins, and Reds moneyline lost 9-2 to the Royals. The note preserves the exact execution uncertainty: book/ticket were not logged, and stake wording remained ambiguous as '$60 on both bets', so exact bankroll impact is unknown. No publish/deploy action is implied by this data entry.",
  },
};

export default log;
