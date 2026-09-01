import type { Round } from "@/data/golf/types";

/**
 * Scored rounds, append-only. Use the next sequential `id`.
 * Add entries with `/add-round`.
 */
export const rounds: Round[] = [
  {
    id: 1,
    player: "dan",
    date: "2026-07-27",
    venueSlug: "world-tour-golf-links",
    format: "best-ball",
    holesPlayed: 18,
    partners: ["Blaine", "Caleb"],
    note: "First round in about twenty years. A couple of clean strikes, most drives leaking right.",
  },
  {
    id: 2,
    player: "dan",
    date: "2026-07-30",
    venueSlug: "myrtlewood-golf-club",
    format: "stroke",
    holesPlayed: 18,
    partners: ["Blaine"],
    note: "Better than round one. Straighter borrowed balls from Blaine, still plenty of slice. Turned curiosity into intent.",
  },
  {
    id: 3,
    player: "dan",
    date: "2026-08-30",
    venueSlug: "popstroke-nashville",
    format: "putting",
    holesPlayed: 18,
    course: "Black",
    toPar: 3,
    partners: ["Misty"],
    conditions: "Indoor, heat-wave pivot",
  },
  {
    id: 4,
    player: "dan",
    date: "2026-08-30",
    venueSlug: "popstroke-nashville",
    format: "putting",
    holesPlayed: 18,
    course: "Black",
    toPar: 5,
    partners: ["Misty"],
    conditions: "Indoor",
  },
  {
    id: 5,
    player: "dan",
    date: "2026-08-30",
    venueSlug: "popstroke-nashville",
    format: "putting",
    holesPlayed: 18,
    course: "Blue",
    toPar: 2,
    partners: ["Misty"],
    conditions: "Indoor",
    note: "Kinder course, or a temporary truce. Signed the year.",
  },
];
