# Rainy Cafe Final Prompt Pack

Canonical style anchor: `docs/references/rainy-cafe-reference.png`.

Temporary implementation snapshot: `docs/references/visual-checks/rainy-cafe-current.png`.

This prompt pack is the main visual source for Rainy Cafe production assets. Every generated asset must stay close to the approved reference image.

## Master Style Prompt

Use the approved Rainy Cafe reference image as the canonical visual anchor. Generate a production-quality modular pixel-art game UI asset for a cozy chess game. Match the reference's warm carved wood, cream parchment panels, muted sage green board tones, rainy blue window light, soft golden lamp glow, mossy leaf accents, hand-crafted pixel texture, rounded-but-pixel game UI framing, medium-high decorative density, premium cozy indie game feel, calm rainy cafe atmosphere, readable shapes, and charming tabletop composition. Keep the asset modular and replaceable, not a full-screen pasted scene unless the asset is specifically the room background.

## Reusable Consistency Block

Match the approved reference image closely: dark espresso wood trim, parchment cream interiors, muted sage/olive greens, rainy blue evening window mood, warm gold lamp highlights, small leafy/floral accents, cozy cafe tabletop feeling, pixel-art edges, handmade texture, consistent border thickness, consistent lighting from warm upper-right lamp and cool rainy window light. Keep decorative density similar to the reference: rich but not noisy, cute but readable.

## Negative / Avoid Block

Avoid photorealism, smooth vector art, generic web dashboard UI, corporate SaaS layout, glossy casino mobile game style, unrelated cozy cottage styles, cyberpunk neon, flat CSS-like shapes, blurry edges, watermark, logos, baked UI text, player names, ratings, timers, move history text, button labels, chess coordinates, board labels, move notation, legal move indicators, selected-square indicators, and full-screen scenes when a modular asset is requested.

## Generation Rules

- Use transparent background for frames, decor, pieces, particles, and overlays.
- Use no transparency only for full background and seamless square textures.
- Do not bake dynamic text into any image.
- Do not bake move history text, player names, timers, ratings, button labels, or coach comments into images.
- Do not include chess coordinates unless a future task explicitly asks for an optional coordinate variant.
- Leave text areas empty so React can render live text.
- Leave frame centers/cutouts empty or transparent where live UI must appear.
- Generate one modular asset at a time.
- Keep pixel density and decorative density coherent with the reference image.
- Use exact filenames and target paths from this file.

## How To Generate These Assets Consistently

1. Generate one asset at a time.
2. Reuse the canonical reference image for every generation.
3. Reuse the Master Style Prompt and Reusable Consistency Block every time.
4. Compare each output against `docs/references/rainy-cafe-reference.png`.
5. Reject assets that drift into a different cozy style.
6. Reject assets with baked text, labels, coordinates, or move notation.
7. Preserve consistency across wood, parchment, colors, border thickness, leaf accents, lighting, and pixel-art finish.
8. Keep transparent assets cleanly cut out with no unwanted background.
9. Keep UI frame interiors empty enough for live React content.

## P0 Prompts

### board-frame.png

Target path: `src/assets/themes/rainy-cafe/boards/board-frame.png`

Based on: the large dark wooden frame surrounding the central chessboard in the approved reference.

Prompt: Create a transparent production pixel-art chess board frame, 680x680, based closely on the approved Rainy Cafe reference. Use dark carved espresso wood, warm brown highlights, small mossy leaf and tiny flower corner accents, handcrafted pixel texture, thick premium game UI border, subtle bevel, cozy cafe tabletop mood. The center must be a transparent square cutout for a live 8x8 chess board. No board squares, no chess pieces, no coordinates, no text.

Avoid: baked coordinates, pieces, square grid, labels, text, photorealism, vector style, unrelated wood style.

Transparency: yes; transparent center and outside edges.

Center empty: yes.

Modular: yes.

Size: 680x680.

Naming: `board-frame.png`.

