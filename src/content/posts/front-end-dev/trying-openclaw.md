---
pubDate: "2026-02-25"
socialImageFilename: "og-trying-openclaw.jpg"
summary: "Initial setup and some simple automations"
tags:
  - front-end-dev
thumb: "/posts/front-end-dev/trying-openclaw/trying-openclaw.webp"
thumbAlt: "a playful illustration of rows and rows of photos of various food items, with the illustion of motion --ar 3:2"
title: "Trying OpenClaw"
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Zilla+Slab:wght@600;700&family=Dancing+Script:wght@700&display=swap');

/* ================================================
   TRYING OPENCLAW — ART DIRECTION
   ================================================ */

/* --- Shared keyframes --- */
@keyframes oc-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@keyframes oc-settle {
  0%   { transform: translate(4px, 0) skewX(0.6deg); filter: blur(1.5px); opacity: 0.5; }
  20%  { transform: translate(-3px, 1px) skewX(-0.4deg); filter: blur(0.8px); opacity: 0.75; }
  40%  { transform: translate(2px, -1px) skewX(0.2deg); filter: blur(0.3px); opacity: 0.9; }
  65%  { transform: translate(-0.8px, 0.4px) skewX(-0.05deg); filter: blur(0); opacity: 0.97; }
  100% { transform: translate(0, 0) skewX(0); filter: blur(0); opacity: 1; }
}

/* ------------------------------------------------
   SECTION 1: News shots
   ------------------------------------------------ */

.tldr {
  color: #3ad353;
  font-size: 1.5rem;
}

/* ------------------------------------------------
   SECTION 1B: Scattered Screenshots
   ------------------------------------------------ */

.oc-scattered-shots {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem -2rem;
  padding: 2rem 2rem 2.5rem;
  overflow: hidden;
}

@media (min-width: 768px) {
  .oc-scattered-shots {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin: 0 -3rem;
    padding: 1rem 1rem 3rem;
    overflow: visible;
  }
}

.oc-shot {
  display: block;
  width: 72%;
  max-width: 300px;
  height: auto;
  border: 2px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.04);
  position: relative;
}

@media (min-width: 768px) {
  .oc-shot {
    width: 38%;
    max-width: none;
  }
}

.oc-shot-1 {
  transform: rotate(-3.5deg) translateX(-8%);
  margin-bottom: -32px;
  z-index: 1;
}

.oc-shot-2 {
  transform: rotate(2deg);
  z-index: 3;
}

.oc-shot-3 {
  transform: rotate(-2deg) translateX(8%);
  margin-top: -32px;
  z-index: 1;
}

@media (min-width: 768px) {
  .oc-shot-1 {
    transform: rotate(-5deg) translateY(22px);
    margin-bottom: 0;
    margin-right: -7%;
    z-index: 1;
  }

  .oc-shot-2 {
    transform: rotate(1.5deg);
    margin-right: -7%;
    z-index: 3;
  }

  .oc-shot-3 {
    transform: rotate(-3deg) translateY(32px);
    z-index: 1;
  }
}

/* ------------------------------------------------
   SECTION 2: SETUP SPIRAL
   ------------------------------------------------ */

.oc-spiral-section {
  margin: 2rem -2rem;
  overflow: hidden;
}

@media (min-width: 768px) {
  .oc-spiral-section {
    margin: 2rem -3rem;
  }
}

.oc-spiral-rail {
  background: #0a0a0a;
  padding: 1.25rem 2rem 1rem;
}

@media (min-width: 768px) {
  .oc-spiral-rail {
    padding: 1.25rem 3rem 1rem;
  }
}

.oc-rail-svg {
  width: 100%;
  height: auto;
  display: block;
  max-width: 600px;
}

.oc-attempt {
  padding: 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

@media (min-width: 768px) {
  .oc-attempt {
    padding: 2.5rem 3rem;
  }
}

.oc-attempt.oc-visible {
  opacity: 1;
  transform: translateY(0);
}

.oc-attempt-vps {
  background: #0d0508;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(230, 57, 70, 0.025) 3px,
    rgba(230, 57, 70, 0.025) 4px
  );
}

.oc-attempt-macpro {
  background: #0d0d0d;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.012) 2px,
    rgba(255, 255, 255, 0.012) 3px
  );
}

.oc-attempt-macmini {
  background: #050d0a;
  background-image:
    linear-gradient(rgba(57, 211, 83, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(57, 211, 83, 0.04) 1px, transparent 1px);
  background-size: 24px 24px;
}

.oc-attempt-label {
  display: inline-block;
  font-family: ui-monospace, monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 2px;
  margin-bottom: 1rem;
}

.oc-attempt-vps .oc-attempt-label {
  color: #e63946;
  background: rgba(230, 57, 70, 0.1);
  border: 1px solid rgba(230, 57, 70, 0.3);
}

.oc-attempt-macpro .oc-attempt-label {
  color: #8b949e;
  background: rgba(139, 148, 158, 0.1);
  border: 1px solid rgba(139, 148, 158, 0.3);
}

.oc-attempt-macmini .oc-attempt-label {
  color: #39d353;
  background: rgba(57, 211, 83, 0.1);
  border: 1px solid rgba(57, 211, 83, 0.3);
}

.oc-attempt p {
  color: #fff;
  margin: 0 0 1rem;
}

.oc-attempt p:last-child {
  margin-bottom: 0;
}

.oc-spiral-code {
  background: rgba(0, 0, 0, 0.35);
  border-left: 2px solid;
  padding: 0.75rem 1rem;
  margin: 1rem 0;
  font-family: ui-monospace, 'Cascadia Code', monospace;
  font-size: 0.78rem;
  line-height: 1.7;
}

.oc-attempt-vps .oc-spiral-code { border-color: rgba(230, 57, 70, 0.4); }
.oc-attempt-macpro .oc-spiral-code { border-color: rgba(139, 148, 158, 0.3); }

.oc-spiral-wrong {
  display: block;
  color: #f85149;
}

.oc-spiral-wrong::before { content: '✗  '; }

.oc-spiral-right {
  display: block;
  color: #39d353;
  margin-top: 0.4rem;
}

.oc-spiral-right::before { content: '✓  '; }

.oc-spiral-note {
  display: block;
  color: #555;
  padding-left: 1.25rem;
  font-size: 0.72rem;
}

.oc-spiral-note::before { content: '# '; }

/* ------------------------------------------------
   SECTION 3: IT'S ALIVE — Agent Cards
   ------------------------------------------------ */

.oc-agents-section {
  margin: 2rem -2rem;
  padding: 2.5rem 2rem;
  background-color: #0d0e10;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 32px 32px;
}

@media (min-width: 768px) {
  .oc-agents-section {
    margin: 2rem -3rem;
    padding: 3rem;
  }
}

.oc-agents-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .oc-agents-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.oc-agent-card {
  background: #13141a;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-left: 3px solid var(--agent-color, #e63946);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.oc-agent-card.oc-visible {
  opacity: 1;
  transform: translateY(0);
}

.oc-agents-grid .oc-agent-card:nth-child(2) { transition-delay: 0.12s; }
.oc-agents-grid .oc-agent-card:nth-child(3) { transition-delay: 0.24s; }
.oc-agents-grid .oc-agent-card:nth-child(4) { transition-delay: 0.36s; }

.oc-agent-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--agent-color, #e63946), transparent 60%);
  opacity: 0.6;
}

.oc-agent-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--agent-color, #e63946);
  margin-bottom: 0.75rem;
  font-family: ui-monospace, monospace;
}

.oc-agent-name {
  margin: 0 0 0.2rem;
  line-height: 1.05;
  color: #f5f0e8;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
}

.oc-agent-role {
  font-size: 0.78rem;
  color: #8b949e;
  margin: 0 0 0.25rem;
}

.oc-agent-based {
  display: block;
  font-size: 0.68rem;
  color: #444d56;
  margin-bottom: 1rem;
  font-style: italic;
}

.oc-agent-desc {
  font-size: 0.78rem;
  color: #6e7681;
  margin: 0 0 1.25rem;
  line-height: 1.6;
}

