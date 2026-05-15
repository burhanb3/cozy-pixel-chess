# Rainy Cafe First Asset Batch Checklist

## Asset Generation Checklist

- [ ] Generate `board-frame.png`.
- [ ] Generate `player-panel-frame.png`.
- [ ] Generate `move-history-panel-frame.png`.
- [ ] Generate `button-base-normal.png`.
- [ ] Generate `button-base-hover.png`.
- [ ] Generate `button-base-pressed.png`.
- [ ] Generate `avatar-frame.png`.
- [ ] Confirm all transparent assets actually have alpha.
- [ ] Confirm no asset contains baked text, labels, chess coordinates, numbers, player names, or move notation.
- [ ] Confirm style matches the Rainy Cafe master prompt.

## File Placement Checklist

- [ ] Place `board-frame.png` in `src/assets/themes/rainy-cafe/boards/`.
- [ ] Place `player-panel-frame.png` in `src/assets/themes/rainy-cafe/panels/`.
- [ ] Place `move-history-panel-frame.png` in `src/assets/themes/rainy-cafe/panels/`.
- [ ] Place `button-base-normal.png` in `src/assets/themes/rainy-cafe/buttons/`.
- [ ] Place `button-base-hover.png` in `src/assets/themes/rainy-cafe/buttons/`.
- [ ] Place `button-base-pressed.png` in `src/assets/themes/rainy-cafe/buttons/`.
- [ ] Place `avatar-frame.png` in `src/assets/themes/rainy-cafe/avatars/`.
- [ ] Do not overwrite `docs/references/rainy-cafe-reference.png`.

## Integration Checklist

- [ ] Integrate one asset at a time.
- [ ] Keep React-rendered text live.
- [ ] Do not import an asset before the file exists.
- [ ] Keep CSS fallback until each asset is verified.
- [ ] Do not edit `src/game`.
- [ ] Do not replace the live board with a flat image.
- [ ] Do not implement multiplayer, shop, or puzzle mode.

## Visual QA Checklist

- [ ] Compare against `docs/references/rainy-cafe-reference.png`.
- [ ] Compare against `docs/references/visual-checks/rainy-cafe-current.png`.
- [ ] Check 1440x900 desktop layout.
- [ ] Board frame aligns with the live 8x8 grid.
- [ ] Player cards read as parchment/wood game panels.
- [ ] Move history text remains readable.
- [ ] Buttons look like game buttons, not web dashboard buttons.
- [ ] Avatar frame fits current avatar placeholder.

## Gameplay Smoke Test Checklist

- [ ] Board renders.
- [ ] `e2` to `e4` works.
- [ ] One black response works.
- [ ] Invalid move does not change turn.
- [ ] `Undo` works.
- [ ] `New Game` works.
- [ ] Move history updates and resets.

