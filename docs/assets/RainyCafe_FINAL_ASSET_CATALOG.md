# Rainy Cafe Final Asset Catalog

Canonical style anchor: `docs/references/rainy-cafe-reference.png`.

Temporary implementation snapshot: `docs/references/visual-checks/rainy-cafe-current.png`.

All Rainy Cafe assets must follow the approved reference image: warm carved wood, cream parchment, muted sage board greens, rainy blue window light, soft gold lamp glow, leafy corner accents, medium-density handcrafted pixel art, and premium cozy indie game UI framing.

Dynamic text must stay in React/HTML. Do not bake player names, move history, timers, button labels, chess coordinates, ratings, or comments into assets.

## Background / Room

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| rainy-room-background | `rainy-room-background.png` | `src/assets/themes/rainy-cafe/backgrounds/rainy-room-background.png` | Base room/table scene | Sets full cozy cafe mood behind live UI | Based on full room composition, rainy window, lamp, table, shelves | 1440x900 | No | Fixed background | P0 | 7 | Leave broad empty zones for live board/panels. No baked UI text. |
| table-surface-underlay | `table-surface-underlay.png` | `src/assets/themes/rainy-cafe/backgrounds/table-surface-underlay.png` | Optional table layer | Adds wood depth below board/buttons | Based on lower table area | 1440x300 | Yes | Fixed overlay | P2 | 18 | Must not cover controls. |

## Board Frame / Board Surface

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| board-frame | `board-frame.png` | `src/assets/themes/rainy-cafe/boards/board-frame.png` | Main frame around live board | Largest visual upgrade; makes center feel hand-crafted | Wooden frame around central board | 680x680 | Yes | Fixed frame | P0 | 1 | Center cutout transparent; no coordinates unless later optional variant. |
| board-surface | `board-surface.png` | `src/assets/themes/rainy-cafe/boards/board-surface.png` | Optional underlay behind live squares | Adds subtle depth under square grid | Based on board material and bevel | 608x608 | Yes | Fixed | P1 | 11 | Must stay behind live square buttons. |
| square-light | `square-light.png` | `src/assets/themes/rainy-cafe/boards/square-light.png` | Light square texture | Replaces flat cream CSS square | Cream squares in reference board | 96x96 | No | Tile | P0 | 6 | Must preserve legal/selected/check contrast. |
| square-dark | `square-dark.png` | `src/assets/themes/rainy-cafe/boards/square-dark.png` | Dark square texture | Replaces flat green CSS square | Muted green squares in reference board | 96x96 | No | Tile | P0 | 6 | Must preserve piece readability. |

## Panel Frames

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| player-panel-frame | `player-panel-frame.png` | `src/assets/themes/rainy-cafe/panels/player-panel-frame.png` | Player card frame | Makes left cards match reference portrait panels | Left player panels | 330x132 | Yes | Fixed frame | P0 | 2 | Empty avatar/text areas. |
| move-history-panel-frame | `move-history-panel-frame.png` | `src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png` | Move list frame | Makes right panel parchment/wood | Right move history panel | 330x420 | Yes | Fixed frame | P0 | 3 | Empty body; React renders all rows. |
| bottom-action-bar-frame | `bottom-action-bar-frame.png` | `src/assets/themes/rainy-cafe/panels/bottom-action-bar-frame.png` | Bottom status/control surface | Frames bottom controls like reference | Long bottom parchment status strip | 1280x112 | Yes | Fixed frame | P0 | 8 | No text baked in. |
| captured-pieces-tray | `captured-pieces-tray.png` | `src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png` | Captured tray frame | Future captured-piece display | Captured panels on left | 300x92 | Yes | Fixed frame | P1 | 14 | Empty tray only. |
| coach-comment-panel | `coach-comment-panel.png` | `src/assets/themes/rainy-cafe/panels/coach-comment-panel.png` | Coach message frame | Future gentle comments | Right lower speech panel | 360x128 | Yes | Fixed frame | P1 | 15 | Empty text area. |
| timer-pill-frame | `timer-pill-frame.png` | `src/assets/themes/rainy-cafe/panels/timer-pill-frame.png` | Timer frame | Future clock display | Timer pills in player cards | 132x48 | Yes | Fixed frame | P1 | 16 | No digits. |

