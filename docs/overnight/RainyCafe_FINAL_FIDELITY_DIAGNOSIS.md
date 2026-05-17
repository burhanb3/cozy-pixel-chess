# Rainy Cafe Final Fidelity Diagnosis

Date: 2026-05-17
Branch: `goal/overnight-rainy-cafe-pass`

Gold standard: `docs/references/rainy-cafe-reference.png`
Current stable baseline: `docs/references/visual-checks/fidelity-current-start.png`

## Render / Viewport Verdict

The fresh 1440x900 baseline render completed cleanly after reopening the app and waiting for the UI to settle. The full scene, board, panels, pieces, controls, background, and lower area were visible. I did not find a stable black-region layout bug in this baseline. The black/empty screenshots reported in prior context should be treated as likely loading/timing captures unless a later reproducible render bug appears.

Final screenshots for this pass must still wait for the app to finish rendering before capture.

## Current Remaining Problems

The current branch is much improved from the earlier reconstruction pass, but it still does not match the approved Rainy Cafe reference closely enough. The scene reads as a React game UI using a strong pixel background and several good frame assets, while the reference reads as one fully illustrated premium game interface.

The most visible remaining mismatch is the split between real art and CSS treatment:

- Bottom buttons are still too much like web controls. They use one shared base asset with CSS color/filter treatment instead of five dedicated skins.
- Captured trays are visually empty at game start and still do not feel like miniature asset trays with real piece sprites.
- Move history and analyze controls are better than before, but still flatter and more web-like than the reference.
- Board coordinates are present and usable, but they still read as live labels sitting over the board frame more than carved/embedded frame text.
- Chess pieces are improved, but still not chunky and shaded enough compared with the approved reference.
- The lower-right mascot/bubble cluster and background decor are readable, but not fully fused with the rest of the illustrated UI.
- Typography is readable, but rating/timer/status pills and button labels still have modern web-ui traces.

## P0 Issues

1. Keep full 1440x900 render stable and recapture any screenshot that is black or partially unloaded.
2. Make the bottom controls more reference-like: larger rounded-square asset-driven buttons with clear green/orange/yellow/blue/purple identities.
3. Reduce fake/CSS feel in the highest-impact control areas: buttons, captured trays, quote banner, analyze control.
4. Improve captured tray treatment by replacing letter/placeholder display with miniature piece sprites and tighter tray spacing.
5. Keep the board visually dominant and avoid any layout drift that makes the UI feel more spread out.
6. Improve coordinate integration without changing chess square click behavior.
7. Improve move history and analyze treatment enough that they read as game UI rather than a generic panel/button pair.
8. Improve piece quality as much as safely possible without integrating a weak or risky generated set.

## P1 Issues

1. Improve player cards and avatar presentation where safe, while preserving TeaLeaf on top and MossyCat on bottom.
2. Make the VS badge feel more embedded and intentional.
3. Improve coach bubble / mascot placement and lower-right composition.
4. Improve quote banner edge treatment and text alignment.
5. Improve decor visibility and cohesion without adding clutter.
6. Improve mini captured piece rendering after captures.

## P2 Issues

1. Further hover/pressed states for every control.
2. Additional ambient rain/lighting polish.
3. A fully dedicated final piece-generation pass if this pass cannot safely produce a better 12-piece set.
4. Modular left-bottom and right-bottom decor cluster generation for stricter reference matching.

## Weak Assets To Regenerate Or Replace

Highest priority:

- `src/assets/themes/rainy-cafe/buttons/button-base-normal.png`
- `src/assets/themes/rainy-cafe/buttons/button-base-hover.png`
- `src/assets/themes/rainy-cafe/buttons/button-base-pressed.png`

These shared button bases are usable as fallback frames, but they are not sufficient for final fidelity because the reference has five distinct rounded-square colored game buttons. This pass should generate or integrate dedicated button skins:

- `src/assets/themes/rainy-cafe/buttons/play-button.png`
- `src/assets/themes/rainy-cafe/buttons/undo-button.png`
- `src/assets/themes/rainy-cafe/buttons/hint-button.png`
- `src/assets/themes/rainy-cafe/buttons/focus-button.png`
- `src/assets/themes/rainy-cafe/buttons/settings-button.png`

