/**
 * The Oak Beach night scene for the Shannan Gilbert story page.
 *
 * An evocation, not a reconstruction: a dark tidal marsh, a distant row of
 * porch lights, and a single amber light that traces only the confirmed
 * sequence of the night — Brewer's house, Coletti's door, Brennan's door —
 * then leaves the record and fades into the reeds. Driven by a single
 * progress value (0..1) supplied by the page's scroll.
 */

import * as THREE from "three";

export interface NightSceneOptions {
  reducedMotion: boolean;
}

export interface NightScene {
  setProgress(progress: number): void;
  dispose(): void;
}

/* ---------- palette ---------- */

const NIGHT = {
  skyTop: new THREE.Color("#04060c"),
  skyHorizon: new THREE.Color("#101a2c"),
  horizonGlow: new THREE.Color("#1c2a42"),
  fog: new THREE.Color("#080c16"),
  water: new THREE.Color("#0d1524"),
  reedLow: new THREE.Color("#0a0f14"),
  reedHigh: new THREE.Color("#28342f"),
};

const DAWN = {
  skyTop: new THREE.Color("#13202f"),
  skyHorizon: new THREE.Color("#4a5d76"),
  horizonGlow: new THREE.Color("#6d8098"),
  fog: new THREE.Color("#1c2836"),
  water: new THREE.Color("#1a2534"),
  reedLow: new THREE.Color("#0e141a"),
  reedHigh: new THREE.Color("#414d47"),
};

const AMBER = new THREE.Color("#e3a94f");
const PORCH = new THREE.Color("#ffb36b");

/* ---------- layout ---------- */

// Porch lights: an abstract row of homes. Three are load-bearing.
const HOUSES: { x: number; z: number; key?: "brewer" | "coletti" | "brennan" }[] = [
  { x: 18, z: -21 },
  { x: 14.5, z: -24.5 },
  { x: 10, z: -18, key: "brewer" },
  { x: 4.5, z: -24 },
  { x: -2, z: -21, key: "coletti" },
  { x: -8, z: -24.5 },
  { x: -14, z: -19, key: "brennan" },
  { x: -20.5, z: -23 },
];

// The confirmed sequence: Brewer's house -> Coletti's door -> Brennan's door.
const CONFIRMED_POINTS = [
  new THREE.Vector3(10, 0.85, -15.5),
  new THREE.Vector3(8.5, 0.8, -12.5),
  new THREE.Vector3(4, 0.7, -13),
  new THREE.Vector3(0.5, 0.8, -15),
  new THREE.Vector3(-2, 0.95, -19.2),
  new THREE.Vector3(-4.5, 0.8, -14.5),
  new THREE.Vector3(-9, 0.7, -13.5),
  new THREE.Vector3(-14, 0.95, -17.2),
];

// Beyond the record: the light drifts into the reeds and goes out.
const UNCONFIRMED_POINTS = [
  new THREE.Vector3(-16.5, 0.75, -12),
  new THREE.Vector3(-19, 0.55, -8),
  new THREE.Vector3(-21, 0.4, -4.5),
  new THREE.Vector3(-22.5, 0.3, -1.5),
];

// Camera keyframes at each beat boundary (7 keys for 6 beats).
const CAMERA_KEYS: { pos: [number, number, number]; look: [number, number, number] }[] = [
  { pos: [0, 4.8, 26], look: [0, 1.2, -18] },
  { pos: [6.5, 3.1, 3], look: [10, 1.4, -18] },
  { pos: [5, 3.4, 5], look: [2, 0.9, -14] },
  { pos: [1.5, 3.2, 1], look: [-3, 1.1, -20] },
  { pos: [-4, 3.2, 2], look: [-13, 1.1, -18] },
  { pos: [-7, 3.4, 7], look: [-20, 0.6, -5] },
  { pos: [-7.5, 4.6, 13], look: [-19, 1.4, -4] },
];

const BEATS = 6;
const LINE_SAMPLES = 220;

/* ---------- small helpers ---------- */

