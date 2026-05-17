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
    '--panel-shadow': theme.colors.panelShadow,
    '--wood-dark': theme.colors.woodDark,
    '--wood-mid': theme.colors.woodMid,
    '--parchment': theme.colors.parchment,
    '--muted-green': theme.colors.mutedGreen,
    '--rainy-blue': theme.colors.rainyBlue,
    '--light-square': theme.colors.lightSquare,
    '--dark-square': theme.colors.darkSquare,
    '--theme-accent': theme.colors.accent,
    '--theme-text': theme.colors.text,
    '--asset-room-background': `url("${theme.assets.backgrounds.roomBase.path}")`,
    '--asset-board-frame': `url("${theme.assets.boards.frame.path}")`,
    '--asset-square-light': `url("${theme.assets.boards.lightSquare.path}")`,
    '--asset-square-dark': `url("${theme.assets.boards.darkSquare.path}")`,
    '--asset-white-pieces': `url("${theme.assets.pieces.whiteSet.path}")`,
    '--asset-black-pieces': `url("${theme.assets.pieces.blackSet.path}")`,
    '--asset-turn-plaque-frame': `url("${theme.assets.panels.turnPlaqueFrame.path}")`,
    '--asset-player-panel-frame': `url("${theme.assets.panels.playerFrame.path}")`,
    '--asset-captured-tray': `url("${theme.assets.panels.capturedPiecesTray.path}")`,
    '--asset-vs-badge': `url("${theme.assets.panels.vsBadge.path}")`,
    '--asset-move-history-panel-frame': `url("${theme.assets.panels.moveHistoryFrame.path}")`,
    '--asset-analyze-button-frame': `url("${theme.assets.panels.analyzeButtonFrame.path}")`,
    '--asset-coach-comment-panel': `url("${theme.assets.panels.coachCommentPanel.path}")`,
    '--asset-quote-banner-frame': `url("${theme.assets.panels.quoteBannerFrame.path}")`,
    '--asset-button-normal': `url("${theme.assets.buttons.baseNormal.path}")`,
    '--asset-button-hover': `url("${theme.assets.buttons.baseHover.path}")`,
    '--asset-button-pressed': `url("${theme.assets.buttons.basePressed.path}")`,
    '--asset-button-play': `url("${theme.assets.buttons.play.path}")`,
    '--asset-button-undo': `url("${theme.assets.buttons.undo.path}")`,
    '--asset-button-hint': `url("${theme.assets.buttons.hint.path}")`,
    '--asset-button-focus': `url("${theme.assets.buttons.focus.path}")`,
    '--asset-button-settings': `url("${theme.assets.buttons.settings.path}")`,
    '--asset-avatar-frame': `url("${theme.assets.avatars.frame.path}")`,
    '--asset-tealeaf-portrait': `url("${theme.assets.avatars.teaLeafPortrait.path}")`,
    '--asset-mossycat-portrait': `url("${theme.assets.avatars.mossyCatPortrait.path}")`,
    '--asset-cat-mascot': `url("${theme.assets.decor.catMascot.path}")`,
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
