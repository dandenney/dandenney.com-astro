import type { DayLog } from "./types";

// Source: /Users/clawfather/Obsidian/Claw/Betting/Agents/Hermes/Daily/2026-06-10.md
const log: DayLog = {
  date: "2026-06-10",
  displayDate: "June 10, 2026",
  candidates: [
    {
      id: "scherzer",
      color: "#fbbf24",
      player: "Max Scherzer",
      matchup: "Max Scherzer vs Phillies",
      sport: "MLB",
      market: "Total Outs",
      direction: "Over",
      line: 13.5,
      odds: -143,
      rithmm: 63.1,
      breakEven: 58.8,
      projection: "13.5 total outs",
      dtm: 10.4,
      recent: "L5 2/5",
      gameTime: "6:07 PM",
      boardResult: "loss",
    },
  ],
  harnesses: [
    {
      id: "hermes",
      name: "Hermes",
      color: "#34d399",
      pick: "skip",
      pickLabel: "TRACK ONLY / no harness review logged",
      confidence: null,
      confidenceLabel: "tracking-only board; no harness outputs logged",
      result: "correct",
      resultNote:
        "Hermes preserved this as a tracking-only board with no logged ticket, paper lean, bettor override, or evidence-backed auditor removal. The lone visible Smart Signal candidate settled 0-1, but the note explicitly records no official action or bankroll event for the day.",
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
    scherzer: { hermes: null, chatgpt: null, claude: null, gemini: null, perplexity: null },
  },
  finalDecision: {
    action: "TRACK ONLY / board-only learning log (0-1 board; no placed bet logged)",
    reason:
      "This note captured one visible post-Martingale Smart Signal candidate, but no harness responses, paper lean, bettor override, or actual ticket were logged before settlement. The correct site-quality interpretation is a reconciled tracking-only learning log, not a retroactive PASS mistake and not a phantom BET ALL portfolio day.",
    result: "correct",
    resultNote:
      "The settled board went 0-1: Max Scherzer over 13.5 total outs lost after Scherzer recorded only 10 outs in a 7-4 Blue Jays loss to the Phillies. Because no placed bet or official action was logged, bankroll impact is unknown or none known. The note also preserves the useful caution that Rithmm's displayed projection landed exactly on the listed line rather than clearly above it. No publish/deploy action is implied by this data entry.",
  },
};

export default log;
