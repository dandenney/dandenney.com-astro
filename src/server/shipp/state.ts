import fs from "node:fs/promises";
import path from "node:path";
import type { NormalizedShippSignal, ShippConnectionState, ShippState } from "./types";

const SHIPP_STATE_FILE = path.join(process.cwd(), "src/data/shipp-state.json");
const MAX_LATEST_SIGNALS = 100;

const defaultConnectionState = (): ShippConnectionState => ({
  sinceEventId: null,
  lastRunAt: null,
  lastSuccessAt: null,
  lastError: null,
});

const defaultState = (): ShippState => ({
  version: 1,
  updatedAt: new Date().toISOString(),
  connections: {},
  latestSignals: [],
  checkpoints: { byBetId: {} },
});

export const readShippState = async (): Promise<ShippState> => {
  try {
    const raw = await fs.readFile(SHIPP_STATE_FILE, "utf-8");
    const parsed = JSON.parse(raw) as ShippState;
    return {
      ...defaultState(),
      ...parsed,
      connections: parsed.connections ?? {},
      latestSignals: parsed.latestSignals ?? [],
      checkpoints: {
        byBetId: parsed.checkpoints?.byBetId ?? {},
      },
    };
  } catch {
    return defaultState();
  }
};

export const writeShippState = async (state: ShippState): Promise<void> => {
  const payload: ShippState = {
    ...state,
    updatedAt: new Date().toISOString(),
    latestSignals: state.latestSignals.slice(0, MAX_LATEST_SIGNALS),
  };

  await fs.writeFile(SHIPP_STATE_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf-8");
};

export const getConnectionState = (
  state: ShippState,
  connectionId: string,
): ShippConnectionState => {
  return state.connections[connectionId] ?? defaultConnectionState();
};

export const mergeSignals = (
  existing: NormalizedShippSignal[],
  incoming: NormalizedShippSignal[],
): NormalizedShippSignal[] => {
  const deduped = new Map<string, NormalizedShippSignal>();

  for (const signal of [...incoming, ...existing]) {
    deduped.set(signal.id, signal);
  }

  return [...deduped.values()]
    .sort((a, b) => b.receivedAt.localeCompare(a.receivedAt))
    .slice(0, MAX_LATEST_SIGNALS);
};
