# Rainy Cafe Imagen Prompts

## Master Style Prompt

Cozy pixel-art game UI asset for an indie chess game, Rainy Cafe theme, warm wooden cafe table, cream parchment materials, muted sage green, rainy blue evening window light, soft golden lamp glow, hand-crafted pixel texture, charming cozy details, clean readable asset shape, modular game asset, no text, no labels, no watermark, transparent background where requested, consistent 1440x900 UI composition language.

## Negative Prompt / Avoid List

Avoid photorealism, smooth vector art, corporate dashboard style, glossy mobile game casino style, text, numbers, chess coordinates, player names, move notation, logos, watermarks, blurry edges, huge gradients without pixel texture, cluttered unreadable noise, baked UI labels, copyrighted characters, harsh competitive chess tone.

## Prompt Rules For Consistency

- Keep the same palette: dark wood, parchment cream, muted sage green, rainy blue, soft gold.
- Keep all assets pixel-art, medium detail density.
- Keep lighting direction consistent: warm lamp from upper right, cool rain/window from right/back.
- Generate assets as isolated modular pieces when possible.
- Text areas must be empty so React renders live text.
- UI frames must leave transparent or clean empty center areas.
- Do not include chess coordinates or UI labels inside images.
- Use filenames from `RainyCafe_ASSET_MANIFEST.md`.

## Transparency Rules

- Background room base: no transparency.
- UI frames, buttons, decor, pieces, particles, lighting overlays: transparent PNG/WebP.
- Board square textures: no transparency and repeatable.
- Lighting overlay: transparent with soft alpha.

## Naming Rules

Use lowercase kebab-case names. Match the manifest path exactly. Examples:

- `rainy-cafe-room-base.png`
- `board-frame.png`
- `player-panel-frame.png`
- `button-base-normal.png`
- `rain-streak.png`

## First Asset Batch Prompts

Use these prompts first. Generate the assets in this order so the visual language settles before later textures and decor.

### board-frame.png

Prompt: Create a transparent pixel-art wooden chess board frame for a cozy Rainy Cafe chess game UI, 680x680, dark carved espresso wood, warm brown highlights, small mossy leaf corner accents, handmade pixel texture, square outer frame, transparent center cutout for a live 8x8 chess board, warm cafe table mood, consistent with the Rainy Cafe reference.

Avoid: text, chess coordinates, labels, pieces, board squares, flat vector style, photorealism, blurry edges, watermark.

Transparency: transparent PNG/WebP with alpha; center must be transparent.

No baked text: do not include letters, numbers, UI labels, or move notation.

Style consistency: match dark wood, parchment cream, muted green, rainy blue, soft gold palette.

File name: `board-frame.png`.

### player-panel-frame.png

Prompt: Create a transparent pixel-art player panel frame for a cozy Rainy Cafe chess UI, 330x132, dark wood trim, cream parchment center, small leaf accents, empty avatar area on the left, empty text area on the right, handmade pixel texture, warm cafe lighting, game UI frame.

Avoid: player names, ratings, timers, text, icons, portraits, photorealism, dashboard card style.

Transparency: transparent PNG/WebP with alpha around the frame.

No baked text: leave all text areas blank for React text.

Style consistency: match the same wood, parchment, leaf, and soft gold language as `board-frame.png`.

File name: `player-panel-frame.png`.

### move-history-panel-frame.png

Prompt: Create a transparent pixel-art move history panel frame for a cozy Rainy Cafe chess UI, 330x420, dark wood trim, cream parchment writing area, subtle paper grain, small leaf accents, empty inner area for live move notation, warm handmade game UI.

Avoid: move text, numbers, table rows with baked notation, labels, coordinates, photorealism, generic web dashboard style.

Transparency: transparent PNG/WebP with alpha around the frame.

No baked text: no title, no row labels, no moves; React renders all text.

Style consistency: match Rainy Cafe parchment and wood frames from batch 1.

File name: `move-history-panel-frame.png`.

### button-base-normal.png

Prompt: Create a transparent pixel-art chunky action button base for a cozy Rainy Cafe chess UI, 148x72, dark wood rim, muted green painted surface, soft cream highlight, warm pixel texture, normal state, tactile game button, no icon.

Avoid: text, icon, label, glossy mobile casino style, flat vector style, photorealism.

Transparency: transparent PNG/WebP with alpha outside the button.

No baked text: button label must be blank for React text.

Style consistency: same wood rim and cozy palette as the panels.

File name: `button-base-normal.png`.

### button-base-hover.png

Prompt: Create a transparent pixel-art chunky action button base hover state for a cozy Rainy Cafe chess UI, 148x72, same shape as normal, dark wood rim, muted green painted surface, slightly brighter top edge, subtle warm glow, tactile game button, no icon.

Avoid: text, icon, label, changed button dimensions, photorealism, flat vector style.

Transparency: transparent PNG/WebP with alpha outside the button.

No baked text: button label must be blank for React text.

Style consistency: identical geometry to `button-base-normal.png`, just brighter hover feedback.

File name: `button-base-hover.png`.

### button-base-pressed.png

Prompt: Create a transparent pixel-art chunky action button base pressed state for a cozy Rainy Cafe chess UI, 148x72, same shape as normal, dark wood rim, muted green painted surface, lower pressed position, compressed shadow, slightly darker bottom edge, no icon.

Avoid: text, icon, label, changed button dimensions, photorealism, flat vector style.

Transparency: transparent PNG/WebP with alpha outside the button.

No baked text: button label must be blank for React text.

