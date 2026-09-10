/**
 * The range: a 3D bay for the Ball Flight section, built from the actual
 * launch-monitor numbers. Floor grid, target line, flag with 10% and 20%
 * rings, SkyTrak's ideal window as a ribbon, and every shot at a station
 * drawn as a tracer with a dimpled ball flying it. Client-only; loaded on
 * demand by Range.astro.
 *
 * Units are yards. The tee is the origin, the target line runs down -z,
 * +x is right of target.
 */

import * as THREE from "three";
import { flightPoint, type RangeShot, type RangeStation } from "@/data/golf/flight";

export interface RangeSceneOptions {
  reducedMotion: boolean;
  mode: "panel" | "hero";
  onShot?: (info: ShotInfo) => void;
  onIdle?: (st: RangeStation) => void;
}

export interface ShotInfo {
  index: number;
  total: number;
  shot: RangeShot;
  phase: "flight" | "landed";
}

export interface RangeScene {
  setStation(st: RangeStation): void;
  replay(): void;
  setVisible(visible: boolean): void;
  dispose(): void;
}

/* ---------- palette (hex of the oklch tokens in golf.css) ---------- */

const BAY = new THREE.Color("#050a0f");
const PANEL = new THREE.Color("#0c1218");
const INK = new THREE.Color("#eff2f6");
const TRACER = new THREE.Color("#a1e645");
const MISS = new THREE.Color("#f29520");
const TURF = new THREE.Color("#2b6339");

const TUBE_SEGMENTS = 140;
const TUBE_RADIAL = 6;

/* ---------- helpers ---------- */

class FlightCurve extends THREE.Curve<THREE.Vector3> {
  private scratch = { down: 0, up: 0, side: 0 };
  constructor(private shot: RangeShot) {
    super();
  }
  getPoint(t: number, target = new THREE.Vector3()): THREE.Vector3 {
    const p = flightPoint(this.shot, t, this.scratch);
    return target.set(p.side, p.up, -p.down);
  }
}

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

