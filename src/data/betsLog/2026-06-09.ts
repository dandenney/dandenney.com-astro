import type { DayLog } from "./types";

// Source: /Users/clawfather/Obsidian/Claw/Betting/Agents/Hermes/Daily/2026-06-09.md
const log: DayLog = {
  date: "2026-06-09",
  displayDate: "June 9, 2026",
  candidates: [
    {
      id: "copper",
      color: "#fbbf24",
      player: "Kahleah Copper",
      matchup: "Kahleah Copper @ Valkyries",
      sport: "WNBA",
      market: "3-Pointers",
      direction: "Under",
      line: 1.5,
      odds: 132,
      rithmm: 60.9,
      breakEven: 43.1,
      projection: "0.70 3-pointers",
      dtm: 22.5,
      recent: "L10 6/10",
      gameTime: "9:00 PM",
      boardResult: "win",
    },
    {
      id: "gasser",
      color: "#f472b6",
      player: "Robert Gasser",
      matchup: "Robert Gasser @ Athletics",
      sport: "MLB",
      market: "Total Outs",
      direction: "Over",
      line: 14.5,
      odds: -133,
      rithmm: 60.4,
      breakEven: 57.1,
      projection: "13.3 total outs",
      dtm: 7.5,
      recent: "L3 1/3",
      gameTime: "9:05 PM",
      boardResult: "win",
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
      result: "correct",
      resultNote:
        "Hermes recorded this as a real placed post-Martingale portfolio day: Dan's actual daily decision was BET ALL on the visible June 9 board, specifically Kahleah Copper under 1.5 3-pointers at +132 and Robert Gasser over 14.5 total outs at -133 for $60 each. That placed two-leg portfolio settled 2-0 for a total return of $244.31 and a net profit of +$124.31.",
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
    copper: { hermes: null, chatgpt: null, claude: null, gemini: null, perplexity: null },
    gasser: { hermes: null, chatgpt: null, claude: null, gemini: null, perplexity: null },
  },
  finalDecision: {
    action: "BET ALL portfolio (2 placed picks; net +$124.31)",
    reason:
      "The Hermes daily note records a real placed post-Martingale portfolio day: Dan's actual daily decision was the full visible two-leg board rather than a paper lean or tracking-only note. No harness responses or evidence-backed pregame auditor removals were logged before settlement, so the site-quality interpretation is the actual placed two-leg portfolio with the operative odds and exact return amounts preserved.",
    result: "correct",
    resultNote:
      "The placed two-leg portfolio settled 2-0. Kahleah Copper under 1.5 3-pointers won at the improved placed price of +132, returning $139.20 on a $60 stake, while Robert Gasser over 14.5 total outs won at -133, returning $105.11 on a $60 stake. The full visible board matched the placed ticket, so there is no rejected-winner or off-ticket counterfactual on this page. The note also preserves a useful learning wrinkle: Gasser's displayed model projection was only 13.3 outs despite the over ticket cashing. No publish/deploy action is implied by this data entry.",
  },
};

export default log;
