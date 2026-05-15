import { useMemo, useState } from 'react'
import type { Square } from 'chess.js'
import { createGameState, getLegalMoves, makeMove, undoMove } from './chessGame'
import type { ChessGameState } from './gameTypes'

export type OfflineChessController = {
  game: ChessGameState
  selectedSquare: Square | null
  invalidSquare: Square | null
  legalMoves: ReturnType<typeof getLegalMoves>
  canUndo: boolean
  handleSquareClick: (square: Square) => void
  resetGame: () => void
  undoLastMove: () => void
}

export function useOfflineChessGame(): OfflineChessController {
  const [game, setGame] = useState<ChessGameState>(() => createGameState())
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null)
  const [invalidSquare, setInvalidSquare] = useState<Square | null>(null)

  const legalMoves = useMemo(
    () => (selectedSquare ? getLegalMoves(game.fen, selectedSquare) : []),
    [game.fen, selectedSquare],
  )

  function clearBoardUiState() {
    setSelectedSquare(null)
    setInvalidSquare(null)
  }

  function handleSquareClick(square: Square) {
    const clickedSquare = game.board.find((boardSquare) => boardSquare.square === square)

    if (game.isGameOver) {
      clearBoardUiState()
      return
    }

    if (!selectedSquare) {
      if (clickedSquare?.piece?.color === game.turn) {
        setSelectedSquare(square)
        setInvalidSquare(null)
      }
      return
    }

    if (selectedSquare === square) {
      clearBoardUiState()
      return
    }

    if (clickedSquare?.piece?.color === game.turn) {
      setSelectedSquare(square)
      setInvalidSquare(null)
      return
    }

    const isLegalTarget = legalMoves.some((move) => move.to === square)

    if (!isLegalTarget) {
      setInvalidSquare(square)
      return
    }

    // TODO(multiplayer): replace this local state mutation with a server-authoritative move request for online games.
    const nextGame = makeMove(game, selectedSquare, square)

    if (nextGame) {
      setGame(nextGame)
      clearBoardUiState()
    }
  }

  function resetGame() {
    setGame(createGameState())
    clearBoardUiState()
  }

  function undoLastMove() {
    // TODO(multiplayer): undo rules need room-level agreement before this control is enabled online.
    setGame((currentGame) => undoMove(currentGame))
    clearBoardUiState()
  }

  return {
    game,
    selectedSquare,
    invalidSquare,
    legalMoves,
    canUndo: game.moveHistory.length > 0,
    handleSquareClick,
    resetGame,
    undoLastMove,
  }
}
