/**
 * Ball Flight (/golf) data schema.
 *
 * Practice sessions, scored rounds, the bag, and narrative milestones for
 * the golf section. Every metric is optional: GOLFTEC hands over summary
 * numbers, and which ones vary session to session. Personal records are
 * derived in utils.ts, never stored.
 *
 * `id`s on sessions, rounds, and milestones are append-only. Never reorder
 * or reassign them; other entries and URLs cite them.
 */

/** Section display name. URL stays /golf regardless. */
export const GOLF_SECTION_NAME = "Ball Flight";

/** First round of the arc. "Days in" counts from here. */
export const GOLF_EPOCH = "2026-07-27";

export type Player = "dan" | "misty";

export const PLAYER_LABEL: Record<Player, string> = {
  dan: "Dan",
  misty: "Misty",
};

export type Club =
  | "driver"
  | "3w"
  | "5w"
  | "hybrid"
  | "4i"
  | "5i"
  | "6i"
  | "7i"
  | "8i"
  | "9i"
  | "pw"
  | "gw"
  | "sw"
  | "lw"
  | "putter";

/** Bag order, longest club first. Also the sort key for tables. */
export const CLUB_ORDER: Club[] = [
  "driver",
  "3w",
  "5w",
  "hybrid",
  "4i",
  "5i",
  "6i",
  "7i",
  "8i",
  "9i",
  "pw",
  "gw",
  "sw",
  "lw",
  "putter",
];

export const CLUB_LABEL: Record<Club, string> = {
  driver: "Driver",
  "3w": "3 Wood",
  "5w": "5 Wood",
  hybrid: "Hybrid",
  "4i": "4 Iron",
  "5i": "5 Iron",
  "6i": "6 Iron",
  "7i": "7 Iron",
  "8i": "8 Iron",
  "9i": "9 Iron",
  pw: "Pitching Wedge",
  gw: "Gap Wedge",
  sw: "Sand Wedge",
  lw: "Lob Wedge",
  putter: "Putter",
};

/** Short form for telemetry readouts: DR, 7I, PW. */
export const CLUB_SHORT: Record<Club, string> = {
  driver: "DR",
  "3w": "3W",
  "5w": "5W",
  hybrid: "HY",
  "4i": "4I",
  "5i": "5I",
  "6i": "6I",
  "7i": "7I",
  "8i": "8I",
  "9i": "9I",
  pw: "PW",
  gw: "GW",
  sw: "SW",
  lw: "LW",
  putter: "PT",
};

/** Per-club numbers from one session. Summary figures, not shot lists. */
export interface ClubMetrics {
  club: Club;
  shots?: number;
  /** yards, average */
  carry?: number;
  /** yards, average */
  total?: number;
  /** yards, best single shot in the session */
  longest?: number;
  /** mph */
  clubSpeed?: number;
  /** mph */
  ballSpeed?: number;
  /** ballSpeed / clubSpeed */
  smashFactor?: number;
  /** degrees */
  launchAngle?: number;
  /** rpm */
  backSpin?: number;
  /** degrees, positive = in-to-out */
  clubPath?: number;
  /** degrees, positive = open */
  faceToTarget?: number;
  note?: string;
}

/** Numeric ClubMetrics keys. Used for trends, PRs, and table columns. */
export type ClubMetricKey = Exclude<keyof ClubMetrics, "club" | "note">;

export type SessionKind = "lesson" | "practice" | "range" | "simulator";

export interface Session {
  /** sequential, append-only, never reassign */
  id: number;
  player: Player;
  /** ISO date, YYYY-MM-DD */
  date: string;
  /** -> golf-venues entry id */
  venueSlug: string;
  kind: SessionKind;
  coach?: string;
  durationMin?: number;
  /** "keeping the face from closing" */
  focus?: string;
  partners?: string[];
  clubs: ClubMetrics[];
  /** hand-written, 1-3 sentences */
  takeaway?: string;
  aiGenerated?: boolean;
}

export type RoundFormat = "stroke" | "best-ball" | "scramble" | "putting";

export interface Round {
  id: number;
  player: Player;
  date: string;
  venueSlug: string;
  format: RoundFormat;
  holesPlayed: 9 | 18;
  /** Course or layout name where a venue has several, e.g. "Black" at PopStroke */
  course?: string;
  tees?: string;
  par?: number;
  /** total strokes */
  score?: number;
  /**
   * Relative to par when only that is known (PopStroke scoreboards report
   * +3, not 39). Derived from score - par when both exist.
   */
  toPar?: number;
  /** optional hole-by-hole strokes */
  holes?: number[];
  partners?: string[];
  conditions?: string;
  putts?: number;
  fairways?: { hit: number; of: number };
  gir?: { hit: number; of: number };
  note?: string;
}

export type BagCategory = "wood" | "iron" | "wedge" | "putter" | "ball" | "gear";

export interface BagItem {
  id: string;
  category: BagCategory;
  club?: Club;
  brand: string;
  model: string;
  loft?: string;
  shaft?: string;
  /** ISO */
  acquired?: string;
  /** ISO. Unset = currently in the bag */
  retired?: string;
  /** id of the item this one replaced */
  replaced?: string;
  price?: number;
  /** hand-written: why this went in the bag */
  why?: string;
  /** hand-written, after use */
  verdict?: string;
}

export type MilestoneKind = "first" | "pr" | "decision" | "note";

export interface Milestone {
  id: number;
  player: Player;
  date: string;
  kind: MilestoneKind;
  /** "First par" */
  title: string;
  /** hand-written */
  detail?: string;
  venueSlug?: string;
  sessionId?: number;
  roundId?: number;
  /** Show on the progress chart as a labelled moment */
  annotate?: boolean;
}