## Buttons

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| button-base-normal | `button-base-normal.png` | `src/assets/themes/rainy-cafe/buttons/button-base-normal.png` | Normal button state | Makes bottom controls tactile | Chunky bottom buttons | 148x72 | Yes | Fixed; 9-slice later optional | P0 | 4 | No icon/text. |
| button-base-hover | `button-base-hover.png` | `src/assets/themes/rainy-cafe/buttons/button-base-hover.png` | Hover button state | Clear interactive feedback | Same button shape with glow | 148x72 | Yes | Fixed | P0 | 4 | Same geometry as normal. |
| button-base-pressed | `button-base-pressed.png` | `src/assets/themes/rainy-cafe/buttons/button-base-pressed.png` | Pressed button state | Button depth feedback | Pressed tactile style | 148x72 | Yes | Fixed | P0 | 4 | Same geometry as normal. |
| button-icon-slot-leaf | `button-icon-slot-leaf.png` | `src/assets/themes/rainy-cafe/buttons/button-icon-slot-leaf.png` | Optional decorative icon | Later UI polish | Leaf icon on reference buttons | 48x48 | Yes | Fixed icon | P2 | 20 | Decorative only; labels stay live. |

## Avatar Frames / Avatar Presentation Slots

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| avatar-frame | `avatar-frame.png` | `src/assets/themes/rainy-cafe/avatars/avatar-frame.png` | Avatar portrait frame | Frames future portraits | Left framed portrait boxes | 92x92 | Yes | Fixed frame | P0 | 5 | Empty portrait opening. |
| avatar-placeholder-set | `avatar-placeholder-set.png` | `src/assets/themes/rainy-cafe/avatars/avatar-placeholder-set.png` | Temporary themed portraits | Replaces initials blocks later | Cute animal portraits in reference | 4 portraits, 128x128 each | Yes | Sprite sheet | P1 | 13 | No names or labels. |

## Chess Piece Set

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| white-piece-set | `white-piece-set.png` | `src/assets/themes/rainy-cafe/pieces/white-piece-set.png` | White piece sprites | Replaces Unicode pieces | Ivory pieces in reference | 6 sprites, 96x96 each | Yes | Sprite sheet | P0 | 10 | Must map to live board pieces. |
| black-piece-set | `black-piece-set.png` | `src/assets/themes/rainy-cafe/pieces/black-piece-set.png` | Black piece sprites | Replaces Unicode pieces | Dark pieces in reference | 6 sprites, 96x96 each | Yes | Sprite sheet | P0 | 10 | Same scale as white set. |

## Decor Objects

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| cup-decor | `cup-decor.png` | `src/assets/themes/rainy-cafe/decor/cup-decor.png` | Table cup decor | Adds cozy cafe identity | Steaming mug bottom-left/right window mug | 160x160 | Yes | Fixed decor | P1 | 12 | No text on cup. |
| hanging-lamp-decor | `hanging-lamp-decor.png` | `src/assets/themes/rainy-cafe/decor/hanging-lamp-decor.png` | Warm lamp decor | Creates gold focal glow | Top-right hanging lamp | 160x220 | Yes | Fixed decor | P1 | 12 | Lighting overlay separate. |
| books-stack-decor | `books-stack-decor.png` | `src/assets/themes/rainy-cafe/decor/books-stack-decor.png` | Book stack decor | Right-bottom cozy depth | Books near lower right | 220x150 | Yes | Fixed decor | P1 | 12 | No readable book text. |
| potted-plant-decor | `potted-plant-decor.png` | `src/assets/themes/rainy-cafe/decor/potted-plant-decor.png` | Plant decor | Leafy atmosphere | Plants around window/panels | 140x140 | Yes | Fixed decor | P1 | 12 | Decorative only. |
| rainy-window-decor | `rainy-window-decor.png` | `src/assets/themes/rainy-cafe/decor/rainy-window-decor.png` | Window detail | Strong rainy mood | Top-right window | 300x300 | Yes | Fixed decor | P1 | 12 | No labels. |
| cat-bed-decor | `cat-bed-decor.png` | `src/assets/themes/rainy-cafe/decor/cat-bed-decor.png` | Cozy cat/cushion decor | Adds charm | Cat/cushion mood from reference | 220x140 | Yes | Fixed decor | P1 | 13 | No mascot text. |
| corner-leaf-flower-decals | `corner-leaf-flower-decals.png` | `src/assets/themes/rainy-cafe/decor/corner-leaf-flower-decals.png` | Small corner decals | Reusable leafy accents | Leaves/flowers on panels and board | 128x128 sheet | Yes | Sprite sheet | P1 | 9 | Must not hide text. |

