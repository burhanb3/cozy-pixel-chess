# Rainy Cafe Rebuild V2 Log

## Summary

This pass rebuilt the Rainy Cafe screen from `main` on `goal/rainy-cafe-reference-rebuild-v2` instead of continuing the old experimental branch in-place. The approved reference image remained the blueprint; the old `goal/overnight-rainy-cafe-pass` result was used only as supporting material for comparison and selective asset reuse.

The rebuild is focused on visual fidelity only:

- tighter 1440x900 composition
- direct reference-derived board frame and square treatment
- reference-derived chess piece sprites
- stronger asset-backed left and right rails
- larger rounded-square bottom controls
- centered quote banner
- more pixel-game-like typography and text placement

## Reference Regions Analyzed

The reference was cropped and inspected by region under:

`docs/references/visual-checks/rebuild-v2-reference-crops/`

Analyzed regions:

- `01-board-frame.png`
- `02-board-squares-and-pieces.png`
- `03-turn-plaque.png`
- `04-top-player-card.png`
- `05-bottom-player-card.png`
- `06-captured-trays-vs.png`
- `07-move-history.png`
- `08-analyze-button.png`
- `09-mascot-coach.png`
- `10-bottom-buttons.png`
- `11-quote-banner.png`
- `12-left-bottom-decor.png`
- `13-right-top-window-lamp.png`
- `14-right-bottom-books-cat.png`
- `reference-region-contact-sheet.png`

## What Was Rebuilt From Scratch

- Main Rainy Cafe screen composition in CSS:
  - fixed 1440x900 review target feel
  - compact left rail, dominant center board, compact right rail, centered bottom controls
- `ChessBoard` piece rendering:
  - removed Unicode glyph piece rendering
  - added sprite-backed piece slots
- Turn plaque component:
  - dynamic turn text inside an asset frame
- Captured pieces component:
  - asset-backed compact trays
  - mini captured sprites instead of placeholder text
- Coach bubble component:
  - dynamic text inside asset frame
  - separate mascot art
- Move history treatment:
  - removed `WHITE` / `BLACK` table headers
  - compact notation rows inside parchment-like panel
- Bottom control treatment:
  - five rounded-square asset-backed controls
  - centered quote banner below the buttons

## What Was Reused From Old Branch

Only selected assets from `goal/overnight-rainy-cafe-pass` were reused where they helped the reference direction:

- `rainy-room-background.png`
- `avatar-tealeaf.png`
- `avatar-mossycat.png`
- `cat-mascot.png`
- panel frames:
  - `turn-plaque-frame.png`
  - `captured-pieces-tray.png`
  - `vs-badge.png`
  - `analyze-position-button-frame.png`
  - `coach-comment-panel.png`
  - `quote-banner-frame.png`
  - `bottom-action-bar-frame.png`
- button skins:
  - `play-button.png`
  - `undo-button.png`
  - `hint-button.png`
  - `focus-button.png`
  - `settings-button.png`

Weak layout decisions from the old branch were not copied wholesale.

## Regenerated / Newly Derived Assets

The most important new visual assets are reference-derived rather than CSS-only:

- `src/assets/themes/rainy-cafe/boards/board-frame-reference-v2.png`
- `src/assets/themes/rainy-cafe/boards/square-light-reference-v2.png`
- `src/assets/themes/rainy-cafe/boards/square-dark-reference-v2.png`
- `src/assets/themes/rainy-cafe/pieces/white-piece-set-reference-v2.png`
- `src/assets/themes/rainy-cafe/pieces/black-piece-set-reference-v2.png`
- individual reference-derived piece sprites:
  - `white-p-reference-v2.png`
  - `white-n-reference-v2.png`
  - `white-b-reference-v2.png`
  - `white-r-reference-v2.png`
  - `white-q-reference-v2.png`
  - `white-k-reference-v2.png`
  - `black-p-reference-v2.png`
  - `black-n-reference-v2.png`
  - `black-b-reference-v2.png`
  - `black-r-reference-v2.png`
  - `black-q-reference-v2.png`
  - `black-k-reference-v2.png`

Reference-derived piece contact sheet:

- `docs/references/visual-checks/rebuild-v2-reference-crops/reference-derived-piece-sheet.png`

## Board / Frame Decision

The board frame now uses a reference-derived frame crop with the live board area cut out. The live board remains interactive and dynamic; chess pieces are not baked into the board/frame asset.

Coordinates are no longer separate floating HTML labels. The frame asset carries the reference-like coordinate treatment visually, while the actual clickable board remains a clean live grid.

## Pieces Decision

The new 12-piece set was extracted from the reference board crop and cleaned into sprite assets. This is a major visual improvement over the previous glyph/vector-like treatment because the pieces now share the reference palette, outline logic, and chunky pixel-art silhouette.

Remaining issue: the white bishop sprite lost some interior detail during cleanup. A future dedicated piece pass could refine that one sprite and produce an even cleaner final sheet.

## Typography Decision

Dynamic text remains dynamic. The rebuild uses stronger pixel-game styling through:

- heavier weights
- tighter uppercase labels
- warm ink colors
- small shadow/outline effects
- lower letter spacing
- compact notation rows
- text placed inside asset frames instead of generic cards

See:

- `docs/overnight/RainyCafe_REBUILD_V2_TYPOGRAPHY.md`

## Fixed Visual Mismatches

- Board is larger and more dominant.
- Left and right rails are closer to the board, reducing dead space.
- Bottom controls are centered and no longer read like a full-width web footer.
- Button shapes are larger and closer to the reference rounded-square language.
- Quote banner is centered under the buttons.
- Move history is no longer a generic table.
- Captured panels no longer rely on weak placeholder text.
- TeaLeaf remains top player; MossyCat remains bottom player.
- The scene now uses the Rainy Cafe background and decor more deliberately.

## Screenshots

- `docs/references/visual-checks/rebuild-v2-step-01-blueprint.png`
- `docs/references/visual-checks/rebuild-v2-step-02-board.png`
- `docs/references/visual-checks/rebuild-v2-step-03-left-right-panels.png`
- `docs/references/visual-checks/rebuild-v2-step-04-buttons-and-quote.png`
- `docs/references/visual-checks/rebuild-v2-final.png`

## Verification

Passed:

- `npm run typecheck`
- `npm run lint`
- `npm run build`

Manual smoke passed:

- `e2` to `e4`
- `e7` to `e5`
- invalid move attempt did not change turn or move history
- `Undo`
- `Play` reset
- board remained clickable
- move history updated
- selected square, legal destination, last move, and turn text behaved correctly

## Remaining Imperfections

- The board frame is reference-derived and much closer, but still uses a live square grid inside it; a future pass could hand-clean every edge pixel for perfect harmony.
- The white bishop sprite needs a small dedicated cleanup.
- Player/card/coach assets are reused from the old branch and are good enough for this pass, but they are still less directly reference-derived than the board and pieces.
- The right-bottom decor comes from the background rather than a fully separated cluster layer.
- There is no animated rain/depth split yet beyond the current scene treatment.

## Recommended Next Step

Do a small dedicated asset QA pass, not a broad rebuild:

1. hand-clean the white bishop sprite
2. optionally regenerate TeaLeaf/MossyCat portraits directly from the reference portrait crops
3. optionally split right-bottom books/cat and left-bottom mug/cookies into foreground cluster layers
4. take one more final screenshot comparison against the approved reference
