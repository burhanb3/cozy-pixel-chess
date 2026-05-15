import type { GameStatus } from '../../game/gameTypes'
import { PixelButton } from '../ui/PixelButton'
import { PixelPanel } from '../ui/PixelPanel'

type BottomActionsProps = {
  status: GameStatus
  currentTurnLabel: string
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

export function BottomActions({ status, currentTurnLabel, canUndo, onReset, onUndo }: BottomActionsProps) {
  const statusLabel = statusLabels[status]

  return (
    <PixelPanel className="action-bar-panel flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3 text-left">
        <div>
          <p className="text-xs font-black uppercase tracking-wide">{statusLabel.title}</p>
          <p className="text-xs font-bold text-[#6d4a34]">{statusLabel.detail}</p>
        </div>
        <p className="turn-pill text-sm font-black">{currentTurnLabel}</p>
      </div>
      <div className="action-buttons flex flex-wrap gap-2">
        <PixelButton className="button-green" onClick={onReset}>New Game</PixelButton>
        <PixelButton className="button-brown" disabled={!canUndo} onClick={onUndo}>
          Undo
        </PixelButton>
        <PixelButton className="button-gold" disabled title="Hints are planned for a later MVP step">
          Hint Soon
        </PixelButton>
        <PixelButton className="button-blue" disabled title="Puzzle mode is planned but intentionally not implemented yet">
          Puzzle Soon
        </PixelButton>
      </div>
    </PixelPanel>
  )
}
