export type BoardResult = "win" | "loss" | "void" | "push";
export type HarnessResult = "correct" | "loss";

export interface Candidate {
  id: string;
  color: string;
  player: string;
  matchup: string;
  sport: string;
  market: string;
  direction: "Under" | "Over";
  line: number;
  odds: number;
  rithmm: number;
  breakEven: number;
  projection: string;
  dtm: number;
  recent: string;
  gameTime: string;
  boardResult: BoardResult;
}

export interface Harness {
  id: string;
  name: string;
  color: string;
  pick: string; // candidate id or "skip"
  pickLabel: string;
  confidence: number | null;
  confidenceLabel: string | null;
  result: HarnessResult;
  resultNote: string;
}

export interface FinalDecision {
  action: string;
  reason: string;
  result: HarnessResult;
  resultNote: string;
}

export interface DayLog {
  date: string;        // ISO "2026-05-02", used as URL slug
  displayDate: string; // "May 2, 2026"
  candidates: Candidate[];
  harnesses: Harness[];
  // Tier each harness assigned to each candidate; null = orchestrator (no individual tier)
  candidateTiers: Record<string, Record<string, number | null>>;
  finalDecision: FinalDecision;
}
