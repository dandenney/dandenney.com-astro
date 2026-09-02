import type { Assessment } from "@/data/golf/types";

/**
 * GOLFTEC Game Evaluations, append-only. One entry per evaluation; a
 * re-assessment is a new entry, which is what makes the score chartable.
 *
 * Landing positions and flight ranges for id 1 were read off the app's
 * Shot Profile and Zone Profile screens (see `images`), not exported, so
 * carries are within a few yards and offline values are rougher still.
 * Replace with exported numbers if GOLFTEC ever hands them over.
 */
const IMG = "/golf/assessments/2026-08-23";

export const assessments: Assessment[] = [
  {
    id: 1,
    player: "dan",
    date: "2026-08-23",
    venueSlug: "golftec-nashville-west",
    sessionId: 2,
    system: "GOLFTEC Game Evaluation on SkyTrak",
    score: 114.44,
    goal: 125,
    approximate: true,
    note: "GOLFTEC starts everyone at a goal of 125. The first evaluation projected 114, so the goal is already under the number. The driver station is the story: five swings at a 300-yard flag, none past 185, all of them right.",
    stations: [
      {
        id: "dr-300",
        target: 300,
        club: "driver",
        shots: 5,
        launch: { min: -1, max: 19 },
        backSpin: 1061,
        descent: { min: 2, max: 31 },
        ideal: { launch: { min: 12, max: 16 }, backSpin: 2125, descent: { min: 28, max: 34 } },
        landings: [
          { carry: 185, offline: 35 },
          { carry: 172, offline: 33 },
          { carry: 140, offline: 52 },
          { carry: 131, offline: -13 },
          { carry: 112, offline: 4 },
        ],
        images: { profile: `${IMG}/driver-300-profile.webp`, zone: `${IMG}/driver-300-zone.webp` },
      },
      {
        id: "4h-180",
        target: 180,
        club: "hybrid",
        clubLabel: "4 hybrid",
        shots: 2,
        launch: { min: 0, max: 25 },
        backSpin: 1797,
        descent: { min: 3, max: 52 },
        ideal: { launch: { min: 16, max: 22 }, backSpin: 3200, descent: { min: 30, max: 40 } },
        landings: [{ carry: 163 }, { carry: 130 }],
        images: { profile: `${IMG}/hybrid-180-profile.webp` },
      },
      {
        id: "7i-150",
        target: 150,
        club: "7i",
        shots: 4,
        launch: { min: 12, max: 25 },
        backSpin: 4094,
        descent: { min: 18, max: 55 },
        ideal: { launch: { min: 15, max: 20 }, backSpin: 5700, descent: { min: 42, max: 48 } },
        landings: [
          { carry: 135, offline: 15 },
          { carry: 124, offline: 34 },
          { carry: 101, offline: 26 },
          { carry: 74, offline: -38 },
        ],
        images: { profile: `${IMG}/7i-150-profile.webp`, zone: `${IMG}/7i-150-zone.webp` },
      },
      {
        id: "7i-120",
        target: 120,
        club: "7i",
        shots: 3,
        launch: { min: 13, max: 25 },
        backSpin: 2512,
        descent: { min: 28, max: 41 },
        ideal: { launch: { min: 15, max: 20 }, backSpin: 5500, descent: { min: 38, max: 44 } },
        landings: [
          { carry: 120, offline: -5 },
          { carry: 110, offline: 12 },
          { carry: 68, offline: -39 },
        ],
        images: { profile: `${IMG}/7i-120-profile.webp`, zone: `${IMG}/7i-120-zone.webp` },
      },
      {
        id: "54w-50",
        target: 50,
        club: "sw",
        clubLabel: "54° wedge",
        shots: 2,
        launch: { min: 16, max: 30 },
        backSpin: 3031,
        descent: { min: 20, max: 35 },
        ideal: { launch: { min: 28, max: 34 }, backSpin: 7500, descent: { min: 40, max: 46 } },
        landings: [
          { carry: 52, offline: 9 },
          { carry: 10, offline: 14 },
        ],
        images: { profile: `${IMG}/54w-50-profile.webp`, zone: `${IMG}/54w-50-zone.webp` },
      },
    ],
  },
];
