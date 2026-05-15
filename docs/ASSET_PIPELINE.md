# Asset Pipeline

This project uses approach C: production UI is modular and asset-based.

Full-screen Imagen mockups are art direction only. They can guide mood, composition, lighting, and object vocabulary, but the final game UI should not be one baked background image with all controls inside it.

The approved Rainy Cafe visual reference lives at `docs/references/rainy-cafe-reference.png`. It is the canonical Rainy Cafe style anchor and the primary source of truth for Rainy Cafe visual generation. Use it to guide composition, palette, panel feel, decor vocabulary, lighting, pixel density, and atmosphere. Do not paste it into the app as a flat background.

The current implementation screenshot at `docs/references/visual-checks/rainy-cafe-current.png` is only a temporary implementation snapshot. It is useful for gap checks, but it is not the gold standard.

Each theme should provide replaceable asset slots:

- Backgrounds.
- Board frames.
- Light and dark board squares.
- Panels.
- Buttons.
- Avatars.
- Decor.
- Particles.
- Ambient sounds.
- Move and capture sounds.

Future Imagen prompts should generate assets by category. For example: a Rainy Cafe window background, a wooden board frame, a cafe menu panel, a cup decor item, and a small rain particle sheet.

React components should reference theme slots and tokens. Replacing a theme asset should not require rewriting board, player card, move history, or action bar components.

Avoid putting dynamic UI text, move history, player names, timers, or button labels into baked images. Those belong in live UI.
