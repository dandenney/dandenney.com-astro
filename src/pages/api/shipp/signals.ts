import type { APIRoute } from "astro";
import { readShippState } from "@/server/shipp/state";

export const prerender = false;

export const GET: APIRoute = async () => {
  const state = await readShippState();

  return new Response(
    JSON.stringify(
      {
        ok: true,
        updatedAt: state.updatedAt,
        connections: state.connections,
        latestSignals: state.latestSignals,
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
