---
title: "Inside the Rithmm Betting Engine"
pubDate: 2026-10-25
summary: "An exploded, interactive look at how a Rithmm recommendation becomes a checked decision, durable record, and published result."
---

<style>
  .teardown-story {
    background: #f8fafc;
    color: #0f172a;
    min-height: 100vh;
    padding: clamp(1.5rem, 4vw, 4rem);
  }

  .teardown-story__inner {
    margin: 0 auto;
    max-width: 88rem;
  }

  .teardown-story__eyebrow {
    color: #b91c1c;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .teardown-story h1 {
    font-size: clamp(2.25rem, 7vw, 6rem);
    font-weight: 900;
    letter-spacing: -0.055em;
    line-height: 0.94;
    margin: 1rem 0 1.5rem;
    max-width: 12ch;
  }

  .teardown-story__intro {
    color: #475569;
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.7;
    max-width: 50rem;
  }

  .teardown-story__frame {
    background: white;
    border: 1px solid #cbd5e1;
    box-shadow: 0.75rem 0.75rem 0 #b91c1c;
    margin-top: 3rem;
    overflow: hidden;
  }

  .teardown-story iframe {
    border: 0;
    display: block;
    height: min(78vh, 56rem);
    min-height: 42rem;
    width: 100%;
  }

  .teardown-story__notes {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    margin-top: 3rem;
  }

  .teardown-story__notes h2 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
  }

  .teardown-story__notes p,
  .teardown-story__notes li {
    color: #475569;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .teardown-story__notes ol {
    list-style: decimal;
    padding-left: 1.25rem;
  }

  .teardown-story__open {
    color: #b91c1c;
    display: inline-block;
    font-weight: 800;
    margin-top: 1rem;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  @media (prefers-color-scheme: dark) {
    .teardown-story { background: #0f172a; color: #f8fafc; }
    .teardown-story__intro,
    .teardown-story__notes p,
    .teardown-story__notes li { color: #cbd5e1; }
    .teardown-story__frame { border-color: #475569; }
  }

  @media (max-width: 42rem) {
    .teardown-story iframe { min-height: 36rem; }
    .teardown-story__frame { box-shadow: 0.4rem 0.4rem 0 #b91c1c; }
  }
</style>

<article class="teardown-story">
<div class="teardown-story__inner">
<p class="teardown-story__eyebrow">Tinkering · Concept teardown</p>
<h1>Inside the betting engine</h1>
<p class="teardown-story__intro">A Rithmm card is only the first layer. This exploded concept shows the evidence, rules, shadow review, record keeping, and publishing machinery that surrounds each decision—without pretending the software is a literal machine.</p>
<div class="teardown-story__frame"><iframe src="/tinkerings/rithmm-betting-engine/viewer.html" title="Interactive exploded illustration of the Rithmm betting workflow" loading="eager"></iframe></div>
<a class="teardown-story__open" href="/tinkerings/rithmm-betting-engine/viewer.html">Open the full-screen teardown</a>
<div class="teardown-story__notes">
<section>
<h2>Read it from bottom to top</h2>
<ol>
<li>Rithmm supplies the model recommendation.</li>
<li>The sportsbook ticket records the real execution.</li>
<li>Deterministic rules handle thresholds, prices, arithmetic, and results.</li>
<li>Hermes owns the workflow and mutations.</li>
<li>Jev supplies a non-controlling shadow review.</li>
<li>Obsidian preserves the evidence and learning history.</li>
<li>The public tracker shows the final state.</li>
</ol>
</section>
<section>
<h2>Try the controls</h2>
<p>Switch between assembled and exploded views, turn annotations on, isolate a layer, change line and fill colors, adjust the signal lanes, and export the result as SVG, PNG, or PDF.</p>
</section>
<section>
<h2>Important boundary</h2>
<p>Jev is a reviewer, not the decision-maker. It can flag mismatches and risky shapes, but it cannot select wagers, override hard rules, edit records, calculate balances, or publish.</p>
</section>
</div>
</div>
</article>
