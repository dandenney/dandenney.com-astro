/**
 * Pure chart math for the progress chart. Imported by ProgressChart.astro
 * at build time and again by its client script for the metric switcher, so
 * this file must stay free of Astro and Node imports.
 */

export type ValueFormat = "int" | "fixed1" | "fixed2" | "toPar";

export interface ChartPoint {
  /** ms since epoch, UTC noon of the date */
  t: number;
  v: number;
  /** ISO date */
  date: string;
  /** Venue name for the tooltip */
  venue: string;
  href: string;
}

export interface ChartSeries {
  key: string;
  label: string;
  unit: string;
  format: ValueFormat;
  lowerIsBetter: boolean;
  points: ChartPoint[];
  /** Dashed horizontal line, e.g. the GOLFTEC goal score */
  reference?: { v: number; label: string };
}

export interface ChartMarker {
  t: number;
  kind: "session" | "round";
  label: string;
}

export interface ChartAnnotation {
  t: number;
  label: string;
}

export interface ChartFrame {
  width: number;
  height: number;
  padL: number;
  padR: number;
  padT: number;
  padB: number;
  tMin: number;
  tMax: number;
}

export const DAY = 86_400_000;

export function toT(iso: string): number {
  return Date.parse(`${iso}T12:00:00Z`);
}

export function xOf(f: ChartFrame, t: number): number {
  const span = Math.max(1, f.tMax - f.tMin);
  return f.padL + ((t - f.tMin) / span) * (f.width - f.padL - f.padR);
}

export function yOf(f: ChartFrame, domain: [number, number], v: number): number {
  const [lo, hi] = domain;
  const span = hi - lo || 1;
  return f.padT + (1 - (v - lo) / span) * (f.height - f.padT - f.padB);
}

/** Pads the value range and snaps to a readable step. */
export function niceDomain(values: number[], format: ValueFormat): [number, number] {
  if (values.length === 0) return format === "toPar" ? [-2, 6] : [0, 100];
  let lo = Math.min(...values);
  let hi = Math.max(...values);
  if (format === "toPar") {
    lo = Math.min(lo, 0);
    hi = Math.max(hi, 2);
    return [Math.floor(lo) - 1, Math.ceil(hi) + 1];
  }
  const pad = Math.max((hi - lo) * 0.35, format === "fixed2" ? 0.05 : format === "fixed1" ? 2 : 10);
  const step = niceStep((hi - lo + pad * 2) / 4);
  return [Math.floor((lo - pad) / step) * step, Math.ceil((hi + pad) / step) * step];
}

export function niceStep(raw: number): number {
  if (raw <= 0) return 1;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const n = raw / mag;
  const nice = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return nice * mag;
}

export function yTicks(domain: [number, number], count = 4): number[] {
  const [lo, hi] = domain;
  const step = niceStep((hi - lo) / count);
  const out: number[] = [];
  for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) out.push(Number(v.toFixed(4)));
  return out;
}

export function monthTicks(tMin: number, tMax: number): { t: number; label: string }[] {
  const out: { t: number; label: string }[] = [];
  const d = new Date(tMin);
  d.setUTCDate(1);
  d.setUTCMonth(d.getUTCMonth() + 1);
  d.setUTCHours(12, 0, 0, 0);
  while (d.getTime() <= tMax) {
    out.push({
      t: d.getTime(),
      label: d.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase(),
    });
    d.setUTCMonth(d.getUTCMonth() + 1);
  }
  return out;
}

export function formatValue(v: number, format: ValueFormat): string {
  switch (format) {
    case "toPar":
      return v === 0 ? "E" : v > 0 ? `+${v}` : `${v}`;
    case "fixed1":
      return v.toFixed(1);
    case "fixed2":
      return v.toFixed(2);
    default:
      return Math.round(v).toLocaleString("en-US");
  }
}

export function linePath(f: ChartFrame, domain: [number, number], points: ChartPoint[]): string {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"}${xOf(f, p.t).toFixed(1)} ${yOf(f, domain, p.v).toFixed(1)}`)
    .join(" ");
}

/** Area under the line down to the baseline, for the soft fill. */
export function areaPath(f: ChartFrame, domain: [number, number], points: ChartPoint[]): string {
  if (points.length < 2) return "";
  const base = f.height - f.padB;
  const first = points[0];
  const last = points[points.length - 1];
  return `${linePath(f, domain, points)} L${xOf(f, last.t).toFixed(1)} ${base} L${xOf(f, first.t).toFixed(1)} ${base} Z`;
}
