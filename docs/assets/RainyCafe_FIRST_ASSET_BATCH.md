# Rainy Cafe First Asset Batch

Phase 3B goal: create the first small production asset batch that gives the biggest visual jump away from CSS placeholders without touching chess logic.

Production target: 1440x900 desktop game canvas.

## Selected Batch 1 Assets

| Asset | File name | Target path | Size | Transparent | Behavior | Difficulty | Visual impact | Dependency notes |
|---|---|---|---:|---|---|---|---|---|
| Board frame | `board-frame.png` | `src/assets/themes/rainy-cafe/boards/board-frame.png` | 680x680 | Yes | Fixed frame with transparent center | Medium | Very high | Must align to live 8x8 board; no baked coordinates. |
| Player panel frame | `player-panel-frame.png` | `src/assets/themes/rainy-cafe/panels/player-panel-frame.png` | 330x132 | Yes | Fixed frame | Low | High | Must leave empty avatar/text spaces. |
| Move history panel frame | `move-history-panel-frame.png` | `src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png` | 330x420 | Yes | Fixed frame | Low | High | Blank parchment body; React renders moves. |
| Button base normal | `button-base-normal.png` | `src/assets/themes/rainy-cafe/buttons/button-base-normal.png` | 148x72 | Yes | Fixed or 9-slice later | Low | High | Must support live button text. |
| Button base hover | `button-base-hover.png` | `src/assets/themes/rainy-cafe/buttons/button-base-hover.png` | 148x72 | Yes | Fixed or 9-slice later | Low | Medium | Same geometry as normal. |
| Button base pressed | `button-base-pressed.png` | `src/assets/themes/rainy-cafe/buttons/button-base-pressed.png` | 148x72 | Yes | Fixed or 9-slice later | Low | Medium | Same geometry as normal; compressed shadow. |
| Avatar frame | `avatar-frame.png` | `src/assets/themes/rainy-cafe/avatars/avatar-frame.png` | 92x92 | Yes | Fixed frame | Low | Medium | Empty portrait opening; no character baked in. |

## Why These Were Selected

These assets replace the most obvious CSS-looking surfaces while keeping the game stable. The board frame is the center of the whole composition. Player cards, move history, and buttons are repeated UI objects that define the game's tone. Avatar frame is small but visible and prepares the player-card area for real portraits.

## Square Textures Decision

`square-light.png` and `square-dark.png` are not in Batch 1. They should be Batch 2.

Reason: board square textures interact with selected-piece styling, legal-move dots, last-move highlight, capture indication, check indication, and piece readability across 64 live buttons. They are important, but they deserve their own focused integration and contrast QA pass.

Batch 2 should include:

- `src/assets/themes/rainy-cafe/boards/square-light.png`
- `src/assets/themes/rainy-cafe/boards/square-dark.png`

## Integration Order For Batch 1

1. `board-frame.png`
2. `player-panel-frame.png`
3. `move-history-panel-frame.png`
4. `avatar-frame.png`
5. `button-base-normal.png`
6. `button-base-hover.png`
7. `button-base-pressed.png`

## Verification Checklist After Each Asset

- The app builds.
- The asset path is not imported until the file exists.
- The board still renders as live buttons.
- `e2` to `e4` works.
- `Undo` works.
- `New Game` works.
- Live text remains HTML and readable.
- Asset does not cover click targets.
- Asset does not include baked text, labels, coordinates, move notation, player names, or numbers.
- Visual style matches the Rainy Cafe reference: dark wood, parchment, muted green, rainy blue, soft gold.