/** Mono text on a canvas, for the distance labels. */
function makeLabel(text: string, color: string, size = 44) {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d")!;
  const font = `500 ${size}px "IBM Plex Mono", ui-monospace, Menlo, monospace`;
  ctx.font = font;
  const w = Math.ceil(ctx.measureText(text).width) + size * 0.6;
  c.width = w;
  c.height = Math.ceil(size * 1.4);
  ctx.font = font;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = color;
  ctx.fillText(text, w / 2, c.height / 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  return { tex, aspect: w / c.height };
}

function makeGlowTexture() {
  const size = 96;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.2, "rgba(255,255,255,0.6)");
  g.addColorStop(0.55, "rgba(255,255,255,0.14)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(c);
}

/** Fibonacci-spread dimples pressed into a sphere, normals recomputed. */
function makeBallGeometry() {
  const geo = new THREE.SphereGeometry(1, 128, 96);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const dimples = 332;
  const centers: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < dimples; i++) {
    const y = 1 - (i / (dimples - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = golden * i;
    centers.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r));
  }
  const dimpleAngle = 0.085;
  const depth = 0.028;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    let best = 0;
    for (const c of centers) {
      const d = v.dot(c);
      if (d > best) best = d;
    }
    const ang = Math.acos(Math.min(1, best));
    if (ang < dimpleAngle) {
      const k = 1 - (ang / dimpleAngle) ** 2;
      const push = 1 - depth * k * k;
      pos.setXYZ(i, v.x * push, v.y * push, v.z * push);
    }
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

/* ---------- floor: the target screen, laid flat ---------- */

function makeFloor() {
  const uniforms = THREE.UniformsUtils.merge([
    THREE.UniformsLib.fog,
    {
      uBase: { value: PANEL.clone() },
      uLine: { value: INK.clone() },
      uAxis: { value: TRACER.clone() },
      uReach: { value: 300 },
    },
  ]);
  const mat = new THREE.ShaderMaterial({
    uniforms,
    fog: true,
    vertexShader: /* glsl */ `
      #include <fog_pars_vertex>
      varying vec3 vWorld;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        vec4 mvPosition = viewMatrix * w;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,
    fragmentShader: /* glsl */ `
      #include <fog_pars_fragment>
      uniform vec3 uBase;
      uniform vec3 uLine;
      uniform vec3 uAxis;
      uniform float uReach;
      varying vec3 vWorld;
      float gridLine(vec2 p, float spacing, float width) {
        vec2 q = p / spacing;
        vec2 fw = fwidth(q) * width;
        vec2 g = abs(fract(q - 0.5) - 0.5) / max(fw, vec2(1e-5));
        float l = min(g.x, g.y);
        /* fade out once a cell is under ~3px, or the lines merge into a tint */
        float vis = 1.0 - smoothstep(0.18, 0.4, max(fw.x, fw.y));
        return (1.0 - min(l, 1.0)) * vis;
      }
      void main() {
        float minor = gridLine(vWorld.xz, 10.0, 1.0);
        float major = gridLine(vWorld.xz, 50.0, 1.2);
        float axis = 1.0 - min(abs(vWorld.x) / (fwidth(vWorld.x) * 1.3), 1.0);
        float side = 1.0 - smoothstep(uReach * 0.3, uReach * 0.75, abs(vWorld.x));
        float ahead = smoothstep(uReach * 0.25, uReach * 0.05, vWorld.z);
        float beyond = 1.0 - smoothstep(uReach * 1.1, uReach * 1.45, -vWorld.z);
        float reach = side * ahead * beyond;
        vec3 col = uBase;
        col = mix(col, uLine, minor * 0.07 * reach);
        col = mix(col, uLine, major * 0.16 * reach);
        col = mix(col, uAxis, axis * 0.45 * ahead * beyond);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }
    `,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.z = -1500;
  return { mesh, uniforms };
}

/* ---------- scene ---------- */

export function createRangeScene(canvas: HTMLCanvasElement, opts: RangeSceneOptions): RangeScene | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  } catch {
    return null;
  }
  const isMobile = window.matchMedia("(max-width: 719px)").matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const ground = opts.mode === "hero" ? BAY : PANEL;
  scene.background = ground.clone();
  const fog = new THREE.Fog(ground.clone(), 200, 800);
  scene.fog = fog;

  const camera = new THREE.PerspectiveCamera(36, 1, 0.5, 6000);

  const disposables: { dispose(): void }[] = [renderer];

  /* lights: the projector overhead, a little fill from the floor */
  const hemi = new THREE.HemisphereLight(0xdfe6ee, 0x0a1016, 0.9);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(-30, 80, 30);
  scene.add(key);
  const rim = new THREE.DirectionalLight(TRACER, 0.9);
  rim.position.set(40, 20, -60);
  scene.add(rim);

  const floor = makeFloor();
  (floor.uniforms.uBase.value as THREE.Color).copy(ground);
  scene.add(floor.mesh);
  disposables.push(floor.mesh.geometry, floor.mesh.material as THREE.Material);

  const glowTex = makeGlowTexture();
  disposables.push(glowTex);

  /* the ball */
  const ballGeo = makeBallGeometry();
  const ballMat = new THREE.MeshStandardMaterial({ color: 0xf6f8f4, roughness: 0.42, metalness: 0 });
  const ball = new THREE.Mesh(ballGeo, ballMat);
  const ballGlow = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: glowTex, color: TRACER, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ballGlow.scale.setScalar(5);
  ball.add(ballGlow);
  scene.add(ball);
  disposables.push(ballGeo, ballMat, ballGlow.material);

  /* per-station group, rebuilt on setStation */
  let stationGroup: THREE.Group | null = null;
  let stationDisposables: { dispose(): void }[] = [];
  let station: RangeStation | null = null;
  let curves: FlightCurve[] = [];
  let tubes: { core: THREE.Mesh; glow: THREE.Mesh; geo: THREE.TubeGeometry }[] = [];
  let markers: THREE.Mesh[] = [];
  let ballRadius = 1;

  /* camera framing */
  const camBase = new THREE.Vector3();
  const camLook = new THREE.Vector3();
  const camPos = new THREE.Vector3();
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let width = 1;
  let height = 1;

  function frame(st: RangeStation) {
    const reach = Math.max(st.target, ...st.shots.map((s) => s.carry)) * 1.05;
    const aspect = width / height;
    const narrow = aspect < 1;
    if (opts.mode === "hero") {
      camBase.set(0.13 * reach + 6, 0.085 * reach + 3, 0.22 * reach + 10);
      camLook.set((narrow ? -0.02 : -0.19) * reach, 0.06 * reach + 2, -0.5 * reach);
    } else {
      camBase.set(0.11 * reach + 4, 0.08 * reach + 3, 0.15 * reach + 8);
      camLook.set(0, 0.05 * reach + 1, -0.46 * reach);
    }
    /* narrower than 16:10 needs more distance to keep the flight in frame */
    if (aspect < 1.6) {
      const k = Math.pow(1.6 / aspect, opts.mode === "hero" ? 0.45 : 0.75);
      camBase.sub(camLook).multiplyScalar(k).add(camLook);
    }
    fog.near = 0.7 * reach + 20;
    fog.far = 2.4 * reach + 80;
    floor.uniforms.uReach.value = reach;
    ballRadius = 0.32 + reach * 0.0042;
    ball.scale.setScalar(ballRadius);
    ballGlow.scale.setScalar(4.2);
  }

  function clearStation() {
    if (stationGroup) scene.remove(stationGroup);
    stationDisposables.forEach((d) => d.dispose());
    stationDisposables = [];
    stationGroup = null;
    curves = [];
    tubes = [];
    markers = [];
  }

  function buildStation(st: RangeStation) {
    clearStation();
    const g = new THREE.Group();
    const T = st.target;
    const reach = Math.max(T, ...st.shots.map((s) => s.carry));
    const tubeR = 0.14 + reach * 0.0012;

    /* target: pole, flag, rings at 10% and 20% */
    const poleH = 2.5 + T * 0.022;
    const poleGeo = new THREE.CylinderGeometry(tubeR * 0.5, tubeR * 0.5, poleH, 8);
    const poleMat = new THREE.MeshBasicMaterial({ color: INK, transparent: true, opacity: 0.85 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.set(0, poleH / 2, -T);
    g.add(pole);
    const flagShape = new THREE.Shape();
    flagShape.moveTo(0, 0);
    flagShape.lineTo(poleH * 0.42, -poleH * 0.1);
    flagShape.lineTo(0, -poleH * 0.2);
    const flagGeo = new THREE.ShapeGeometry(flagShape);
    const flagMat = new THREE.MeshBasicMaterial({ color: TRACER, side: THREE.DoubleSide });
    const flag = new THREE.Mesh(flagGeo, flagMat);
    flag.position.set(0, poleH, -T);
    g.add(flag);
    const beamGeo = new THREE.CylinderGeometry(tubeR * 1.6, tubeR * 0.2, poleH * 3, 10, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({ color: TRACER, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.set(0, poleH * 1.5, -T);
    g.add(beam);
    stationDisposables.push(poleGeo, poleMat, flagGeo, flagMat, beamGeo, beamMat);

    const ringMat10 = new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.42 });
    const ringMat20 = new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.2 });
    for (const [pct, mat] of [[0.1, ringMat10], [0.2, ringMat20]] as const) {
      const r = T * pct;
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i < 96; i++) {
        const a = (i / 96) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r, 0.05, -T + Math.sin(a) * r));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      g.add(new THREE.LineLoop(geo, mat));
      stationDisposables.push(geo);
    }
    stationDisposables.push(ringMat10, ringMat20);

    /* distance labels down the left of the line */
    const labelX = -Math.max(6, reach * 0.06);
    const last = Math.ceil(Math.max(T, reach) / 50) * 50;
    for (let d = 50; d <= last; d += 50) {
      if (opts.mode === "hero" || Math.abs(d - T) < 12 || d > T * 0.78) continue;
      addLabel(g, String(d), labelX, -d, "#9399a0", 0.014);
    }
    addLabel(g, `${T}`, labelX, -T, "#eff2f6", 0.017);

    /* ideal window ribbon */
    const N = 56;
    const verts = new Float32Array(N * 2 * 3);
    const idx: number[] = [];
    const scratch = { down: 0, up: 0, side: 0 };
    const upper: RangeShot = { ...st.ideal.upper, offline: 0 };
    const lower: RangeShot = { ...st.ideal.lower, offline: 0 };
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      const a = flightPoint(upper, t, scratch);
      verts.set([0, a.up, -a.down], i * 6);
      const b = flightPoint(lower, t, scratch);
      verts.set([0, b.up, -b.down], i * 6 + 3);
      if (i < N - 1) {
        const k = i * 2;
        idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
      }
    }
    const ribbonGeo = new THREE.BufferGeometry();
    ribbonGeo.setAttribute("position", new THREE.BufferAttribute(verts, 3));
    ribbonGeo.setIndex(idx);
    const ribbonMat = new THREE.MeshBasicMaterial({ color: TURF, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false });
    g.add(new THREE.Mesh(ribbonGeo, ribbonMat));
    stationDisposables.push(ribbonGeo, ribbonMat);

    /* tracers, one per shot, hidden until flown */
    const longest = Math.max(...st.shots.map((s) => s.carry));
    st.shots.forEach((shot) => {
      const curve = new FlightCurve(shot);
      curves.push(curve);
      const geo = new THREE.TubeGeometry(curve, TUBE_SEGMENTS, tubeR, TUBE_RADIAL, false);
      const coreMat = new THREE.MeshBasicMaterial({ color: TRACER, transparent: true, opacity: shot.carry === longest ? 1 : 0.7, fog: false });
      const glowMat = new THREE.MeshBasicMaterial({ color: TRACER, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
      const core = new THREE.Mesh(geo, coreMat);
      const glow = new THREE.Mesh(geo, glowMat);
      glow.scale.setScalar(1);
      const glowGeo = new THREE.TubeGeometry(curve, TUBE_SEGMENTS, tubeR * 3.2, TUBE_RADIAL, false);
      glow.geometry = glowGeo;
      geo.setDrawRange(0, 0);
      glowGeo.setDrawRange(0, 0);
      g.add(core, glow);
      tubes.push({ core, glow, geo });
      stationDisposables.push(geo, glowGeo, coreMat, glowMat);

      /* landing marker: a small ring on the floor, amber when off the line */
      const off = Math.abs(shot.offline) > T * 0.1 || Math.abs(shot.carry - T) > T * 0.1;
      const mr = Math.max(0.6, reach * 0.008);
      const mGeo = new THREE.RingGeometry(mr * 0.7, mr, 32);
      const mMat = new THREE.MeshBasicMaterial({ color: off ? MISS : TRACER, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
      const m = new THREE.Mesh(mGeo, mMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(shot.offline, 0.06, -shot.carry);
      g.add(m);
      markers.push(m);
      stationDisposables.push(mGeo, mMat);
    });

    scene.add(g);
    stationGroup = g;
  }

  function addLabel(g: THREE.Group, text: string, x: number, z: number, color: string, size: number) {
    const { tex, aspect } = makeLabel(text, color);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, sizeAttenuation: false, depthWrite: false, fog: true });
    const s = new THREE.Sprite(mat);
    s.position.set(x, 0.4, z);
    s.scale.set(size * aspect, size, 1);
    s.center.set(1, 0.5);
    g.add(s);
    stationDisposables.push(tex, mat);
  }

  /* ---------- playback ---------- */

  type Phase = "flight" | "rest" | "idle";
  let phase: Phase = "idle";
  let shotIndex = 0;
  let phaseT = 0;
  let phaseDur = 1;
  let idleT = 0;
  const tmp = new THREE.Vector3();

  function setDraw(i: number, t: number) {
    const tube = tubes[i];
    if (!tube) return;
    const segs = Math.round(THREE.MathUtils.clamp(t, 0, 1) * TUBE_SEGMENTS);
    const count = segs * TUBE_RADIAL * 6;
    tube.geo.setDrawRange(0, count);
    (tube.glow.geometry as THREE.TubeGeometry).setDrawRange(0, count);
  }

  function showMarker(i: number, on: boolean) {
    const m = markers[i];
    if (m) (m.material as THREE.MeshBasicMaterial).opacity = on ? 0.9 : 0;
  }

  function startShot(i: number) {
    if (!station) return;
    shotIndex = i;
    phase = "flight";
    phaseT = 0;
    const shot = station.shots[i];
    phaseDur = 1.1 + shot.carry / 130;
    ball.position.set(0, ballRadius, 0);
    ball.visible = true;
    opts.onShot?.({ index: i, total: station.shots.length, shot, phase: "flight" });
  }

  function landShot(i: number) {
    if (!station) return;
    phase = "rest";
    phaseT = 0;
    phaseDur = 0.7;
    setDraw(i, 1);
    showMarker(i, true);
    curves[i].getPoint(1, tmp);
    ball.position.set(tmp.x, ballRadius, tmp.z);
    opts.onShot?.({ index: i, total: station.shots.length, shot: station.shots[i], phase: "landed" });
  }

  function finish() {
    phase = "idle";
    idleT = 0;
    if (station) opts.onIdle?.(station);
  }

  function showAll() {
    if (!station) return;
    tubes.forEach((_, i) => {
      setDraw(i, 1);
      showMarker(i, true);
    });
    const lastI = station.shots.length - 1;
    if (lastI >= 0) {
      curves[lastI].getPoint(1, tmp);
      ball.position.set(tmp.x, ballRadius, tmp.z);
    }
    finish();
  }

  function replay() {
    if (!station) return;
    tubes.forEach((_, i) => {
      setDraw(i, 0);
      showMarker(i, false);
    });
    if (opts.reducedMotion || station.shots.length === 0) {
      showAll();
      render();
      return;
    }
    startShot(0);
  }

  function setStation(st: RangeStation) {
    station = st;
    frame(st);
    buildStation(st);
    replay();
    render();
  }

  /* ---------- loop ---------- */

  let visible = false;
  let raf = 0;
  let last = 0;
  let disposed = false;

  function updateCamera(dt: number, time: number) {
    pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 4);
    pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 4);
    const drift = opts.reducedMotion ? 0 : Math.sin(time * 0.11) * 0.035;
    const dist = camBase.length();
    camPos.copy(camBase);
    camPos.x += (pointer.x * 0.06 + drift) * dist;
    camPos.y += pointer.y * 0.03 * dist;
    camera.position.copy(camPos);
    camera.lookAt(camLook);
  }

  function step(dt: number, time: number) {
    if (!station) return;
    if (phase === "flight") {
      phaseT += dt;
      const raw = Math.min(1, phaseT / phaseDur);
      const t = easeOutQuad(raw) * 0.15 + raw * 0.85;
      curves[shotIndex].getPoint(t, tmp);
      ball.position.set(tmp.x, Math.max(ballRadius, tmp.y + ballRadius * 0.4), tmp.z);
      ball.rotation.x -= dt * 22;
      setDraw(shotIndex, t);
      if (raw >= 1) landShot(shotIndex);
    } else if (phase === "rest") {
      phaseT += dt;
      if (phaseT >= phaseDur) {
        if (shotIndex + 1 < station.shots.length) startShot(shotIndex + 1);
        else finish();
      }
    } else {
      idleT += dt;
    }
    updateCamera(dt, time);
  }

  function render() {
    renderer.render(scene, camera);
  }

  function tick(now: number) {
    if (disposed || !visible) {
      raf = 0;
      return;
    }
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    step(dt, now / 1000);
    render();
    raf = requestAnimationFrame(tick);
  }

  function setVisible(v: boolean) {
    visible = v;
    if (v && !raf) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  }

  /* ---------- sizing + pointer ---------- */

  function resize() {
    const parent = canvas.parentElement ?? canvas;
    const w = Math.max(1, parent.clientWidth);
    const h = Math.max(1, parent.clientHeight);
    if (w === width && h === height) return;
    width = w;
    height = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (station) frame(station);
    updateCamera(0, last / 1000);
    render();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement ?? canvas);
  resize();

  function onPointer(e: PointerEvent) {
    const r = canvas.getBoundingClientRect();
    pointer.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    pointer.ty = ((e.clientY - r.top) / r.height - 0.5) * -2;
  }
  function onLeave() {
    pointer.tx = 0;
    pointer.ty = 0;
  }
  const host = canvas.parentElement ?? canvas;
  host.addEventListener("pointermove", onPointer);
  host.addEventListener("pointerleave", onLeave);

  updateCamera(0, 0);

  return {
    setStation,
    replay,
    setVisible,
    dispose() {
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      host.removeEventListener("pointermove", onPointer);
      host.removeEventListener("pointerleave", onLeave);
      clearStation();
      disposables.forEach((d) => d.dispose());
    },
  };
}
