# Rainy Cafe Asset Brief

## Visual Goal

Rainy Cafe should feel like a hand-crafted pixel-art chess room: a warm wooden table, cream parchment UI panels, muted green board squares, a rainy blue window, soft gold lamp light, and small cozy decor around the board.

The reference image at `docs/references/rainy-cafe-reference.png` is the canonical Rainy Cafe style anchor. It is the primary source of truth for all Rainy Cafe production assets.

The current implementation screenshot at `docs/references/visual-checks/rainy-cafe-current.png` is only a temporary implementation snapshot. Use it to see what still looks placeholder-like, not as the visual target.

## Why The Current UI Is Insufficient

The current UI proves composition and interaction, but most visuals are CSS placeholders. It lacks real pixel texture, hand-painted lighting, characterful panels, detailed decor, and consistent sprite-like asset edges. CSS should guide layout, not become the final artwork.

## Target Mood

- Calm rainy evening.
- Cozy cafe table by a window.
- Warm but not overly bright.
- Friendly beginner chess space.
- Game-like and tactile, never corporate or dashboard-like.

## Target Composition

The first production target is a 1440x900 desktop game canvas. The board stays central and dominant. Player panels sit on the left, move history on the right, and action buttons along the bottom. Decor should frame gameplay without hiding live UI.

## Target Palette

- Dark carved wood: deep brown and espresso.
- Parchment cream: warm beige, paper grain.
- Muted board green: sage/olive.
- Rainy blue: desaturated evening window tones.
- Soft gold: lamp glow and active highlights.
- Small leaf accents: moss and muted green.

## Pixel-Art Density

Use medium-density pixel art: enough texture to feel handmade, but not noisy. Large areas like panels and board squares need subtle repeatable grain. Small decor can be denser and more expressive.

## What Must Feel Hand-Crafted

- Board frame and corner leaves.
- Player panel frames.
- Move history parchment.
- Button bases.
- Avatar frame.
- Rainy window and lamp.
- Cup, books, plant, cat bed, flowers, leaves.
- Chess pieces once the piece set is replaced.

## What Should Stay Dynamic HTML

- Player names.
- Turn status.
- Move history text.
- Button labels.
- Timers.
- Captured piece counts.
- Coach comments.
- Chess coordinates if added later.

## What Must Not Be Baked Into Images

- UI text or labels.
- Move notation.
- Player names.
- Ratings.
- Timers.
- Legal move highlights.
- Selected square highlights.
- Current turn text.
- Puzzle or hint text.
