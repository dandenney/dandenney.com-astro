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
- When it completes the button itself becomes Undo for five seconds, with a visible countdown, then a final state. Nothing else on the page moves.
- Holding Space or Enter works the same as pressing with a pointer. Screen readers hear what happened and that undo is available.
- A single click with no hold behind it (a screen reader in browse mode, a switch) asks to be pressed again, so nobody is locked out.
- With reduced motion the fill still shows progress (it's information), but nothing bounces.
