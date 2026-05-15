import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import type { GameTheme } from '../../themes/themeTypes'
import { ThemeBackdrop } from '../theme/ThemeBackdrop'

type GameLayoutProps = PropsWithChildren<{
  theme: GameTheme
  leftRail: ReactNode
  board: ReactNode
  rightRail: ReactNode
  bottomBar: ReactNode
}>

export function GameLayout({ theme, leftRail, board, rightRail, bottomBar }: GameLayoutProps) {
  const themeVars = {
    '--theme-bg': theme.colors.canvasBackground,
    '--panel-bg': theme.colors.panelBackground,
    '--panel-border': theme.colors.panelBorder,
  } as CSSProperties

  return (
    <main className="game-page pixelated" style={{ backgroundColor: theme.colors.pageBackground }}>
      <div className="game-canvas" style={themeVars}>
        <ThemeBackdrop theme={theme} />
        <div className="game-hud">
          <aside className="left-rail">{leftRail}</aside>
          <section className="board-stage">{board}</section>
          <aside className="right-rail">{rightRail}</aside>
          <footer className="bottom-bar">{bottomBar}</footer>
        </div>
      </div>
    </main>
  )
}
