import type { GameTheme } from '../../themes/themeTypes'

type ThemeBackdropProps = {
  theme: GameTheme
}

export function ThemeBackdrop({ theme }: ThemeBackdropProps) {
  return (
    <>
      <div aria-hidden="true" className="theme-background" data-theme-background={theme.assets.backgrounds.roomBase.path} />
      {/* TODO(asset): replace with theme.assets.lighting.softVignette for painted warm lamp glow. */}
      <div aria-hidden="true" className="vignette-layer" data-theme-vignette={theme.assets.lighting.softVignette.path} />
      {/* TODO(asset): replace this CSS rain with theme.assets.particles.rainStreak sprite/particle sheet. */}
      <div aria-hidden="true" className="particle-layer" data-theme-particles={theme.assets.particles.rainStreak.path} />
    </>
  )
}
