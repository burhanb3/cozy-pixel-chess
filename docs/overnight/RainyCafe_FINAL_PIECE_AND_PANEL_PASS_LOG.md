# Rainy Cafe Final Piece And Panel Pass Log

Date: 2026-05-19
Branch: `goal/rainy-cafe-reference-rebuild-v2`

## Summary

This pass continued on the existing rebuild v2 branch. It did not create a new branch, restart from `main`, merge, or change chess rules. The main goal was to replace the still-weak extracted piece set with a fresh final 12-piece sprite set, then polish the right panel, captured trays, coordinates, and typography without a broad rebuild.

## Why The Old Piece Set Was Rejected

The previous `*-reference-v2.png` pieces were closer than glyph/vector pieces, but they still looked like cleaned extractions:

- dirty or uneven edges
- thin/erased-looking white silhouettes
- muddy black crown and knight details
- inconsistent interior marks
- weak production quality at board size

The weakest old pieces were:

- `white-b-reference-v2.png`
- `white-q-reference-v2.png`
- `white-n-reference-v2.png`
- `black-q-reference-v2.png`
- `black-n-reference-v2.png`
- `black-b-reference-v2.png`

## New Piece Generation

A fresh deterministic pixel-art set was generated with Pillow rather than lightly cleaning the old sprites again. The new set uses hand-authored chunky silhouettes, a shared 96x96 canvas, consistent baseline, warm cream white pieces, and dark highlighted black pieces.

Generated individual assets:

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

Generated sheet assets:

- `src/assets/themes/rainy-cafe/pieces/final/white-piece-set.png`
- `src/assets/themes/rainy-cafe/pieces/final/black-piece-set.png`

## Candidates Accepted / Rejected

Rejected:

- `docs/references/visual-checks/final-piece-pass-rejected-candidate-a.png`

Reason: it was clean but too generic and too icon-like, and black pieces were not readable enough on dark green squares.

Accepted:

- `docs/references/visual-checks/final-piece-pass-step-01-new-piece-candidate.png`

Reason: candidate B had stronger silhouettes, better dark-piece highlights, cleaner edges, and more consistent in-game readability.

## Integration

The Rainy Cafe theme now imports:

- `white-piece-set.png`
- `black-piece-set.png`

from `src/assets/themes/rainy-cafe/pieces/final/`.

The existing piece order remains `p,n,b,r,q,k`, so board rendering and captured-piece rendering continue to use the same CSS mapping.

## Baseline / Scale / Readability QA

Verified through:

- generated candidate sheet with light/dark square checks
- integrated 1440x900 board screenshot
- manual smoke test after integration
- capture test verifying mini captured sprites

The new pieces share the same 96x96 canvas, bottom baseline, sprite order, and board CSS mapping.

## Coordinate Changes

The mixed dynamic/baked coordinate approach was removed. The board frame was restored to the fully embedded reference-derived coordinate treatment from the rebuild baseline. This is more visually consistent than mixing live top/bottom coordinates with baked side ranks.

## Move History Changes

- right rail now starts lower to preserve the reference-like right-top window/lamp area
- Move History panel is shorter and better aligned with the Analyze/coach stack
- empty state no longer says `No moves yet`
- empty state is now a small decorative leaf/dot ornament, keeping dynamic move rows ready for real moves
- `WHITE` / `BLACK` headers remain removed

## Captured Tray Changes

- empty captured trays no longer show a plain placeholder line
- empty state now uses three subtle piece-slot silhouettes
- captured mini sprites use the final piece sheet through the existing sprite classes
- capture smoke confirmed `e4xd5` renders a captured black pawn sprite

## Typography / Panel Changes

- Move History empty state is less web-app-like
- captured tray empty state is more asset-like
- right panel spacing feels more deliberate
- Analyze button remains one-icon only, using the button asset magnifier
- button and quote layout were preserved because they were already stable

## Screenshots

- `docs/references/visual-checks/final-piece-pass-rejected-candidate-a.png`
- `docs/references/visual-checks/final-piece-pass-step-01-new-piece-candidate.png`
- `docs/references/visual-checks/final-piece-pass-step-02-piece-integrated.png`
- `docs/references/visual-checks/final-piece-pass-step-03-panels-typography.png`
- `docs/references/visual-checks/final-piece-pass-step-04-final-review.png`
- `docs/references/visual-checks/rebuild-v2-final-piece-pass.png`

## Verification

Passed:

- `npm run typecheck`
- `npm run lint`
- `npm run build`

Manual browser smoke passed:

- final piece classes render for all piece types
- `e2` to `e4`
- `e7` to `e5`
- invalid move did not change turn or move history
- `Undo`
- `Play` reset
- `e4xd5` capture
- captured black pawn mini sprite rendered in the captured tray

## Remaining Issues

- The new pieces are intentionally clean and consistent, but they are more hand-authored than reference-extracted; they trade exact reference likeness for production cleanliness.
- The board frame coordinates are embedded in the frame asset, not dynamic live text.
- Portraits and mascot are still reused from previous generated assets.
- Further improvement should be visual review driven, not another broad rebuild.

## Recommended Next Step

Review first:

- `docs/references/visual-checks/rebuild-v2-final-piece-pass.png`
- `docs/overnight/RainyCafe_FINAL_PIECE_AND_PANEL_PASS_LOG.md`

If one more pass is needed, make it a narrow art direction pass comparing the final fresh pieces against the approved reference pieces and adjusting only silhouettes/palette.
