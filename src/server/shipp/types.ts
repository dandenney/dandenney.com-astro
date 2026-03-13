export type JsonObject = Record<string, unknown>;

export interface ShippRunResponse {
  connection_id: string;
  data?: JsonObject[];
}

export interface NormalizedShippSignal {
  id: string;
  connectionId: string;
  eventCursor: string | null;
  gameId: string | null;
  sport: string | null;
  eventType: string | null;
  description: string | null;
  period: number | null;
  gameClock: string | null;
  home: string | null;
  away: string | null;
  homePoints: number | null;
  awayPoints: number | null;
  wallClockStart: string | null;
  wallClockEnd: string | null;
  receivedAt: string;
  raw: JsonObject;
}

export interface ShippConnectionState {
  sinceEventId: string | null;
  lastRunAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
}

export type PregameCheckpointType = "T-120" | "T-30" | "T-10" | "LOCK";
export type PregameRecommendation = "Bet" | "No Bet" | "Reduce Stake";

export interface PregameCheckpointDelta {
  previousCheckpoint: PregameCheckpointType | null;
  previousRecommendation: PregameRecommendation | null;
  confidenceChange: number;
  evidenceChange: number;
  newSignalsSinceLast: number;
}

export interface PregameCheckpointPacket {
  betId: number;
  seriesId: string;
  checkpoint: PregameCheckpointType;
  recommendation: PregameRecommendation;
  confidence: number;
  status: "active" | "locked";
  reason: string;
  insufficientData: boolean;
  matchedSignalsCount: number;
  matchedSignalIds: string[];
  generatedAt: string;
  deltaFromLast: PregameCheckpointDelta;
}

export interface ShippState {
  version: 1;
  updatedAt: string | null;
  connections: Record<string, ShippConnectionState>;
  latestSignals: NormalizedShippSignal[];
  checkpoints?: {
    byBetId: Record<string, PregameCheckpointPacket[]>;
  };
}

export interface PollConnectionInput {
  connectionId: string;
  sinceEventId?: string | null;
  since?: string;
  limit?: number;
}

export interface PollConnectionResult {
  connectionId: string;
  fetched: number;
  normalized: NormalizedShippSignal[];
  nextSinceEventId: string | null;
}
