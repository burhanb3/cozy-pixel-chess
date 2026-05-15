# Rainy Cafe Asset Manifest

Production target: 1440x900 desktop game canvas.

| Asset id | File path | Recommended size | Transparent | Repeatable | Layer / z-index purpose | Component | Priority | Notes |
|---|---|---:|---|---|---|---|---|---|
| rainy-cafe-room-base | `src/assets/themes/rainy-cafe/backgrounds/rainy-cafe-room-base.png` | 1440x900 | No | No | Base room/table/window layer | `ThemeBackdrop` | P0 | No text, no board, leave room for live UI. |
| rainy-cafe-board-frame | `src/assets/themes/rainy-cafe/boards/board-frame.png` | 680x680 | Yes | No | Main wood frame around live board grid | `ChessBoard` | P0 | Center cutout must align to 8x8 board. |
| board-square-light | `src/assets/themes/rainy-cafe/boards/square-light.png` | 96x96 | No | Yes | Light square texture | `ChessBoard` | P0 | Seamless parchment texture. |
| board-square-dark | `src/assets/themes/rainy-cafe/boards/square-dark.png` | 96x96 | No | Yes | Dark square texture | `ChessBoard` | P0 | Seamless muted green texture. |
| player-panel-frame | `src/assets/themes/rainy-cafe/panels/player-panel-frame.png` | 330x132 | Yes | No | Player card frame | `PlayerCard` | P0 | Empty content area for React text/avatar. |
| move-history-panel-frame | `src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png` | 330x420 | Yes | No | Move history panel frame | `MoveHistory` | P0 | Leave blank parchment body. |
| bottom-action-bar-frame | `src/assets/themes/rainy-cafe/panels/bottom-action-bar-frame.png` | 1280x112 | Yes | No | Bottom control/status surface | `BottomActions` | P0 | No button text baked in. |
| button-base-normal | `src/assets/themes/rainy-cafe/buttons/button-base-normal.png` | 148x72 | Yes | No | Normal action button state | `PixelButton` | P0 | Can be 9-sliced later if needed. |
| button-base-hover | `src/assets/themes/rainy-cafe/buttons/button-base-hover.png` | 148x72 | Yes | No | Hover action button state | `PixelButton` | P0 | Slight brighter rim/glow. |
| button-base-pressed | `src/assets/themes/rainy-cafe/buttons/button-base-pressed.png` | 148x72 | Yes | No | Pressed action button state | `PixelButton` | P0 | Lowered/shadow compressed. |
| avatar-frame | `src/assets/themes/rainy-cafe/avatars/avatar-frame.png` | 92x92 | Yes | No | Avatar portrait frame | `PlayerCard` | P0 | Empty center for portrait asset. |
| white-piece-set | `src/assets/themes/rainy-cafe/pieces/white-pieces.png` | 6 sprites, 96x96 each | Yes | No | White chess piece sprites | `ChessBoard` | P0 | Pawn, knight, bishop, rook, queen, king. |
| black-piece-set | `src/assets/themes/rainy-cafe/pieces/black-pieces.png` | 6 sprites, 96x96 each | Yes | No | Black chess piece sprites | `ChessBoard` | P0 | Same silhouette scale as white set. |
| rain-streak-particle | `src/assets/themes/rainy-cafe/particles/rain-streak.png` | 64x128 | Yes | Yes | Rain particle overlay | `ThemeBackdrop` | P0 | Loopable diagonal streaks. |
| soft-vignette-lighting | `src/assets/themes/rainy-cafe/lighting/soft-vignette-overlay.png` | 1440x900 | Yes | No | Warm lamp glow and edge vignette | `ThemeBackdrop` | P0 | Should not darken text too much. |
| cup-decor | `src/assets/themes/rainy-cafe/decor/cup.png` | 160x160 | Yes | No | Table decor | `DecorSlot` / `ThemeBackdrop` | P1 | Include steam as separate later if animated. |
| lamp-decor | `src/assets/themes/rainy-cafe/decor/lamp.png` | 160x220 | Yes | No | Warm lamp decor | `ThemeBackdrop` | P1 | Match lighting overlay. |
| books-stack-decor | `src/assets/themes/rainy-cafe/decor/books-stack.png` | 220x150 | Yes | No | Right lower decor | `ThemeBackdrop` | P1 | Empty of readable baked text. |
| plant-decor | `src/assets/themes/rainy-cafe/decor/plant.png` | 140x140 | Yes | No | Shelf/table decor | `ThemeBackdrop` | P1 | Leafy silhouette. |
| rainy-window-decor | `src/assets/themes/rainy-cafe/decor/rainy-window.png` | 300x300 | Yes | No | Window detail layer | `ThemeBackdrop` | P1 | No UI text; optional city lights. |
| cat-bed-decor | `src/assets/themes/rainy-cafe/decor/cat-bed.png` | 220x140 | Yes | No | Cozy floor/table decor | `ThemeBackdrop` | P1 | Cute but not distracting. |
| leaf-corner-decals | `src/assets/themes/rainy-cafe/decor/leaf-corner-decals.png` | 128x128 sheet | Yes | No | Panel/board corner accents | Shared UI components | P1 | Small reusable decals. |
| captured-pieces-tray | `src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png` | 300x92 | Yes | No | Captured pieces area | Future captured tray | P1 | Empty tray only. |
| speech-bubble-panel | `src/assets/themes/rainy-cafe/panels/speech-bubble-panel.png` | 360x128 | Yes | No | Coach comment panel | Future feedback panel | P1 | Leave text area empty. |
| timer-pill | `src/assets/themes/rainy-cafe/panels/timer-pill.png` | 132x48 | Yes | No | Timer background | Future timer | P1 | No digits baked in. |
| move-row-highlight | `src/assets/themes/rainy-cafe/panels/move-row-highlight.png` | 280x32 | Yes | Yes | Last move highlight | `MoveHistory` | P1 | Subtle green/gold highlight. |
| alternate-cups | `src/assets/themes/rainy-cafe/decor/alternate-cups.png` | sprite sheet | Yes | No | Cosmetic variants | Future customization | P2 | Not for MVP integration. |
| alternate-lamps | `src/assets/themes/rainy-cafe/decor/alternate-lamps.png` | sprite sheet | Yes | No | Cosmetic variants | Future customization | P2 | Not for MVP integration. |
| tablecloth-variants | `src/assets/themes/rainy-cafe/decor/tablecloth-variants.png` | sprite sheet | Yes | No | Table customization | Future customization | P2 | Keep modular. |
| piece-box | `src/assets/themes/rainy-cafe/decor/piece-box.png` | 180x120 | Yes | No | Decorative item | Future customization | P2 | Optional. |
| animated-rain-sprites | `src/assets/themes/rainy-cafe/particles/animated-rain-sprites.png` | sprite sheet | Yes | Yes | Animated rain | `ThemeBackdrop` | P2 | Later animation pass. |
| ambient-rain-loop | `src/assets/themes/rainy-cafe/sounds/ambient-rain-loop.ogg` | 30-60 sec loop | N/A | Loop | Ambient sound | Future audio manager | P2 | No sudden thunder by default. |
| ambient-cafe-room-tone | `src/assets/themes/rainy-cafe/sounds/cafe-room-tone.ogg` | 30-60 sec loop | N/A | Loop | Ambient sound | Future audio manager | P2 | Very soft room tone. |
| hover-sparkle-particles | `src/assets/themes/rainy-cafe/particles/hover-sparkle.png` | 64x64 sheet | Yes | No | Button hover sparkle | `PixelButton` | P2 | Optional polish. |
| avatar-accessories | `src/assets/themes/rainy-cafe/avatars/avatar-accessories.png` | sprite sheet | Yes | No | Avatar cosmetic overlays | Future customization | P2 | Not MVP. |