.oc-wave {
  width: 100%;
  height: 20px;
  color: var(--agent-color, #e63946);
  opacity: 0.5;
  display: block;
}

.oc-wave path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 1.8s ease 0.5s;
}

.oc-agent-card.oc-visible .oc-wave path {
  stroke-dashoffset: 0;
}

.oc-agent-shelby { --agent-color: #c9a84c; }
.oc-agent-shelby .oc-agent-name {
  font-family: 'Zilla Slab', Georgia, serif;
  font-size: clamp(1.5rem, 3.5vw, 2.25rem) !important;
  font-weight: 700;
}

.oc-agent-leif { --agent-color: #2d7dd2; }
.oc-agent-leif .oc-agent-name {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.5rem, 3.5vw, 2.25rem) !important;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.oc-agent-watten { --agent-color: #39d353; }
.oc-agent-watten .oc-agent-name {
  font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
  font-weight: 700;
  font-size: clamp(1.5rem, 3.5vw, 2.25rem) !important;
}

.oc-agent-quillan { --agent-color: #9b5de5; }
.oc-agent-quillan .oc-agent-name {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem) !important;
  line-height: 1;
}

.oc-agent-avatar {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--agent-color, #e63946);
}

@media (min-width: 640px) {
  .oc-agent-avatar {
    width: 52px;
    height: 52px;
  }
}

/* ------------------------------------------------
   SECTION 4: DAY ONE — Blueprint Diagram
   ------------------------------------------------ */

@keyframes oc-pulse-glow {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.65; }
}

.oc-blueprint-section {
  margin: 2rem -2rem;
  border-top: 1px solid rgba(30, 64, 128, 0.35);
  border-bottom: 1px solid rgba(30, 64, 128, 0.35);
}

@media (min-width: 768px) {
  .oc-blueprint-section {
    margin: 2rem -3rem;
  }
}

.oc-blueprint-caption {
  background: #071525;
  padding: 0.6rem 2rem;
  border-bottom: 1px solid rgba(30, 64, 128, 0.2);
}

@media (min-width: 768px) {
  .oc-blueprint-caption {
    padding: 0.6rem 3rem;
  }
}

.oc-blueprint-label {
  font-family: ui-monospace, monospace;
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(78, 140, 219, 0.45);
}

.oc-blueprint-svg {
  width: 100%;
  height: auto;
  display: block;
  background: #071525;
}

.oc-mac-glow {
  animation: oc-pulse-glow 2.8s ease-in-out infinite;
}

/* ------------------------------------------------
   SECTION 5: WHAT BROKE — Terminal
   ------------------------------------------------ */

.oc-terminal-section {
  margin: 2rem -2rem;
}

@media (min-width: 768px) {
  .oc-terminal-section {
    margin: 3rem -3rem;
  }
}

.oc-terminal-window {
  background: #0d1117;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255, 255, 255, 0.07);
  font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
  font-size: 0.875rem;
  line-height: 1.75;
}

.oc-terminal-chrome {
  background: #161b22;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  user-select: none;
}

.oc-terminal-dots {
  display: flex;
  gap: 6px;
}

.oc-terminal-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.oc-terminal-dots span:nth-child(1) { background: #ff5f57; }
.oc-terminal-dots span:nth-child(2) { background: #febc2e; }
.oc-terminal-dots span:nth-child(3) { background: #28c840; }

.oc-terminal-filename {
  flex: 1;
  text-align: center;
  color: #8b949e;
  font-size: 0.75rem;
}

.oc-terminal-body {
  padding: 1.5rem 2rem 2.5rem;
}

.oc-terminal-body p,
.oc-terminal-body ul,
.oc-terminal-body li {
  margin-top: 0;
}

.oc-log-block {
  margin: 1.25rem 0 0;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.oc-log-block.oc-visible {
  opacity: 1;
  transform: translateY(0);
}

.oc-log-block:nth-child(2) { transition-delay: 0s; }
.oc-log-block:nth-child(3) { transition-delay: 0.15s; }
.oc-log-block:nth-child(4) { transition-delay: 0.3s; }

.oc-log-line {
  display: block;
  color: #39d353;
  padding: 1px 0;
}

.oc-dim {
  padding-left: 1.75rem;
  color: #8b949e;
}

.oc-comment-line {
  display: block;
  color: #8b949e;
  padding: 2px 0 6px;
}

.oc-comment-line::before {
  content: '# ';
}

.oc-prompt-line {
  display: block;
  color: #58a6ff;
  margin-top: 0.75rem;
}

.oc-prompt-line::before {
  content: '$ ';
}

.oc-tag {
  display: inline-block;
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-right: 0.4em;
  vertical-align: middle;
}

.oc-tag-warn {
  color: #e3b341;
  background: rgba(227, 179, 65, 0.12);
  border: 1px solid rgba(227, 179, 65, 0.3);
}

.oc-tag-error {
  color: #f85149;
  background: rgba(248, 81, 73, 0.12);
  border: 1px solid rgba(248, 81, 73, 0.3);
}

.oc-cursor {
  display: inline-block;
  width: 0.6em;
  height: 1em;
  background: #58a6ff;
  vertical-align: text-bottom;
  margin-left: 2px;
  animation: oc-blink 1.2s step-start infinite;
}

/* ------------------------------------------------
   SECTION 6: DOCUMENTATION AND MEMORY
   ------------------------------------------------ */

.oc-memory-section {
  margin: 2rem -2rem;
  background: #f7f4ef;
  border-top: 1px solid #e4dfd6;
  border-bottom: 1px solid #e4dfd6;
}

@media (min-width: 768px) {
  .oc-memory-section {
    margin: 2rem -3rem;
  }
}

.oc-memory-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: #e4dfd6;
}

@media (min-width: 640px) {
  .oc-memory-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.oc-mem-card {
  background: #faf8f5;
  padding: 1.5rem;
  position: relative;
}

.oc-mem-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--mem-color, #e4dfd6);
}

.oc-mem-icon {
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  display: block;
}

.oc-mem-name {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--mem-color, #888);
  margin: 0 0 0.75rem;
  font-family: ui-monospace, monospace;
}

.oc-mem-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.oc-mem-items li {
  font-size: 0.72rem;
  color: #a09890;
  padding: 0.22rem 0;
  font-family: ui-monospace, monospace;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  line-height: 1.4;
}

.oc-mem-items li:last-child {
  border-bottom: none;
}

.oc-mem-items li::before {
  content: '→ ';
  color: var(--mem-color);
  opacity: 0.5;
}

.oc-mem-daily    { --mem-color: #d97706; }
.oc-mem-weekly   { --mem-color: #2563eb; }
.oc-mem-longterm { --mem-color: #059669; }
.oc-mem-metrics  { --mem-color: #7c3aed; }

/* ------------------------------------------------
   SECTION 7: MY AHA MOMENT — Big Type
   ------------------------------------------------ */

.oc-aha-block {
  margin: 3rem -2rem;
  padding: 5rem 2rem;
  background: #f8f5f0;
  border-top: 3px solid #1a1a1a;
  border-bottom: 3px solid #1a1a1a;
}

@media (min-width: 768px) {
  .oc-aha-block {
    margin: 3rem -3rem;
    padding: 6rem 3rem;
  }
}

.oc-aha-statement {
  display: block;
  font-size: clamp(2.25rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: #1a1a1a;
  margin: 0 0 0.1em;
  opacity: 0;
  transform: translateX(-24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.oc-aha-statement.oc-visible {
  opacity: 1;
  transform: translateX(0);
}

.oc-aha-statement:nth-child(2) { transition-delay: 0.14s; }
.oc-aha-statement:nth-child(3) { transition-delay: 0.28s; }

.oc-aha-accent {
  color: #e63946;
}

/* ------------------------------------------------
   SECTION 8A: EXAMPLE ONE — Sticky Flowchart
   ------------------------------------------------ */

.oc-flow-section {
  margin: 2rem -2rem;
  background: #faf7f2;
  border-top: 1px solid #e8e1d8;
  border-bottom: 1px solid #e8e1d8;
  overflow: hidden;
}

@media (min-width: 768px) {
  .oc-flow-section {
    margin: 2rem -3rem;
  }
}

.oc-flow-header {
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

@media (min-width: 768px) {
  .oc-flow-header {
    padding: 2rem 3rem 1.5rem;
  }
}

.oc-flow-section-label {
  font-family: ui-monospace, monospace;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #c9a84c;
  display: block;
  margin-bottom: 0.5rem;
}

.oc-flow-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.25rem) !important;
  font-weight: 900;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.1;
}

.oc-flow-prose {
  padding: 1.5rem 2rem;
  margin: 0;
}

@media (min-width: 768px) {
  .oc-flow-prose {
    padding: 1.5rem 3rem;
  }
}

.oc-flow-chart {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

@media (min-width: 768px) {
  .oc-flow-chart {
    padding: 2.5rem 3rem;
  }
}

.oc-flow-step {
  background: var(--step-color, #fef9c3);
  border: 1px solid rgba(0, 0, 0, 0.07);
  padding: 0.875rem 1rem;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.07), inset 0 -2px 0 rgba(0, 0, 0, 0.05);
  transform: translateY(12px) rotate(var(--step-rot, 0deg));
  text-align: center;
  min-width: 90px;
  max-width: 120px;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.oc-flow-chart.oc-visible .oc-flow-step {
  opacity: 1;
  transform: translateY(0) rotate(var(--step-rot, 0deg));
}

.oc-flow-chart.oc-visible .oc-flow-step:nth-child(1)  { transition-delay: 0s; }
.oc-flow-chart.oc-visible .oc-flow-step:nth-child(3)  { transition-delay: 0.12s; }
.oc-flow-chart.oc-visible .oc-flow-step:nth-child(5)  { transition-delay: 0.24s; }
.oc-flow-chart.oc-visible .oc-flow-step:nth-child(7)  { transition-delay: 0.36s; }
.oc-flow-chart.oc-visible .oc-flow-step:nth-child(9)  { transition-delay: 0.48s; }
.oc-flow-chart.oc-visible .oc-flow-step:nth-child(11) { transition-delay: 0.6s; }

.oc-step-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.3rem;
  line-height: 1;
}

.oc-step-label {
  font-family: ui-monospace, monospace;
  font-size: 0.62rem;
  color: #555;
  font-weight: 600;
  line-height: 1.3;
  display: block;
}

.oc-flow-arrow {
  font-size: 1.1rem;
  color: #ccc;
  flex-shrink: 0;
  user-select: none;
}

/* ------------------------------------------------
   SECTION 8B: EXAMPLE TWO — Music Pull Quote
   ------------------------------------------------ */

.oc-music-section {
  margin: 3rem -2rem;
  position: relative;
  overflow: hidden;
  background: #1a0a2e;
}

@media (min-width: 768px) {
  .oc-music-section {
    margin: 3rem -3rem;
  }
}

.oc-music-wave-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.07;
  pointer-events: none;
}

.oc-music-content {
  position: relative;
  padding: 3rem 2rem;
  z-index: 1;
}

@media (min-width: 768px) {
  .oc-music-content {
    padding: 4rem 3rem;
  }
}

.oc-music-section-label {
  font-family: ui-monospace, monospace;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(155, 93, 229, 0.8);
  display: block;
  margin-bottom: 1.75rem;
}

.oc-music-prose {
  margin: 0 0 1.25rem;
}

.oc-music-prose a {
  color: #9b5de5;
  text-decoration: none;
}

.longform .oc-pullquote {
  margin: 0;
  padding: 1.75rem 2rem;
  border: none;
  border-left: 3px solid #9b5de5;
  border-radius: 0;
  background: #2d1052;
}

.oc-pullquote-text {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.15rem, 2.8vw, 1.65rem);
  font-style: italic;
  font-weight: 700;
  color: #f5f0e8;
  line-height: 1.55;
  display: block;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.oc-pullquote-text.oc-visible {
  opacity: 1;
  transform: translateY(0);
}

.oc-pullquote-open {
  font-size: 4.5em;
  line-height: 0.6;
  vertical-align: -0.3em;
  color: #9b5de5;
  font-family: 'Playfair Display', Georgia, serif;
  font-style: normal;
  display: inline-block;
  margin-right: 0.05em;
}

.oc-pullquote-source {
  display: block;
  margin-top: 1.5rem;
  font-size: 0.7rem;
  font-family: ui-monospace, monospace;
  color: rgba(155, 93, 229, 1);
  letter-spacing: 0.06em;
}

/* ------------------------------------------------
   SECTION 8C: FINAL EXAMPLE — Discord Chat
   ------------------------------------------------ */

.oc-discord-section {
  margin: 2rem -2rem;
  background: #313338;
  overflow: hidden;
}

@media (min-width: 768px) {
  .oc-discord-section {
    margin: 2rem -3rem;
  }
}

.oc-discord-header {
  background: #2b2d31;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
}

.oc-discord-channel {
  font-size: 0.875rem;
  font-weight: 600;
  color: #f2f3f5;
}

.oc-discord-channel::before {
  content: '# ';
  color: #8d9099;
}

.oc-discord-channdesc {
  font-size: 0.72rem;
  color: #8d9099;
  border-left: 1px solid #4e5058;
  padding-left: 0.75rem;
}

.oc-discord-prose {
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.oc-discord-body {
  padding: 1.25rem 1.25rem 1.5rem;
}

.oc-discord-msg {
  display: flex;
  gap: 0.875rem;
  padding: 0.3rem 0;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.oc-discord-msg.oc-visible {
  opacity: 1;
  transform: translateY(0);
}

.oc-discord-msg:nth-child(2) { transition-delay: 0.18s; }
.oc-discord-msg:nth-child(3) { transition-delay: 0.36s; }
.oc-discord-msg:nth-child(4) { transition-delay: 0.54s; }
.oc-discord-msg:nth-child(5) { transition-delay: 0.72s; }

.oc-discord-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-top: 2px;
}

.oc-avatar-user {
  background: #5865F2;
  color: #fff;
  font-family: ui-monospace, monospace;
  font-size: 0.7rem;
}

.oc-avatar-shelby {
  background: #c9a84c;
  color: #0d0e10;
  font-family: 'Zilla Slab', Georgia, serif;
  font-size: 0.9rem;
}

.oc-avatar-watten {
  background: #1c3a26;
  color: #39d353;
  font-family: ui-monospace, monospace;
  font-size: 0.75rem;
  border: 1px solid rgba(57, 211, 83, 0.3);
}

.oc-discord-msg-body {
  flex: 1;
  min-width: 0;
}

.oc-discord-author {
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  line-height: 1;
  display: block;
}

.oc-author-user { color: #5865F2; }
.oc-author-shelby { color: #c9a84c; }
.oc-author-watten { color: #39d353; }

.oc-discord-time {
  font-size: 0.6rem;
  color: #8d9099;
  margin-left: 0.4rem;
  font-weight: 400;
}

.oc-discord-text {
  font-size: 0.875rem;
  color: #dbdee1;
  line-height: 1.5;
  margin: 0;
}

.oc-discord-cmd {
  display: inline-block;
  background: rgba(88, 101, 242, 0.12);
  border: 1px solid rgba(88, 101, 242, 0.25);
  border-radius: 3px;
  padding: 0 0.4rem;
  font-family: ui-monospace, monospace;
  font-size: 0.78rem;
  color: #98b0ff;
}

.oc-discord-divider {
  text-align: center;
  font-size: 0.58rem;
  color: #4e5058;
  font-family: ui-monospace, monospace;
  letter-spacing: 0.08em;
  padding: 0.4rem 0;
  border-top: 1px solid #3a3c43;
  margin: 0.5rem 0 0.25rem;
}

.oc-discord-footer {
  background: #2b2d31;
  padding: 0.5rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.oc-discord-footer-label {
  font-family: ui-monospace, monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4e5058;
}

/* ------------------------------------------------
   SECTION 9: WHAT'S NEXT — Brutalist
   ------------------------------------------------ */

.oc-next-section {
  margin: 3rem -2rem;
  background: #f5f4f0;
  border-top: 4px solid #1a1a1a;
  border-bottom: 4px solid #1a1a1a;
  padding: 4rem 2rem 4rem 3.75rem;
  position: relative;
}

@media (min-width: 768px) {
  .oc-next-section {
    margin: 3rem -3rem;
    padding: 5rem 4rem 5rem 5.5rem;
  }
}

.oc-next-section::before {
  content: '';
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  border-left: 2px dotted rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
  .oc-next-section::before {
    left: 3.25rem;
  }
}

.oc-next-label {
  font-family: ui-monospace, monospace;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #aaa;
  display: block;
  margin-bottom: 2.5rem;
}

.oc-next-sentence {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: clamp(1.25rem, 3.5vw, 2rem);
  line-height: 1.15;
  color: #1a1a1a;
  margin: 0 0 1.2rem;
  opacity: 0;
  transform: translateX(-14px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.oc-next-sentence.oc-visible {
  opacity: 1;
  transform: translateX(0);
}

.oc-next-sentence:nth-child(2) { transition-delay: 0.1s; }
.oc-next-sentence:nth-child(3) { transition-delay: 0.2s; }
.oc-next-sentence:nth-child(4) { transition-delay: 0.3s; }
.oc-next-sentence:nth-child(5) { transition-delay: 0.4s; }
.oc-next-sentence:nth-child(6) { transition-delay: 0.5s; }

.oc-next-accent {
  color: #e63946;
}

.quote {
  display: inline-block;
  font-size: 3rem;
  line-height: 0;
  transform: translateY(1rem);
}

/* ------------------------------------------------
   SECTION 10: RESOURCES — Dark Cards
   ------------------------------------------------ */

.oc-resources-section {
  margin: 3rem -2rem 0;
  padding: 3rem 2rem;
  background: #0d0e10;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

@media (min-width: 768px) {
  .oc-resources-section {
    margin: 3rem -3rem 0;
    padding: 3rem;
  }
}

.oc-resources-label {
  font-family: ui-monospace, monospace;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #58a6ff;
  display: block;
  margin-bottom: 2rem;
}

.oc-resources-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 600px) {
  .oc-resources-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.oc-resource-card {
  background: #13141a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.125rem 1.25rem;
  display: flex;
  gap: 0.875rem;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.oc-resource-card.oc-visible {
  opacity: 1;
  transform: translateY(0);
}

.oc-resources-grid .oc-resource-card:nth-child(2) { transition-delay: 0.06s; }
.oc-resources-grid .oc-resource-card:nth-child(3) { transition-delay: 0.12s; }
.oc-resources-grid .oc-resource-card:nth-child(4) { transition-delay: 0.18s; }
.oc-resources-grid .oc-resource-card:nth-child(5) { transition-delay: 0.24s; }
.oc-resources-grid .oc-resource-card:nth-child(6) { transition-delay: 0.3s; }

.oc-resource-icon {
  font-size: 0.9rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
  line-height: 1;
  width: 20px;
  text-align: center;
  color: #555;
}

.oc-resource-body {
  flex: 1;
  min-width: 0;
}

.oc-resource-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: #f5f0e8;
  margin: 0 0 0.3rem;
  line-height: 1.35;
}

.oc-resource-title a {
  color: inherit;
  text-decoration: none;
}

.oc-resource-title a:hover {
  color: #58a6ff;
}

.oc-resource-desc {
  font-size: 0.7rem;
  color: #8b949e;
  margin: 0;
  line-height: 1.5;
}

.oc-resource-badge {
  font-family: ui-monospace, monospace;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 1px 5px;
  border-radius: 2px;
  display: inline-block;
  margin-bottom: 0.3rem;
}

.oc-badge-yt {
  color: #f85149;
  background: rgba(248, 81, 73, 0.1);
  border: 1px solid rgba(248, 81, 73, 0.25);
}

.oc-badge-x {
  color: #e3b341;
  background: rgba(227, 179, 65, 0.1);
  border: 1px solid rgba(227, 179, 65, 0.25);
}

/* ================================================
   DARK THEME — full post override
   ================================================ */

main {
  background: #0d0e10;
}

.longform.blogpost {
  background: #0d0e10;
  color: #ffffff;
}

.longform.blogpost h2,
.longform.blogpost h3 {
  color: #f0ece3;
}

/* Override global link color (red-700 is too dark on dark bg) */
.longform.blogpost p a {
  color: #e63a46;
  background-image: linear-gradient(to bottom, transparent 90%, #e63a46 0);
}

/* Any remaining blockquotes not in art sections */
.longform.blogpost > blockquote {
  background: #161b22;
  border-color: #30363d;
  border-left-color: #58a6ff;
}

/* -----------------------------------------------
   Convert light art-directed sections to dark
   ----------------------------------------------- */

/* Section 1: Bulletin board paper */
.oc-bulletin-board {
  background: #1a1714;
}

.oc-note {
  background: #272320;
  border-color: rgba(255, 255, 255, 0.04);
  color: #8a7d70;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.4);
}

.oc-note-src {
  color: #4a4038;
}

/* Section 6: Memory grid */
.oc-memory-section {
  background: #0d0e10;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.oc-memory-grid {
  background: rgba(255, 255, 255, 0.04);
}

.oc-mem-card {
  background: #13141a;
}

.oc-mem-items li {
  color: #555;
  border-bottom-color: rgba(255, 255, 255, 0.04);
}

/* Section 7: Aha block */
.oc-aha-block {
  background: #080809;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.oc-aha-statement {
  color: #f5f0e8;
}

/* Section 8A: Flow section */
.oc-flow-section {
  background: #0d0e10;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
}

.oc-flow-header {
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.oc-flow-title {
  color: #f0ece3;
}

.oc-flow-chart {
  background: #13141a;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.oc-flow-step {
  background: #1c1e26;
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.4), inset 0 -2px 0 rgba(0, 0, 0, 0.25);
}

.oc-step-label {
  color: #9a9ea6;
}

.oc-flow-arrow {
  color: #444;
}

/* Section 9: What's Next */
.oc-next-section {
  background: #080809;
  border-top-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.oc-next-section::before {
  border-left-color: rgba(255, 255, 255, 0.12);
}

.oc-next-sentence {
  color: #f5f0e8;
}

.longform p {
  text-wrap: pretty;
}
</style>

<span class="tldr">tl:dr; I set up OpenClaw and I'm truly enjoying it, but I'm not doing any crazy automations. I'm mainly removing friction on small things and having fun learning.</span>

Of course, I saw the drama: the name changes, the Twitter threads, the sites that were created and then found to be mostly faked. I chalked it up as another wild internet thing and just kinda skimmed over what was going on.

<div class="oc-scattered-shots">
  <img class="oc-shot oc-shot-1" src="/posts/front-end-dev/trying-openclaw/screenshot-01.png" alt="OpenClaw screenshot">
  <img class="oc-shot oc-shot-2" src="/posts/front-end-dev/trying-openclaw/screenshot-02.png" alt="OpenClaw screenshot">
  <img class="oc-shot oc-shot-3" src="/posts/front-end-dev/trying-openclaw/screenshot-03.png" alt="OpenClaw screenshot">
</div>

As with nearly everything going in the AI space, I was curious though. So, when some Nashville folks [fired up a meetup](https://luma.com/66yxp3x9), I had to check it out. I wanted to see what real people were doing with this.

[Dieter Scholtyssek](https://www.linkedin.com/in/dieterscholtyssek/) put together a presentation on how he's been using it for a few weeks. Well, he had his bots put together a presentation, including branding a PDF cheatsheet from the web that he printed out for all of us. By the end of his talk, I knew I had to try it out. (By the way, he mentioned a couple of times that if you have any questions, just reach out to him on LinkedIn and I believe that he's willing to help anyone who does)

<div class="oc-spiral-section">
  <div class="oc-spiral-rail">
    <svg class="oc-rail-svg" viewBox="0 0 600 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="100" y1="36" x2="300" y2="36" stroke="#2a2a2a" stroke-width="2"/>
      <line x1="300" y1="36" x2="500" y2="36" stroke="#2a2a2a" stroke-width="2"/>
      <circle cx="100" cy="36" r="11" fill="#0d0508" stroke="#e63946" stroke-width="2"/>
      <line x1="93" y1="29" x2="107" y2="43" stroke="#e63946" stroke-width="2"/>
      <line x1="107" y1="29" x2="93" y2="43" stroke="#e63946" stroke-width="2"/>
      <text x="100" y="17" text-anchor="middle" fill="#e63946" font-size="9" font-family="monospace">FAIL</text>
      <text x="100" y="62" text-anchor="middle" fill="#555" font-size="11" font-family="monospace">VPS</text>
      <circle cx="300" cy="36" r="11" fill="#0d0d0d" stroke="#555" stroke-width="2"/>
      <line x1="293" y1="29" x2="307" y2="43" stroke="#666" stroke-width="2"/>
      <line x1="307" y1="29" x2="293" y2="43" stroke="#666" stroke-width="2"/>
      <text x="300" y="17" text-anchor="middle" fill="#666" font-size="9" font-family="monospace">FAIL</text>
      <text x="300" y="62" text-anchor="middle" fill="#555" font-size="11" font-family="monospace">Mac Pro</text>
      <circle cx="500" cy="36" r="11" fill="#050d0a" stroke="#39d353" stroke-width="2"/>
      <polyline points="493,36 499,43 509,28" fill="none" stroke="#39d353" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="500" y="17" text-anchor="middle" fill="#39d353" font-size="9" font-family="monospace">WIN</text>
      <text x="500" y="62" text-anchor="middle" fill="#39d353" font-size="11" font-family="monospace">Mac Mini</text>
    </svg>
  </div>
  <div class="oc-attempt oc-attempt-vps" data-oc-reveal>
    <span class="oc-attempt-label">Attempt 01 — VPS</span>
    <p>The next 24 hours from the talk were a roller coaster of emotions. I came home excited and started figuring out a way to just get one going for a test. I didn't want it on anything I owned or connected to anything I use, so I looked for some VPS solutions. I got one set up before bed and got the initial installation going, but it was a pain in the ass. It was my fault though, I wasn't properly reading the docs and so I was trying to execute commands in the GUI, then in SSH, then finally in the Docker after SSH.</p>
    <div class="oc-spiral-code">
      <span class="oc-spiral-wrong">openclaw --start</span>
      <span class="oc-spiral-note">ran it inside the dashboard, not the shell</span>
      <span class="oc-spiral-wrong">ssh root@vps; openclaw start</span>
      <span class="oc-spiral-note">SSHed in but still wrong — needed Docker</span>
      <span class="oc-spiral-right">ssh root@vps; docker exec -it openclaw bash</span>
      <span class="oc-spiral-note">docs are your friend, but I wasn't being friendly</span>
    </div>
  </div>
  <div class="oc-attempt oc-attempt-macpro" data-oc-reveal>
    <span class="oc-attempt-label">Attempt 02 — Mac Pro (2015 Intel)</span>
    <p>I listened to enough YouTube videos to know that I didn't want this on a VPS. So I tried getting it onto my old Mac Pro — but that was another pain in the ass. It's a 2015 Intel, stuck on Monterey. I couldn't get Homebrew to work and I couldn't even get a direct download of Node 22 from the site. For most things, I would have thrown in the towel here. However, I strongly believe that agent management is our future and I decided this was when I was going to figure it out.</p>
    <div class="oc-spiral-code">
      <span class="oc-spiral-wrong">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</span>
      <span class="oc-spiral-note">Homebrew itself wouldn't install on Monterey</span>
      <span class="oc-spiral-wrong">node -v</span>
      <span class="oc-spiral-note">command not found</span>
    </div>
  </div>
  <div class="oc-attempt oc-attempt-macmini" data-oc-reveal>
    <span class="oc-attempt-label">Attempt 03 — Mac Mini ✓</span>
    <p>Cue the Mac Mini. Price tag aside, I figured this is the most low risk way for me to go. Even if it's not OpenClaw, there's so much to learn from using local models and it can handle some of the decent Qwen ones. Saturday was a really fun day. While there was some tedium of setting up a Mac OS and creating new accounts for everything, I was having a blast creating this virtual team.</p>
  </div>
</div>

## It's alive! Oh, it's alive! It's aliiiiiive!

I've been testing out LLMs for a few years now and while sometimes they blow me away with responses, this is the first time that something has felt almost organic. I think it's mostly because I've anthropomorphized the agents, which has been a large part of the fun.

For the initial setup, I just had the single agent doing things, but then I formed the team for tasks that I know I'll want regularly. They're based on real and fictional characters from my various interests.

<div class="oc-agents-section">
  <div class="oc-agents-grid">
    <div class="oc-agent-card oc-agent-shelby" data-oc-reveal>
      <img class="oc-agent-avatar" src="/posts/front-end-dev/trying-openclaw/shelby.png" alt="Shelby avatar">
      <span class="oc-agent-tag">🦞 orchestration · routing</span>
      <h3 class="oc-agent-name">Shelby</h3>
      <p class="oc-agent-role">Orchestration and routing</p>
      <span class="oc-agent-based">based on Tommy Shelby</span>
      <p class="oc-agent-desc">I kinda wanted the main character from season one of Westworld, but calling anything Dr was too formal and Robert wasn't working for me. Plus, Tommy Shelby was one hell of an orchestrator.</p>
      <svg class="oc-wave" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path pathLength="1" d="M0,10 C10,3 20,17 30,10 C40,3 50,17 60,10 C70,3 80,17 90,10 C100,3 110,17 120,10 C130,3 140,17 150,10 C160,3 170,17 180,10 C190,3 200,17 200,10" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
    </div>
    <div class="oc-agent-card oc-agent-leif" data-oc-reveal>
      <img class="oc-agent-avatar" src="/posts/front-end-dev/trying-openclaw/lief.png" alt="Leif avatar">
      <span class="oc-agent-tag">🧭 research · validation</span>
      <h3 class="oc-agent-name">Leif</h3>
      <p class="oc-agent-role">Research and external validation</p>
      <span class="oc-agent-based">based on Leif Erikson</span>
      <p class="oc-agent-desc">Explores external sources and validates data. Named for the explorer who went where others hadn't been.</p>
      <svg class="oc-wave" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path pathLength="1" d="M0,10 C15,2 30,18 45,10 C60,2 75,18 90,10 C105,2 120,18 135,10 C150,2 165,18 180,10 C190,4 196,16 200,10" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
    </div>
    <div class="oc-agent-card oc-agent-watten" data-oc-reveal>
      <img class="oc-agent-avatar" src="/posts/front-end-dev/trying-openclaw/watten.png" alt="Watten avatar">
      <span class="oc-agent-tag">⌨️ coding · implementation</span>
      <h3 class="oc-agent-name">Watten</h3>
      <p class="oc-agent-role">Coding and implementation</p>
      <span class="oc-agent-based">loosely based on Amelia Wattenberger</span>
      <p class="oc-agent-desc">Handles the actual building. I've learned so much from Amelia Wattenberger. Plus, it seemed close to Watson.</p>
      <svg class="oc-wave" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path pathLength="1" d="M0,10 L10,4 L20,16 L30,4 L40,16 L50,10 L60,4 L70,16 L80,4 L90,16 L100,10 L110,4 L120,16 L130,4 L140,16 L150,10 L160,4 L170,16 L180,4 L190,16 L200,10" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
    </div>
    <div class="oc-agent-card oc-agent-quillan" data-oc-reveal>
      <img class="oc-agent-avatar" src="/posts/front-end-dev/trying-openclaw/quillan.png" alt="Quillan avatar">
      <span class="oc-agent-tag">✒️ writing · voice</span>
      <h3 class="oc-agent-name">Quillan</h3>
      <p class="oc-agent-role">Writing and voice matching</p>
      <span class="oc-agent-based">named after a quill</span>
      <p class="oc-agent-desc">Anything it generates has to be based on my writing style — so there's no character to base it off. Me Talk Pretty One Day, hopefully through Quillan's guidance.</p>
      <svg class="oc-wave" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path pathLength="1" d="M0,10 C20,2 35,18 55,8 C70,2 80,18 100,10 C120,2 135,18 155,6 C170,2 182,16 200,10" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
    </div>
  </div>
</div>

## Day One

To be clear, I don't trust this thing. So, the first thing I did was make new accounts for everything. I made a new gmail account, which got flagged and banned (but then reversed two days later). So, I made a new Zoho email so that I could create a new iCloud account. Then, it was just a new Obsidian account since Dieter and others shared the value of hooking it up to a vault for documentation. The only thing that Mac Mini and and OpenClaw has a connection to anywhere else in my digital life is Discord. I was debating just using Telegram, but I'm sharing this process with a buddy and I want him to be able to see the threads in Discord.

<div class="oc-blueprint-section">
  <div class="oc-blueprint-caption"><span class="oc-blueprint-label">system / network — day 01 isolation map</span></div>
  <svg class="oc-blueprint-svg" viewBox="0 0 600 370" xmlns="http://www.w3.org/2000/svg" aria-label="Network diagram: Mac Mini at center, Discord the only active connection, all other accounts isolated">
    <defs>
      <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(30,64,128,0.22)" stroke-width="0.5"/></pattern>
      <filter id="bp-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="600" height="370" fill="#071525"/>
    <rect width="600" height="370" fill="url(#bp-grid)"/>
    <line x1="250" y1="170" x2="134" y2="100" stroke="rgba(78,140,219,0.2)" stroke-width="1" stroke-dasharray="5 4"/>
    <line x1="252" y1="192" x2="80" y2="208" stroke="rgba(78,140,219,0.2)" stroke-width="1" stroke-dasharray="5 4"/>
    <line x1="300" y1="212" x2="248" y2="306" stroke="rgba(78,140,219,0.2)" stroke-width="1" stroke-dasharray="5 4"/>
    <line x1="348" y1="205" x2="466" y2="280" stroke="rgba(78,140,219,0.2)" stroke-width="1" stroke-dasharray="5 4"/>
    <line x1="352" y1="168" x2="464" y2="100" stroke="#58a6ff" stroke-width="1.5" filter="url(#bp-glow)"/>
    <circle cx="300" cy="185" r="52" fill="#58a6ff" class="oc-mac-glow"/>
    <rect x="250" y="158" width="100" height="54" rx="8" fill="rgba(7,21,37,0.95)" stroke="#58a6ff" stroke-width="1.5" filter="url(#bp-glow)"/>
    <text x="300" y="180" text-anchor="middle" fill="#f5f0e8" font-size="11" font-weight="700" font-family="monospace">Mac Mini</text>
    <text x="300" y="197" text-anchor="middle" fill="#58a6ff" font-size="9" font-family="monospace">OpenClaw</text>
    <circle cx="492" cy="78" r="30" fill="rgba(7,21,37,0.9)" stroke="#58a6ff" stroke-width="1.5" filter="url(#bp-glow)"/>
    <text x="492" y="75" text-anchor="middle" fill="#58a6ff" font-size="10" font-weight="700" font-family="monospace">Discord</text>
    <text x="492" y="89" text-anchor="middle" fill="#39d353" font-size="8" font-family="monospace">● connected</text>
    <circle cx="108" cy="82" r="26" fill="rgba(7,21,37,0.9)" stroke="rgba(78,140,219,0.25)" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="108" y="86" text-anchor="middle" fill="rgba(78,140,219,0.35)" font-size="10" font-family="monospace">Obsidian</text>
    <path transform="translate(108,48)" d="M0,-7 L6,-3 L6,3 Q6,8 0,10 Q-6,8 -6,3 L-6,-3 Z" fill="rgba(78,140,219,0.08)" stroke="rgba(78,140,219,0.3)" stroke-width="1"/>
    <text x="108" y="118" text-anchor="middle" fill="rgba(78,140,219,0.25)" font-size="8" font-family="monospace">new · isolated</text>
    <circle cx="55" cy="208" r="26" fill="rgba(7,21,37,0.9)" stroke="rgba(78,140,219,0.25)" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="55" y="204" text-anchor="middle" fill="rgba(78,140,219,0.35)" font-size="10" font-family="monospace">Zoho</text>
    <text x="55" y="217" text-anchor="middle" fill="rgba(78,140,219,0.35)" font-size="10" font-family="monospace">Mail</text>
    <path transform="translate(55,174)" d="M0,-7 L6,-3 L6,3 Q6,8 0,10 Q-6,8 -6,3 L-6,-3 Z" fill="rgba(78,140,219,0.08)" stroke="rgba(78,140,219,0.3)" stroke-width="1"/>
    <text x="55" y="244" text-anchor="middle" fill="rgba(78,140,219,0.25)" font-size="8" font-family="monospace">new · isolated</text>
    <circle cx="248" cy="318" r="26" fill="rgba(7,21,37,0.9)" stroke="rgba(78,140,219,0.2)" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="248" y="314" text-anchor="middle" fill="rgba(78,140,219,0.3)" font-size="10" font-family="monospace">Gmail</text>
    <text x="248" y="327" text-anchor="middle" fill="rgba(230,57,70,0.55)" font-size="8" font-family="monospace">⚠ banned</text>
    <path transform="translate(248,284)" d="M0,-7 L6,-3 L6,3 Q6,8 0,10 Q-6,8 -6,3 L-6,-3 Z" fill="rgba(78,140,219,0.08)" stroke="rgba(78,140,219,0.3)" stroke-width="1"/>
    <circle cx="490" cy="286" r="26" fill="rgba(7,21,37,0.9)" stroke="rgba(78,140,219,0.25)" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="490" y="290" text-anchor="middle" fill="rgba(78,140,219,0.35)" font-size="10" font-family="monospace">iCloud</text>
    <path transform="translate(490,252)" d="M0,-7 L6,-3 L6,3 Q6,8 0,10 Q-6,8 -6,3 L-6,-3 Z" fill="rgba(78,140,219,0.08)" stroke="rgba(78,140,219,0.3)" stroke-width="1"/>
    <text x="490" y="322" text-anchor="middle" fill="rgba(78,140,219,0.25)" font-size="8" font-family="monospace">new · isolated</text>
    <line x1="20" y1="353" x2="42" y2="353" stroke="#58a6ff" stroke-width="1.5"/>
    <text x="48" y="357" fill="rgba(88,166,255,0.45)" font-size="8" font-family="monospace">active</text>
    <line x1="100" y1="353" x2="122" y2="353" stroke="rgba(78,140,219,0.3)" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="128" y="357" fill="rgba(78,140,219,0.35)" font-size="8" font-family="monospace">isolated / new account</text>
  </svg>
</div>

After accounts, most of the day was role boundaries, handoffs, and logs. By the end of the day, we had moved from one assistant loop to a small coordinated team, where I tested an output from each. Some of Quillan's work is in this post, but it has a long way to go before I'm not rewriting 95%. More than anything, I've found LLMs help me with an outline and in knowing what I don't want to write.

## What we built

While I have separated out specific tasks, I haven't gone far enough with them for it to matter. The multi-channel set up for agents is supposed to be straight forward, but I've given up on it for now. The items do get handed off, but Shelby shares it all with me in the primary channel. I'm using the same model for everything still, which is connected to my OpenAI subscription.

If and when I find some heavy automations, I'll start playing with model allocation for saving on tokens.

We set up a basic Projects directory so that I could have it start building things, and set Watten loose on Mission Control v1. I saw a few of these and it's pretty cool to get to see metrics. I think it's vital for truly automated systems, but for the moment mine is just for show. I'm going to have to figure out a better solution for it, though, because right now I have to view the Mac Mini on a screen to see anything.

<img class="full-to-half-bleed" height="534" src="/posts/front-end-dev/trying-openclaw/screenshot-04.webp" alt="Screenshot of Mission Control" width="1008" />

<small>Disclaimer: this next terminal section is completely written by the bots. I asked for a review of the day and it churned out this, though it put it in sentence form. I honestly couldn't have told you what "broke", a lot of it was feeling out how things worked. However, it was fascinating to me how critical it was of my delegation and communication skills.</small>

<div class="oc-terminal-section">
  <div class="oc-terminal-window">
    <div class="oc-terminal-chrome">
      <div class="oc-terminal-dots"><span></span><span></span><span></span></div>
      <span class="oc-terminal-filename">openclaw_debug.log — what broke (this section is bot words)</span>
    </div>
    <div class="oc-terminal-body">
      <span class="oc-comment-line">two categories failed early: delegation mechanics and environment assumptions.</span>
      <div class="oc-log-block" data-oc-reveal>
        <span class="oc-log-line"><span class="oc-tag oc-tag-warn">[WARNING]</span> delegation.underspecified</span>
        <span class="oc-log-line oc-dim">→ "handle this" ≠ "produce X with constraints Y in format Z"</span>
        <span class="oc-log-line"><span class="oc-tag oc-tag-warn">[WARNING]</span> upstream_agent: conclusions passed, not artifacts</span>
        <span class="oc-log-line oc-dim">→ receiving agents required full context reconstruction</span>
        <span class="oc-log-line"><span class="oc-tag oc-tag-warn">[WARNING]</span> latency.stacked: clarifying_questions + repeated_parsing</span>
        <span class="oc-log-line oc-dim">→ multi-agent felt slower than single assistant in those moments</span>
      </div>
      <div class="oc-log-block" data-oc-reveal>
        <span class="oc-log-line"><span class="oc-tag oc-tag-error">[ERROR]</span> environment.assumption: local_path ≠ url_fetch_semantics</span>
        <span class="oc-log-line oc-dim">→ tooling paths assumed fetch semantics</span>
        <span class="oc-log-line oc-dim">→ passing local file paths → intermittent confusion, inconsistent behavior</span>
        <span class="oc-log-line"><span class="oc-tag oc-tag-error">[ERROR]</span> boundary.mismatch: network_resource ≠ filesystem_path</span>
        <span class="oc-log-line oc-dim">→ without deliberate bridge, that seam becomes a bug factory</span>
      </div>
      <div class="oc-log-block" data-oc-reveal>
        <span class="oc-comment-line">in hindsight it's obvious. in build mode it's a time sink.</span>
        <span class="oc-prompt-line"><span class="oc-cursor"></span></span>
      </div>
    </div>
  </div>
</div>

## Documentation and Memory

Some of the things I picked up from videos is that how you document and store memory will be really important as you scale. So, we put in a structure for what and how to save, including daily logs, weekly saves into long-term memory, and some basic metrics for comparison.

<div class="oc-memory-section">
  <div class="oc-memory-grid">
    <div class="oc-mem-card oc-mem-daily">
      <span class="oc-mem-icon">📅</span>
      <h4 class="oc-mem-name">Daily Logs</h4>
      <ul class="oc-mem-items">
        <li>session summaries</li>
        <li>task outputs</li>
        <li>agent handoff notes</li>
      </ul>
    </div>
    <div class="oc-mem-card oc-mem-weekly">
      <span class="oc-mem-icon">🔄</span>
      <h4 class="oc-mem-name">Weekly Snapshots</h4>
      <ul class="oc-mem-items">
        <li>pattern review</li>
        <li>distilled context</li>
        <li>long-term write-back</li>
      </ul>
    </div>
    <div class="oc-mem-card oc-mem-longterm">
      <span class="oc-mem-icon">🏛</span>
      <h4 class="oc-mem-name">Long-term Store</h4>
      <ul class="oc-mem-items">
        <li>Obsidian vault</li>
        <li>GitHub backup</li>
        <li>persistent context</li>
      </ul>
    </div>
    <div class="oc-mem-card oc-mem-metrics">
      <span class="oc-mem-icon">📈</span>
      <h4 class="oc-mem-name">Metrics</h4>
      <ul class="oc-mem-items">
        <li>token usage</li>
        <li>task completion</li>
        <li>baseline comparison</li>
      </ul>
    </div>
  </div>
</div>

## My Aha Moment

The most exciting part of this whole experience is the feeling of ownership. I've been using ChatGPT daily for a few years now and I've used dozens of various AI experiences and even built a few of my own. None of it is felt like "mine". I log into an account and do a thing, but that account could be gone at any moment.

<div class="oc-aha-block">
  <span class="oc-aha-statement" data-oc-reveal>I own the hardware.</span>
  <span class="oc-aha-statement" data-oc-reveal>I own the structure.</span>
  <span class="oc-aha-statement" data-oc-reveal>I own the <span class="oc-aha-accent">flow.</span></span>
</div>

I'm now doing things where I own the hardware, I own the structure, and the agents write things that are saved to disk. I'm taking those things and backing them up in GitHub. Of course, I don't own the package behind OpenClaw and things can go awry, but it feels so much different and I love it.

The second best part is the removal of friction for doing simple things.

<div class="oc-flow-section">
<div class="oc-flow-header">
<span class="oc-flow-section-label">Example One</span>
<h3 class="oc-flow-title">No Reserv<span style="color:#c9a84c">AI</span>tions</h3>
</div>
<p class="oc-flow-prose">For a long time now, I've been generating reviews of places that I visit in the spirit of Anthony Bourdain. He'd likely hate it, but it's a small way for me to keep hearing his voice and I loved the way he described the world. At first, I made a prompt and I'd trigger it with the details. Then, I'd do some basic logistics research to get some meta for the post, resize images, paste it all in a markdown file, and commit it. Over time, I made three prompts: the review, the meta research, and a summary. Then, I made a GitHub action and the last remaining part was that I had to do the image part manually.</p>
<div class="oc-flow-chart" data-oc-reveal>
<div class="oc-flow-step" style="--step-color:#fef9c3;--step-rot:-1.5deg;"><span class="oc-step-icon">📸</span><span class="oc-step-label">photo from phone</span></div>
<div class="oc-flow-arrow">→</div>
<div class="oc-flow-step" style="--step-color:#fde8e8;--step-rot:1deg;"><span class="oc-step-icon">💬</span><span class="oc-step-label">@ Shelby in Discord</span></div>
<div class="oc-flow-arrow">→</div>
<div class="oc-flow-step" style="--step-color:#e8f4e8;--step-rot:-1deg;"><span class="oc-step-icon">🤖</span><span class="oc-step-label">agents fire off tasks</span></div>
<div class="oc-flow-arrow">→</div>
<div class="oc-flow-step" style="--step-color:#e8effe;--step-rot:1.5deg;"><span class="oc-step-icon">📦</span><span class="oc-step-label">commit pushed to GitHub</span></div>
<div class="oc-flow-arrow">→</div>
<div class="oc-flow-step" style="--step-color:#fef3e2;--step-rot:-0.5deg;"><span class="oc-step-icon">🚀</span><span class="oc-step-label">Netlify deploys</span></div>
<div class="oc-flow-arrow">→</div>
<div class="oc-flow-step" style="--step-color:#f0e8fe;--step-rot:1deg;"><span class="oc-step-icon">✨</span><span class="oc-step-label">live while still there</span></div>
</div>
<p class="oc-flow-prose">Now, I @ Shelby in Discord with the image from my phone and share my basic info (usually it's restaurants and what we had). The agents do a series of tasks, a commit is created and pushed to GitHub, Netlify gets that and deploys my site. I get to revel in a pseudo take while I'm still in the moment.</p>
</div>

<div class="oc-music-section">
<svg class="oc-music-wave-bg" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true"><path d="M0,200 C50,100 100,300 150,200 C200,100 250,300 300,200 C350,100 400,300 450,200 C500,100 550,300 600,200 C650,100 700,300 750,200 C800,100 850,300 900,200 C950,100 1000,300 1050,200 C1100,100 1150,300 1200,200" fill="none" stroke="#9b5de5" stroke-width="3"/><path d="M0,280 C75,200 150,360 225,280 C300,200 375,360 450,280 C525,200 600,360 675,280 C750,200 825,360 900,280 C975,200 1050,360 1125,280 L1200,280" fill="none" stroke="#9b5de5" stroke-width="1.5"/></svg>
<div class="oc-music-content">
<span class="oc-music-section-label">Example Two · Music Reviews</span>
<p class="oc-music-prose">Similarly, I generate music reviews of songs in my <a href="https://open.spotify.com/playlist/0bscM0iqnWBVzY9xMCHc4y?si=9cdd9f720f10475c">Lately</a> playlist. Music is my love and sometimes I know exactly why I love a song and sometimes I'm like "What makes me enjoy this song so much?" Generating a review helps me dive into the lyrics further and I learn something about them, the musician, and myself.</p>
<p class="oc-music-prose">This flow started with a GitHub action. I wanted to do it forever, but I knew I wouldn't commit to a flow like the No ReservAItions ones. Now, I can just @ Shelby the link to the song and get things going.</p>
<p class="oc-music-prose">Brief interlude here, but this brings me so much joy. I didn't need a review to know why I love <a href="https://www.dandenney.com/music/reviews/stephen-wilson-jr-im-a-song-live-at-the-print-shop/">this song</a>, but isn't this beautiful?</p>
<blockquote class="oc-pullquote"><span class="quote">&ldquo;</span> As he navigates the intersections of personal and collective histories, Wilson's artistry speaks to a universal truth: we are all, in some way, a collection of songs—woven from our joys, regrets, and the fleeting instances that shape our lives.<span class="quote">&rdquo;</span></span><cite class="oc-pullquote-source">— Quillan on Stephen Wilson Jr., "I'm a Song (Live at the Print Shop)"</cite></blockquote>
</div>
</div>

<div class="oc-discord-section">
<div class="oc-discord-header"><span class="oc-discord-channel">general</span><span class="oc-discord-channdesc">Final Example, For Now</span></div>
<p class="oc-discord-prose">As I mentioned, I've been using LLMs a lot over the past few years. It's such a tiny thing to view as a negative, but each time requires me to go to a specific place to do a thing. For ChatGPT, I have to open the site or the app. For code, I have to be at an editor (though Cursor is changing that). This week, I've started just asking something in Discord. Yes, I still have to go to Discord, but it's one spot that I go to do multiple things instead of multiple and it's already the worst that it will ever be. I'll keep learning, the tech will keep getting better.</p>
<div class="oc-discord-body">
<div class="oc-discord-msg" data-oc-reveal><div class="oc-discord-avatar oc-avatar-user">DD</div><div class="oc-discord-msg-body"><span class="oc-discord-author oc-author-user">dandenney <span class="oc-discord-time">Today at 9:14 AM</span></span><p class="oc-discord-text"><span class="oc-discord-cmd">@Shelby</span> what's the best way to resize a batch of images on macOS?</p></div></div>
<div class="oc-discord-divider">Shelby is typing…</div>
<div class="oc-discord-msg" data-oc-reveal><div class="oc-discord-avatar oc-avatar-shelby">S</div><div class="oc-discord-msg-body"><span class="oc-discord-author oc-author-shelby">Shelby <span class="oc-discord-time">Today at 9:14 AM</span></span><p class="oc-discord-text">On macOS, <span class="oc-discord-cmd">sips</span> is built in. For batch resize to 1200px wide: <span class="oc-discord-cmd">sips -Z 1200 *.jpg</span> — Want me to have Watten spin up a script that also strips EXIF, outputs to a subfolder, and converts to WebP?</p></div></div>
<div class="oc-discord-msg" data-oc-reveal><div class="oc-discord-avatar oc-avatar-user">DD</div><div class="oc-discord-msg-body"><p class="oc-discord-text">yes please</p></div></div>
<div class="oc-discord-divider">Watten is typing…</div>
<div class="oc-discord-msg" data-oc-reveal><div class="oc-discord-avatar oc-avatar-watten">W</div><div class="oc-discord-msg-body"><span class="oc-discord-author oc-author-watten">Watten <span class="oc-discord-time">Today at 9:15 AM</span></span><p class="oc-discord-text">Done. Script saved to <span class="oc-discord-cmd">~/scripts/resize-webp.sh</span> — run with <span class="oc-discord-cmd">./resize-webp.sh ./photos</span> and WebP output lands in <span class="oc-discord-cmd">./photos/out/</span>.</p></div></div>
</div>
<div class="oc-discord-footer"><span class="oc-discord-footer-label">one hub · always getting better</span></div>
</div>

<div class="oc-next-section">
<span class="oc-next-label">What's Next?</span>
<p class="oc-next-sentence" data-oc-reveal>I don't know.</p>
<p class="oc-next-sentence" data-oc-reveal>I'm not in any rush to convert my life over to this thing.</p>
<p class="oc-next-sentence" data-oc-reveal>I'm paying attention to things I repeat and I'll slowly try out moving more things over to this new system.</p>
<p class="oc-next-sentence" data-oc-reveal>If they make sense, they'll stay. If they don't, they won't.</p>
<p class="oc-next-sentence" data-oc-reveal>The most important part is that I'm learning every day and I'm having <span class="oc-next-accent">a blast.</span></p>
</div>

<div class="oc-resources-section">
<span class="oc-resources-label">Resources</span>
<div class="oc-resources-grid">
<div class="oc-resource-card" data-oc-reveal><span class="oc-resource-icon">▶</span><div class="oc-resource-body"><p class="oc-resource-title"><span class="oc-resource-badge oc-badge-yt">YouTube</span> <a href="https://www.youtube.com/@AlexFinnOfficial">Alex Finn</a></p><p class="oc-resource-desc">He's excited and it's important to remember that he's a content creator, but he is sharing some excellent stuff for getting started with OpenClaw.</p></div></div>
<div class="oc-resource-card" data-oc-reveal><span class="oc-resource-icon">▶</span><div class="oc-resource-body"><p class="oc-resource-title"><span class="oc-resource-badge oc-badge-yt">YouTube</span> <a href="https://www.youtube.com/@matthew_berman">Matthew Berman</a></p><p class="oc-resource-desc">A little more pragmatic and also sharing excellent stuff.</p></div></div>
<div class="oc-resource-card" data-oc-reveal><span class="oc-resource-icon">✕</span><div class="oc-resource-body"><p class="oc-resource-title"><span class="oc-resource-badge oc-badge-x">X Post</span> <a href="https://x.com/elvissun/status/2025920521871716562">OpenClaw + Codex/ClaudeCode Agent Swarm: The One-Person Dev Team [Full Setup]</a></p></div></div>
<div class="oc-resource-card" data-oc-reveal><span class="oc-resource-icon">✕</span><div class="oc-resource-body"><p class="oc-resource-title"><span class="oc-resource-badge oc-badge-x">X Post</span> <a href="https://x.com/code_rams/status/2025630269559185648">I Spent 5 Days Debugging My OpenClaw Agent's Memory. Here's Everything I Learned.</a></p></div></div>
<div class="oc-resource-card" data-oc-reveal><span class="oc-resource-icon">✕</span><div class="oc-resource-body"><p class="oc-resource-title"><span class="oc-resource-badge oc-badge-x">X Post</span> <a href="https://x.com/AlexFinn/status/2025302022749389282">11 hacks that will make your OpenClaw go from useless to AGI</a></p></div></div>
<div class="oc-resource-card" data-oc-reveal><span class="oc-resource-icon">✕</span><div class="oc-resource-body"><p class="oc-resource-title"><span class="oc-resource-badge oc-badge-x">X Post</span> <a href="https://x.com/johann_sath/status/2025440759416045702">most openclaw users hit 150K context in 1 conversation &amp; wonder why their agent gets dumber</a></p></div></div>
</div>
</div>

<script>
(function () {
  var els = document.querySelectorAll('[data-oc-reveal]');
  if (!els.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('oc-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(function (el) { observer.observe(el); });
})();
</script>
