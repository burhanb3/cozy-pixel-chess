export type ThemeAssetSlots = {
  background: string
  boardFrame: string
  lightSquare: string
  darkSquare: string
  panel: string
  button: string
  avatars: string
  decor: string
  particles: string
  ambientSound: string
}

export type ThemeColors = {
  pageBackground: string
  canvasBackground: string
  panelBackground: string
  panelBorder: string
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
