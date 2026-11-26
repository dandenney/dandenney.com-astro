---
title: Hold to confirm
summary: A destructive button you press and hold, so deleting is deliberate, with a short undo window after.
kind: interaction
tags: [buttons, destructive, undo]
pubDate: 2026-11-26
shipped: devin
height: 520
---

A "danger zone" row in workspace settings: deleting a workspace removes every page in it and all their results. A confirm dialog gets clicked through without anyone reading it. Holding the button for about a second makes the choice deliberate without adding a second step.

- While held, the button fills left to right, and its label flips color where the fill has reached.
- Letting go early drains the fill back and says so ("Keep holding to delete"), so the gesture teaches itself.
- When it completes there's a five-second undo with a visible countdown, then a final state.
- Holding Space or Enter works the same as pressing with a pointer. Screen readers hear what happened and that undo is available.
- With reduced motion the fill still shows progress (it's information), but nothing bounces.
