# Rainy Cafe Overnight Audit

Date: 2026-05-16
Branch: `goal/overnight-rainy-cafe-pass`

Canonical visual anchor: `docs/references/rainy-cafe-reference.png`
Latest implementation screenshot before this pass: `docs/references/visual-checks/rainy-cafe-batch2.png`

## Existing Rainy Cafe Assets

These high-impact production assets already exist in `src/assets/themes/rainy-cafe/` and are wired through `src/themes/rainyCafeTheme.ts`:

- `boards/board-frame.png`
- `boards/square-light.png`
- `boards/square-dark.png`
- `panels/player-panel-frame.png`
- `panels/move-history-panel-frame.png`
- `buttons/button-base-normal.png`
- `buttons/button-base-hover.png`
- `buttons/button-base-pressed.png`
- `avatars/avatar-frame.png`

## Missing High-Impact Assets

These requested high-impact assets are still missing:

- `panels/bottom-action-bar-frame.png`
- `backgrounds/rainy-room-background.png`
- `lighting/lighting-vignette-overlay.png`
- `decor/rainy-window-decor.png`
- `decor/cup-decor.png`
- `decor/hanging-lamp-decor.png`
- `decor/books-stack-decor.png`
- `decor/potted-plant-decor.png`
- `decor/cat-bed-decor.png`

## What Should Be Attempted Tonight

Safe first target:

1. Generate and integrate `panels/bottom-action-bar-frame.png`.

Conditional next targets if the UI remains stable and visually improved:

2. Generate and integrate `backgrounds/rainy-room-background.png`.
3. Generate and integrate `lighting/lighting-vignette-overlay.png`.
4. Generate decor assets only if background composition leaves the live board, panels, and text readable.

## What Should Be Postponed If Risky

- Regenerating existing Batch 1 frame/button/avatar assets. They are already present and integrated; replacing them could degrade a stable board.
- Chess piece sprite sheets. They require mapping and broader piece-state QA.
- Audio, particles, shop/customization, multiplayer, puzzle mode, and any non-visual gameplay systems.
- Large layout rewrites. The board must remain live React buttons.

## Generation Capability

Real image generation is available through the built-in `image_gen` workflow. Transparent PNG assets should use the built-in chroma-key path plus local alpha cleanup when needed.

