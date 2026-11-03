import { asLimit, asText, registerPageTools } from "@/lib/webmcp";

interface AgentPick {
  id: number;
  date: string;
  sport: string;
  result: string;
  [key: string]: unknown;
}

interface RithmmAgentData {
  standings: unknown;
  record: unknown;
  jev: unknown;
  picks: AgentPick[];
}

const dataEl = document.getElementById("rithmm-agent-data");
const data: RithmmAgentData | null = dataEl?.textContent ? JSON.parse(dataEl.textContent) : null;

if (data) {
  registerPageTools([
    {
      name: "get-bettor-standings",
      title: "Rithmm tracker standings",
      description:
        "Returns each bettor's (Dan and GardenOf) current balance compared with the same $500 parked in a high-yield savings account since their first bet, plus money in play and the overall win-loss record.",
      annotations: { readOnlyHint: true },
      execute: () => ({ standings: data.standings, record: data.record }),
    },
    {
      name: "list-rithmm-picks",
      title: "List Rithmm picks",
      description:
        "Lists Rithmm Smart Signal picks from the tracker, newest first, with odds, result, whether money was bet, stakes and payouts, and Jev's pre-game probability where scored.",
      inputSchema: {
        type: "object",
        properties: {
          status: {
            type: "string",
            enum: ["pending", "settled", "all"],
            description: "Pending picks are games not yet graded. Defaults to all.",
          },
          sport: { type: "string", enum: ["NFL", "NCAAF", "NBA", "WNBA", "MLB"], description: "Optional sport filter." },
          since: { type: "string", description: "Optional earliest pick date, YYYY-MM-DD." },
          limit: { type: "number", description: "Maximum picks, 1-100. Defaults to 20." },
        },
      },
      annotations: { readOnlyHint: true },
      execute(input) {
        const status = asText(input.status) || "all";
        const sport = asText(input.sport).toUpperCase();
        const since = asText(input.since);
        const picks = data.picks
          .filter((p) => status === "all" || (status === "pending") === (p.result === "pending"))
          .filter((p) => !sport || p.sport === sport)
          .filter((p) => !since || p.date >= since)
          .sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
        return { total: picks.length, picks: picks.slice(0, asLimit(input.limit, 20, 100)) };
      },
    },
    {
      name: "get-jev-record",
      title: "Jev forward-test record",
      description:
        "Returns how the Jev rule (bet only when Jev's will-hit probability beats the sportsbook break-even) has done on picks scored before the game: the rule's record and flat-unit profit, the record of bets actually placed, and how Jev's passes graded (dodged losses vs missed wins).",
      annotations: { readOnlyHint: true },
      execute: () => data.jev ?? { error: "No Jev scores yet." },
    },
    {
      name: "show-rithmm-pick",
      title: "Show a pick on the page",
      description: "Scrolls the tracker to a pick's row and highlights it so the user can see it.",
      inputSchema: {
        type: "object",
        properties: { id: { type: "number", description: "Pick id from list-rithmm-picks." } },
        required: ["id"],
      },
      execute(input) {
        const id = Math.floor(Number(input.id));
        const row = document.querySelector<HTMLElement>(`tr[data-pick-id="${id}"]`);
        if (!row) return { error: `Pick ${input.id} isn't on this page. Use list-rithmm-picks for valid ids.` };
        row.scrollIntoView({ behavior: "smooth", block: "center" });
        const highlight = ["outline-2", "-outline-offset-2", "outline-amber-500", "bg-amber-50", "dark:bg-amber-950/30"];
        row.classList.add(...highlight);
        setTimeout(() => row.classList.remove(...highlight), 4000);
        return { shown: id };
      },
    },
  ]);
}
