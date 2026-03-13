import { martingaleBets } from "@/data/martingaleBets";
import { matchSignalsForBet } from "./matching";
import { pollShippConnections } from "./service";
import { readShippState, writeShippState } from "./state";
import type {
  NormalizedShippSignal,
  PregameCheckpointPacket,
  PregameCheckpointType,
  PregameRecommendation,
} from "./types";

const CHECKPOINT_ORDER: PregameCheckpointType[] = ["T-120", "T-30", "T-10", "LOCK"];

const isPregameSignal = (signal: NormalizedShippSignal): boolean => {
  const type = signal.eventType?.toLowerCase() ?? "";
  const desc = signal.description?.toLowerCase() ?? "";
  const keywords = ["pregame", "lineup", "odds", "spread", "injury", "status", "starting", "market"];
  const hasPregameKeyword = keywords.some((word) => type.includes(word) || desc.includes(word));

  // De-emphasize in-game noise in this workflow.
  const looksInGame =
    (typeof signal.period === "number" && signal.period > 0) ||
    Boolean(signal.gameClock) ||
    typeof signal.homePoints === "number" ||
    typeof signal.awayPoints === "number";

  return hasPregameKeyword || !looksInGame;
};

const toCheckpointIndex = (checkpoint: PregameCheckpointType): number => CHECKPOINT_ORDER.indexOf(checkpoint);

const scoreRecommendation = (
  checkpoint: PregameCheckpointType,
  signals: NormalizedShippSignal[],
): { recommendation: PregameRecommendation; confidence: number; reason: string; insufficientData: boolean } => {
  const negativeSignals = signals.filter((signal) => {
    const text = `${signal.eventType ?? ""} ${signal.description ?? ""}`.toLowerCase();
    return ["injury", "questionable", "out", "suspended", "late scratch"].some((token) => text.includes(token));
  }).length;

  const evidence = signals.length;

  if (checkpoint === "LOCK") {
    return {
      recommendation: evidence >= 2 && negativeSignals === 0 ? "Bet" : evidence > 0 ? "Reduce Stake" : "No Bet",
      confidence: evidence >= 2 ? 80 : evidence === 1 ? 60 : 30,
      reason:
        evidence > 0
          ? "Final lock checkpoint captured. Keep manual confirmation before placing any bet."
          : "LOCK reached without enough pregame packet data.",
      insufficientData: evidence === 0,
    };
  }

  if (negativeSignals > 0) {
    return {
      recommendation: "No Bet",
      confidence: 25,
      reason: "Negative pregame indicators detected (injury/status risk).",
      insufficientData: false,
    };
  }

  if (evidence >= 2) {
    return {
      recommendation: "Bet",
      confidence: checkpoint === "T-120" ? 60 : checkpoint === "T-30" ? 70 : 78,
      reason: "Pregame signals are aligned and stable.",
      insufficientData: false,
    };
  }

  if (evidence === 1) {
    return {
      recommendation: "Reduce Stake",
      confidence: 52,
      reason: "Only one qualifying pregame checkpoint signal. Keep stake conservative.",
      insufficientData: false,
    };
  }

  return {
    recommendation: "No Bet",
    confidence: 20,
    reason: "Insufficient pregame packet data to support a bet.",
    insufficientData: true,
  };
};

export const runPregameCheckpoint = async (input: {
  checkpoint: PregameCheckpointType;
  betIds?: number[];
  skipFetch?: boolean;
  useMock?: boolean;
}) => {
  if (!input.skipFetch) {
    await pollShippConnections({ useMock: input.useMock });
  }

  const state = await readShippState();
  const targetBets = martingaleBets.filter(
    (bet) => bet.result === "pending" && (!input.betIds?.length || input.betIds.includes(bet.id)),
  );

  const generatedAt = new Date().toISOString();
  const packets: PregameCheckpointPacket[] = [];

  for (const bet of targetBets) {
    const betKey = String(bet.id);
    const existing = state.checkpoints?.byBetId?.[betKey] ?? [];
    const prev = [...existing].sort((a, b) => b.generatedAt.localeCompare(a.generatedAt))[0];

    const pregameMatches = matchSignalsForBet(bet, state.latestSignals)
      .map((match) => match.signal)
      .filter(isPregameSignal)
      .slice(0, 8);

    const scored = scoreRecommendation(input.checkpoint, pregameMatches);

    const packet: PregameCheckpointPacket = {
      betId: bet.id,
      seriesId: bet.seriesId,
      checkpoint: input.checkpoint,
      recommendation: scored.recommendation,
      confidence: scored.confidence,
      status: input.checkpoint === "LOCK" ? "locked" : "active",
      reason: scored.reason,
      insufficientData: scored.insufficientData,
      matchedSignalsCount: pregameMatches.length,
      matchedSignalIds: pregameMatches.map((signal) => signal.id),
      generatedAt,
      deltaFromLast: {
        previousCheckpoint: prev?.checkpoint ?? null,
        previousRecommendation: prev?.recommendation ?? null,
        confidenceChange: scored.confidence - (prev?.confidence ?? 0),
        evidenceChange: pregameMatches.length - (prev?.matchedSignalsCount ?? 0),
        newSignalsSinceLast: prev
          ? pregameMatches.filter((signal) => signal.receivedAt > prev.generatedAt).length
          : pregameMatches.length,
      },
    };

    const filtered = existing.filter(
      (existingPacket) =>
        toCheckpointIndex(existingPacket.checkpoint) < toCheckpointIndex(input.checkpoint) ||
        existingPacket.generatedAt !== generatedAt,
    );

    state.checkpoints = state.checkpoints ?? { byBetId: {} };
    state.checkpoints.byBetId[betKey] = [...filtered, packet].sort((a, b) =>
      a.generatedAt.localeCompare(b.generatedAt),
    );

    packets.push(packet);
  }

  await writeShippState(state);

  return {
    ok: true,
    checkpoint: input.checkpoint,
    generatedAt,
    packets,
    pendingBetCount: targetBets.length,
  };
};
