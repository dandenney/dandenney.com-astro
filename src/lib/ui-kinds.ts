export const UI_KINDS = ["section", "interaction", "direction", "page"] as const;
export type UiKind = (typeof UI_KINDS)[number];

export const UI_KIND_LABELS: Record<UiKind, string> = {
  section: "Sections",
  interaction: "Interactions",
  direction: "Directions",
  page: "Pages",
};
