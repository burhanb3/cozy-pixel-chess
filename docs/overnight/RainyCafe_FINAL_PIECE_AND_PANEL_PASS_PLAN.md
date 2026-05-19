# Rainy Cafe Final Piece And Panel Pass Plan

Date: 2026-05-17
Branch: `goal/rainy-cafe-reference-rebuild-v2`

## Why The Current Piece Set Is Still Unacceptable

The current piece set is reference-derived, but it still reads like a cleaned extraction rather than a finished production sprite set. Several silhouettes have erased-looking edges, uneven contour weight, and leftover noise from the board crop. The set is closer than Unicode/vector pieces, but not clean enough for the approved Rainy Cafe reference quality.

## Broken Or Dirty Current Sprites

Highest concern:

- `white-b-reference-v2.png`: still looks incomplete and too thin.
- `white-q-reference-v2.png`: crown and lower body feel dirty and weak.
- `white-n-reference-v2.png`: silhouette has uneven edge pixels.
- `black-q-reference-v2.png`: crown is muddy and noisy.
- `black-n-reference-v2.png`: head outline is readable but not clean.
- `black-b-reference-v2.png`: center mark and lower body are still muddy.

Secondary concern:

- rooks and pawns are usable, but they should be replaced too so the final set has one consistent art language.

## Fresh 12-Piece Set Generation Strategy

This pass will not keep lightly cleaning the old sprites. It will generate a fresh deterministic transparent PNG set with hand-authored pixel-art silhouettes using Pillow:

- individual assets:
  - `src/assets/themes/rainy-cafe/pieces/final/white-p.png`
  - `src/assets/themes/rainy-cafe/pieces/final/white-n.png`
  - `src/assets/themes/rainy-cafe/pieces/final/white-b.png`
  - `src/assets/themes/rainy-cafe/pieces/final/white-r.png`
  - `src/assets/themes/rainy-cafe/pieces/final/white-q.png`
  - `src/assets/themes/rainy-cafe/pieces/final/white-k.png`
  - `src/assets/themes/rainy-cafe/pieces/final/black-p.png`
  - `src/assets/themes/rainy-cafe/pieces/final/black-n.png`
  - `src/assets/themes/rainy-cafe/pieces/final/black-b.png`
  - `src/assets/themes/rainy-cafe/pieces/final/black-r.png`
  - `src/assets/themes/rainy-cafe/pieces/final/black-q.png`
  - `src/assets/themes/rainy-cafe/pieces/final/black-k.png`
- sheet assets:
  - `src/assets/themes/rainy-cafe/pieces/final/white-piece-set.png`
  - `src/assets/themes/rainy-cafe/pieces/final/black-piece-set.png`

The visual target is not an exact copy of the reference, but a close family match:

- chunky silhouettes
- warm cream white pieces
- dark but readable black pieces
- clean intentional pixel edges
- consistent outline thickness
- same baseline and scale logic
- simple shading and highlights

## Baseline / Scale / Readability Verification

The set will be verified through:

1. a candidate contact sheet on a warm background
2. a board screenshot at 1440x900
3. visual check on light and dark squares
4. manual gameplay smoke after integration
5. a capture test to confirm mini captured sprites render cleanly

## Right-Panel Issues To Fix

- Move History still feels too empty when there are no moves.
- The empty state should be smaller and more embedded.
- The title needs better vertical rhythm inside the frame.
- The panel-to-analyze spacing should feel deliberate.

## Typography / Captured / Coordinate Issues To Polish

- coordinates should use one consistent dynamic system instead of mixed baked/dynamic marks
- coordinates should be softer and more embedded in the wood frame
- captured tray empty state should feel like a designed tray, not placeholder slots
- captured mini pieces should use the final piece sheet
- UI labels should remain dynamic but feel more pixel-art/game-like

## Safe Execution Order

1. Generate fresh final individual piece PNGs and sprite sheets.
2. Produce `final-piece-pass-step-01-new-piece-candidate.png` for inspection.
3. Integrate the final sprite sheets in the Rainy Cafe theme.
4. Tune piece CSS scale, baseline, and captured mini sizes.
5. Capture `final-piece-pass-step-02-piece-integrated.png`.
6. Polish coordinates, Move History, captured trays, and typography.
7. Capture `final-piece-pass-step-03-panels-typography.png`.
8. Capture final review screenshots.
9. Run `npm run typecheck`, `npm run lint`, `npm run build`.
10. Run manual smoke including a capture.
11. Write `RainyCafe_FINAL_PIECE_AND_PANEL_PASS_LOG.md`.
12. Commit and push.

## Stop Conditions

Stop and document if:

- the fresh pieces are less readable than the current set
- the new pieces look too vector-like or too generic
- the board becomes cluttered
- gameplay clickability breaks
- two generated candidates fail the visual quality gate