## Particles / Rain Effects

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| rain-streak-particle | `rain-streak-particle.png` | `src/assets/themes/rainy-cafe/particles/rain-streak-particle.png` | Rain streak tile | Adds motion/ambience | Rain streaks over window/scene | 64x128 | Yes | Tile/particle | P0 | 11 | Should stay subtle over text. |
| animated-rain-sprites | `animated-rain-sprites.png` | `src/assets/themes/rainy-cafe/particles/animated-rain-sprites.png` | Later animated rain | Polish pass | Reference rain motion implied | Sprite sheet | Yes | Animation sheet | P2 | 19 | Later only. |

## Lighting / Vignette

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| lighting-vignette-overlay | `lighting-vignette-overlay.png` | `src/assets/themes/rainy-cafe/lighting/lighting-vignette-overlay.png` | Warm/cool overlay | Unifies whole scene | Lamp glow and rainy cool edges | 1440x900 | Yes | Fixed overlay | P0 | 11 | Must not reduce text contrast. |

## UI Support Assets

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| move-row-highlight | `move-row-highlight.png` | `src/assets/themes/rainy-cafe/panels/move-row-highlight.png` | Current move row | Subtle move history polish | Green/gold highlighted row | 280x32 | Yes | Stretch/tile | P1 | 16 | No move text. |
| focus-note-strip | `focus-note-strip.png` | `src/assets/themes/rainy-cafe/panels/focus-note-strip.png` | Bottom flavor text frame | Future cozy note line | Bottom reference note strip | 760x64 | Yes | Fixed frame | P2 | 21 | Text stays React. |

## Optional Later Assets

| Asset id | File name | Target path | Purpose | Visual role | Reference match | Size | Transparent | Behavior | Priority | Order | Empty/dynamic notes |
|---|---|---|---|---|---|---:|---|---|---|---:|---|
| alternate-cups | `alternate-cups.png` | `src/assets/themes/rainy-cafe/decor/alternate-cups.png` | Cosmetic variants | Future customization | Cup family | Sprite sheet | Yes | Sheet | P2 | 22 | No shop logic yet. |
| alternate-lamps | `alternate-lamps.png` | `src/assets/themes/rainy-cafe/decor/alternate-lamps.png` | Cosmetic variants | Future customization | Lamp family | Sprite sheet | Yes | Sheet | P2 | 23 | No shop logic yet. |
| tablecloth-variants | `tablecloth-variants.png` | `src/assets/themes/rainy-cafe/decor/tablecloth-variants.png` | Cosmetic table variants | Future customization | Table surface mood | Sprite sheet | Yes | Sheet | P2 | 24 | No shop logic yet. |
| hover-sparkle-particles | `hover-sparkle-particles.png` | `src/assets/themes/rainy-cafe/particles/hover-sparkle-particles.png` | Hover polish | Soft magical feedback | Small cozy sparkle | 64x64 sheet | Yes | Sheet | P2 | 25 | Optional. |
| ambient-rain-loop | `ambient-rain-loop.ogg` | `src/assets/themes/rainy-cafe/sounds/ambient-rain-loop.ogg` | Ambient sound | Rain mood | Rain window mood | 30-60 sec | N/A | Loop | P2 | 26 | Audio pass later. |
| ambient-cafe-room-tone | `ambient-cafe-room-tone.ogg` | `src/assets/themes/rainy-cafe/sounds/ambient-cafe-room-tone.ogg` | Ambient sound | Room tone | Quiet cafe mood | 30-60 sec | N/A | Loop | P2 | 27 | Audio pass later. |

