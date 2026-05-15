# Theme System

Theme packs describe the visual and audio identity of a room. They should be data first, with components reading theme values and asset slots.

## Theme Pack Model

A theme pack should include:

- `id`
- `displayName`
- `description`
- `colors`
- `assets`
- `sounds`
- `particles`
- `boardStyle`
- `panelStyle`
- `buttonStyle`
- `decorSlots`

## Rainy Cafe Example

Rainy Cafe uses warm cafe-table materials, muted rainy blue background light, cream panels, gold accents, and rain particles over a window layer.

Example slots:

- `background`: rainy cafe room background.
- `boardFrame`: wooden board frame.
- `lightSquare`: warm cream tile.
- `darkSquare`: coffee-brown tile.
- `panel`: cafe menu panel.
- `button`: amber chunky button.
- `avatars`: cozy placeholder avatar set.
- `decor`: cups, lamp, books, plants, window decoration.
- `particles`: soft diagonal rain.
- `ambientSound`: rain on window.

The current implementation lives in `src/themes/rainyCafeTheme.ts` and uses placeholder paths until real assets are added.
