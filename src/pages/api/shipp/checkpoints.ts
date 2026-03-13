import type { APIRoute } from "astro";
import { readShippState } from "@/server/shipp/state";
import { runPregameCheckpoint } from "@/server/shipp/checkpoints";
import type { PregameCheckpointType } from "@/server/shipp/types";

export const prerender = false;

const CHECKPOINTS: PregameCheckpointType[] = ["T-120", "T-30", "T-10", "LOCK"];

const isCheckpoint = (value: unknown): value is PregameCheckpointType =>
  typeof value === "string" && CHECKPOINTS.includes(value as PregameCheckpointType);

export const GET: APIRoute = async () => {
  const state = await readShippState();

  return new Response(
    JSON.stringify(
      {
        ok: true,
        updatedAt: state.updatedAt,
        checkpoints: state.checkpoints?.byBetId ?? {},
      },
      null,
      2,
    ),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request
      .json()
      .catch(() => ({} as { checkpoint?: string; betIds?: number[]; skipFetch?: boolean; useMock?: boolean }));

    if (!isCheckpoint(body.checkpoint)) {
      return new Response(
        JSON.stringify(
          {
            ok: false,
            error: "checkpoint is required and must be one of: T-120, T-30, T-10, LOCK",
          },
          null,
          2,
        ),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const result = await runPregameCheckpoint({
      checkpoint: body.checkpoint,
      betIds: Array.isArray(body.betIds) ? body.betIds.filter((id) => Number.isInteger(id)) : undefined,
      skipFetch: body.skipFetch === true,
      useMock: body.useMock === true,
    });

    return new Response(JSON.stringify(result, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify(
        {
          ok: false,
          error: error instanceof Error ? error.message : "Unknown error",
        },
        null,
        2,
      ),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
