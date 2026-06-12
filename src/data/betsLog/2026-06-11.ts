import type { DayLog } from "./types";

// Source: /Users/clawfather/Obsidian/Claw/Betting/Agents/Hermes/Daily/2026-06-11.md
const log: DayLog = {
  date: "2026-06-11",
  displayDate: "June 11, 2026",
  candidates: [
    {
      id: "copper",
      color: "#fbbf24",
      player: "Kahleah Copper",
      matchup: "Kahleah Copper @ Wings",
      sport: "WNBA",
      market: "3-Pointers",
      direction: "Under",
      line: 1.5,
      odds: -118,
      rithmm: 63.7,
      breakEven: 54.1,
      projection: "0.66 3-pointers",
      dtm: 24.4,
      recent: "L10 6/10",
      gameTime: "8:00 PM",
      boardResult: "loss",
    },
  ],
  harnesses: [
    {
      id: "hermes",
      name: "Hermes",
      color: "#34d399",
      pick: "skip",
      pickLabel: "BET portfolio (1 placed pick) / no harness review logged",
      confidence: null,
      confidenceLabel: "placed-bet day; no harness outputs logged",
      result: "loss",
      resultNote:
        "Hermes recorded this as a real placed single-card post-Martingale portfolio day: Dan confirmed one actual bet, Kahleah Copper under 1.5 3-pointers at -118 for $60. That placed one-leg portfolio lost outright, so the process result for the day was a practical loss rather than a tracking-only or paper-only outcome.",
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
  },
  finalDecision: {
    action: "BET portfolio (1 Rithmm pick; -$60)",
    reason:
      "The Hermes daily note records a real placed single-card post-Martingale portfolio day: Dan corrected the earlier wrong-pick intake and confirmed that Kahleah Copper under 1.5 3-pointers was the only actual bet, placed at -118 for $60. With no harness responses or evidence-backed auditor removals logged before settlement, the correct site-quality interpretation is the actual one-leg placed portfolio rather than a tracking-only board or phantom broader slate.",
    result: "loss",
    resultNote:
      "The placed one-leg portfolio lost: Kahleah Copper made 2 threes on 5 attempts in Phoenix's game at Dallas, so the under 1.5 3-pointers missed. The note preserves the execution detail that the screenshot showed -108 while the actual placed ticket was -118 for $60, making the practical stake result -$60. No sportsbook ticket ID was logged, so this remains a note-level settlement rather than a verified ledger export. No publish/deploy action is implied by this data entry.",
  },
};

export default log;
