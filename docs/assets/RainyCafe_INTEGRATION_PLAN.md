# Rainy Cafe Integration Plan

## Principle

Replace CSS placeholders one asset group at a time. Keep the chess board playable after every step. Dynamic text stays in React. `chess.js` remains the source of truth for chess rules.

The canonical Rainy Cafe visual anchor is `docs/references/rainy-cafe-reference.png`. Every production asset should be compared against that image. `docs/references/visual-checks/rainy-cafe-current.png` is only a temporary implementation screenshot.

## Recommended Integration Order

1. Import first batch UI frames: board frame, player panel frame, move history panel frame, button states, avatar frame.
2. Import board square textures.
3. Import bottom action bar frame.
4. Import rain particle and lighting overlay.
5. Import room base background.
6. Import decor pieces.
7. Import chess piece sprites.
8. Add ambient sounds later through a dedicated audio pass.

## Phase 3B First Asset Batch

Batch 1 is intentionally small:

- `boards/board-frame.png`
- `panels/player-panel-frame.png`
- `panels/move-history-panel-frame.png`
- `buttons/button-base-normal.png`
- `buttons/button-base-hover.png`
- `buttons/button-base-pressed.png`
- `avatars/avatar-frame.png`

`boards/square-light.png` and `boards/square-dark.png` are Batch 2 because they need focused contrast QA against pieces, selected squares, legal move dots, last move highlights, captures, and check indication.

## Batch 1 Integration Order

1. `boards/board-frame.png`
2. `panels/player-panel-frame.png`
3. `panels/move-history-panel-frame.png`
4. `avatars/avatar-frame.png`
5. `buttons/button-base-normal.png`
6. `buttons/button-base-hover.png`
7. `buttons/button-base-pressed.png`

## Verification For Each Replacement

- Run `npm run typecheck`.
- Run `npm run lint`.
- Run `npm run build`.
- Open the app and verify the board still renders.
- Test `e2` to `e4`.
- Test one black response.
- Test `Undo`.
- Test `New Game`.
- Check that live text remains readable.
- Check that the asset does not cover click targets.

## First Assets To Import

Start with:

- `boards/board-frame.png`
- `panels/player-panel-frame.png`
- `panels/move-history-panel-frame.png`
- `buttons/button-base-normal.png`
- `buttons/button-base-hover.png`
- `buttons/button-base-pressed.png`
- `avatars/avatar-frame.png`

These assets improve the most visible placeholder areas without changing game logic.

## What Not To Touch During Integration

- Do not rewrite `src/game`.
- Do not change move validation.
- Do not implement online multiplayer.
- Do not implement shop/customization logic.
- Do not implement puzzle mode.
- Do not bake dynamic text into images.
- Do not replace the live board with a flat screenshot.

## Keeping The Chess Board Playable

The board frame should be decorative only. The 8x8 grid remains real buttons rendered by React. Piece sprites can replace glyph rendering later, but click targets must stay as square buttons.

## Keeping Future Themes Compatible

Theme assets should use the shared category model in `src/themes/themeTypes.ts`. New themes should provide the same categories even if some assets are placeholder metadata at first.

## Rollback Rule

If an asset breaks layout, clickability, readability, or build output, revert only that asset integration and keep the manifest/docs intact.
