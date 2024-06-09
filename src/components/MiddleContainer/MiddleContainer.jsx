import GetElement from '../GetElement/GetElement.jsx'

import './MiddleContainer.css'

const MiddleContainer = ({ dice, rollDice, hold, targetScore, resetGame }) => {
  return (
    <div className="middle-container">
      <div className="middle-container-element">
        <h2 id="target-points">{targetScore}</h2>

        <GetElement
          type="button"
          id="new-btn"
          img
          src="./assets/images/btns/new2.png"
          className="game-btn"
          alt="new-game-icon"
          text="New
            Game"
          onClick={resetGame}
        />

        <GetElement
          type="dice-container"
          id="dice1"
          className="dice-container"
          imgSrc={`./images/dice/${dice.dice1}.png`}
          altText="dice-1"
        />

        <GetElement
          type="dice-container"
          id="dice2"
          className="dice-container"
          imgSrc={`./images/dice/${dice.dice2}.png`}
          altText="dice2"
        />

        <GetElement
          type="button"
          id="roll-btn"
          className="dice-container"
          imgSrc="./assets/images/dice/1.png"
          altText="dice-icon"
          text="Roll Dice"
          onClick={rollDice}
        />
        <GetElement
          type="button"
          id="hold-btn"
          className="game-btn"
          imgSrc="./assets/images/dice/1.png"
          altText="hold-icon"
          text="Hold"
          onClick={hold}
        />
      </div>
    </div>
  )
}

export default MiddleContainer
