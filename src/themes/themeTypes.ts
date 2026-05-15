export type ThemeAssetRef = {
  path: string
  description: string
  status: 'planned' | 'placeholder' | 'ready'
}

export type ThemeAssetSlots = {
  backgrounds: {
    roomBase: ThemeAssetRef
  }
  lighting: {
    softVignette: ThemeAssetRef
  }
  boards: {
    frame: ThemeAssetRef
    surface: ThemeAssetRef
    lightSquare: ThemeAssetRef
    darkSquare: ThemeAssetRef
  }
  panels: {
    playerFrame: ThemeAssetRef
    moveHistoryFrame: ThemeAssetRef
    actionBarFrame: ThemeAssetRef
  }
  buttons: {
    baseNormal: ThemeAssetRef
    baseHover: ThemeAssetRef
    basePressed: ThemeAssetRef
  }
  avatars: {
    frame: ThemeAssetRef
    placeholderSet: ThemeAssetRef
  }
  pieces: {
    whiteSet: ThemeAssetRef
    blackSet: ThemeAssetRef
  }
  decor: {
    cup: ThemeAssetRef
    lamp: ThemeAssetRef
    booksStack: ThemeAssetRef
    plant: ThemeAssetRef
    rainyWindow: ThemeAssetRef
    catBed: ThemeAssetRef
    leafCornerDecals: ThemeAssetRef
    capturedPiecesTray: ThemeAssetRef
    speechBubblePanel: ThemeAssetRef
    timerPill: ThemeAssetRef
    moveRowHighlight: ThemeAssetRef
  }
  particles: {
    rainStreak: ThemeAssetRef
    hoverSparkle: ThemeAssetRef
  }
  sounds: {
    ambientRainLoop: ThemeAssetRef
    cafeRoomTone: ThemeAssetRef
    move: ThemeAssetRef
    capture: ThemeAssetRef
  }
}

export type ThemeColors = {
  pageBackground: string
  canvasBackground: string
  panelBackground: string
  panelBorder: string
  panelShadow: string
  woodDark: string
  woodMid: string
  parchment: string
  mutedGreen: string
  rainyBlue: string
  lightSquare: string
  darkSquare: string
  accent: string
  text: string
}

export type ThemeDecorSlot = {
  id: string
  label: string
  placement: 'left' | 'right' | 'bottom' | 'background'
}

export type ThemeAssetBatch = {
  id: string
  displayName: string
  assetPaths: string[]
  notes: string
}

export type ThemeVisualReferences = {
  canonicalStyleAnchor: string
  currentImplementationSnapshot: string
  finalAssetCatalog: string
  finalPromptPack: string
}

export type GameTheme = {
  id: string
  displayName: string
  description: string
  colors: ThemeColors
  assets: ThemeAssetSlots
  sounds: {
    ambient?: string
    move?: string
    capture?: string
  }
  particles: {
    id: string
    description: string
  }
  boardStyle: {
    frame: string
    pieceSet: string
  }
  panelStyle: {
    frame: string
    surface: string
  }
  buttonStyle: {
    frame: string
    surface: string
  }
  visualReferences?: ThemeVisualReferences
  decorSlots: ThemeDecorSlot[]
  productionBatches?: ThemeAssetBatch[]
}
