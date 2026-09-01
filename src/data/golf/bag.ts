import type { BagItem } from "@/data/golf/types";

/**
 * Current and retired equipment. An item with no `retired` date is in the
 * bag. Retired items should point at what replaced them via `replaced` on
 * the newer item so the upgrade path stays legible.
 *
 * Example:
 * {
 *   id: "driver-2026",
 *   category: "wood",
 *   club: "driver",
 *   brand: "Callaway",
 *   model: "Elyte",
 *   loft: "10.5°",
 *   shaft: "Regular",
 *   acquired: "2026-09-01",
 *   why: "Fitted at GOLFTEC after the assessment.",
 * }
 */
export const bag: BagItem[] = [];
