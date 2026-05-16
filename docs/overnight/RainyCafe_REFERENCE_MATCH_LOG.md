# Rainy Cafe Reference Match Log

Date: 2026-05-16
Branch: `goal/overnight-rainy-cafe-pass`

Gold standard: `docs/references/rainy-cafe-reference.png`

## Diagnosis Summary

See `docs/overnight/RainyCafe_REFERENCE_MATCH_DIAGNOSIS.md`.

The strict diagnosis found that the branch had many production assets, but the rendered UI still diverged from the reference in composition, identity, scale, bottom-control structure, move-history formatting, and placeholder text. The biggest problems were the wrong player order/names, a smaller central board, a wide bottom status container, `WHITE` / `BLACK` move-history headers, `Quiet table` captured placeholders, and CSS/web-feeling focus and spacing details.

## Mismatches Fixed

- Corrected player identity and order: TeaLeaf raccoon is now the top player; MossyCat black cat is now the bottom player.
- Removed `LOCAL PLAY / A quiet table for two sides` from the bottom UI.
- Removed `Quiet table` captured placeholders.
- Removed `WHITE` / `BLACK` move-history headers.
- Enlarged the VS badge.
- Made the board larger and more dominant in the 1440x900 composition.
- Tightened the left, center, and right layout into a more compact reference-like scene.
- Split the bottom controls into a centered button row and a separate centered quote banner.
- Kept the quote text dynamic inside the quote banner asset.
- Adjusted player-card spacing so portraits and live text sit more cleanly inside the frame asset.
- Increased piece visual scale with the existing sprite sheets.
- Added game-style focus handling for action buttons so mouse-click screenshots do not show default browser outlines.

## Assets Generated

No new assets were generated in this strict pass. Real generation is available, but the current branch already contained the key generated assets needed for a safe composition pass. The best improvement path was to correct placement, scale, dynamic text, and existing asset usage before risking new off-target generations.

## Assets Regenerated

None.

## Assets Integrated Or Reused

The pass reused and better integrated existing generated assets:

- `src/assets/themes/rainy-cafe/backgrounds/rainy-room-background.png`
- `src/assets/themes/rainy-cafe/boards/board-frame.png`
- `src/assets/themes/rainy-cafe/boards/square-light.png`
- `src/assets/themes/rainy-cafe/boards/square-dark.png`
- `src/assets/themes/rainy-cafe/panels/turn-plaque-frame.png`
- `src/assets/themes/rainy-cafe/panels/player-panel-frame.png`
- `src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png`
- `src/assets/themes/rainy-cafe/panels/vs-badge.png`
- `src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png`
- `src/assets/themes/rainy-cafe/panels/analyze-position-button-frame.png`
- `src/assets/themes/rainy-cafe/panels/coach-comment-panel.png`
- `src/assets/themes/rainy-cafe/panels/quote-banner-frame.png`
- `src/assets/themes/rainy-cafe/buttons/button-base-normal.png`
- `src/assets/themes/rainy-cafe/buttons/button-base-hover.png`
- `src/assets/themes/rainy-cafe/buttons/button-base-pressed.png`
- `src/assets/themes/rainy-cafe/avatars/avatar-tealeaf.png`
- `src/assets/themes/rainy-cafe/avatars/avatar-mossycat.png`
- `src/assets/themes/rainy-cafe/decor/cat-mascot.png`
- `src/assets/themes/rainy-cafe/pieces/white-piece-set.png`
- `src/assets/themes/rainy-cafe/pieces/black-piece-set.png`

## Layout Corrections

- The canvas now matches the 1440x900 target more directly.
- The main grid uses tighter side rails and less gap between the rails and the board.
- The board frame grew from the previous visual scale and now anchors the center.
- The bottom UI no longer behaves like a full-width status/footer component.
- The centered quote banner is placed below the action buttons.
- Left-bottom cup/cookies and right-bottom books/sleeping cat are more visible because the giant bottom bar no longer covers them.

## Still Weak

- Per-button color skins are still one shared generated button base plus CSS color treatment. Dedicated Play/Undo/Hint/Focus/Settings skins would match the reference better.
- Captured pieces still use live letter tiles after captures. A future pass should render captured piece sprites.
- Timer/rating/status pills are still CSS-heavy because those values remain dynamic.
- The current chess piece sprites are a large improvement over glyphs, but a final dedicated piece-art pass could make them chunkier and closer to the reference.
- Separate decor cluster assets for left-bottom, right-top, and right-bottom are still planned rather than generated in this pass.

## Skipped And Why

- No new image generation was forced. The main blocking issues were layout and integration mismatches, and forced generation risked introducing weaker art.
- No multiplayer, shop/customization, puzzle, auth, payment, or audio systems were touched.
- Chess rules and move helpers were not rewritten.
- Analyze, Hint, Focus, and Settings remain future visual controls only.

## Screenshots

- Start/current branch: `docs/references/visual-checks/reference-match-current-start-1440.png`
- Layout correction: `docs/references/visual-checks/reference-match-step-01.png`
- Core UI integration: `docs/references/visual-checks/reference-match-step-02.png`
- Board/pieces pass: `docs/references/visual-checks/reference-match-step-03.png`
- Final review: `docs/references/visual-checks/reference-match-step-04.png`
- Final deliverable: `docs/references/visual-checks/rainy-cafe-reference-match-final.png`

## Verification

Commands passed:

- `npm run typecheck`
- `npm run lint`
- `npm run build`

Manual browser smoke passed:

- Selected `e2`, showing 1 selected square and 2 legal targets.
- Played `e2` to `e4`; move history became `1. e4`, last-move state appeared, turn changed to Black.
- Played `e7` to `e5`; move history became `1. e4 e5`, turn changed to White.
- Tried invalid `a1` to `a3`; turn stayed White and move history did not change.
- Used Undo; `e5` was removed and turn returned to Black.
- Used Play; board reset to starting position with no move history.
- Verified top-to-bottom player names are `TeaLeaf` and `MossyCat`.
- Verified `LOCAL PLAY`, `Quiet table`, and the `WHITE` / `BLACK` header container are absent from the rendered UI.

## Remaining Issues

- The result is closer to the approved reference, but not a perfect match.
- The strongest remaining reference gaps are dedicated button skins, final piece sprites, captured sprite display, and modular decor clusters.
- The full-screen background is useful, but separate decor assets would give better control over exact reference composition.

## Recommended Next Step

Run a narrow asset-generation pass for dedicated bottom button skins and captured-piece sprite rendering. Do that before another broad layout pass, because the composition is now stable enough to benefit from smaller asset upgrades.
