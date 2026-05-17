# Rainy Cafe Final Fidelity Log

Date: 2026-05-17
Branch: `goal/overnight-rainy-cafe-pass`

Gold standard: `docs/references/rainy-cafe-reference.png`

## Diagnosis Summary

The final fidelity diagnosis found that the current branch rendered reliably at 1440x900, but still looked like a mixture of React/CSS controls and partial pixel-art assets. The largest remaining visual fidelity gaps were the bottom button row, captured tray content, coordinate/piece polish, empty move-history treatment, and the overall asset consistency of live UI elements.

The black/empty screenshot concern did not reproduce during this pass. A fresh app open and delayed 1440x900 capture showed the full scene cleanly.

## Weak Areas Targeted

- P0: bottom controls looked too CSS-filtered and not like five distinct game assets.
- P0: captured trays did not use real miniature piece sprites after captures.
- P0: board pieces needed a slightly chunkier live rendering treatment.
- P0: move history empty state was too strong and web-like.
- P1: hint count needed to remain dynamic while sitting on a more asset-like button.

## Assets Regenerated

Generated a keyed raster button sheet with five dedicated skins, then removed the chroma background and split it into modular PNG assets:

- `src/assets/themes/rainy-cafe/buttons/final-fidelity-button-sheet.png`
- `src/assets/themes/rainy-cafe/buttons/play-button.png`
- `src/assets/themes/rainy-cafe/buttons/undo-button.png`
- `src/assets/themes/rainy-cafe/buttons/hint-button.png`
- `src/assets/themes/rainy-cafe/buttons/focus-button.png`
- `src/assets/themes/rainy-cafe/buttons/settings-button.png`

The first generation attempt had good art but a baked checkerboard background, so it was not integrated. The second generation used a solid chroma key and produced usable transparent modular assets.

## Assets Newly Integrated

- `play-button.png`
- `undo-button.png`
- `hint-button.png`
- `focus-button.png`
- `settings-button.png`

These are now exposed through the Rainy Cafe theme button slots and consumed via CSS variables in `GameLayout`.

## Assets Reused

- `src/assets/themes/rainy-cafe/pieces/white-piece-set.png`
- `src/assets/themes/rainy-cafe/pieces/black-piece-set.png`
- `src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png`
- `src/assets/themes/rainy-cafe/panels/quote-banner-frame.png`
- `src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png`
- `src/assets/themes/rainy-cafe/panels/analyze-position-button-frame.png`
- `src/assets/themes/rainy-cafe/backgrounds/rainy-room-background.png`
- Existing player portraits, board frame, squares, VS badge, coach bubble, and mascot assets.

## Visual Mismatches Fixed

- Replaced shared CSS-filtered button treatment with five dedicated pixel-art button skins.
- Removed visible CSS icon shapes from the bottom buttons and let the generated icon art carry the control identity.
- Kept button labels and hint count dynamic.
- Changed captured piece rendering from text/letter tiles to miniature sprite-sheet pieces.
- Tightened captured sprite size and drop shadow so captures read more like small game assets.
- Made live board pieces slightly larger and chunkier without changing board logic.
- Softened the move-history empty state so it recedes into the parchment panel.
- Preserved the centered button row and centered quote banner from the previous reference-match layout pass.

## Layout / Composition Corrections

- Button row now has stronger individual button silhouettes and more reference-like rounded-square proportions.
- Bottom controls read more like part of the illustrated game interface rather than one generic web control row.
- Quote banner remains centered below the buttons and did not drift into a full-width footer.
- Board remains the visual anchor at the 1440x900 review viewport.
- No additional decor clusters were added, because the generated button and captured-piece changes were higher impact and the current background already exposes the main room storytelling.

## Skipped / Deferred

- A full 12-piece regeneration was not integrated. The current piece sheets are safe and gameplay-tested; this pass only made their live rendering chunkier. A dedicated piece pass is still recommended.
- Player portraits, coach bubble, mascot, move-history frame, analyze frame, and environment clusters were not regenerated in this pass because the biggest fidelity gain came from the P0 buttons and captured sprites.
- Coordinates were not structurally rebuilt. They remain dynamic HTML and are still a candidate for a dedicated board-frame/coordinate pass.

## Screenshots

- Baseline stable render: `docs/references/visual-checks/fidelity-current-start.png`
- Step 01 diagnosis/layout stabilization: `docs/references/visual-checks/fidelity-step-01.png`
- Step 02 core button/captured asset integration: `docs/references/visual-checks/fidelity-step-02.png`
- Step 03 coherence polish: `docs/references/visual-checks/fidelity-step-03.png`
- Step 04 final recapture: `docs/references/visual-checks/fidelity-step-04.png`
- Final screenshot: `docs/references/visual-checks/rainy-cafe-final-fidelity-pass.png`

## Verification

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run build` passed.
- Manual browser smoke passed through Chrome DevTools protocol:
  - e2 to e4
  - e7 to e5
  - invalid e4 to e5 attempt did not change history or turn
  - Undo removed e5 and restored black to move
  - Play/New Game reset restored empty history, white to move, and initial pawns on e2/e7

## Remaining Issues

- The UI is closer to the approved reference, especially in bottom controls, but not fully reference-identical.
- Chess pieces still need a stronger dedicated asset pass to match the chunky shaded reference style.
- Coordinates still need deeper integration into the board frame language.
- Player card internals still have CSS-heavy rating/timer/status pills.
- Move history empty/start state remains less rich than the reference's populated notation panel.
- Environment clusters are still mostly baked into the background rather than modularly repositionable.

## Recommended Next Step

Run one focused board-and-pieces fidelity pass: generate or refine a complete 12-piece set, then tune coordinate placement and board-frame scale together. Do not broaden into gameplay or new features.
