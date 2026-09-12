import assert from "node:assert/strict";
import test from "node:test";

import { sessions } from "../src/data/golf/sessions.ts";

test("September 11 practice preserves selected shots without treating them as averages", () => {
  const session = sessions.find((entry) => entry.date === "2026-09-11");

  assert.ok(session, "expected the September 11 practice session");
  assert.equal(session.venueSlug, "golftec-nashville-west");
  assert.equal(session.kind, "practice");
  assert.equal(session.clubs[0]?.club, "7i");
  assert.equal(session.clubs[0]?.carry, undefined, "selected shots must not become a session-average carry");
  assert.equal(session.clubs[0]?.longest, 167);
  assert.equal(session.highlights?.length, 4);
  assert.deepEqual(
    session.highlights?.map(({ total, carry, smashFactor, shotScore }) => ({ total, carry, smashFactor, shotScore })),
    [
      { total: 162, carry: 150, smashFactor: 1.34, shotScore: 93 },
      { total: 167, carry: 151, smashFactor: 1.3, shotScore: 87 },
      { total: 151, carry: 142, smashFactor: 1.29, shotScore: 108 },
      { total: 141, carry: 131, smashFactor: 1.26, shotScore: 125 },
    ],
  );
});
