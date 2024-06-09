import { useState } from 'react'
import PropTypes from 'prop-types'
import './TargetScoreInput.css'

const TargetScoreInput = ({ min, max, placeholder, onStartGame }) => {
  const [inputValue, setInputValue] = useState('')
  const selectTargetScoreTitle = 'Please Select The Target Score'

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleStartClick = () => {
    const value = parseInt(inputValue, 10)
    if (value >= min && value <= max) {
      onStartGame(value)
    } else {
      alert(`Please enter a value between ${min} and ${max}`)
    }
  }

  return (
    <div className="target-score-container">
      <h2 className="game-settings-title">{selectTargetScoreTitle}</h2>
      <input
        id="target-score-input-id"
        type="number"
        name="targetScore"
        value={inputValue}
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="target-score-input"
      />
      {inputValue && Number(inputValue) >= min && Number(inputValue) <= max && (
        <button onClick={handleStartClick} id="game-settings-btn">
          Start Game
        </button>
      )}
    </div>
  )
}

TargetScoreInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  onStartGame: PropTypes.func.isRequired,
}

TargetScoreInput.defaultProps = {
  placeholder: '',
}

export default TargetScoreInput
