# Rainy Cafe Reconstruction Diagnosis

Date: 2026-05-16
Branch: `goal/overnight-rainy-cafe-pass`

Canonical target: `docs/references/rainy-cafe-reference.png`

## Current Diagnosis

The current branch has the right high-level layout, but several visible areas still read as CSS-built placeholders instead of production Rainy Cafe game UI. The approved reference is denser, warmer, more object-based, and more consistently asset-driven. The current screen is closer than the first scaffold, but it still looks like a live web layout sitting over a good background.

## Too CSS / Fake / Weak

- The turn plaque is a CSS plaque. It lacks the carved parchment/wood object quality of the reference.
- Player cards use the real frame asset, but the portrait area still uses colored initials instead of real portrait art.
- Rating and timer pills are CSS pills. They are readable, but not yet integrated into the player-card asset language.
- Captured panels are CSS boxes. They should become real tray/frame assets.
- The VS badge is CSS-only and too flat compared with the reference.
- The Analyze Position button is CSS-only and does not match the chunky framed object style.
- The coach bubble and cat mascot are CSS doodles. They need production image assets.
- The status quote is a CSS box inside the action bar. It should use a real framed banner or a dedicated asset slot.
- Several environmental objects from the latest feature pass are CSS shapes. The approved reference uses real pixel-art decor clusters.
- Chess pieces are still Unicode glyphs. They are playable and readable, but visually far from the reference pieces.
- The board frame is useful, but coordinates and extra vine decoration are still mostly CSS-positioned and need tighter reference matching.

## Must Become Real Assets

- `turn-plaque-frame.png`
- `captured-pieces-tray.png`
- `vs-badge.png`
- `coach-comment-panel.png`
- `cat-mascot.png`
- `analyze-position-button-frame.png`
- `quote-banner-frame.png`
- `avatar-tealeaf.png`
- `avatar-mossycat.png`
- Environment/decor cluster assets for left-bottom, right-top, and right-bottom scene storytelling.

## Should Be Regenerated Or Re-evaluated

- Board frame: improve only if generation quality is clearly better than the current asset.
- Chess pieces: attempt only if generated sprites are readable at board scale; otherwise document a dedicated piece pass.
- Background: current room asset is strong and should not be replaced unless a new generation clearly improves composition without fighting live UI.

## Can Stay Dynamic HTML

- Player names, ratings, timers, side labels, and status text.
- Turn text.
- Captured piece values.
- Move history rows, move numbers, and SAN notation.
- Analyze/coach/status text.
- Button labels.
- Board click targets, legal move markers, selected square, last move, check, and invalid move states.
- Coordinates, if they remain better as live text aligned to the board frame.

## Safe To Postpone

- Full chess piece sprite integration if readability is not strong.
- Audio, ambient loops, and particle sprite sheets.
- Shop, customization, puzzle mode, online multiplayer, auth, and payment systems.
- Cosmetic variants and alternate theme inventory.
- True timer behavior beyond the current static sample display.

## Top Visual Priorities

1. Replace the most visible CSS-only chrome with modular assets: turn plaque, captured trays, VS badge, coach bubble, mascot, analyze button, quote banner.
2. Replace initials with real Rainy Cafe portrait assets while keeping names and stats live.
3. Bring the left rail closer to the reference: framed turn plaque, portrait cards, captured trays, centered VS, and left-bottom decor.
4. Bring the right rail closer to the reference: parchment move history, real analyze button frame, asset-based coach bubble and mascot.
5. Improve bottom controls with asset-driven button/bar/banner composition rather than CSS boxes.
6. Revisit board coordinates and piece strategy after the UI chrome is more stable.

## Generation Availability

Real image generation is available in this environment through the built-in `image_gen` workflow. Transparent project assets should use the built-in generation path with chroma-key cleanup when needed, then be saved into `src/assets/themes/rainy-cafe/`.