### square-light.png

Target path: `src/assets/themes/rainy-cafe/boards/square-light.png`

Based on: the warm cream board squares in the central reference board.

Prompt: Create a seamless production pixel-art board square texture, 96x96, warm parchment cream, subtle paper grain, faint woven texture, gentle cafe light, low contrast, handmade pixel finish, matching the approved Rainy Cafe board. Must tile perfectly with no border and no markings.

Avoid: text, coordinates, borders, strong patterns, noisy texture, photorealism.

Transparency: no.

Center empty: not applicable.

Modular: yes, repeatable tile.

Size: 96x96.

Naming: `square-light.png`.

### square-dark.png

Target path: `src/assets/themes/rainy-cafe/boards/square-dark.png`

Based on: the muted sage green board squares in the central reference board.

Prompt: Create a seamless production pixel-art board square texture, 96x96, muted sage olive green, subtle speckles, soft paper/woven grain, cozy low-contrast finish, matching the approved Rainy Cafe board. Must tile perfectly with no border and no markings.

Avoid: text, coordinates, borders, high saturation green, noisy camouflage, photorealism.

Transparency: no.

Center empty: not applicable.

Modular: yes, repeatable tile.

Size: 96x96.

Naming: `square-dark.png`.

### player-panel-frame.png

Target path: `src/assets/themes/rainy-cafe/panels/player-panel-frame.png`

Based on: the framed portrait/player panels on the left side of the approved reference.

Prompt: Create a transparent production pixel-art player panel frame, 330x132, matching the Rainy Cafe reference. Dark carved wood outer trim, cream parchment interior, small mossy leaf accents, subtle paper grain, warm bevel, empty square avatar area on the left, empty text area on the right. Premium cozy game UI, not web card.

Avoid: player names, ratings, timers, portraits, labels, text, icons, flat dashboard card style.

Transparency: yes.

Center empty: yes, keep live content areas blank.

Modular: yes.

Size: 330x132.

Naming: `player-panel-frame.png`.

### move-history-panel-frame.png

Target path: `src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png`

Based on: the parchment-style move history panel on the right side of the approved reference.

Prompt: Create a transparent production pixel-art move history panel frame, 330x420, matching the approved Rainy Cafe reference. Dark carved wood trim, cream parchment writing area, subtle lined paper grain, small leaf accents at top corners, warm handmade pixel texture. Leave the entire inner area blank for live React move text.

Avoid: baked move list, numbers, column labels, title text, notation, coordinates, web table style.

Transparency: yes.

Center empty: yes.

Modular: yes.

Size: 330x420.

Naming: `move-history-panel-frame.png`.

### bottom-action-bar-frame.png

Target path: `src/assets/themes/rainy-cafe/panels/bottom-action-bar-frame.png`

Based on: the bottom parchment strip and chunky bottom control area in the approved reference.

Prompt: Create a transparent production pixel-art bottom action bar frame, 1280x112, matching the Rainy Cafe reference. Long cream parchment panel with dark wood trim, warm bevel, small leaf accents, subtle paper grain, enough blank area for live status text and live buttons. Cozy tabletop game UI.

Avoid: button labels, icons, status text, move text, numbers, photorealism, web footer style.

Transparency: yes.

Center empty: yes.

Modular: yes.

Size: 1280x112.

Naming: `bottom-action-bar-frame.png`.

### button-base-normal.png

Target path: `src/assets/themes/rainy-cafe/buttons/button-base-normal.png`

Based on: the chunky colorful bottom buttons in the approved reference.

Prompt: Create a transparent production pixel-art action button base, 148x72, normal state, matching the Rainy Cafe reference bottom buttons. Dark wood rim, muted green painted surface, rounded pixel corners, warm top highlight, subtle carved edge, tactile cozy game button. No icon and no text.

Avoid: text, icon, label, glossy casino style, flat vector style, web button style.

Transparency: yes.

