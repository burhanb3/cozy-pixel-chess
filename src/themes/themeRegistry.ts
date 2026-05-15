import { rainyCafeTheme } from './rainyCafeTheme'

export const themeRegistry = {
  [rainyCafeTheme.id]: rainyCafeTheme,
} as const

export type ThemeId = keyof typeof themeRegistry

export const defaultTheme = rainyCafeTheme
