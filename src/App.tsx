import { BottomActions } from './components/bottom-actions/BottomActions'
import { CapturedTray, VsMedallion } from './components/captured-pieces/CapturedPieces'
import { getCapturedBy } from './components/captured-pieces/capturedPiecesUtils'
import { ChessBoard } from './components/chess-board/ChessBoard'
import { CoachBubble } from './components/coach-bubble/CoachBubble'
import { GameLayout } from './components/game-layout/GameLayout'
import { MoveHistory } from './components/move-history/MoveHistory'
import { PlayerCard } from './components/player-card/PlayerCard'
import { TurnPlaque } from './components/turn-plaque/TurnPlaque'
import { placeholderAvatars } from './data/placeholderAvatars'
import { useOfflineChessGame } from './game/useOfflineChessGame'
import { defaultTheme } from './themes/themeRegistry'

function App() {
  const { game, selectedSquare, invalidSquare, legalMoves, canUndo, handleSquareClick, resetGame, undoLastMove } =
    useOfflineChessGame()
  const whiteCapturedPieces = getCapturedBy(game.moveHistory, 'w')
  const blackCapturedPieces = getCapturedBy(game.moveHistory, 'b')

  const currentTurnLabel = game.isGameOver
    ? 'Game finished gently. Start again whenever you like.'
    : `${game.turn === 'w' ? 'White' : 'Black'} to move`

  return (
    <GameLayout
      theme={defaultTheme}
      leftRail={
        <>
          <TurnPlaque label={currentTurnLabel} />
          <PlayerCard
            avatar={placeholderAvatars[0]}
            isActive={game.turn === 'w' && !game.isGameOver}
            name="TeaLeaf"
            rating={1478}
            side="w"
            timer="08:37"
          />
          <CapturedTray pieces={whiteCapturedPieces} />
          <VsMedallion />
          <PlayerCard
            avatar={placeholderAvatars[1]}
            isActive={game.turn === 'b' && !game.isGameOver}
            name="MossyCat"
            rating={1526}
            side="b"
            timer="07:52"
          />
          <CapturedTray pieces={blackCapturedPieces} />
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
          <button className="analyze-button" type="button" disabled title="Analysis is planned for a later helper pass">
            Analyze Position
          </button>
          <CoachBubble statusText="In every move, there's a new possibility." />
        </>
      }
      bottomBar={
        <BottomActions
          canUndo={canUndo}
          onReset={resetGame}
          onUndo={undoLastMove}
          status={game.status}
        />
      }
    />
  )
}

export default App