Center empty: yes, text drawn by React.

Modular: yes.

Size: 148x72.

Naming: `button-base-normal.png`.

### button-base-hover.png

Target path: `src/assets/themes/rainy-cafe/buttons/button-base-hover.png`

Based on: same chunky button language as the approved reference, with slightly brighter interactive feedback.

Prompt: Create a transparent production pixel-art action button base, 148x72, hover state, identical geometry to the normal button. Dark wood rim, muted green painted surface, slightly brighter top edge, subtle warm gold glow, tactile cozy game UI. No icon and no text.

Avoid: changed size, text, icon, label, photorealism, vector style.

Transparency: yes.

Center empty: yes.

Modular: yes.

Size: 148x72.

Naming: `button-base-hover.png`.

### button-base-pressed.png

Target path: `src/assets/themes/rainy-cafe/buttons/button-base-pressed.png`

Based on: same chunky button language as the approved reference, with pressed depth.

Prompt: Create a transparent production pixel-art action button base, 148x72, pressed state, identical geometry to normal button but visually pushed down. Dark wood rim, muted green painted surface, compressed shadow, darker lower bevel, tactile cozy game UI. No icon and no text.

Avoid: changed size, text, icon, label, photorealism, vector style.

Transparency: yes.

Center empty: yes.

Modular: yes.

Size: 148x72.

Naming: `button-base-pressed.png`.

### avatar-frame.png

Target path: `src/assets/themes/rainy-cafe/avatars/avatar-frame.png`

Based on: the framed animal portrait boxes in the left player area of the approved reference.

Prompt: Create a transparent production pixel-art avatar frame, 92x92, matching the Rainy Cafe reference. Dark wood outer frame, cream parchment inner rim, muted green leaf accent, square portrait opening, warm handcrafted pixel texture, premium cozy game UI. No portrait, no initials, no text.

Avoid: character portrait, initials, labels, numbers, text, photorealism, flat vector style.

Transparency: yes, including portrait opening if possible.

Center empty: yes.

Modular: yes.

Size: 92x92.

Naming: `avatar-frame.png`.

### white-piece-set.png

Target path: `src/assets/themes/rainy-cafe/pieces/white-piece-set.png`

Based on: the ivory chess pieces in the approved reference board.

Prompt: Create a transparent production pixel-art white chess piece sprite sheet for pawn, knight, bishop, rook, queen, king. Warm ivory parchment color, dark readable outline, soft cafe highlights, handcrafted pixel detail, consistent scale, matching the approved Rainy Cafe reference pieces. Each piece fits a 96x96 cell.

Avoid: labels, letters, board background, inconsistent scale, photorealism, generic chess clipart.

Transparency: yes.

Center empty: not applicable.

Modular: yes, sprite sheet.

Size: 6 sprites, 96x96 each.

Naming: `white-piece-set.png`.

### black-piece-set.png

Target path: `src/assets/themes/rainy-cafe/pieces/black-piece-set.png`

Based on: the dark espresso chess pieces in the approved reference board.

Prompt: Create a transparent production pixel-art black chess piece sprite sheet for pawn, knight, bishop, rook, queen, king. Dark espresso material, warm edge highlights, readable silhouette, handcrafted pixel detail, consistent scale, matching the approved Rainy Cafe reference pieces. Each piece fits a 96x96 cell.

Avoid: labels, letters, board background, inconsistent scale, photorealism, generic chess clipart.

Transparency: yes.

Center empty: not applicable.

Modular: yes, sprite sheet.

Size: 6 sprites, 96x96 each.

Naming: `black-piece-set.png`.

### rainy-room-background.png

Target path: `src/assets/themes/rainy-cafe/backgrounds/rainy-room-background.png`

Based on: the entire approved reference room composition: rainy window, lamp, wood, shelves, table, and cozy edge decor.

