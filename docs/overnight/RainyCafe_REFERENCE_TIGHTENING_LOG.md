# Rainy Cafe Reference Tightening Log

## Summary

This pass continued on `goal/rainy-cafe-reference-rebuild-v2` and targeted the biggest remaining visual gaps called out after the final piece pass: loose left-rail structure, web-like extra player text, dirty/generic chess piece feel, oversized piece rendering, placeholder captured trays, and overall compactness.

## Changes Made

- Reordered the left rail to match the reference more closely:
  - turn plaque
  - TeaLeaf player card
  - top captured tray
  - VS badge
  - MossyCat player card
  - bottom captured tray
- Removed the small player status lines (`Your move`, `Waiting warmly`, etc.) because they made the cards feel like web UI instead of compact game cards.
- Split captured tray rendering into reusable pieces so the left rail can follow the reference order without duplicating logic.
- Generated a fresh deterministic 12-piece sprite set in `src/assets/themes/rainy-cafe/pieces/final/`.
- Reduced board piece render size from overfilled squares to a more controlled in-square placement.
- Tightened global HUD spacing, rail widths, right-panel offset, turn plaque size, player card size, captured tray size, Move History size, Analyze button size, and coach area rhythm.
- Improved empty captured tray ghost silhouettes so the trays feel less like blank placeholder boxes.

## Visual Gate Notes

- A dynamic coordinate overlay experiment was rejected because it duplicated the board-frame coordinates and made the result worse.
- The accepted final screenshot is `docs/references/visual-checks/rebuild-v2-reference-tightening-final.png`.
- `docs/references/visual-checks/reference-tightening-step-02-loaded.png` and `reference-tightening-step-03-layout.png` show the loaded intermediate state.

## Remaining Imperfections

- The deterministic fresh piece set is cleaner than the previous broken-looking sprites, but it still is not as rich as the approved reference pieces.
- The board/frame coordinates are asset-baked; deeper coordinate polish should happen by regenerating the board-frame asset rather than overlaying duplicate HTML text.
- Move History looks better as a frame, but the empty-state screen naturally cannot look as full as the populated reference mockup.
- The left-bottom decor is still driven mostly by the background asset, not dedicated foreground cluster assets.

## Recommended Next Step

Regenerate the board-frame asset and the piece set together from a single art direction pass, so the pieces, coordinates, and board frame share the same pixel density and shading language.