Style consistency: identical geometry to `button-base-normal.png`, with pressed-state depth.

File name: `button-base-pressed.png`.

### avatar-frame.png

Prompt: Create a transparent pixel-art avatar frame for a cozy Rainy Cafe chess UI, 92x92, dark wood outer rim, cream parchment inner trim, small mossy leaf corner accent, square portrait opening, warm handmade pixel texture, no character portrait.

Avoid: text, initials, portrait, icon, numbers, photorealism, flat vector style.

Transparency: transparent PNG/WebP with alpha outside frame and transparent portrait opening if possible.

No baked text: no initials, names, labels, or numbers.

Style consistency: match batch 1 wood and parchment UI frame style.

File name: `avatar-frame.png`.

## P0 Asset Prompts

### rainy-cafe-room-base

Create a 1440x900 cozy pixel-art Rainy Cafe chess room base background for a game UI. Dark carved wooden room, central cafe table area, rainy blue window on the right, warm hanging lamp glow, small shelves and plants around edges, empty central area reserved for a live chess board, empty left/right/bottom zones reserved for live UI panels. No text, no chess board, no UI labels, no pieces.

### board-frame

Create a transparent pixel-art wooden chess board frame asset, dark carved wood with small mossy green leaf corner accents, square outer frame for a live 8x8 board. 680x680, transparent center cutout, warm cafe table style, no coordinates, no text, no chess pieces.

### square-light

Create a seamless 96x96 pixel-art board square texture in warm parchment cream. Subtle paper grain, gentle cafe lighting, low contrast, repeatable tile, no border, no text.

### square-dark

Create a seamless 96x96 pixel-art board square texture in muted sage olive green. Subtle woven/paper grain, gentle speckles, low contrast, repeatable tile, no border, no text.

### player-panel-frame

Create a transparent pixel-art player card panel frame, 330x132. Dark wood trim, cream parchment center, small leaf corner accents, space for avatar on left and live text on right. No text, no numbers, no portrait.

### move-history-panel-frame

Create a transparent pixel-art move history panel frame, 330x420. Cream parchment writing area with dark wood trim and small leaf accents. Keep center blank for live React move text. No text, no rows with baked moves.

### bottom-action-bar-frame

Create a transparent pixel-art bottom action bar frame, 1280x112. Long cream parchment/wood UI surface for live status text and buttons. No text, no icons, no labels.

### button-base-normal

Create a transparent pixel-art chunky cafe action button base, 148x72. Rounded pixel corners, dark wood rim, muted green painted surface, soft highlight, normal state. No text or icon.

### button-base-hover

Create a transparent pixel-art chunky cafe action button base, 148x72. Same as normal but slightly brighter edge and warm hover glow. No text or icon.

### button-base-pressed

Create a transparent pixel-art chunky cafe action button base, 148x72. Same as normal but pressed downward, shadow compressed, darker lower edge. No text or icon.

### avatar-frame

Create a transparent pixel-art avatar frame, 92x92. Dark wood rim, parchment inner trim, tiny leaf accents, square portrait opening. No character portrait, no text.

### white-piece-set

Create a transparent pixel-art white chess piece sprite sheet for pawn, knight, bishop, rook, queen, king. Warm ivory pieces, dark readable outline, cozy handcrafted style, 96x96 per piece, consistent scale, no board background, no labels.

### black-piece-set

Create a transparent pixel-art black chess piece sprite sheet for pawn, knight, bishop, rook, queen, king. Dark espresso pieces, warm highlights, readable silhouette, cozy handcrafted style, 96x96 per piece, consistent scale, no board background, no labels.

### rain-streak

Create a transparent pixel-art rain streak particle tile, 64x128. Diagonal soft blue-gray rain lines, loopable, subtle opacity, no background.

### soft-vignette-overlay

Create a transparent 1440x900 pixel-art lighting overlay. Warm golden lamp glow from upper right, subtle dark vignette at edges, cool blue rainy window tint, no text, no hard shapes.

## Key P1 Decor Prompts

### cup

Transparent pixel-art cozy teal cafe mug with steam, small leaf tag, warm highlights, 160x160, no text.

### lamp

Transparent pixel-art hanging cafe lamp, warm golden light, dark metal/wood frame, 160x220, no background, no text.

### books-stack

Transparent pixel-art cozy stack of books, dark teal and brown covers, small plant/leaf accent, 220x150, no readable text.

### plant

Transparent pixel-art small cafe plant in ceramic pot, muted green leaves, warm wooden shadow, 140x140, no text.

### rainy-window

Transparent pixel-art rainy window decor, blue evening outside, warm distant window lights, raindrops on glass, 300x300, no labels.

### cat-bed

Transparent pixel-art cozy cat bed or small cushion, warm fabric, sleepy cafe mood, 220x140, no text.

### leaf-corner-decals

Transparent pixel-art sheet of small mossy leaf and flower corner decals, consistent Rainy Cafe palette, 128x128 sheet, no text.

### captured-pieces-tray

Transparent pixel-art small parchment tray with dark wood trim for captured pieces, 300x92, empty center, no text.

### speech-bubble-panel

Transparent pixel-art cozy coach comment panel, parchment speech bubble with small cafe mascot space, 360x128, empty text area, no words.

### timer-pill

Transparent pixel-art timer pill frame, cream center and dark wood trim, 132x48, no digits, no clock text.

### move-row-highlight

Transparent or repeatable pixel-art move row highlight strip, muted green and soft gold, 280x32, no text.
