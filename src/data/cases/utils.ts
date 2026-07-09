import type { CaseEvent, CaseFile, CaseTone, TimelineGroup } from "@/data/cases/types";

/**
 * The semantic tone of an event, derived from what it puts on the map.
 * Lines outrank markers so charge/conviction events read as such even when
 * they also reveal a marker.
 */
export function caseEventTone(caseFile: CaseFile, event: CaseEvent): CaseTone {
  const lineKinds = event.lineIds.map((id) => caseFile.lines.find((l) => l.id === id)?.kind);
  if (lineKinds.includes("charge")) return "charge";
  if (lineKinds.includes("conviction")) return "conviction";
  if (lineKinds.includes("lead")) return "lead";
  const markerKinds = event.markerIds.map((id) => caseFile.markers.find((m) => m.id === id)?.kind);
  if (markerKinds.includes("remains")) return "remains";
  if (markerKinds.includes("lastSeen")) return "lastSeen";
  if (markerKinds.includes("sighting")) return "sighting";
  if (markerKinds.includes("residence")) return "residence";
  if (markerKinds.includes("poi")) return "poi";
  return "plain";
}

/**
 * Derive era-grouped timeline groups from a case file, for CaseTimeline.astro.
 * Pass hrefFor to make entries link somewhere (e.g. `#t:${event.id}` to open
 * the event on a case board on the same page).
 */
export function caseFileToTimeline(
  caseFile: CaseFile,
  options: { hrefFor?: (event: CaseEvent) => string; includeBody?: boolean } = {}
): TimelineGroup[] {
  const eventById = new Map(caseFile.events.map((e) => [e.id, e]));
  return caseFile.eras.map((era) => ({
    label: era.label,
    years: era.years,
    entries: era.eventIds.flatMap((id) => {
      const event = eventById.get(id);
      if (!event) return [];
      return [
        {
          dateLabel: event.dateLabel,
          date: event.date,
          title: event.title,
          body: options.includeBody ? event.body : undefined,
          tone: caseEventTone(caseFile, event),
          href: options.hrefFor?.(event),
        },
      ];
    }),
  }));
}
