import type { Session } from "@/data/golf/types";

/**
 * Practice sessions, append-only. Use the next sequential `id`.
 * Add entries with `/add-golf-session`.
 */
export const sessions: Session[] = [
  {
    id: 1,
    player: "dan",
    date: "2026-08-21",
    venueSlug: "five-iron-golf-nashville",
    kind: "simulator",
    focus: "Digital courses on Trackman, more hang than practice",
    clubs: [],
    takeaway:
      "Enough feedback to satisfy the tinkering part of the brain, enough unreality to keep a bad shot from ruining the mood. Probably a one-off.",
  },
  {
    id: 2,
    player: "dan",
    date: "2026-08-23",
    venueSlug: "golftec-nashville-west",
    kind: "lesson",
    partners: ["Misty"],
    focus: "Initial game assessment",
    clubs: [
      {
        club: "7i",
        shots: 5,
        total: 102,
        clubSpeed: 76,
        ballSpeed: 88,
        smashFactor: 1.14,
        clubPath: 5.8,
        faceToTarget: 1.2,
        note: "Five-shot averages off the assessment screen. The one shot it caught on camera went 39 total, 17 carry, off a 4 degree launch.",
      },
    ],
    takeaway:
      "A screen full of numbers politely explaining what the swing has been doing. Signed a full year of lessons and practice on the spot.",
  },
  {
    id: 3,
    player: "dan",
    date: "2026-08-25",
    venueSlug: "topgolf-nashville",
    kind: "range",
    durationMin: 120,
    partners: ["Misty"],
    focus: "Game modes, real ball, real contact",
    clubs: [],
    takeaway:
      "Two hours of hitting a real ball hard into the evening air. This is the weekly reps venue now.",
  },
];
