/**
 * Markup for the dynamic parts of the progress chart (y ticks, area, line,
 * points, empty state). Used at build time by ProgressChart.astro and
 * again by its client script when the metric switches, so both produce the
 * same SVG.
 */

import {
  areaPath,
  formatValue,
  linePath,
  niceDomain,
  xOf,
  yOf,
  yTicks,
  type ChartFrame,
  type ChartPoint,
  type ChartSeries,
} from "@/data/golf/chart";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

/**
 * Same-day entries (three PopStroke rounds in one evening) fan out a few
 * units along X so they read as separate points instead of a vertical line.
 */
function fanSameDay(f: ChartFrame, points: ChartPoint[]): ChartPoint[] {
  const unitsPerMs = (f.width - f.padL - f.padR) / Math.max(1, f.tMax - f.tMin);
  const seen = new Map<string, number>();
  return points.map((p) => {
    const n = seen.get(p.date) ?? 0;
    seen.set(p.date, n + 1);
    return n === 0 ? p : { ...p, t: p.t + (n * 7) / unitsPerMs };
  });
}

export function renderSeries(f: ChartFrame, series: ChartSeries): string {
  const s: ChartSeries = { ...series, points: fanSameDay(f, series.points) };
  const values = s.points.map((p) => p.v);
  const domain = niceDomain(values, s.format);
  const parts: string[] = [];

  // y grid + labels
  for (const v of yTicks(domain)) {
    const y = yOf(f, domain, v).toFixed(1);
    parts.push(
      `<line class="pc-grid" x1="${f.padL}" x2="${f.width - f.padR}" y1="${y}" y2="${y}"/>`,
      `<text class="pc-ylabel" x="${f.padL - 10}" y="${y}" dy="0.32em" text-anchor="end">${esc(formatValue(v, s.format))}</text>`,
    );
  }

  if (s.points.length === 0) {
    const cx = (f.padL + f.width - f.padR) / 2;
    const cy = (f.padT + f.height - f.padB) / 2;
    parts.push(
      `<text class="pc-empty" x="${cx}" y="${cy - 8}" text-anchor="middle">NO ${esc(s.label.toUpperCase())} DATA YET</text>`,
      `<text class="pc-empty-sub" x="${cx}" y="${cy + 14}" text-anchor="middle">FIRST NUMBER COMES FROM THE NEXT GOLFTEC SESSION</text>`,
    );
    return parts.join("");
  }

  if (s.points.length >= 2) {
    parts.push(`<path class="pc-area" d="${areaPath(f, domain, s.points)}"/>`);
    parts.push(`<path class="pc-line" d="${linePath(f, domain, s.points)}" pathLength="1"/>`);
  }

  s.points.forEach((p, i) => {
    const x = xOf(f, p.t).toFixed(1);
    const y = yOf(f, domain, p.v).toFixed(1);
    const last = i === s.points.length - 1;
    parts.push(
      `<a class="pc-pt${last ? " is-last" : ""}" href="${esc(p.href)}" data-x="${x}" data-y="${y}" data-date="${p.date}" data-venue="${esc(p.venue)}" data-value="${esc(formatValue(p.v, s.format))}${s.unit ? " " + esc(s.unit) : ""}">` +
        `<circle class="pc-halo" cx="${x}" cy="${y}" r="10"/>` +
        `<circle class="pc-dot" cx="${x}" cy="${y}" r="4"/>` +
        `</a>`,
    );
  });

  if (s.points.length === 1) {
    const p = s.points[0];
    const x = Number(xOf(f, p.t).toFixed(1));
    const y = Number(yOf(f, domain, p.v).toFixed(1));
    const anchor = x > f.width * 0.7 ? "end" : "start";
    const dx = anchor === "end" ? -14 : 14;
    parts.push(
      `<text class="pc-solo" x="${x + dx}" y="${y}" dy="0.32em" text-anchor="${anchor}">${esc(formatValue(p.v, s.format))}${s.unit ? " " + esc(s.unit.toUpperCase()) : ""} · ONE POINT, NOT A TREND YET</text>`,
    );
  }

  return parts.join("");
}
