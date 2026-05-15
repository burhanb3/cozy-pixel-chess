# Design System

Cozy Pixel Chess uses a warm pixel-art game UI language. It should look like an indie game interface, not a modern SaaS dashboard.

## Canvas

- MVP uses a fixed 16:9 game canvas centered on the page.
- The canvas contains background, particle, decor, board, player, history, and action layers.
- Responsive behavior can stack the layout on smaller screens, but the core design target is a readable 16:9 game scene.

## Pixel Rendering

- Use `image-rendering: pixelated` for pixel assets and the main game shell where appropriate.
- Keep future raster assets at clean pixel scales.
- Avoid blurry or heavily filtered placeholder art.

## Typography

- Use friendly rounded UI text for readability.
- Pixel fonts may be used sparingly for labels and accent text, not long paragraphs.
- Keep button and panel text short.

## Panels and Buttons

- Panels should feel like game UI objects: wood trim, warm paper, cafe menu boards, stitched cloth, or other theme-aware materials.
- Buttons should be chunky, tactile, and clearly interactive.
- Avoid sterile white cards, generic shadows, large corporate gradients, and dashboard widgets.

## Spacing and Proportions

- Center the chess board as the main object.
- Player cards should support avatars and status text.
- Move history should be readable but secondary.
- Bottom actions should stay compact.
- Decor slots should frame the room without blocking gameplay.

## Current Color Direction

- Dark brown wood.
- Warm cream paper.
- Muted rainy blue.
- Soft gold accents.
- Low-contrast cozy shadows.
