import type { GameStatus } from '../../game/gameTypes'
import { PixelButton } from '../ui/PixelButton'
import { PixelPanel } from '../ui/PixelPanel'

type BottomActionsProps = {
  status: GameStatus
  canUndo: boolean
  onReset: () => void
  onUndo: () => void
}

const statusLabels: Record<GameStatus, { title: string; detail: string }> = {
  playing: { title: 'Local play', detail: 'A quiet table for two sides' },
  check: { title: 'Check', detail: 'The king needs a careful move' },
  checkmate: { title: 'Checkmate', detail: 'Game finished' },
  stalemate: { title: 'Stalemate', detail: 'No legal move remains' },
  draw: { title: 'Draw', detail: 'The game is peacefully even' },
}

export function BottomActions({ status, canUndo, onReset, onUndo }: BottomActionsProps) {
  const statusLabel = statusLabels[status]

  return (
    <PixelPanel className="action-bar-panel">
      <div className="action-status">
        <p className="action-status-title">{statusLabel.title}</p>
        <p className="action-status-detail">{statusLabel.detail}</p>
      </div>
      <div className="action-buttons">
        <PixelButton className="button-green action-button-play" onClick={onReset}>
          <span className="control-icon leaf-control" aria-hidden="true" />
          Play
        </PixelButton>
        <PixelButton className="button-brown" disabled={!canUndo} onClick={onUndo}>
          <span className="control-icon undo-control" aria-hidden="true" />
          Undo
        </PixelButton>
        <PixelButton className="button-gold" disabled title="Hints are planned for a later MVP step">
          <span className="control-icon hint-control" aria-hidden="true" />
          Hint
          <span className="hint-count" aria-label="3 hints available later">3</span>
        </PixelButton>
        <PixelButton className="button-blue" disabled title="Focus mode is planned for a later calm-play pass">
          <span className="control-icon focus-control" aria-hidden="true" />
          Focus
        </PixelButton>
        <PixelButton className="button-purple" disabled title="Settings are planned but intentionally not implemented yet">
          <span className="control-icon settings-control" aria-hidden="true" />
          Settings
        </PixelButton>
      </div>
      <p className="status-quote">Rainy days are perfect for quiet victories.</p>
    </PixelPanel>
  )
}