Prompt: Create a 1440x900 production pixel-art Rainy Cafe room background for a modular chess game UI, closely matching the approved reference mood. Dark wooden cafe interior, rainy blue window on the right, warm hanging lamp glow, leafy plants and shelves near edges, cozy table surface, dark carved wood framing, premium handcrafted pixel texture. Leave clear empty zones for a live central chess board, left player panels, right move history panel, and bottom action bar. No chess board, no UI text, no labels.

Avoid: full baked game screenshot, baked chess board, move history text, player panels with text, button labels, coordinates, photorealism.

Transparency: no.

Center empty: leave visual room for live board/panels.

Modular: yes as background layer.

Size: 1440x900.

Naming: `rainy-room-background.png`.

### lighting-vignette-overlay.png

Target path: `src/assets/themes/rainy-cafe/lighting/lighting-vignette-overlay.png`

Based on: warm top-right lamp glow and cool rainy window light in the approved reference.

Prompt: Create a transparent 1440x900 production pixel-art lighting and vignette overlay. Warm soft gold lamp glow from upper right, subtle dark edge vignette, cool rainy blue tint near window area, gentle tabletop warmth, matching the approved Rainy Cafe reference. Must preserve readability of live UI.

Avoid: hard black shadows, opaque center, text, labels, harsh lens flare, photorealism.

Transparency: yes.

Center empty: not opaque over gameplay.

Modular: yes overlay.

Size: 1440x900.

Naming: `lighting-vignette-overlay.png`.

### rain-streak-particle.png

Target path: `src/assets/themes/rainy-cafe/particles/rain-streak-particle.png`

Based on: diagonal rain streaks visible in the approved reference, especially over the window and scene edges.

Prompt: Create a transparent repeatable pixel-art rain streak particle tile, 64x128. Soft diagonal blue-gray rain lines, varied short streak lengths, subtle alpha, cozy rainy evening mood, matching the approved Rainy Cafe reference. Designed for looping overlay.

Avoid: heavy opaque rain, snow, text, background color, photorealism, noisy clutter.

Transparency: yes.

Center empty: not applicable.

Modular: yes repeatable particle tile.

Size: 64x128.

Naming: `rain-streak-particle.png`.

## P1 Prompts

### cup-decor.png

Target path: `src/assets/themes/rainy-cafe/decor/cup-decor.png`

Based on: the teal mugs and steaming cup details in the approved reference.

Prompt: Create a transparent production pixel-art cozy cafe cup decor asset, teal ceramic mug, gentle steam, warm highlights, tiny leaf charm shape but no readable text, handcrafted pixel texture, matching the approved Rainy Cafe reference.

Avoid: readable text, logos, photorealism, unrelated mug style.

Transparency: yes. Modular: yes. Size: 160x160. Naming: `cup-decor.png`.

### hanging-lamp-decor.png

Target path: `src/assets/themes/rainy-cafe/decor/hanging-lamp-decor.png`

Based on: the glowing hanging lamp at the upper right of the approved reference.

Prompt: Create a transparent production pixel-art hanging cafe lamp decor asset, dark metal/wood frame, warm golden light core, soft pixel glow edge, cozy rainy cafe mood, matching the approved Rainy Cafe reference.

Avoid: text, harsh modern lamp, photorealism, huge opaque glow background.

Transparency: yes. Modular: yes. Size: 160x220. Naming: `hanging-lamp-decor.png`.

### books-stack-decor.png

Target path: `src/assets/themes/rainy-cafe/decor/books-stack-decor.png`

Based on: the stacked books and tabletop decor in the lower-right area of the approved reference.

Prompt: Create a transparent production pixel-art stack of cozy books decor asset, dark teal and warm brown covers, small leaf or flower accent, handcrafted pixel texture, Rainy Cafe palette. No readable words on book covers.

Avoid: readable text, logos, photorealism, clean vector style.

Transparency: yes. Modular: yes. Size: 220x150. Naming: `books-stack-decor.png`.

### potted-plant-decor.png

