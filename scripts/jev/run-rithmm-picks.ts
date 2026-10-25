// Runs settled Rithmm picks through Jev for the "Learning Jev" mini course.
// Usage: node --experimental-strip-types --env-file=.env.local scripts/jev/run-rithmm-picks.ts [--limit 3]
// Results are cached per pick in src/data/jev/rithmmPicksJev.json, so reruns only fetch what's missing.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { rithhmmPicks, type RithhmmPick } from "../../src/data/rithhmmPicks.ts";
import { questions, stateFor } from "../../src/data/jev/request.ts";

const MODEL = "jev-1.14.0";
const API_URL = "https://api.typesafe.ai/v1/systemone";
const OUT = "src/data/jev/rithmmPicksJev.json";
const CONCURRENCY = 4;

const apiKey = process.env.TYPESAFE_API_KEY;
if (!apiKey) throw new Error("TYPESAFE_API_KEY is missing. Run with --env-file=.env.local");

const limitArg = process.argv.indexOf("--limit");
const limit = limitArg > -1 ? Number(process.argv[limitArg + 1]) : Infinity;

async function ask(state: Record<string, unknown>, attempt = 1): Promise<any> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: MODEL, state, questions }),
  });
  if (res.ok) return res.json();
  if ((res.status === 429 || res.status >= 500) && attempt < 4) {
    await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt));
    return ask(state, attempt + 1);
  }
  throw new Error(`${res.status} ${await res.text()}`);
}

const cache: Record<string, any> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")).picks : {};
const settled = rithhmmPicks.filter((p) => p.result === "win" || p.result === "loss");
const todo = settled.filter((p) => !cache[p.id]).slice(0, limit);
console.log(`${settled.length} settled, ${Object.keys(cache).length} cached, running ${todo.length}`);
if (!todo.length) process.exit(0);

function save() {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify({ model: MODEL, generatedAt: new Date().toISOString(), picks: cache }, null, 2) + "\n");
}

let done = 0;
async function worker(queue: RithhmmPick[]) {
  for (let pick = queue.shift(); pick; pick = queue.shift()) {
    const [withRithmm, withoutRithmm] = await Promise.all([
      ask(stateFor(pick, "withRithmm")),
      ask(stateFor(pick, "withoutRithmm")),
    ]);
    cache[pick.id] = { withRithmm, withoutRithmm };
    if (++done % 20 === 0) save();
  }
}

const queue = [...todo];
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));
save();
console.log(`done, ${Object.keys(cache).length} cached`);
