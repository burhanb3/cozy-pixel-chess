# Rainy Cafe Rebuild V2 Plan

Date: 2026-05-17
Branch: `goal/rainy-cafe-reference-rebuild-v2`

## Strategy

Start from `main`, not from the old experimental branch. Use the approved reference as the layout blueprint and selectively bring over only the old branch assets that are clearly useful. Rebuild the composition so the result is closer to the reference in board dominance, side rail proportions, bottom controls, typography, and piece style.

## Assets To Regenerate Or Derive

1. Reference-derived board/frame asset:
   - source: `docs/references/visual-checks/rebuild-v2-reference-crops/01-board-frame.png`
   - target: `src/assets/themes/rainy-cafe/boards/board-frame-reference-v2.png`
   - requirement: no baked chess pieces in the live board area

2. Reference-derived square textures:
   - source: empty squares in the reference board crop
   - targets:
     - `src/assets/themes/rainy-cafe/boards/square-light-reference-v2.png`
     - `src/assets/themes/rainy-cafe/boards/square-dark-reference-v2.png`

3. Reference-derived piece sheets:
   - source: individual pieces in the reference board crop
   - targets:
     - `src/assets/themes/rainy-cafe/pieces/white-piece-set-reference-v2.png`
     - `src/assets/themes/rainy-cafe/pieces/black-piece-set-reference-v2.png`
   - fallback: old branch sprite sheets only if direct extraction is too noisy

4. Typography system:
   - target: CSS treatment and `RainyCafe_REBUILD_V2_TYPOGRAPHY.md`
   - requirement: dynamic text remains live

## Assets That May Be Reused

From `goal/overnight-rainy-cafe-pass`, after review:

- `rainy-room-background.png`
- `avatar-tealeaf.png`
- `avatar-mossycat.png`
- `cat-mascot.png`
- `turn-plaque-frame.png`
- `player-panel-frame.png`
- `captured-pieces-tray.png`
- `vs-badge.png`
- `move-history-panel-frame.png`
- `analyze-position-button-frame.png`
- `coach-comment-panel.png`
- `quote-banner-frame.png`
- final fidelity button skins if no stronger generated set is produced in this pass

## Parts To Rebuild From Scratch

- `App.tsx` composition: turn plaque, correct player order, captured stack, right rail, bottom controls
- theme model slots for full Rainy Cafe asset set
- board sprite rendering and coordinate treatment
- captured mini piece rendering
- CSS layout based on reference target zones
- pixel-art typography treatment

## Safe Implementation Order

1. Commit blueprint, plan, recovered comparison screenshot, and reference crops.
2. Create reference-derived board/square/piece assets.
3. Copy only selected old branch assets into the new branch.
4. Expand theme slots and wire new asset paths.
5. Add or rebuild focused components:
   - `TurnPlaque`
   - `CapturedPieces`
   - `CoachBubble`
   - updated `PlayerCard`
   - updated `BottomActions`
   - updated `ChessBoard`
6. Rebuild CSS layout from the reference target zones.
7. Capture `rebuild-v2-step-01-blueprint.png`.
8. Run `npm run typecheck`, `npm run lint`, and `npm run build`.
9. Capture board/piece checkpoint: `rebuild-v2-step-02-board.png`.
10. Tune left/right panels and capture `rebuild-v2-step-03-left-right-panels.png`.
11. Tune buttons/quote and capture `rebuild-v2-step-04-buttons-and-quote.png`.
12. Run final typecheck/lint/build and manual browser smoke.
13. Capture `rebuild-v2-final.png`.
14. Write `RainyCafe_REBUILD_V2_LOG.md`.
15. Commit and push safe checkpoints.

## Stop Rules

Stop and document if:

- extracted pieces have unusable background noise
- generated assets are off-target twice
- board clickability breaks and cannot be fixed quickly
- the rebuild becomes more cluttered than the old branch
- the work starts requiring chess-rule changes
