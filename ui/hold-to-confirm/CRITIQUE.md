---
variant: devin
critic: devin
date: '2026-11-26'
scope: full
---

## Verdict

It reaches the bar for sighted pointer and keyboard users: the hold teaches itself, the fill reads as progress, and undo is a real safety net. The biggest opportunity is the path with no hold at all. A screen reader in browse mode, or switch access, sends a single click, and a click does nothing here. It doesn't read as AI-generated: the palette is restrained and the two-tone label is a considered detail. The page around it is a stock settings layout, though, so the button carries the whole piece.

## Brief coverage

- **Met**: Fills left to right while held, and the label changes color exactly where the fill reaches it.
- **Met**: Letting go early drains the fill, says "Keep holding to delete", and nudges the hint.
- **Met**: A five-second undo with a ring and a countdown, then a final state.
- **Partly**: Space and Enter work, and screen readers hear the delete and the undo. A click with no hold behind it (a screen reader's activation, a switch) is ignored, so some assistive-tech users can't delete at all.
- **Met**: With reduced motion the fill still moves, and the press scale, nudge and ring transitions stop.

## Heuristics

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of system status | 4 | n/a: fill, label, hint, ring and countdown all report state |
| 2 | Match system / real world | 3 | “Danger zone” is a developer convention; fine for this audience |
| 3 | User control and freedom | 4 | n/a: early release cancels, and undo restores |
| 4 | Consistency and standards | 3 | The button says "Deleted" while the undo bar says "being deleted" |
| 5 | Error prevention | 4 | n/a: the hold is the prevention |
| 6 | Recognition rather than recall | 3 | The hint names Space but not Enter |
| 7 | Flexibility and efficiency | 2 | No path for a single activation: no click fallback |
| 8 | Aesthetic and minimalist design | 3 | The alternatives look like options but are plain text |
| 9 | Error recovery | 3 | Once the five seconds pass, nothing says where to go next |
| 10 | Help and documentation | 3 | The inline hint carries it; nothing says how long to hold |
| **Total** | | **32/40** | **Good** |

## What's working

- The label drawn twice and clipped to the fill makes the progress legible inside the text itself, so there's no extra progress bar to read.
- Early release says what happened and drains rather than snapping back, so a failed attempt teaches the gesture instead of feeling like an error.
- Focus moves to Undo as the undo bar appears and back to the button afterward, so keyboard users never lose their place.

## Priority issues

- **[P1]** A plain click does nothing. Screen readers in browse mode and switch devices activate with one click, so for those users the button looks broken. Fix: when a `click` arrives with no hold behind it (`event.detail === 0`, or no pointerdown or keydown first), switch to a second step, such as the label becoming "Press again to delete" for a few seconds, and announce it.
- **[P2]** The button says "Deleted" while the deletion can still be undone. That contradicts the undo bar and could make someone think undo is too late. Fix: show "Deleting…" during the countdown, and "Deleted" only in the final state.
- **[P2]** "Transfer ownership" and "Archive instead" sit in a danger zone looking like choices, but they aren't actionable. Giving the safer paths no affordance weakens the page's argument. Fix: make them links or quiet buttons, or label the list "Other options" so it reads as information.
- **[P3]** The undo bar and the final message push the alternatives down when they appear. Fix: reserve the row's height, or bring the bar in over it, so the layout stays put during a high-stress moment.
- **[P3]** The hint says "hold Space" while Enter works too, and gives no duration. Fix: "Press and hold for a second (or hold Space or Enter)".

## Questions

- Should the hold time scale with what's at stake, so deleting 14 pages takes longer than deleting one?
- Would the five seconds feel calmer if the countdown lived in the button itself, keeping the user's eyes in one place?
