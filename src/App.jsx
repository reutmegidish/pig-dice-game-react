import { useState } from 'react'
import './App.css'
import GameSettingsSection from './components/GameSettingsSection/GameSettingsSection'
import GameContainer from './components/GameContainer/GameContainer'

import './reset.css'

import MiddleContainer from './components/MiddleContainer/MiddleContainer'

function App() {
  const [showSettings, setShowSettings] = useState(true)

  const [totalScores, setTotalScores] = useState({ player1: 0, player2: 0 })
  const [currentScores, setCurrentScores] = useState({
    player1: 0,
    player2: 0,
  })
  const [activePlayer, setActivePlayer] = useState('player1')
  const [dice, setDice] = useState({ dice1: 1, dice2: 1 })
  const [targetScore, setTargetScore] = useState(0)

  const handleStartGame = (value) => {
    setTargetScore(value)
    setShowSettings(false)
  }

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1
    const newDice2 = Math.floor(Math.random() * 6) + 1
    setDice({ dice1: newDice1, dice2: newDice2 })

    const currentSum = newDice1 + newDice2
    setCurrentScores((prevScores) => ({
      ...prevScores,
      [activePlayer]: prevScores[activePlayer] + currentSum,
    }))
  }

  const handleHoldBtn = () => {
    if (totalScores[activePlayer] + currentScores[activePlayer] > targetScore) {
      resetGame()
      alert(`${activePlayer === 'player1' ? 'player2' : 'player1'} wins!`)
      return
    }
    if (
      totalScores[activePlayer] + currentScores[activePlayer] ===
      targetScore
    ) {
      resetGame()
      alert(`${activePlayer} wins!`)
      return
    }

    setTotalScores((prevScores) => ({
      ...prevScores,
      [activePlayer]: prevScores[activePlayer] + currentScores[activePlayer],
    }))

    setCurrentScores((prevScores) => ({
      ...prevScores,
      [activePlayer]: 0,
    }))

    changeActivePlayer()
  }

  function changeActivePlayer() {
    setActivePlayer((prevPlayer) =>
      prevPlayer === 'player1' ? 'player2' : 'player1'
    )
  }

  const resetGame = () => {
    setTotalScores({ player1: 0, player2: 0 })
    setCurrentScores({ player1: 0, player2: 0 })
    setDice({ dice1: 1, dice2: 1 })
    setActivePlayer('player1')
    setShowSettings(true)
  }

  return (
    <div className="app">
      <GameContainer totalScores={totalScores} currentScores={currentScores} />

      <MiddleContainer
        dice={dice}
        rollDice={rollDice}
        hold={handleHoldBtn}
        targetScore={targetScore}
        resetGame={resetGame}
      />

      {showSettings && <GameSettingsSection onStartGame={handleStartGame} />}
    </div>
  )
}

export default App
