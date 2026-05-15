import type { GameTheme } from '../../themes/themeTypes'

type ThemeBackdropProps = {
  theme: GameTheme
}

export function ThemeBackdrop({ theme }: ThemeBackdropProps) {
  return (
    <>
      {/* TODO(asset): replace this CSS room block with theme.assets.background once Rainy Cafe room art is sliced. */}
      <div aria-hidden="true" className="theme-background" data-theme-background={theme.assets.background} />
      {/* TODO(asset): replace the window, shelf, plants, cup, and book silhouettes with decor PNG/WebP slots. */}
      <div aria-hidden="true" className="theme-decor-layer">
        <div className="cafe-window" />
        <div className="hanging-lamp" />
        <div className="plant-shelf shelf-left" />
        <div className="plant-shelf shelf-right" />
        <div className="table-mug" />
        <div className="book-stack" />
      </div>
      {/* TODO(asset): replace with theme.assets.vignetteLighting for painted warm lamp glow. */}
      <div aria-hidden="true" className="vignette-layer" data-theme-vignette={theme.assets.vignetteLighting} />
      {/* TODO(asset): replace this CSS rain with theme.assets.rainParticles sprite/particle sheet. */}
      <div aria-hidden="true" className="particle-layer" data-theme-particles={theme.assets.rainParticles} />
    </>
  )
}
