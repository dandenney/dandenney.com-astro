// Scores Rithmm picks with Jev before the game, for the forward test.
// Usage: node --experimental-strip-types --env-file=.env.local scripts/jev/score-pick.ts --id 262 [--id 263] [--force]
// Saves to src/data/jev/forwardScores.json. A score only counts if scoredAt is before the pick's gameTime.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { rithhmmPicks } from "../../src/data/rithhmmPicks.ts";
import { questions, stateFor } from "../../src/data/jev/request.ts";

const MODEL = "jev-1.14.0";
const API_URL = "https://api.typesafe.ai/v1/systemone";
const OUT = "src/data/jev/forwardScores.json";

const apiKey = process.env.TYPESAFE_API_KEY;
if (!apiKey) throw new Error("TYPESAFE_API_KEY is missing. Run with --env-file=.env.local");

const args = process.argv.slice(2);
const force = args.includes("--force");
const ids = args.flatMap((arg, i) => (arg === "--id" ? [Number(args[i + 1])] : []));
if (!ids.length) throw new Error("Pass at least one --id");

const scores: Record<string, unknown> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")).picks : {};

for (const id of ids) {
  const pick = rithhmmPicks.find((entry) => entry.id === id);
  if (!pick) throw new Error(`No pick with id ${id}`);
  if (scores[id] && !force) {
    console.log(`#${id} already scored, skipping (use --force to rescore)`);
    continue;
  }

  const state = stateFor(pick, "withoutRithmm");
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: MODEL, state, questions }),
  });
  if (!res.ok) throw new Error(`#${id}: ${res.status} ${await res.text()}`);
  const response = await res.json();
  const scoredAt = new Date().toISOString();

  scores[id] = { model: response.model, scoredAt, state, answers: response.answers, usage: response.usage };
  const beforeGame = pick.gameTime ? new Date(scoredAt) < new Date(pick.gameTime) : null;
  console.log(
    `#${id} ${pick.pick} (${pick.odds}): will_hit ${response.answers.will_hit.noul}` +
      (beforeGame === false ? "  WARNING: scored after gameTime, won't count" : beforeGame === null ? "  (no gameTime set)" : ""),
  );
}

writeFileSync(OUT, JSON.stringify({ picks: scores }, null, 2) + "\n");
