export type ThemeAssetSlots = {
  background: string
  vignetteLighting: string
  rainParticles: string
  boardFrame: string
  boardSurface: string
  lightSquare: string
  darkSquare: string
  playerPanel: string
  moveHistoryPanel: string
  actionButtonBase: string
  avatarFrame: string
  avatars: string
  decor: string
  ambientSound: string
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
  decorSlots: ThemeDecorSlot[]
}
