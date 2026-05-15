# Rainy Cafe Production Order

Canonical style anchor: `docs/references/rainy-cafe-reference.png`.

Temporary implementation snapshot: `docs/references/visual-checks/rainy-cafe-current.png`.

## Recommended Order

1. `board-frame.png`
2. `player-panel-frame.png`
3. `move-history-panel-frame.png`
4. Button base set: `button-base-normal.png`, `button-base-hover.png`, `button-base-pressed.png`
5. `avatar-frame.png`
6. Board square textures: `square-light.png`, `square-dark.png`
7. `bottom-action-bar-frame.png`
8. `rainy-room-background.png`
9. Decor pack: cup, lamp, books, plant, rainy window, cat bed, leaf decals
10. Chess piece sets: `white-piece-set.png`, `black-piece-set.png`
11. Particles and lighting: `rain-streak-particle.png`, `lighting-vignette-overlay.png`
12. Later support/cosmetic/audio assets

## Why This Order

The first five items give maximum visual improvement with low integration risk. They replace the most CSS-looking frames while preserving all live HTML and board interactions.

Board square textures are important, but they come after frame assets because they affect readability for every piece and every board state: selected square, legal move, capture, check, last move, and invalid move.

The full room background should come after UI frames and square textures. It has the biggest composition risk because it can reduce contrast or fight the live UI layout.

Decor comes after background because decor placement depends on the final room base. Pieces come later because piece sprites require mapping from chess piece types to image positions and testing on all square states.

Particles and lighting come after core UI because they must be tuned not to obscure text, pieces, or legal move indicators.

## What Can Be Delayed

- Cosmetic variants.
- Alternate cups and lamps.
- Tablecloth variants.
- Hover sparkles.
- Ambient sounds.
- Avatar accessories.
- Animated rain sprite sheets.

## Verification Gate For Every Production Step

- Run `npm run typecheck`.
- Run `npm run lint`.
- Run `npm run build`.
- Open the game.
- Confirm the board renders.
- Test `e2` to `e4`.
- Test one black response.
- Test `Undo`.
- Test `New Game`.
- Compare against `docs/references/rainy-cafe-reference.png`.
- Confirm no dynamic text is baked into images.

