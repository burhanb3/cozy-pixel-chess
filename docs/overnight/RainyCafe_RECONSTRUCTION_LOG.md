# Rainy Cafe Reconstruction Log

Date: 2026-05-16
Branch: `goal/overnight-rainy-cafe-pass`

## Summary

This pass moved the Rainy Cafe screen from CSS-heavy placeholder chrome toward a modular asset-first game scene while preserving the existing local chess gameplay. The approved reference remains `docs/references/rainy-cafe-reference.png`.

## Diagnosis Used

See `docs/overnight/RainyCafe_RECONSTRUCTION_DIAGNOSIS.md`.

Main weak areas identified:

- CSS-only turn plaque, captured trays, VS badge, analyze button, quote banner, coach bubble, and mascot.
- Initials-based player portraits instead of Rainy Cafe character portraits.
- Unicode chess glyphs on the live board.
- Extra CSS doodle decor that competed with the generated room background.

## Assets Generated And Integrated

New modular assets:

- `src/assets/themes/rainy-cafe/panels/turn-plaque-frame.png`
- `src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png`
- `src/assets/themes/rainy-cafe/panels/vs-badge.png`
- `src/assets/themes/rainy-cafe/panels/analyze-position-button-frame.png`
- `src/assets/themes/rainy-cafe/panels/coach-comment-panel.png`
- `src/assets/themes/rainy-cafe/panels/quote-banner-frame.png`
- `src/assets/themes/rainy-cafe/decor/cat-mascot.png`
- `src/assets/themes/rainy-cafe/avatars/avatar-tealeaf.png`
- `src/assets/themes/rainy-cafe/avatars/avatar-mossycat.png`
- `src/assets/themes/rainy-cafe/pieces/white-piece-set.png`
- `src/assets/themes/rainy-cafe/pieces/black-piece-set.png`

Piece source slices retained for future direct-piece rendering:

- `src/assets/themes/rainy-cafe/pieces/white-p.png`
- `src/assets/themes/rainy-cafe/pieces/white-n.png`
- `src/assets/themes/rainy-cafe/pieces/white-b.png`
- `src/assets/themes/rainy-cafe/pieces/white-r.png`
- `src/assets/themes/rainy-cafe/pieces/white-q.png`
- `src/assets/themes/rainy-cafe/pieces/white-k.png`
- `src/assets/themes/rainy-cafe/pieces/black-p.png`
- `src/assets/themes/rainy-cafe/pieces/black-n.png`
- `src/assets/themes/rainy-cafe/pieces/black-b.png`
- `src/assets/themes/rainy-cafe/pieces/black-r.png`
- `src/assets/themes/rainy-cafe/pieces/black-q.png`
- `src/assets/themes/rainy-cafe/pieces/black-k.png`

## Code Integration

- `src/themes/themeTypes.ts` now models the new panel, avatar, decor, and piece slots.
- `src/themes/rainyCafeTheme.ts` imports the new assets and records the reconstruction piece batch.
- `src/components/game-layout/GameLayout.tsx` exposes the new theme assets as CSS variables.
- `src/components/player-card/PlayerCard.tsx` uses portrait classes instead of initials as the visible avatar surface.
- `src/components/coach-bubble/CoachBubble.tsx` uses the cat mascot asset.
- `src/components/chess-board/ChessBoard.tsx` renders live sprite-sheet pieces instead of Unicode glyphs.
- `src/components/theme/ThemeBackdrop.tsx` now relies on the generated room background instead of hidden CSS decor placeholders.
- `src/styles/pixel.css` maps the new assets into the visible UI and removes unused CSS doodle decor.

## Gameplay Preservation Smoke

Manual browser smoke against `http://127.0.0.1:5173`:

- Initial board had 16 white and 16 black live piece sprites.
- Selecting `e2` produced 1 selected square and 2 legal targets.
- `e2-e4` updated the board, last-move state, turn, and move history row `1. e4`.
- `e7-e5` updated the board, last-move state, turn, and move history row `1. e4 e5`.
- Invalid `a1-a3` attempt kept the game on White to move and did not add a move.
- `Undo` removed black's `e5` move and returned to Black to move.
- `Play` reset the game to the starting position with no move history.

## Verification

Commands passed after the final code cleanup:

- `npm run typecheck`
- `npm run lint`
- `npm run build`

## Visual Checkpoints

- Core UI asset checkpoint: `docs/references/visual-checks/reconstruction-step-01.png`
- Board/piece quality checkpoint: `docs/references/visual-checks/reconstruction-step-02.png`
- Final composition checkpoint: `docs/references/visual-checks/reconstruction-step-03.png`
- Final review checkpoint: `docs/references/visual-checks/reconstruction-step-04.png`
- Final deliverable screenshot: `docs/references/visual-checks/rainy-cafe-reconstruction-final.png`

Screenshots were captured at 1440x900 with a load wait so generated background and UI assets were present.

## Skipped Or Deferred

- No multiplayer, shop, auth, puzzle mode, economy, or sound systems were added.
- Ratings and timers remain live HTML/CSS pills because they contain dynamic data and need future timer-slot art.
- The generated chess pieces are a meaningful upgrade over Unicode, but a dedicated piece polish pass should refine silhouettes and exact per-square scale.
- The existing room background is strong, so this pass did not replace it or bake the whole UI into one flat image.
- Audio, particle sprites, and future theme inventory remain planned slots.

## Known Remaining Issues

- Some small live labels are dense at 1440x900 and can be tightened in a later readability pass.
- The analyze, hint, focus, and settings controls are still intentionally non-functional phase placeholders.
- Timer behavior is still static sample UI, not real clock logic.

## Recommended Next Step

Run a narrow Rainy Cafe readability polish pass: tune player-card text spacing, button disabled contrast, move-history row styling, and sprite-piece scale without changing gameplay scope.
