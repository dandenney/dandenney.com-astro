---
title: "Teardown: Linked Card with Actions"
pubDate: 2026-10-26
summary: "An exploded drawing of the linked card pattern, showing the layer stack that sends a click to the card link or to an action."
---

<style>
  .lct {
    margin: 0 auto;
    max-width: 72rem;
    padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem) 4rem;
  }

  .lct__eyebrow {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    opacity: 0.7;
    text-transform: uppercase;
  }

  .lct h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.05;
    margin: 0.75rem 0 1rem;
  }

  .lct__intro {
    font-size: 1.125rem;
    line-height: 1.7;
    max-width: 44rem;
  }

  .lct__intro a,
  .lct__notes a {
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  .lct__frame {
    border: 1px solid rgb(0 0 0 / 0.12);
    border-radius: 0.75rem;
    margin-top: 2rem;
    overflow: hidden;
  }

  .dark .lct__frame {
    border-color: rgb(255 255 255 / 0.16);
  }

  .lct__frame iframe {
    border: 0;
    display: block;
    height: min(75vh, 48rem);
    min-height: 32rem;
    width: 100%;
  }

  .lct__open {
    display: inline-block;
    font-size: 0.875rem;
    margin-top: 0.75rem;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  .lct__notes {
    display: grid;
    gap: 2.5rem;
    margin-top: 3rem;
    max-width: 44rem;
  }

  .lct__notes h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .lct__notes p {
    line-height: 1.7;
  }

  .lct__layers {
    display: grid;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }

  .lct__layers li {
    border-left: 3px solid currentColor;
    line-height: 1.6;
    padding-left: 1rem;
  }

  .lct__layers strong {
    display: block;
  }

  .lct code {
    font-size: 0.9em;
  }
</style>

<article class="lct">
<p class="lct__eyebrow">Tinkering · Teardown</p>
<h1>Linked card with actions, exploded</h1>
<p class="lct__intro">The <a href="/blips/modern-linked-card-with-actions/">linked card pattern</a> I stashed from <a href="https://piccalil.li/blog/accessible-faux-nested-interactive-controls">Eric Bailey's Piccalilli article</a> only works because of paint order. That's hard to see in the CSS and easy to see when you pull the card apart. Every layer below maps to a rule in that snippet.</p>
<div class="lct__frame"><iframe src="/tinkerings/linked-card-teardown/viewer.html" title="Interactive exploded drawing of a linked card with actions" loading="lazy"></iframe></div>
<a class="lct__open" href="/tinkerings/linked-card-teardown/viewer.html">Open the drawing full screen</a>
<div class="lct__notes">
<section>
<h2>Bottom to top</h2>
<p>The numbers match the callouts and the parts list in the drawing.</p>
<ol class="lct__layers">
<li><strong>1 · Card</strong><code>.clickable-card { position: relative; }</code> makes the card the containing block, so anything absolutely positioned inside it measures against the card.</li>
<li><strong>2, 3 · Title link and supporting text</strong><code>.card-link { position: static; }</code> keeps the link out of the way. Its pseudo-element skips past it and stretches to the card instead of the link's own box.</li>
<li><strong>4 · Stretched <code>::before</code></strong><code>content: ""; position: absolute; inset: 0;</code> lays an invisible plate over the whole card. Positioned elements paint above flow content, so a click anywhere on the text or empty space lands on the link.</li>
<li><strong>5, 6 · Action button and secondary link</strong><code>position: relative; z-index: 1;</code> lifts every other interactive element above that plate, so they keep their own clicks.</li>
<li><strong>7 · Focus ring</strong><code>.clickable-card:focus-within { outline: 2px solid currentColor; outline-offset: 2px; }</code> belongs to the card itself, so it stays with the card when everything else lifts off.</li>
</ol>
</section>
<section>
<h2>Try it</h2>
<p>Switch between Exploded and Assembled, zoom in on the labels, isolate a layer from the parts menu, or fill layers with color. The download button exports the current view as SVG, PNG or PDF.</p>
</section>
<section>
<h2>How it was made</h2>
<p>The drawing comes from the <a href="https://github.com/jakubkrehel/skills">teardown skill in Jakub Krehel's skills</a>. It's a concept drawing: the layers are real CSS, but their thickness and spacing are made up so the stack reads.</p>
</section>
</div>
</article>
