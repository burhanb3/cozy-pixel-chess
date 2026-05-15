import type { GameTheme } from './themeTypes'

export const rainyCafeTheme: GameTheme = {
  id: 'rainy-cafe',
  displayName: 'Rainy Cafe',
  description: 'A warm window-side cafe table with soft rain, amber lamps, and muted blue evening light.',
  colors: {
    pageBackground: '#111924',
    canvasBackground: '#1f2f38',
    panelBackground: '#e4bd83',
    panelBorder: '#56362a',
    lightSquare: '#f4d7a1',
    darkSquare: '#8a5d45',
    accent: '#f2bd57',
    text: '#352119',
  },
  assets: {
    background: '/src/assets/themes/rainy-cafe/backgrounds/room-placeholder.webp',
    boardFrame: '/src/assets/themes/rainy-cafe/boards/board-frame-placeholder.webp',
    lightSquare: '/src/assets/themes/rainy-cafe/boards/light-square-placeholder.webp',
    darkSquare: '/src/assets/themes/rainy-cafe/boards/dark-square-placeholder.webp',
    panel: '/src/assets/themes/rainy-cafe/panels/panel-placeholder.webp',
    button: '/src/assets/themes/rainy-cafe/buttons/button-placeholder.webp',
    avatars: '/src/assets/themes/rainy-cafe/avatars/avatar-placeholder.webp',
    decor: '/src/assets/themes/rainy-cafe/decor/decor-placeholder.webp',
    particles: '/src/assets/themes/rainy-cafe/particles/rain-placeholder.webp',
    ambientSound: '/src/assets/themes/rainy-cafe/sounds/rain-ambient-placeholder.mp3',
  },
  sounds: {
    ambient: 'rain-on-window',
    move: 'soft-wood-tap',
    capture: 'cup-clink',
  },
  particles: {
    id: 'soft-window-rain',
    description: 'Small diagonal rain streaks over the background layer.',
  },
  boardStyle: {
    frame: 'rounded wooden cafe table frame',
    pieceSet: 'placeholder classic unicode pieces until pixel pieces are imported',
  },
  panelStyle: {
    frame: 'warm cream cafe menu panel with dark wood trim',
    surface: 'subtle paper texture placeholder',
  },
  buttonStyle: {
    frame: 'chunky pixel-inspired amber button',
    surface: 'soft gold gradient placeholder',
  },
  decorSlots: [
    { id: 'left-cup', label: 'Cup slot', placement: 'left' },
    { id: 'left-lamp', label: 'Lamp slot', placement: 'left' },
    { id: 'right-books', label: 'Book stack slot', placement: 'right' },
    { id: 'bottom-table-item', label: 'Table item slot', placement: 'bottom' },
    { id: 'window-decoration', label: 'Window decor slot', placement: 'background' },
  ],
}
