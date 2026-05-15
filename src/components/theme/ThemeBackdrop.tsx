import type { GameTheme } from '../../themes/themeTypes'

type ThemeBackdropProps = {
  theme: GameTheme
}

export function ThemeBackdrop({ theme }: ThemeBackdropProps) {
  return (
    <>
      <div aria-hidden="true" className="theme-background" data-theme-background={theme.assets.background} />
      <div aria-hidden="true" className="particle-layer" data-theme-particles={theme.assets.particles} />
    </>
  )
}
