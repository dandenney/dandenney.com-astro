// Runs settled Rithmm picks through Jev for the "Learning Jev" mini course.
// Usage: node --experimental-strip-types --env-file=.env.local scripts/jev/run-rithmm-picks.ts [--limit 3]
// Results are cached per pick in src/data/jev/rithmmPicksJev.json, so reruns only fetch what's missing.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { rithhmmPicks, type RithhmmPick } from "../../src/data/rithhmmPicks.ts";

const MODEL = "jev-1.14.0";
const API_URL = "https://api.typesafe.ai/v1/systemone";
const OUT = "src/data/jev/rithmmPicksJev.json";
const CONCURRENCY = 4;

const apiKey = process.env.TYPESAFE_API_KEY;
if (!apiKey) throw new Error("TYPESAFE_API_KEY is missing. Run with --env-file=.env.local");

const limitArg = process.argv.indexOf("--limit");
const limit = limitArg > -1 ? Number(process.argv[limitArg + 1]) : Infinity;

const questions = {
  will_hit: {
    type: "noul",
    instructions: "Will this bet win?",
    criteria: {
      true: "The pick as written wins when the game is settled",
      false: "The pick as written loses",
    },
  },
  form_backs_pick: {
    type: "noul",
    instructions: "Does the player's or team's recent form support this pick?",
    criteria: {
      true: "The recent form record points the same direction as the pick",
      false: "Recent form is mixed, thin, or points the other way",
    },
  },
  bet_type: {
    type: "choice",
    instructions: "What kind of bet is this?",
    criteria: {
      moneyline: "A team to win the game outright",
      spread: "A team to cover a point spread or run line",
      game_total: "The combined score of both teams over or under a number",
      player_over: "A player stat over a number (hits, points, rebounds, receptions, and so on)",
      player_under: "A player stat under a number",
    },
  },
  lean: {
    type: "score",
    instructions: "How strong is the case for placing this bet at these odds?",
    criteria: [
      "Pass; the case doesn't justify the price",
      "Lean; some support, but a small stake at most",
      "Play; the case clearly beats the price",
    ],
  },
};

type Variant = "withRithmm" | "withoutRithmm";

// Facts a bettor would have before the game. Never the result or stakes.
function stateFor(pick: RithhmmPick, variant: Variant) {
  const state: Record<string, unknown> = {
    date: pick.date,
    sport: pick.sport,
    matchup: pick.matchup,
    pick: pick.pick,
    odds: pick.odds,
  };
  if (pick.recentForm) state.recentForm = pick.recentForm;
  if (variant === "withRithmm" && pick.modelProjection) state.modelProjection = pick.modelProjection;
  return state;
}

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
