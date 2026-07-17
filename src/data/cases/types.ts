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
  | "sighting" // teal: a confirmed sighting or trace of activity
  | "poi"; // neutral point of interest

export type LineKind =
  | "trace" // red: last seen -> remains for one person
  | "charge" // purple: suspect residence -> victims they are charged with
  | "conviction" // green: suspect residence -> victims they were convicted of
  | "lead"; // teal: a possible connection between places, e.g. where an item was found -> where it was used

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

export type PersonRole = "victim" | "suspect" | "missing" | "personOfInterest";

/**
 * How the people index groups its portraits ("The victims", "Persons of
 * interest", ...). A case without groups gets the murder-case defaults.
 */
export interface PeopleGroup {
  label: string;
  roles: PersonRole[];
}

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
  facts?: CaseFact[];
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

/**
 * One vital-statistics entry ("Last seen: May 1, 2010", "Height: 5'9\"").
 * Fields vary per person and per case, so facts are an ordered list,
 * not a fixed schema.
 */
export interface CaseFact {
  label: string;
  value: string;
  /** Colors the value with the shared semantic tone (e.g. lastSeen amber) */
  tone?: CaseTone;
  /** Spans the full row for long values */
  wide?: boolean;
}

/**
 * One item in the evidence gallery ("The exhibits"): a photograph, document
 * scan, or map with a rich caption. `body` is trusted HTML authored in the
 * case data file (links and emphasis welcome) and is rendered with set:html.
 */
export interface CaseExhibit {
  id: string;
  src: string;
  /** Intrinsic pixel size; drives the justified-row layout and CLS-free loading */
  width: number;
  height: number;
  alt: string;
  /** Mono tag under the index, e.g. "Photograph", "Document", "Aerial" */
  kindLabel?: string;
  title: string;
  dateLabel?: string;
  /** Rich caption HTML shown in the exhibit viewer */
  body?: string;
  /** Attribution line, e.g. "LA County Sheriff's Department records" */
  credit?: string;
  /** Colors the index chip with the shared semantic tone */
  tone?: CaseTone;
}

export type SourceKind = "link" | "pdf";

export interface CaseSource {
  title: string;
  /** Canonical URL; always offered as an external link */
  href: string;
  /** "pdf" renders an expandable inline document viewer */
  kind?: SourceKind;
  /** Embeddable URL for pdf sources (e.g. a Drive /preview URL). Defaults to href. */
  embedSrc?: string;
  /** Publisher or outlet, e.g. "CNN", "Suffolk County Court" */
  outlet?: string;
  dateLabel?: string;
  note?: string;
}

export interface SourceGroup {
  label?: string;
  sources: CaseSource[];
}

export interface CaseFile {
  id: string;
  title: string;
  subtitle: string;
  defaultCamera: { center: LngLat; zoom: number };
  /**
   * Zoom cap when the board fits an event's geometry. Defaults to 11.2,
   * tuned for a region-scale case; single-city cases want ~14-15.
   */
  boundsMaxZoom?: number;
  peopleGroups?: PeopleGroup[];
  people: CasePerson[];
  events: CaseEvent[];
  eras: CaseEra[];
  markers: CaseMarker[];
  lines: CaseLine[];
  /** Evidence gallery items, in exhibit order */
  exhibits?: CaseExhibit[];
  sources?: SourceGroup[];
  /** Case-level vitals (span, jurisdiction, case numbers, …) */
  facts?: CaseFact[];
}
