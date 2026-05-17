import type { GameTheme } from './themeTypes'
import avatarFrame from '../assets/themes/rainy-cafe/avatars/avatar-frame.png'
import avatarMossycat from '../assets/themes/rainy-cafe/avatars/avatar-mossycat.png'
import avatarTealeaf from '../assets/themes/rainy-cafe/avatars/avatar-tealeaf.png'
import rainyRoomBackground from '../assets/themes/rainy-cafe/backgrounds/rainy-room-background.png'
import boardFrame from '../assets/themes/rainy-cafe/boards/board-frame.png'
import squareDark from '../assets/themes/rainy-cafe/boards/square-dark.png'
import squareLight from '../assets/themes/rainy-cafe/boards/square-light.png'
import buttonBaseHover from '../assets/themes/rainy-cafe/buttons/button-base-hover.png'
import buttonBaseNormal from '../assets/themes/rainy-cafe/buttons/button-base-normal.png'
import buttonBasePressed from '../assets/themes/rainy-cafe/buttons/button-base-pressed.png'
import focusButton from '../assets/themes/rainy-cafe/buttons/focus-button.png'
import hintButton from '../assets/themes/rainy-cafe/buttons/hint-button.png'
import playButton from '../assets/themes/rainy-cafe/buttons/play-button.png'
import settingsButton from '../assets/themes/rainy-cafe/buttons/settings-button.png'
import undoButton from '../assets/themes/rainy-cafe/buttons/undo-button.png'
import catMascot from '../assets/themes/rainy-cafe/decor/cat-mascot.png'
import analyzePositionButtonFrame from '../assets/themes/rainy-cafe/panels/analyze-position-button-frame.png'
import bottomActionBarFrame from '../assets/themes/rainy-cafe/panels/bottom-action-bar-frame.png'
import capturedPiecesTray from '../assets/themes/rainy-cafe/panels/captured-pieces-tray.png'
import coachCommentPanel from '../assets/themes/rainy-cafe/panels/coach-comment-panel.png'
import moveHistoryPanelFrame from '../assets/themes/rainy-cafe/panels/move-history-panel-frame.png'
import playerPanelFrame from '../assets/themes/rainy-cafe/panels/player-panel-frame.png'
import quoteBannerFrame from '../assets/themes/rainy-cafe/panels/quote-banner-frame.png'
import turnPlaqueFrame from '../assets/themes/rainy-cafe/panels/turn-plaque-frame.png'
import vsBadge from '../assets/themes/rainy-cafe/panels/vs-badge.png'
import blackPieceSet from '../assets/themes/rainy-cafe/pieces/black-piece-set.png'
import whitePieceSet from '../assets/themes/rainy-cafe/pieces/white-piece-set.png'

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
      turnPlaqueFrame: {
        path: turnPlaqueFrame,
        description: 'Blank carved wood and parchment turn plaque frame for live turn text.',
        status: 'ready',
      },
      playerFrame: {
        path: playerPanelFrame,
        description: 'Empty player card frame for live avatar and text.',
        status: 'ready',
      },
      capturedPiecesTray: {
        path: capturedPiecesTray,
        description: 'Blank captured pieces tray frame for live captured piece values.',
        status: 'ready',
      },
      vsBadge: {
        path: vsBadge,
        description: 'Small carved wood versus badge without baked dynamic content.',
        status: 'ready',
      },
      moveHistoryFrame: {
        path: moveHistoryPanelFrame,
        description: 'Empty move history frame for live move notation.',
        status: 'ready',
      },
      analyzeButtonFrame: {
        path: analyzePositionButtonFrame,
        description: 'Chunky analyze button frame with magnifier ornament and no baked label.',
        status: 'ready',
      },
      coachCommentPanel: {
        path: coachCommentPanel,
        description: 'Blank parchment coach speech bubble frame for live helper text.',
        status: 'ready',
      },
      actionBarFrame: {
        path: bottomActionBarFrame,
        description: 'Bottom bar frame for live status and controls.',
        status: 'ready',
      },
      quoteBannerFrame: {
        path: quoteBannerFrame,
        description: 'Blank lower quote/status banner frame for live quote text.',
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
      play: {
        path: playButton,
        description: 'Final fidelity green rounded-square Play button skin with leaf icon and no baked label.',
        status: 'ready',
      },
      undo: {
        path: undoButton,
        description: 'Final fidelity orange-brown rounded-square Undo button skin with curved arrow icon and no baked label.',
        status: 'ready',
      },
      hint: {
        path: hintButton,
        description: 'Final fidelity golden rounded-square Hint button skin with lightbulb icon and empty live-count badge area.',
        status: 'ready',
      },
      focus: {
        path: focusButton,
        description: 'Final fidelity blue rounded-square Focus button skin with crystal icon and no baked label.',
        status: 'ready',
      },
      settings: {
        path: settingsButton,
        description: 'Final fidelity purple rounded-square Settings button skin with gear icon and no baked label.',
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
        description: 'Temporary Rainy Cafe avatar portrait set superseded by per-player portraits.',
        status: 'placeholder',
      },
      teaSpritePortrait: {
        path: avatarTealeaf,
        description: 'Tea Sprite cozy Rainy Cafe portrait asset.',
        status: 'ready',
      },
      moonBakerPortrait: {
        path: avatarMossycat,
        description: 'Moon Baker cozy Rainy Cafe portrait asset.',
        status: 'ready',
      },
    },
    pieces: {
      whiteSet: {
        path: whitePieceSet,
        description: 'White chess piece sprite sheet.',
        status: 'ready',
      },
      blackSet: {
        path: blackPieceSet,
        description: 'Black chess piece sprite sheet.',
        status: 'ready',
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
      catMascot: {
        path: catMascot,
        description: 'Tea-drinking Rainy Cafe cat mascot asset.',
        status: 'ready',
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
    pieceSet: 'Rainy Cafe ivory and espresso pixel-art sprite sheets',
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
        '/src/assets/themes/rainy-cafe/panels/turn-plaque-frame.png',
        '/src/assets/themes/rainy-cafe/panels/captured-pieces-tray.png',
        '/src/assets/themes/rainy-cafe/panels/vs-badge.png',
        '/src/assets/themes/rainy-cafe/panels/analyze-position-button-frame.png',
        '/src/assets/themes/rainy-cafe/panels/coach-comment-panel.png',
        '/src/assets/themes/rainy-cafe/panels/quote-banner-frame.png',
        '/src/assets/themes/rainy-cafe/decor/cat-mascot.png',
        '/src/assets/themes/rainy-cafe/avatars/avatar-tealeaf.png',
        '/src/assets/themes/rainy-cafe/avatars/avatar-mossycat.png',
      ],
      notes:
        'First production batch plus reconstruction chrome assets focuses on high-impact UI frames, portraits, mascot, and button states.',
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
    {
      id: 'rainy-cafe-reconstruction-piece-sprites',
      displayName: 'Rainy Cafe Reconstruction Piece Sprites',
      assetPaths: [
        '/src/assets/themes/rainy-cafe/pieces/white-piece-set.png',
        '/src/assets/themes/rainy-cafe/pieces/black-piece-set.png',
      ],
      notes:
        'Reconstruction pass replaces Unicode board glyphs with live sprite-sheet pieces while preserving square buttons and move state overlays.',
    },
  ],
}
