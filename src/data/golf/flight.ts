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

/* ---------- 3D flight, for the range scene ---------- */

/**
 * A single shot for the 3D range: the side-profile arc plus where it
 * finished left or right of the line. Positive offline is right of target.
 */
export interface RangeShot extends ArcSpec {
  /** yards, + = right of the target line */
  offline: number;
}

export interface RangeStation {
  id: string;
  /** "Driver", "7 iron", "54° wedge" */
  label: string;
  /** yards to the flag */
  target: number;
  shots: RangeShot[];
  /** SkyTrak's ideal window as an upper and lower arc */
  ideal: { upper: ArcSpec; lower: ArcSpec };
}

export interface FlightPoint {
  /** yards downrange */
  down: number;
  /** yards up */
  up: number;
  /** yards right of the line */
  side: number;
}

/**
 * Point along a shot at t in 0..1. Downrange and height follow the same
 * cubic used by `arcPath`; lateral drift accumulates late in the flight,
 * the way a fade or a slice actually curves.
 */
export function flightPoint(shot: RangeShot, t: number, out: FlightPoint = { down: 0, up: 0, side: 0 }): FlightPoint {
  const c = shot.carry;
  const { h1, h2 } = controls(shot);
  const u = 1 - t;
  out.down = 3 * u * u * t * (0.3 * c) + 3 * u * t * t * (0.7 * c) + t * t * t * c;
  out.up = 3 * u * u * t * h1 + 3 * u * t * t * h2;
  out.side = shot.offline * Math.pow(t, 1.7);
  return out;
}

/** Shape an assessment station for the range scene. Per-shot angles are not reported, so every shot takes the station's mid launch and descent. */
export function toRangeStation(st: {
  id: string;
  target: number;
  clubLabel?: string;
  club: string;
  launch: { min: number; max: number };
  descent: { min: number; max: number };
  ideal: { launch: { min: number; max: number }; descent: { min: number; max: number } };
  landings: { carry: number; offline?: number }[];
}, clubLabel: string): RangeStation {
  return {
    id: st.id,
    label: st.clubLabel ?? clubLabel,
    target: st.target,
    shots: st.landings.map((l) => ({ carry: l.carry, offline: l.offline ?? 0, launch: mid(st.launch), descent: mid(st.descent) })),
    ideal: {
      upper: { carry: st.target * 1.03, launch: st.ideal.launch.max, descent: st.ideal.descent.max },
      lower: { carry: st.target * 0.94, launch: st.ideal.launch.min, descent: st.ideal.descent.min },
    },
  };
}
