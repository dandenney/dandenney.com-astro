/**
 * Side-profile arc geometry shared by the tracer visuals. Pure math, safe
 * to import from build-time and client code alike.
 */

export interface ArcSpec {
  /** yards */
  carry: number;
  /** degrees */
  launch: number;
  /** degrees */
  descent: number;
}

const RAD = Math.PI / 180;

function controls(spec: ArcSpec) {
  const c = spec.carry;
  const launch = Math.max(1, spec.launch);
  const descent = Math.max(2, spec.descent);
  return {
    h1: 0.3 * c * Math.tan(launch * RAD),
    h2: 0.3 * c * Math.tan(descent * RAD),
  };
}

/** Peak height of the arc in yards. */
export function apexOf(spec: ArcSpec): number {
  const { h1, h2 } = controls(spec);
  let best = 0;
  for (let i = 1; i < 32; i++) {
    const t = i / 32;
    const y = 3 * (1 - t) ** 2 * t * h1 + 3 * (1 - t) * t ** 2 * h2;
    if (y > best) best = y;
  }
  return best;
}

export interface Projector {
  /** yards -> px along the ground */
  x(yd: number): number;
  /** yards up -> px (already flipped, 0 at the ground line) */
  y(yd: number): number;
}

/** SVG path for one arc from the tee to its landing. */
export function arcPath(spec: ArcSpec, p: Projector): string {
  const c = spec.carry;
  const { h1, h2 } = controls(spec);
  return `M${p.x(0).toFixed(1)} ${p.y(0).toFixed(1)} C${p.x(0.3 * c).toFixed(1)} ${p.y(h1).toFixed(1)}, ${p.x(0.7 * c).toFixed(1)} ${p.y(h2).toFixed(1)}, ${p.x(c).toFixed(1)} ${p.y(0).toFixed(1)}`;
}

/** Closed band between two arcs, for an "ideal window" fill. */
export function bandPath(upper: ArcSpec, lower: ArcSpec, p: Projector): string {
  const lc = lower.carry;
  const { h1, h2 } = controls(lower);
  const back = `L${p.x(lc).toFixed(1)} ${p.y(0).toFixed(1)} C${p.x(0.7 * lc).toFixed(1)} ${p.y(h2).toFixed(1)}, ${p.x(0.3 * lc).toFixed(1)} ${p.y(h1).toFixed(1)}, ${p.x(0).toFixed(1)} ${p.y(0).toFixed(1)} Z`;
  return `${arcPath(upper, p)} ${back}`;
}

export function mid(r: { min: number; max: number }): number {
  return (r.min + r.max) / 2;
}
