import type { GameTheme } from '../../themes/themeTypes'

type ThemeBackdropProps = {
  theme: GameTheme
}

export function ThemeBackdrop({ theme }: ThemeBackdropProps) {
  return (
    <>
      <div aria-hidden="true" className="theme-background" data-theme-background={theme.assets.backgrounds.roomBase.path} />
      <div aria-hidden="true" className="vignette-layer" data-theme-vignette={theme.assets.lighting.softVignette.path} />
      <div aria-hidden="true" className="particle-layer" data-theme-particles={theme.assets.particles.rainStreak.path} />
    </>
  )
}
