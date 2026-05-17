import { PixelButton } from '../ui/PixelButton'
import type { GameStatus } from '../../game/gameTypes'

type BottomActionsProps = {
  status: GameStatus
  canUndo: boolean
  onReset: () => void
  onUndo: () => void
}

const quoteLabels: Record<GameStatus, string> = {
  playing: 'Rainy days are perfect for quiet victories.',
  check: 'A careful move can quiet the room.',
  checkmate: 'Checkmate. The cafe keeps the memory warm.',
  stalemate: 'Stalemate. Even the rain pauses for a draw.',
  draw: 'A peaceful table, an even game.',
}

export function BottomActions({ status, canUndo, onReset, onUndo }: BottomActionsProps) {
  return (
    <div className="bottom-action-cluster">
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
      <p className="status-quote">{quoteLabels[status]}</p>
    </div>
  )
}
