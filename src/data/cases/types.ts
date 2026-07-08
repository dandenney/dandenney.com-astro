/**
 * Case-file schema for interactive true-crime case boards.
 * A case is one dataset rendered by CaseBoard.astro: a set of people,
 * a chronological run of events, and the map geometry each event introduces.
 */

export type LngLat = [number, number];

export type MarkerKind =
  | "lastSeen" // amber: a person's last known location
  | "remains" // red: where remains were found
  | "residence" // slate: a suspect's home
  | "poi"; // neutral point of interest

export type LineKind =
  | "trace" // red: last seen -> remains for one person
  | "charge" // purple: suspect residence -> victims they are charged with
  | "conviction"; // green: suspect residence -> victims they were convicted of

export interface CaseMarker {
  id: string;
  kind: MarkerKind;
  coords: LngLat;
  label: string;
  /** Person this marker belongs to, for people-mode filtering */
  personId?: string;
}

export interface CaseLine {
  id: string;
  kind: LineKind;
  from: LngLat;
  to: LngLat;
  /** Person this line belongs to, for people-mode filtering */
  personId?: string;
}

export interface CaseEvent {
  id: string;
  /** ISO date used for sorting and the mono readout, e.g. "1993-11-02" */
  date: string;
  /** Human date, e.g. "November 2, 1993" */
  dateLabel: string;
  title: string;
  body: string;
  /** People connected to this event (portraits + cross-links in the panel) */
  personIds: string[];
  /** Map geometry first revealed by this event; persists dimly afterward */
  markerIds: string[];
  lineIds: string[];
  /**
   * Optional camera override. Without it the board fits the event's own
   * geometry; events with no geometry fall back to the case default camera.
   */
  camera?: { center: LngLat; zoom: number };
}

export interface CaseEra {
  id: string;
  label: string;
  years: string;
  /** Event ids belonging to this era, in order */
  eventIds: string[];
}

export type PersonRole = "victim" | "suspect";

export interface CasePerson {
  id: string;
  name: string;
  aka?: string;
  role: PersonRole;
  photo?: string;
  photoAlt?: string;
  /** Short status line, e.g. "Unidentified" or "Murder unsolved" */
  status: string;
  summary: string;
}

/** Semantic tones shared by the case board and case timeline */
export type CaseTone = MarkerKind | LineKind | "plain";

export interface TimelineEntry {
  /** Human date, e.g. "November 2, 1993". Ranges like "2005–2006" are fine. */
  dateLabel: string;
  /** ISO date for the <time> element, when one exists */
  date?: string;
  title: string;
  body?: string;
  tone?: CaseTone;
  /** When set, the entry links there (e.g. a case-board deep link) */
  href?: string;
}

export interface TimelineGroup {
  label?: string;
  years?: string;
  entries: TimelineEntry[];
}

export interface CaseFile {
  id: string;
  title: string;
  subtitle: string;
  defaultCamera: { center: LngLat; zoom: number };
  people: CasePerson[];
  events: CaseEvent[];
  eras: CaseEra[];
  markers: CaseMarker[];
  lines: CaseLine[];
}
