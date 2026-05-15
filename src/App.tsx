import { BottomActions } from './components/bottom-actions/BottomActions'
import { ChessBoard } from './components/chess-board/ChessBoard'
import { GameLayout } from './components/game-layout/GameLayout'
import { MoveHistory } from './components/move-history/MoveHistory'
import { PlayerCard } from './components/player-card/PlayerCard'
import { DecorSlot } from './components/theme/DecorSlot'
import { placeholderAvatars } from './data/placeholderAvatars'
import { useOfflineChessGame } from './game/useOfflineChessGame'
import { defaultTheme } from './themes/themeRegistry'

function App() {
  const { game, selectedSquare, invalidSquare, legalMoves, canUndo, handleSquareClick, resetGame, undoLastMove } =
    useOfflineChessGame()

  const currentTurnLabel = game.isGameOver
    ? 'Game finished gently. Start again whenever you like.'
    : `${game.turn === 'w' ? 'White' : 'Black'} to move`

  return (
    <GameLayout
      theme={defaultTheme}
      leftRail={
        <>
          <PlayerCard
            avatar={placeholderAvatars[1]}
            isActive={game.turn === 'b' && !game.isGameOver}
            name="Moon Baker"
            side="b"
            statusText={game.turn === 'b' ? 'Thinking...' : 'Waiting warmly'}
          />
          <DecorSlot label="Lamp asset slot" />
          <DecorSlot label="Cup asset slot" />
          <PlayerCard
            avatar={placeholderAvatars[0]}
            isActive={game.turn === 'w' && !game.isGameOver}
            name="Tea Sprite"
            side="w"
            statusText={game.turn === 'w' ? 'Your move' : 'Watching the rain'}
          />
        </>
      }
      board={
        <ChessBoard
          legalMoves={legalMoves}
          checkSquare={game.checkSquare}
          invalidSquare={invalidSquare}
          lastMove={game.lastMove}
          onSquareClick={handleSquareClick}
          selectedSquare={selectedSquare}
          squares={game.board}
        />
      }
      rightRail={
        <>
          <MoveHistory moves={game.moveHistory} />
          <DecorSlot label="Books asset slot" />
          <DecorSlot label="Window decor slot" />
        </>
      }
      bottomBar={
        <BottomActions
          canUndo={canUndo}
          currentTurnLabel={currentTurnLabel}
          onReset={resetGame}
          onUndo={undoLastMove}
          status={game.status}
        />
      }
    />
  )
}

export default App
