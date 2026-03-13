import { normalizeShippSignal, getRowCursorId } from "./normalize";
import { runShippConnection } from "./client";
import { getConnectionState, mergeSignals, readShippState, writeShippState } from "./state";
import type { JsonObject, PollConnectionResult } from "./types";

const defaultSince = () => new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();

const resolveConnectionIds = (provided?: string[]): string[] => {
  if (provided?.length) return provided;

  const fromEnv = import.meta.env.SHIPP_CONNECTION_IDS?.split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (fromEnv?.length) return fromEnv;

  const single = import.meta.env.SHIPP_CONNECTION_ID?.trim();
  return single ? [single] : [];
};

export const pollShippConnections = async (options?: {
  connectionIds?: string[];
  limit?: number;
  useMock?: boolean;
}): Promise<{ results: PollConnectionResult[]; statePath: string }> => {
  const connectionIds = resolveConnectionIds(options?.connectionIds);

  if (!connectionIds.length) {
    throw new Error(
      "No Shipp connection IDs configured. Set SHIPP_CONNECTION_ID or SHIPP_CONNECTION_IDS, or pass connectionIds in request body.",
    );
  }

  const state = await readShippState();
  const results: PollConnectionResult[] = [];

  for (const connectionId of connectionIds) {
    const connectionState = getConnectionState(state, connectionId);
    state.connections[connectionId] = {
      ...connectionState,
      lastRunAt: new Date().toISOString(),
      lastError: null,
    };

    try {
      const rows: JsonObject[] = options?.useMock
        ? [
            {
              attribution_id: `mock-${Date.now()}`,
              game_id: "LAL-vs-BOS",
              sport: "nba",
              type: "score",
              desc: "Mock signal for local integration validation",
              game_period: 3,
              game_clock: "04:12",
              home: "Lakers",
              away: "Celtics",
              home_points: 92,
              away_points: 95,
              wall_clock_start: new Date().toISOString(),
            },
          ]
        : (
            await runShippConnection({
              connectionId,
              sinceEventId: connectionState.sinceEventId,
              since: connectionState.sinceEventId ? undefined : defaultSince(),
              limit: options?.limit ?? 100,
            })
          ).data ?? [];

      const normalized = rows.map((row) => normalizeShippSignal(row, connectionId));
      const lastCursor = [...rows]
        .reverse()
        .map((row) => getRowCursorId(row))
        .find((id) => Boolean(id)) ?? connectionState.sinceEventId;

      state.connections[connectionId] = {
        ...state.connections[connectionId],
        sinceEventId: lastCursor,
        lastSuccessAt: new Date().toISOString(),
        lastError: null,
      };

      state.latestSignals = mergeSignals(state.latestSignals, normalized);

      results.push({
        connectionId,
        fetched: rows.length,
        normalized,
        nextSinceEventId: lastCursor,
      });
    } catch (error) {
      state.connections[connectionId] = {
        ...state.connections[connectionId],
        lastError: error instanceof Error ? error.message : "Unknown error",
      };
      throw error;
    }
  }

  await writeShippState(state);

  return {
    results,
    statePath: "src/data/shipp-state.json",
  };
};
