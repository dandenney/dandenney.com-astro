import type { Milestone } from "@/data/golf/types";

/**
 * Narrative milestones, append-only. Personal records are derived from
 * sessions and rounds, so only log a `pr` here when it deserves a sentence.
 */
export const milestones: Milestone[] = [
  {
    id: 1,
    player: "dan",
    date: "2026-07-27",
    kind: "first",
    title: "First round in 20 years",
    detail: "Best ball at World Tour with Blaine and Caleb. Shook rust off by the pound.",
    venueSlug: "world-tour-golf-links",
    roundId: 1,
    annotate: true,
  },
  {
    id: 2,
    player: "dan",
    date: "2026-07-30",
    kind: "note",
    title: "Curiosity became intent",
    detail: "A second Myrtle Beach round, better than the first, and the decision to actually learn this.",
    venueSlug: "myrtlewood-golf-club",
    roundId: 2,
  },
  {
    id: 3,
    player: "dan",
    date: "2026-08-23",
    kind: "decision",
    title: "Signed the year at GOLFTEC",
    detail: "Game assessment with Misty, then a full year of lessons and practice. Learn it indoors, with data, first.",
    venueSlug: "golftec-nashville-west",
    sessionId: 2,
    annotate: true,
  },
  {
    id: 4,
    player: "dan",
    date: "2026-08-25",
    kind: "decision",
    title: "Topgolf becomes the weekly reps",
    detail: "One to two bays a week. The place to hit a real ball between lessons.",
    venueSlug: "topgolf-nashville",
    sessionId: 3,
  },
  {
    id: 5,
    player: "dan",
    date: "2026-08-30",
    kind: "decision",
    title: "Signed the year at PopStroke",
    detail: "Three indoor rounds in a heat wave. Putting gets its own membership.",
    venueSlug: "popstroke-nashville",
    roundId: 5,
  },
];
