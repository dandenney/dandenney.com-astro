import type { PollConnectionInput, ShippRunResponse } from "./types";

const SHIPP_BASE_URL = "https://api.shipp.ai/api/v1";

const getApiKey = (): string => {
  const key = import.meta.env.SHIPP_API_KEY?.trim();
  if (!key) {
    throw new Error("Missing SHIPP_API_KEY. Add it to your .env.local before running fetch.");
  }
  return key;
};

export const runShippConnection = async (
  input: PollConnectionInput,
): Promise<ShippRunResponse> => {
  const apiKey = getApiKey();
  const url = new URL(`${SHIPP_BASE_URL}/connections/${input.connectionId}`);
  url.searchParams.set("api_key", apiKey);

  const body: Record<string, unknown> = {
    limit: input.limit ?? 100,
  };

  if (input.sinceEventId) {
    body.since_event_id = input.sinceEventId;
  } else if (input.since) {
    body.since = input.since;
  }

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Shipp request failed (${response.status}): ${errorText}`);
  }

  return (await response.json()) as ShippRunResponse;
};
