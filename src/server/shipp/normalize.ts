import type { JsonObject, NormalizedShippSignal } from "./types";

const asString = (value: unknown): string | null =>
  typeof value === "string" && value.trim().length > 0 ? value : null;

const asNumber = (value: unknown): number | null => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return null;
};

const firstString = (row: JsonObject, keys: string[]): string | null => {
  for (const key of keys) {
    const value = asString(row[key]);
    if (value) return value;
  }
  return null;
};

export const getRowCursorId = (row: JsonObject): string | null =>
  firstString(row, ["attribution_id", "event_id", "id"]);

export const normalizeShippSignal = (
  row: JsonObject,
  connectionId: string,
): NormalizedShippSignal => {
  const receivedAt = new Date().toISOString();
  const eventCursor = getRowCursorId(row);
  const wallClockStart = firstString(row, ["wall_clock_start", "scheduled"]);
  const gameId = firstString(row, ["game_id"]);
  const sport = firstString(row, ["sport"]);
  const eventType = firstString(row, ["type", "category"]);
  const description = firstString(row, ["desc", "description"]);

  const rawId = [connectionId, eventCursor ?? gameId ?? "unknown", wallClockStart ?? receivedAt].join(":");

  return {
    id: rawId,
    connectionId,
    eventCursor,
    gameId,
    sport,
    eventType,
    description,
    period: asNumber(row.game_period),
    gameClock: firstString(row, ["game_clock"]),
    home: firstString(row, ["home", "home_team"]),
    away: firstString(row, ["away", "away_team"]),
    homePoints: asNumber(row.home_points),
    awayPoints: asNumber(row.away_points),
    wallClockStart,
    wallClockEnd: firstString(row, ["wall_clock_end"]),
    receivedAt,
    raw: row,
  };
};
