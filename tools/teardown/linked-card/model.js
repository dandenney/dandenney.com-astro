self.DrawingModels ??= {};

self.DrawingModels['linked-card'] = (parameters, options) => {
  const G = TechnicalGeometry;

  const W = 120;
  const H = 80;
  const cardDepth = 2.4;
  const gap = 0.3;
  const azimuth = -118;
  const step = level => [0, 0, 28 * level];

  const zCard = 0;
  const zContent = zCard + cardDepth + gap;
  const zOverlay = zContent + 0.8 + gap;
  const zActions = zOverlay + 0.4 + gap;

  const plate = (id, name, profile, depth, z, explosion, extra = {}) => {
    const part = G.part(id, name);
    G.extrude(part, profile, {depth, ...extra});
    G.transform(part, {origin: [0, 0, z]});
    part.explosion = explosion;
    return part;
  };
  const rect = (w, h, r, cx, cy) => G.roundedRectangle(w, h, r, {center: [cx, cy]});

  const card = plate('card', 'Card (position: relative)', G.roundedRectangle(W, H, 6), cardDepth, zCard, step(0));

  const titleW = 78;
  const titleY = 24;
  const titleX = -W / 2 + 10 + titleW / 2;
  const title = plate('title', 'Title link (position: static)', rect(titleW, 10, 1.5, titleX, titleY), 0.8, zContent, step(1));
  const titleTop = zContent + 0.8 + 0.02;
  G.line(title, [titleX - titleW / 2 + 3, titleY - 3, titleTop], [titleX + titleW / 2 - 3, titleY - 3, titleTop], 'detail');

  const textW = 100;
  const textY = 3;
  const textX = -W / 2 + 10 + textW / 2;
  const text = plate('text', 'Supporting text', rect(textW, 18, 1.5, textX, textY), 0.8, zContent, step(1));
  const textTop = zContent + 0.8 + 0.02;
  [[textY + 5, 94], [textY, 88], [textY - 5, 60]].forEach(([y, len]) => {
    const x0 = textX - textW / 2 + 3;
    G.line(text, [x0, y, textTop], [x0 + len, y, textTop], 'texture');
  });

  const overlay = plate('overlay', 'Stretched ::before (inset: 0)', G.roundedRectangle(W, H, 6), 0.4, zOverlay, step(2));
  overlay.transparent = true;
  const overlayTop = zOverlay + 0.4 + 0.02;
  const clip = (x0, y0, x1, y1) => {
    const dx = x1 - x0;
    const dy = y1 - y0;
    let t0 = 0;
    let t1 = 1;
    const lim = [[-dx, x0 - (-W / 2 + 8)], [dx, (W / 2 - 8) - x0], [-dy, y0 - (-H / 2 + 8)], [dy, (H / 2 - 8) - y0]];
    for (const [p, q] of lim) {
      if (p === 0) { if (q < 0) return null; continue; }
      const r = q / p;
      if (p < 0) t0 = Math.max(t0, r); else t1 = Math.min(t1, r);
    }
    if (t0 >= t1) return null;
    return [[x0 + t0 * dx, y0 + t0 * dy], [x0 + t1 * dx, y0 + t1 * dy]];
  };
  for (let c = -H; c <= W; c += 14) {
    const seg = clip(c - H, -H, c + H, H);
    if (seg) G.line(overlay, [...seg[0], overlayTop], [...seg[1], overlayTop], 'texture');
  }

  const actionsY = -26;
  const buttonW = 30;
  const buttonX = -W / 2 + 10 + buttonW / 2;
  const button = plate('button', 'Action button (z-index: 1)', rect(buttonW, 11, 3, buttonX, actionsY), 1.6, zActions, step(3));

  const linkW = 32;
  const linkX = buttonX + buttonW / 2 + 6 + linkW / 2;
  const secondary = plate('secondary', 'Secondary link (z-index: 1)', rect(linkW, 8, 1.5, linkX, actionsY), 0.8, zActions, step(3));
  const linkTop = zActions + 0.8 + 0.02;
  G.line(secondary, [linkX - linkW / 2 + 3, actionsY - 2.2, linkTop], [linkX + linkW / 2 - 3, actionsY - 2.2, linkTop], 'detail');

  const offset = 2;
  const ring = 1.6;
  const focus = plate(
    'focus',
    'Focus ring (:focus-within)',
    G.roundedRectangle(W + (offset + ring) * 2, H + (offset + ring) * 2, 6 + offset + ring),
    0.6,
    cardDepth / 2 - 0.3,
    step(0),
    {holes: [G.roundedRectangle(W + offset * 2, H + offset * 2, 6 + offset)]}
  );

  return TechnicalProjection.render([card, title, text, overlay, button, secondary, focus], {
    ...options,
    callouts: 'balloons',
    camera: {azimuth, elevation: 36, roll: 0}
  });
};
