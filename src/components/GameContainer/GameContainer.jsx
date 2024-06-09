import Player from '../Player/Player'

import './GameContainer.css'

const GameContainer = ({ totalScores, currentScores }) => {
  const player1 = 'player1'
  const player2 = 'player2'
  return (
    <section className="game-container">
      <Player
        PlayerId={player1}
        totalScore={totalScores.player1}
        currentScore={currentScores.player1}
      />
      <Player
        PlayerId={player2}
        totalScore={totalScores.player2}
        currentScore={currentScores.player2}
      />
    </section>
  )
}

export default GameContainer