Important but only if generation is clearly stronger:

- `src/assets/themes/rainy-cafe/pieces/white-piece-set.png`
- `src/assets/themes/rainy-cafe/pieces/black-piece-set.png`
- `src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png`
- `src/assets/themes/rainy-cafe/panels/quote-banner-frame.png`
- `src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png`
- `src/assets/themes/rainy-cafe/panels/analyze-position-button-frame.png`
- `src/assets/themes/rainy-cafe/decor/cat-mascot.png`

## Too CSS / Too Fake / Too Loose

- Button color identity is CSS-filtered instead of asset-specific.
- Button icons are CSS shapes and simple symbols; they do not yet look like polished pixel-art icon art.
- Captured pieces are not shown as miniature art sprites at start or after captures; the tray effect is too empty.
- Rating, timer, and status pills rely on CSS framing and shadows.
- The move history empty state is too centered and plain compared with the reference's lived-in notation panel.
- The analyze button reads closer to a web button than a carved/dark game control.
- Coordinates are live HTML and need to be visually pushed into the frame language.

## Dynamic HTML That Can Stay

These must remain dynamic and should not be baked into static images:

- Turn text.
- Player names, side labels, ratings, timers, and status lines.
- Captured piece counts and captured piece sprites.
- Move numbers and SAN notation.
- Analyze label.
- Coach text.
- Button labels and hint count.
- Board squares, selected square, legal moves, last move, check, invalid move, and click targets.
- Coordinates, if visually embedded in the board frame.

## Parts That Must Become Or Remain Real Assets

Must remain asset-driven:

- Background room art.
- Board frame and square textures.
- Player card frames and avatar portraits.
- Captured tray frame.
- VS badge.
- Move history frame.
- Analyze button frame.
- Coach bubble frame.
- Cat mascot.
- Quote banner frame.

Must become more asset-driven in this pass if generation succeeds:

- Five bottom button skins with distinct color identities.
- Button icon treatment, preferably baked into the static skin or represented by asset-quality overlays.
- Captured piece display, using real piece sprites instead of text tiles.

## Exact Layout / Composition Mismatches Versus Reference

- The reference bottom buttons are larger, taller, more rounded-square, and more individually colored than the current row.
- The current bottom buttons sit correctly in the scene, but they are still too slim and too uniform compared with the approved reference.
- The current quote banner is centered, but it remains slightly too clean and horizontal compared with the more ornate reference banner.
- The current captured trays use good frames, but the content area lacks the compact piece grouping visible in the reference.
- The current left rail is in the right order, but the player card internals still feel denser and more CSS-driven than the reference.
- The current right rail has the correct structure, but move history and analyze still feel like stacked UI modules rather than a fully illustrated right-side composition.
- The board is dominant enough to preserve, but coordinate text should be visually quieter and more embedded.
- The current pieces are readable and safe, but they do not yet have the reference's chunky carved volume.

## Execution Order For This Pass

1. Commit this diagnosis as the required pre-coding checkpoint.
2. Generate or integrate dedicated button skins first, because this is the highest-impact visual mismatch and does not touch chess rules.
3. Add theme slots and CSS support for per-button skins while preserving live labels, disabled states, hint badge, and click handlers.
4. Replace captured letter tiles with miniature sprite pieces using the existing piece sheets.
5. Tighten captured tray spacing and VS badge proportions.
6. Tune button row, quote banner, analyze button, and coordinate styling only where the screenshot proves it moves closer to the reference.
7. Capture `fidelity-step-01.png` after diagnosis/layout stabilization, then `fidelity-step-02.png` after core UI asset integration.
8. Run `npm run typecheck`, `npm run lint`, and `npm run build` after the integration checkpoint.
9. Perform a manual gameplay smoke test: e2-e4, e7-e5, one invalid move, Undo, New Game, move history, selected/legal/last/turn behavior.
10. Do a final visual pass for coherence, capture `fidelity-step-03.png`, `fidelity-step-04.png`, and `rainy-cafe-final-fidelity-pass.png`.
11. Update `docs/overnight/RainyCafe_FINAL_FIDELITY_LOG.md` with what changed, what was generated/reused, screenshots, remaining gaps, and next step.