Target path: `src/assets/themes/rainy-cafe/decor/potted-plant-decor.png`

Based on: leafy potted plants around the window and panels in the approved reference.

Prompt: Create a transparent production pixel-art potted plant decor asset, muted green leaves, small warm ceramic pot, soft pixel highlights, cozy cafe tabletop style, matching the approved Rainy Cafe reference.

Avoid: neon plants, photorealism, text, modern flat icon style.

Transparency: yes. Modular: yes. Size: 140x140. Naming: `potted-plant-decor.png`.

### rainy-window-decor.png

Target path: `src/assets/themes/rainy-cafe/decor/rainy-window-decor.png`

Based on: the rainy blue window with distant warm lights in the upper-right of the approved reference.

Prompt: Create a transparent production pixel-art rainy window decor asset, blue evening glass, visible raindrops, distant warm window lights, dark wooden frame, cozy indoor mood, matching the approved Rainy Cafe reference.

Avoid: labels, text, photorealistic city, bright neon colors.

Transparency: yes. Modular: yes. Size: 300x300. Naming: `rainy-window-decor.png`.

### cat-bed-decor.png

Target path: `src/assets/themes/rainy-cafe/decor/cat-bed-decor.png`

Based on: the cute lower-right cozy pet/cushion feeling in the approved reference.

Prompt: Create a transparent production pixel-art cozy cat bed decor asset, small soft cushion or sleeping cat nook, warm fabric, muted Rainy Cafe palette, cute but subtle, handcrafted pixel texture.

Avoid: text, mascot speech, photorealism, distracting bright colors.

Transparency: yes. Modular: yes. Size: 220x140. Naming: `cat-bed-decor.png`.

### corner-leaf-flower-decals.png

Target path: `src/assets/themes/rainy-cafe/decor/corner-leaf-flower-decals.png`

Based on: the mossy leaf and tiny flower accents on panels and board corners in the approved reference.

Prompt: Create a transparent production pixel-art decal sheet of small mossy leaves, tiny cream/blue flowers, and corner sprigs, matching the approved Rainy Cafe reference. Designed to decorate panel corners and board edges.

Avoid: large plants, text, icons, photorealism, unrelated flower palette.

Transparency: yes. Modular: yes, sprite sheet. Size: 128x128. Naming: `corner-leaf-flower-decals.png`.

### captured-pieces-tray.png

Target path: `src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png`

Based on: the captured panels in the left player area of the approved reference.

Prompt: Create a transparent production pixel-art captured pieces tray frame, cream parchment center, dark wood trim, small leaf accents, empty center for live captured pieces, matching the approved Rainy Cafe reference.

Avoid: baked pieces, text, labels, numbers, photorealism.

Transparency: yes. Center empty: yes. Modular: yes. Size: 300x92. Naming: `captured-pieces-tray.png`.

### coach-comment-panel.png

Target path: `src/assets/themes/rainy-cafe/panels/coach-comment-panel.png`

Based on: the right-side cozy comment/speech panel in the approved reference.

Prompt: Create a transparent production pixel-art coach comment panel frame, parchment speech area, dark wood trim, small cozy mascot/leaf accent area but no text, matching the approved Rainy Cafe reference.

Avoid: baked quote text, labels, player names, photorealism.

Transparency: yes. Center empty: yes. Modular: yes. Size: 360x128. Naming: `coach-comment-panel.png`.

### timer-pill-frame.png

Target path: `src/assets/themes/rainy-cafe/panels/timer-pill-frame.png`

Based on: the timer pill shapes in the left player panels of the approved reference.

Prompt: Create a transparent production pixel-art timer pill frame, cream parchment center, muted green/gold rim, tiny clock ornament shape but no digits, matching the approved Rainy Cafe reference.

Avoid: baked time, numbers, text, photorealism.

Transparency: yes. Center empty: yes. Modular: yes. Size: 132x48. Naming: `timer-pill-frame.png`.