function smoothstep(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function bump(x: number, center: number, width: number) {
  const d = (x - center) / width;
  return Math.exp(-d * d * 4);
}

/** Deterministic PRNG so the marsh looks the same on every visit. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeGlowTexture(inner = "rgba(255,255,255,1)") {
  const size = 64;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.25, "rgba(255,255,255,0.55)");
  g.addColorStop(0.6, "rgba(255,255,255,0.12)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(c);
}

/* ---------- scene ---------- */

export function createNightScene(
  canvas: HTMLCanvasElement,
  { reducedMotion }: NightSceneOptions
): NightScene | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  } catch {
    return null;
  }

  const isMobile = window.matchMedia("(max-width: 719px)").matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 1.75));

  const scene = new THREE.Scene();
  const fog = new THREE.FogExp2(NIGHT.fog.getHex(), 0.028);
  scene.fog = fog;

  const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 900);

  const disposables: { dispose(): void }[] = [renderer];

  /* ----- sky dome ----- */

  const skyUniforms = {
    uTop: { value: NIGHT.skyTop.clone() },
    uHorizon: { value: NIGHT.skyHorizon.clone() },
    uGlow: { value: NIGHT.horizonGlow.clone() },
  };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(420, 24, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: skyUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uTop;
        uniform vec3 uHorizon;
        uniform vec3 uGlow;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, 0.0, 1.0);
          vec3 col = mix(uHorizon, uTop, pow(h, 0.55));
          col += uGlow * exp(-h * 9.0) * 0.55;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })
  );
  scene.add(sky);
  disposables.push(sky.geometry, sky.material as THREE.Material);

  /* ----- stars ----- */

  const starRand = mulberry32(20100501);
  const starCount = 620;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const theta = starRand() * Math.PI * 2;
    const y = 0.08 + starRand() * 0.92;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    starPositions[i * 3] = Math.cos(theta) * r * 400;
    starPositions[i * 3 + 1] = y * 400;
    starPositions[i * 3 + 2] = Math.sin(theta) * r * 400;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  const starMaterial = new THREE.PointsMaterial({
    size: 1.4,
    sizeAttenuation: false,
    color: 0xbfc9dd,
    transparent: true,
    opacity: 0.62,
    fog: false,
    depthWrite: false,
  });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
  disposables.push(starGeometry, starMaterial);

  /* ----- water ----- */

  const poolCount = HOUSES.length + 1; // +1 for the moving amber light
  const poolData = new Float32Array(poolCount * 4);
  HOUSES.forEach((h, i) => {
    poolData[i * 4] = h.x;
    poolData[i * 4 + 1] = h.z;
    poolData[i * 4 + 2] = 0.5;
    poolData[i * 4 + 3] = 3.8;
  });
  const waterUniforms = {
    uTime: { value: 0 },
    uBase: { value: NIGHT.water.clone() },
    uFogColor: { value: NIGHT.fog.clone() },
    uFogDensity: { value: fog.density },
    uPoolColor: { value: PORCH.clone().multiplyScalar(0.3) },
    uPools: { value: poolData },
  };
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(320, 160),
    new THREE.ShaderMaterial({
      fog: false,
      uniforms: waterUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vWorld;
        varying float vDist;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          vec4 mv = viewMatrix * world;
          vDist = -mv.z;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform vec3 uBase;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        uniform vec3 uPoolColor;
        uniform vec4 uPools[${poolCount}];
        varying vec3 vWorld;
        varying float vDist;

        void main() {
          vec3 col = uBase;
          // broad mottling so the flats never read as solid black
          float mottle = sin(vWorld.x * 0.11 + 2.1) * sin(vWorld.z * 0.14 - 0.7);
          col += vec3(0.09, 0.12, 0.17) * (0.5 + 0.5 * mottle) * 0.16;
          // faint tidal shimmer
          float s1 = sin(vWorld.x * 1.7 + uTime * 0.6 + sin(vWorld.z * 0.9 + uTime * 0.4));
          float s2 = sin(vWorld.z * 2.3 - uTime * 0.5 + sin(vWorld.x * 1.1 - uTime * 0.7));
          float shimmer = max(0.0, s1 * s2);
          col += vec3(0.5, 0.62, 0.78) * pow(shimmer, 6.0) * 0.05;
          // soft pools of light under each lamp
          for (int i = 0; i < ${poolCount}; i++) {
            vec4 p = uPools[i];
            vec2 d = vWorld.xz - p.xy;
            float glow = exp(-dot(d, d) / (p.w * p.w)) * p.z;
            glow *= 0.85 + 0.15 * sin(uTime * 1.1 + p.x);
            col += uPoolColor * glow;
          }
          float f = 1.0 - exp(-uFogDensity * uFogDensity * vDist * vDist);
          col = mix(col, uFogColor, f);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })
  );
  water.rotation.x = -Math.PI / 2;
  scene.add(water);
  disposables.push(water.geometry, water.material as THREE.Material);

  /* ----- reeds ----- */

  const reedCount = isMobile ? 1400 : 3600;
  const blade = new THREE.PlaneGeometry(0.05, 1, 1, 4);
  blade.translate(0, 0.5, 0);
  const cross = blade.clone().rotateY(Math.PI / 2);

  // merge the two crossed blades into one base geometry by hand
  const basePositions: number[] = [];
  const baseUvs: number[] = [];
  const baseIndex: number[] = [];
  for (const g of [blade, cross]) {
    const offset = basePositions.length / 3;
    basePositions.push(...Array.from(g.getAttribute("position").array));
    baseUvs.push(...Array.from(g.getAttribute("uv").array));
    baseIndex.push(...Array.from(g.index!.array).map((i) => i + offset));
  }
  blade.dispose();
  cross.dispose();

  const reedGeometry = new THREE.InstancedBufferGeometry();
  reedGeometry.setAttribute("position", new THREE.Float32BufferAttribute(basePositions, 3));
  reedGeometry.setAttribute("uv", new THREE.Float32BufferAttribute(baseUvs, 2));
  reedGeometry.setIndex(baseIndex);
  reedGeometry.instanceCount = reedCount;

  const rand = mulberry32(511);
  const offsets = new Float32Array(reedCount * 3);
  const scales = new Float32Array(reedCount * 2);
  const phases = new Float32Array(reedCount);
  const shades = new Float32Array(reedCount);

  const clearOf = (x: number, z: number, points: THREE.Vector3[], r: number) =>
    points.every((p) => (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z) > r * r);
  const houseVecs = HOUSES.map((h) => new THREE.Vector3(h.x, 0, h.z));
  // clear along the travelled curve itself so the trace never reads as dashed
  const pathVecs = new THREE.CatmullRomCurve3(
    [...CONFIRMED_POINTS, ...UNCONFIRMED_POINTS],
    false,
    "catmullrom",
    0.35
  ).getPoints(72);
  // keep the whole travelled camera path clear, not just its keyframes
  const cameraVecs: THREE.Vector3[] = [];
  for (let i = 0; i < CAMERA_KEYS.length - 1; i++) {
    const a = CAMERA_KEYS[i].pos;
    const b = CAMERA_KEYS[i + 1].pos;
    for (let t = 0; t <= 1; t += 0.125) {
      cameraVecs.push(new THREE.Vector3(a[0] + (b[0] - a[0]) * t, 0, a[2] + (b[2] - a[2]) * t));
    }
  }

  let placed = 0;
  while (placed < reedCount) {
    const x = -44 + rand() * 88;
    const z = -27 + rand() * 46;
    // thinner between the houses, denser in the open marsh
    if (z < -16 && rand() < 0.55) continue;
    if (!clearOf(x, z, pathVecs, 2.6)) continue;
    if (!clearOf(x, z, houseVecs, 2.4)) continue;
    if (!clearOf(x, z, cameraVecs, 3.4)) continue;
    offsets[placed * 3] = x;
    offsets[placed * 3 + 1] = 0;
    offsets[placed * 3 + 2] = z;
    scales[placed * 2] = 0.55 + rand() * 0.55;
    scales[placed * 2 + 1] = 0.75 + rand() * 1.35;
    phases[placed] = rand();
    shades[placed] = rand();
    placed++;
  }
  reedGeometry.setAttribute("aOffset", new THREE.InstancedBufferAttribute(offsets, 3));
  reedGeometry.setAttribute("aScale", new THREE.InstancedBufferAttribute(scales, 2));
  reedGeometry.setAttribute("aPhase", new THREE.InstancedBufferAttribute(phases, 1));
  reedGeometry.setAttribute("aShade", new THREE.InstancedBufferAttribute(shades, 1));

  const reedUniforms = {
    uTime: { value: 0 },
    uSway: { value: reducedMotion ? 0 : 1 },
    uLow: { value: NIGHT.reedLow.clone() },
    uHigh: { value: NIGHT.reedHigh.clone() },
    uFogColor: { value: NIGHT.fog.clone() },
    uFogDensity: { value: fog.density },
  };
  const reedMaterial = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    fog: false,
    uniforms: reedUniforms,
    vertexShader: /* glsl */ `
      attribute vec3 aOffset;
      attribute vec2 aScale;
      attribute float aPhase;
      attribute float aShade;
      uniform float uTime;
      uniform float uSway;
      varying float vY;
      varying float vShade;
      varying float vDist;
      void main() {
        vY = uv.y;
        vShade = aShade;
        vec3 p = position;
        p.xz *= aScale.x;
        p.y *= aScale.y;
        float bend = pow(uv.y, 1.8) * aScale.y;
        float lean = (aPhase - 0.5) * 0.24;
        float sway = sin(uTime * 1.25 + aPhase * 6.2832 + aOffset.x * 0.35) * 0.085
                   + sin(uTime * 2.05 + aPhase * 12.0) * 0.028;
        p.x += (lean + sway * uSway) * bend;
        p.z += sway * uSway * 0.4 * bend;
        vec4 world = modelMatrix * vec4(p + aOffset, 1.0);
        vec4 mv = viewMatrix * world;
        vDist = -mv.z;
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uLow;
      uniform vec3 uHigh;
      uniform vec3 uFogColor;
      uniform float uFogDensity;
      varying float vY;
      varying float vShade;
      varying float vDist;
      void main() {
        vec3 col = mix(uLow, uHigh, vY) * (0.7 + 0.3 * vShade);
        float f = 1.0 - exp(-uFogDensity * uFogDensity * vDist * vDist);
        col = mix(col, uFogColor, f);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const reeds = new THREE.Mesh(reedGeometry, reedMaterial);
  reeds.frustumCulled = false;
  scene.add(reeds);
  disposables.push(reedGeometry, reedMaterial);

  /* ----- porch lights ----- */

  const glowTexture = makeGlowTexture();
  disposables.push(glowTexture);
  const houseSprites = HOUSES.map((h) => {
    const material = new THREE.SpriteMaterial({
      map: glowTexture,
      color: PORCH,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.set(h.x, 1.55, h.z);
    sprite.scale.setScalar(2.0);
    scene.add(sprite);
    disposables.push(material);
    return { sprite, material, key: h.key };
  });

  /* ----- the path of light ----- */

  const confirmedCurve = new THREE.CatmullRomCurve3(CONFIRMED_POINTS, false, "catmullrom", 0.35);
  const fullCurve = new THREE.CatmullRomCurve3(
    [...CONFIRMED_POINTS, ...UNCONFIRMED_POINTS],
    false,
    "catmullrom",
    0.35
  );
  const confirmedFraction = confirmedCurve.getLength() / fullCurve.getLength();

  // A slim additive tube reads far better at night than a 1px line
  const TUBE_RADIAL = 5;
  const tubeGeometry = new THREE.TubeGeometry(confirmedCurve, LINE_SAMPLES, 0.07, TUBE_RADIAL, false);
  const tubeMaterial = new THREE.MeshBasicMaterial({
    color: AMBER,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  });
  const pathTube = new THREE.Mesh(tubeGeometry, tubeMaterial);
  pathTube.geometry.setDrawRange(0, 0);
  scene.add(pathTube);
  disposables.push(tubeGeometry, tubeMaterial);

  const headMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    color: AMBER,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  });
  const head = new THREE.Sprite(headMaterial);
  head.scale.setScalar(3.0);
  scene.add(head);
  disposables.push(headMaterial);

  /* ----- progress state ----- */

  const target = {
    cameraPos: new THREE.Vector3(...CAMERA_KEYS[0].pos),
    cameraLook: new THREE.Vector3(...CAMERA_KEYS[0].look),
    reveal: 0,
    headT: 0,
    headOpacity: 0,
    dawn: 0,
    callPulse: 0,
    colettiFlare: 0,
    brennanFlare: 0,
  };
  const current = {
    cameraPos: target.cameraPos.clone(),
    cameraLook: target.cameraLook.clone(),
    reveal: 0,
    headT: 0,
    headOpacity: 0,
    dawn: 0,
    callPulse: 0,
    colettiFlare: 0,
    brennanFlare: 0,
  };

  const keyVecs = CAMERA_KEYS.map((k) => ({
    pos: new THREE.Vector3(...k.pos),
    look: new THREE.Vector3(...k.look),
  }));

  function computeTargets(p: number) {
    const clamped = Math.min(1, Math.max(0, p));

    // camera between beat-boundary keyframes
    const span = clamped * BEATS;
    const i = Math.min(BEATS - 1, Math.floor(span));
    const t = smoothstep(0, 1, span - i);
    target.cameraPos.lerpVectors(keyVecs[i].pos, keyVecs[i + 1].pos, t);
    target.cameraLook.lerpVectors(keyVecs[i].look, keyVecs[i + 1].look, t);

    // the confirmed trace: beat 3 draws to Coletti, 4 through, 5 to Brennan
    const b = (n: number) => n / BEATS;
    target.reveal =
      smoothstep(b(2), b(3), clamped) * 0.45 +
      smoothstep(b(3), b(4), clamped) * 0.25 +
      smoothstep(b(4), b(5), clamped) * 0.3;

    // the light itself: follows the trace, then leaves the record
    const drift = smoothstep(b(5), 0.96, clamped);
    target.headT = target.reveal * confirmedFraction + drift * (1 - confirmedFraction);
    const fadeIn = smoothstep(b(2), b(2) + 0.03, clamped);
    const fadeOut = 1 - smoothstep(0.88, 0.985, clamped);
    target.headOpacity = fadeIn * fadeOut;

    target.callPulse = smoothstep(b(1), b(1) + 0.04, clamped) * (1 - smoothstep(b(2), b(2) + 0.06, clamped));
    target.colettiFlare = bump(clamped, 0.595, 0.06);
    target.brennanFlare = bump(clamped, 0.775, 0.06);
    target.dawn = smoothstep(0.83, 0.99, clamped);
  }

  /* ----- render ----- */

  const scratchColor = new THREE.Color();
  let lastTime = performance.now();
  let elapsed = 0;

  function applyCurrent() {
    camera.position.copy(current.cameraPos);
    if (!reducedMotion) {
      camera.position.y += Math.sin(elapsed * 0.5) * 0.06;
      camera.position.x += Math.sin(elapsed * 0.32) * 0.05;
    }
    camera.lookAt(current.cameraLook);

    const dawn = current.dawn;
    skyUniforms.uTop.value.lerpColors(NIGHT.skyTop, DAWN.skyTop, dawn);
    skyUniforms.uHorizon.value.lerpColors(NIGHT.skyHorizon, DAWN.skyHorizon, dawn);
    skyUniforms.uGlow.value.lerpColors(NIGHT.horizonGlow, DAWN.horizonGlow, dawn);
    scratchColor.lerpColors(NIGHT.fog, DAWN.fog, dawn);
    fog.color.copy(scratchColor);
    waterUniforms.uFogColor.value.copy(scratchColor);
    reedUniforms.uFogColor.value.copy(scratchColor);
    waterUniforms.uBase.value.lerpColors(NIGHT.water, DAWN.water, dawn);
    reedUniforms.uLow.value.lerpColors(NIGHT.reedLow, DAWN.reedLow, dawn);
    reedUniforms.uHigh.value.lerpColors(NIGHT.reedHigh, DAWN.reedHigh, dawn);
    starMaterial.opacity = 0.62 * (1 - dawn * 0.75);
    tubeMaterial.opacity = 0.55 - dawn * 0.15;

    // porch lights: steady, except the three that carry the story
    for (const { material, key } of houseSprites) {
      let intensity = 0.5;
      if (key === "brewer") {
        intensity += current.callPulse * (0.2 + (reducedMotion ? 0 : 0.12 * Math.sin(elapsed * 3.1)));
      } else if (key === "coletti") {
        intensity += current.colettiFlare * 0.38;
      } else if (key === "brennan") {
        intensity += current.brennanFlare * 0.38;
      }
      material.opacity = intensity * (1 - dawn * 0.45);
    }

    pathTube.geometry.setDrawRange(0, Math.floor(current.reveal * LINE_SAMPLES) * TUBE_RADIAL * 6);

    if (current.headT > 0.0001) {
      fullCurve.getPointAt(Math.min(1, current.headT), head.position);
      head.position.y += 0.55;
    }
    headMaterial.opacity = current.headOpacity * (reducedMotion ? 0.95 : 0.85 + 0.1 * Math.sin(elapsed * 2.2));

    // the amber light pools in the wet ground beneath itself
    const headIndex = (poolCount - 1) * 4;
    poolData[headIndex] = head.position.x;
    poolData[headIndex + 1] = head.position.z;
    poolData[headIndex + 2] = current.headOpacity * 1.2;
    poolData[headIndex + 3] = 4.2;

    renderer.render(scene, camera);
  }

  function step() {
    const now = performance.now();
    elapsed += Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    waterUniforms.uTime.value = elapsed;
    reedUniforms.uTime.value = elapsed;

    const ease = 0.085;
    current.cameraPos.lerp(target.cameraPos, ease);
    current.cameraLook.lerp(target.cameraLook, ease);
    for (const k of ["reveal", "headT", "headOpacity", "dawn", "callPulse", "colettiFlare", "brennanFlare"] as const) {
      current[k] += (target[k] - current[k]) * ease;
    }
    applyCurrent();
  }

  /* ----- lifecycle ----- */

  let frame = 0;
  let running = false;
  let visible = false;
  let destroyed = false;

  function loop() {
    if (!running) return;
    step();
    frame = requestAnimationFrame(loop);
  }

  function setRunning(next: boolean) {
    if (destroyed || reducedMotion) return;
    if (next && !running) {
      running = true;
      lastTime = performance.now();
      frame = requestAnimationFrame(loop);
    } else if (!next && running) {
      running = false;
      cancelAnimationFrame(frame);
    }
  }

  function resize() {
    const { clientWidth, clientHeight } = canvas;
    if (clientWidth === 0 || clientHeight === 0) return;
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    if (reducedMotion) applyCurrent();
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      setRunning(visible && !document.hidden);
    },
    { rootMargin: "20% 0px" }
  );
  observer.observe(canvas);

  const onVisibility = () => setRunning(visible && !document.hidden);
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("resize", resize);

  resize();
  computeTargets(0);

  return {
    setProgress(progress: number) {
      computeTargets(progress);
      if (reducedMotion) {
        // no animation loop: snap and render a still frame
        current.cameraPos.copy(target.cameraPos);
        current.cameraLook.copy(target.cameraLook);
        current.reveal = target.reveal;
        current.headT = target.headT;
        current.headOpacity = target.headOpacity;
        current.dawn = target.dawn;
        current.callPulse = target.callPulse;
        current.colettiFlare = target.colettiFlare;
        current.brennanFlare = target.brennanFlare;
        applyCurrent();
      }
    },
    dispose() {
      destroyed = true;
      setRunning(false);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      for (const d of disposables) d.dispose();
    },
  };
}
