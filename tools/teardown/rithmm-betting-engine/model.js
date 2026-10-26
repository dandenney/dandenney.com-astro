self.DrawingModels ??= {};

self.DrawingModels['rithmm-betting-engine'] = (parameters, options) => {
  const G = TechnicalGeometry;
  const laneCount = Number(parameters.signalLanes);
  if (!Number.isInteger(laneCount) || laneCount < 1 || laneCount > 3) {
    throw Error('Signal lanes must be an integer from 1 to 3');
  }

  const width = 168;
  const height = 98;
  const thickness = 2.4;
  const gap = 0.45;
  const zStep = thickness + gap;
  const rounded = G.roundedRectangle(width, height, 7);

  const plate = (id, name, index, explosion, inset = 0) => {
    const part = G.part(id, name);
    const profile = inset
      ? G.roundedRectangle(width - inset * 2, height - inset * 2, Math.max(3, 7 - inset / 2))
      : rounded;
    G.extrude(part, profile, {depth: thickness, creaseAngle: 24});
    G.transform(part, {origin: [0, 0, index * zStep]});
    part.explosion = explosion;
    return part;
  };

  const top = index => index * zStep + thickness + 0.04;
  const rect = (part, x, y, w, h, z, role = 'detail') => {
    G.polyline(part, [
      [x, y, z], [x + w, y, z], [x + w, y + h, z], [x, y + h, z]
    ], {closed: true, role});
  };
  const horizontal = (part, x1, x2, y, z, role = 'detail') => {
    G.line(part, [x1, y, z], [x2, y, z], role);
  };
  const vertical = (part, x, y1, y2, z, role = 'detail') => {
    G.line(part, [x, y1, z], [x, y2, z], role);
  };

  // Input evidence: a probability card whose visible lane count is configurable.
  const source = plate('source', 'Rithmm recommendation', 0, [0, 0, -78], 4);
  const sourceZ = top(0);
  rect(source, -68, -36, 136, 72, sourceZ, 'edge');
  rect(source, -60, 23, 54, 6, sourceZ);
  G.circle(source, [52, 26, sourceZ], 4, [0, 0, 1], {role: 'detail', segments: 48});
  const laneGap = 18;
  for (let index = 0; index < laneCount; index += 1) {
    const y = 7 - index * laneGap;
    rect(source, -60, y - 4, 95, 8, sourceZ);
    horizontal(source, -55, 12 + index * 8, y, sourceZ, 'texture');
    rect(source, 43, y - 5, 17, 10, sourceZ);
  }

  // Execution evidence stays separate from the model recommendation.
  const ticket = plate('ticket', 'Sportsbook ticket', 1, [0, 0, -52], 7);
  const ticketZ = top(1);
  rect(ticket, -57, -34, 114, 68, ticketZ, 'edge');
  horizontal(ticket, -46, 46, 19, ticketZ);
  horizontal(ticket, -46, 30, 8, ticketZ);
  horizontal(ticket, -46, 46, -4, ticketZ);
  horizontal(ticket, -46, 12, -16, ticketZ);
  rect(ticket, 22, -24, 24, 13, ticketZ);
  for (let x = -47; x <= 47; x += 9) vertical(ticket, x, -33, -29, ticketZ, 'texture');

  // Exact arithmetic and policy constraints form a visible gate.
  const rules = plate('rules', 'Deterministic rules', 2, [0, 0, -26], 5);
  const rulesZ = top(2);
  rect(rules, -62, -35, 124, 70, rulesZ, 'edge');
  for (let x = -42; x <= 42; x += 21) vertical(rules, x, -25, 24, rulesZ, 'edge');
  horizontal(rules, -52, 52, -25, rulesZ);
  horizontal(rules, -52, 52, 24, rulesZ);
  rect(rules, -15, -8, 30, 16, rulesZ);
  G.polyline(rules, [[-8, 0, rulesZ], [-2, -6, rulesZ], [9, 7, rulesZ]], {role: 'outline'});

  // Hermes owns the workflow and is the only control surface in the stack.
  const hermes = plate('hermes', 'Hermes controller', 3, [0, 0, 0], 3);
  const hermesZ = top(3);
  rect(hermes, -65, -38, 130, 76, hermesZ, 'edge');
  rect(hermes, -27, -27, 54, 54, hermesZ, 'outline');
  for (let pin = -20; pin <= 20; pin += 10) {
    horizontal(hermes, -34, -27, pin, hermesZ);
    horizontal(hermes, 27, 34, pin, hermesZ);
    vertical(hermes, pin, -34, -27, hermesZ);
    vertical(hermes, pin, 27, 34, hermesZ);
  }
  vertical(hermes, -12, -14, 14, hermesZ, 'outline');
  vertical(hermes, 12, -14, 14, hermesZ, 'outline');
  horizontal(hermes, -12, 12, 0, hermesZ, 'outline');

  // Jev is deliberately a separate shadow module rather than the controller.
  const jev = plate('jev', 'Jev shadow review', 4, [20, -8, 28], 9);
  const jevZ = top(4);
  rect(jev, -55, -31, 110, 62, jevZ, 'edge');
  G.polyline(jev, [[-40, 0, jevZ], [0, 22, jevZ], [40, 0, jevZ], [0, -22, jevZ]], {closed: true, role: 'outline'});
  G.circle(jev, [0, 0, jevZ], 10, [0, 0, 1], {role: 'edge', segments: 72});
  G.circle(jev, [0, 0, jevZ], 3, [0, 0, 1], {role: 'outline', segments: 48});
  horizontal(jev, -48, -28, 22, jevZ, 'texture');
  horizontal(jev, 28, 48, -22, jevZ, 'texture');

  // Durable evidence is represented as a ruled ledger plate.
  const ledger = plate('ledger', 'Obsidian ledger', 5, [0, 0, 56], 6);
  const ledgerZ = top(5);
  rect(ledger, -60, -36, 120, 72, ledgerZ, 'edge');
  vertical(ledger, -42, -28, 28, ledgerZ, 'edge');
  for (let y = -24; y <= 24; y += 12) horizontal(ledger, -53, 52, y, ledgerZ, 'detail');
  rect(ledger, 35, 15, 15, 10, ledgerZ);

  // The top layer is the public output, not the source of truth.
  const tracker = plate('tracker', 'Published tracker', 6, [0, 0, 84], 2);
  const trackerZ = top(6);
  rect(tracker, -69, -39, 138, 78, trackerZ, 'edge');
  rect(tracker, -59, 20, 31, 12, trackerZ);
  rect(tracker, -20, 20, 31, 12, trackerZ);
  rect(tracker, 19, 20, 40, 12, trackerZ);
  for (let row = 0; row < 3; row += 1) {
    const y = 8 - row * 14;
    G.circle(tracker, [-52, y, trackerZ], 3.2, [0, 0, 1], {role: 'detail', segments: 48});
    horizontal(tracker, -43, 11 + row * 8, y, trackerZ);
    rect(tracker, 40, y - 4, 18, 8, trackerZ);
  }

  const parts = [source, ticket, rules, hermes, jev, ledger, tracker];
  const trails = parts.slice(0, -1).map((part, index) => ({
    a: [0, 0, (index + 1) * zStep],
    b: [0, 0, (index + 1) * zStep],
    from: part.id,
    to: parts[index + 1].id
  }));

  return TechnicalProjection.render(parts, {
    ...options,
    camera: {azimuth: -126, elevation: 27, roll: 0},
    trails
  });
};
