# Rainy Cafe Integration Plan

## Principle

Replace CSS placeholders one asset group at a time. Keep the chess board playable after every step. Dynamic text stays in React. `chess.js` remains the source of truth for chess rules.

## Recommended Integration Order

1. Import board square textures.
2. Import board frame.
3. Import player panel and avatar frame.
4. Import move history panel.
5. Import bottom action bar and button states.
6. Import rain particle and lighting overlay.
7. Import room base background.
8. Import decor pieces.
9. Import chess piece sprites.
10. Add ambient sounds later through a dedicated audio pass.

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

- `boards/square-light.png`
- `boards/square-dark.png`
- `boards/board-frame.png`
- `panels/player-panel-frame.png`
- `panels/move-history-panel-frame.png`

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

