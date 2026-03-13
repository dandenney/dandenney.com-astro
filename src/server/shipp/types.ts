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

export interface ShippState {
  version: 1;
  updatedAt: string | null;
  connections: Record<string, ShippConnectionState>;
  latestSignals: NormalizedShippSignal[];
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
