import type { GameTheme } from './themeTypes'
import avatarFrame from '../assets/themes/rainy-cafe/avatars/avatar-frame.png'
import rainyRoomBackground from '../assets/themes/rainy-cafe/backgrounds/rainy-room-background.png'
import boardFrame from '../assets/themes/rainy-cafe/boards/board-frame.png'
import squareDark from '../assets/themes/rainy-cafe/boards/square-dark.png'
import squareLight from '../assets/themes/rainy-cafe/boards/square-light.png'
import buttonBaseHover from '../assets/themes/rainy-cafe/buttons/button-base-hover.png'
import buttonBaseNormal from '../assets/themes/rainy-cafe/buttons/button-base-normal.png'
import buttonBasePressed from '../assets/themes/rainy-cafe/buttons/button-base-pressed.png'
import bottomActionBarFrame from '../assets/themes/rainy-cafe/panels/bottom-action-bar-frame.png'
import moveHistoryPanelFrame from '../assets/themes/rainy-cafe/panels/move-history-panel-frame.png'
import playerPanelFrame from '../assets/themes/rainy-cafe/panels/player-panel-frame.png'

export const rainyCafeTheme: GameTheme = {
  id: 'rainy-cafe',
  displayName: 'Rainy Cafe',
  description: 'A warm window-side cafe table with soft rain, amber lamps, and muted blue evening light.',
  colors: {
    pageBackground: '#0f1718',
    canvasBackground: '#172224',
    panelBackground: '#ead1a2',
    panelBorder: '#4a2c1f',
    panelShadow: '#1f1510',
    woodDark: '#2d1b15',
    woodMid: '#6f4328',
    parchment: '#f0d7a7',
    mutedGreen: '#879168',
    rainyBlue: '#37586a',
    lightSquare: '#efd2a0',
    darkSquare: '#879168',
    accent: '#d8a344',
    text: '#302018',
  },
  assets: {
    backgrounds: {
      roomBase: {
        path: rainyRoomBackground,
        description: 'Full 1440x900 Rainy Cafe room/table base without baked UI text.',
        status: 'ready',
      },
    },
    lighting: {
      softVignette: {
        path: '/src/assets/themes/rainy-cafe/lighting/lighting-vignette-overlay.png',
        description: 'Transparent warm lamp glow and edge vignette overlay.',
        status: 'planned',
      },
    },
    boards: {
      frame: {
        path: boardFrame,
        description: 'Transparent carved wood board frame with center cutout.',
        status: 'ready',
      },
      surface: {
        path: '/src/assets/themes/rainy-cafe/boards/board-surface.png',
        description: 'Optional board underlay surface behind live squares.',
        status: 'planned',
      },
      lightSquare: {
        path: squareLight,
        description: 'Repeatable cream board square texture.',
        status: 'ready',
      },
      darkSquare: {
        path: squareDark,
        description: 'Repeatable muted green board square texture.',
        status: 'ready',
      },
    },
    panels: {
      playerFrame: {
        path: playerPanelFrame,
        description: 'Empty player card frame for live avatar and text.',
        status: 'ready',
      },
      moveHistoryFrame: {
        path: moveHistoryPanelFrame,
        description: 'Empty move history frame for live move notation.',
        status: 'ready',
      },
      actionBarFrame: {
        path: bottomActionBarFrame,
        description: 'Bottom bar frame for live status and controls.',
        status: 'ready',
      },
    },
    buttons: {
      baseNormal: {
        path: buttonBaseNormal,
        description: 'Normal state action button base without text.',
        status: 'ready',
      },
      baseHover: {
        path: buttonBaseHover,
        description: 'Hover state action button base without text.',
        status: 'ready',
      },
      basePressed: {
        path: buttonBasePressed,
        description: 'Pressed state action button base without text.',
        status: 'ready',
      },
    },
    avatars: {
      frame: {
        path: avatarFrame,
        description: 'Reusable avatar frame with transparent portrait opening.',
        status: 'ready',
      },
      placeholderSet: {
        path: '/src/assets/themes/rainy-cafe/avatars/avatar-placeholder-set.png',
        description: 'Temporary Rainy Cafe avatar portrait set.',
        status: 'planned',
      },
    },
    pieces: {
      whiteSet: {
        path: '/src/assets/themes/rainy-cafe/pieces/white-piece-set.png',
        description: 'White chess piece sprite sheet.',
        status: 'planned',
      },
      blackSet: {
        path: '/src/assets/themes/rainy-cafe/pieces/black-piece-set.png',
        description: 'Black chess piece sprite sheet.',
        status: 'planned',
      },
    },
    decor: {
      cup: {
        path: '/src/assets/themes/rainy-cafe/decor/cup-decor.png',
        description: 'Cozy cup decor slot.',
        status: 'planned',
      },
      lamp: {
        path: '/src/assets/themes/rainy-cafe/decor/hanging-lamp-decor.png',
        description: 'Warm hanging lamp decor slot.',
        status: 'planned',
      },
      booksStack: {
        path: '/src/assets/themes/rainy-cafe/decor/books-stack-decor.png',
        description: 'Book stack decor slot.',
        status: 'planned',
      },
      plant: {
        path: '/src/assets/themes/rainy-cafe/decor/potted-plant-decor.png',
        description: 'Small plant decor slot.',
        status: 'planned',
      },
      rainyWindow: {
        path: '/src/assets/themes/rainy-cafe/decor/rainy-window-decor.png',
        description: 'Rainy window decor layer.',
        status: 'planned',
      },
      catBed: {
        path: '/src/assets/themes/rainy-cafe/decor/cat-bed-decor.png',
        description: 'Small cozy cat bed decor slot.',
        status: 'planned',
      },
      leafCornerDecals: {
        path: '/src/assets/themes/rainy-cafe/decor/corner-leaf-flower-decals.png',
        description: 'Reusable leaf and flower corner decals.',
        status: 'planned',
      },
      capturedPiecesTray: {
        path: '/src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png',
        description: 'Future captured pieces tray frame.',
        status: 'planned',
      },
      speechBubblePanel: {
        path: '/src/assets/themes/rainy-cafe/panels/coach-comment-panel.png',
        description: 'Future coach comment panel without baked text.',
        status: 'planned',
      },
      timerPill: {
        path: '/src/assets/themes/rainy-cafe/panels/timer-pill-frame.png',
        description: 'Future timer pill without baked digits.',
        status: 'planned',
      },
      moveRowHighlight: {
        path: '/src/assets/themes/rainy-cafe/panels/move-row-highlight.png',
        description: 'Future move history row highlight texture.',
        status: 'planned',
      },
    },
    particles: {
      rainStreak: {
        path: '/src/assets/themes/rainy-cafe/particles/rain-streak-particle.png',
        description: 'Transparent repeatable rain streak particle.',
        status: 'planned',
      },
      hoverSparkle: {
        path: '/src/assets/themes/rainy-cafe/particles/hover-sparkle.png',
        description: 'Future hover sparkle particle sheet.',
        status: 'planned',
      },
    },
    sounds: {
      ambientRainLoop: {
        path: '/src/assets/themes/rainy-cafe/sounds/ambient-rain-loop.ogg',
        description: 'Future loopable rain ambience.',
        status: 'planned',
      },
      cafeRoomTone: {
        path: '/src/assets/themes/rainy-cafe/sounds/ambient-cafe-room-tone.ogg',
        description: 'Future subtle cafe room tone.',
        status: 'planned',
      },
      move: {
        path: '/src/assets/themes/rainy-cafe/sounds/move.ogg',
        description: 'Future soft wooden move sound.',
        status: 'planned',
      },
      capture: {
        path: '/src/assets/themes/rainy-cafe/sounds/capture.ogg',
        description: 'Future soft capture sound.',
        status: 'planned',
      },
    },
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
    frame: 'dark carved wood frame with leafy corner decor',
    pieceSet: 'placeholder classic unicode pieces until pixel pieces are imported',
  },
  panelStyle: {
    frame: 'stacked cream parchment panels with dark wood trim',
    surface: 'paper grain placeholder with leafy corner accents',
  },
  buttonStyle: {
    frame: 'large chunky cafe action buttons in muted green, amber, blue, and lilac',
    surface: 'stitched cloth and painted wood placeholder surfaces',
  },
  visualReferences: {
    canonicalStyleAnchor: 'docs/references/rainy-cafe-reference.png',
    currentImplementationSnapshot: 'docs/references/visual-checks/rainy-cafe-current.png',
    finalAssetCatalog: 'docs/assets/RainyCafe_FINAL_ASSET_CATALOG.md',
    finalPromptPack: 'docs/assets/RainyCafe_FINAL_PROMPT_PACK.md',
  },
  decorSlots: [
    { id: 'left-cup', label: 'Cup slot', placement: 'left' },
    { id: 'left-lamp', label: 'Lamp slot', placement: 'left' },
    { id: 'right-books', label: 'Book stack slot', placement: 'right' },
    { id: 'bottom-table-item', label: 'Table item slot', placement: 'bottom' },
    { id: 'window-decoration', label: 'Window decor slot', placement: 'background' },
  ],
  productionBatches: [
    {
      id: 'rainy-cafe-batch-1-ui-frames',
      displayName: 'Rainy Cafe Batch 1 UI Frames',
      assetPaths: [
        '/src/assets/themes/rainy-cafe/boards/board-frame.png',
        '/src/assets/themes/rainy-cafe/panels/player-panel-frame.png',
        '/src/assets/themes/rainy-cafe/panels/move-history-panel-frame.png',
        '/src/assets/themes/rainy-cafe/buttons/button-base-normal.png',
        '/src/assets/themes/rainy-cafe/buttons/button-base-hover.png',
        '/src/assets/themes/rainy-cafe/buttons/button-base-pressed.png',
        '/src/assets/themes/rainy-cafe/avatars/avatar-frame.png',
      ],
      notes:
        'First production batch focuses on high-impact UI frames and button states. These paths are metadata only until files exist.',
    },
    {
      id: 'rainy-cafe-batch-2-board-squares',
      displayName: 'Rainy Cafe Batch 2 Board Squares',
      assetPaths: [
        '/src/assets/themes/rainy-cafe/boards/square-light.png',
        '/src/assets/themes/rainy-cafe/boards/square-dark.png',
      ],
      notes:
        'Second production batch replaces flat CSS board square colors with low-contrast tile textures. Requires contrast QA for pieces and board states.',
    },
  ],
}
