export type RecordedAt = { studio: string | null; city: string; state?: string | null; country?: string | null; source: string };

const yaml = (s: string) => JSON.stringify(s);

export function recordedAtYaml(entries: RecordedAt[]): string {
  if (!entries.length) return "";
  const lines = entries.map((e) =>
    [
      `  - ${e.studio ? `studio: ${yaml(e.studio)}\n    ` : ""}city: ${yaml(e.city)}`,
      e.state ? `    state: ${yaml(e.state)}` : null,
      e.country ? `    country: ${yaml(e.country)}` : null,
      `    source: ${yaml(e.source)}`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return `recordedAt:\n${lines.join("\n")}\n`;
}
