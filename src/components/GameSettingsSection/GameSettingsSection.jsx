// import { useState } from 'react'
import PropTypes from 'prop-types'
import InstructionsContainer from '../InstructionsContainer/InstructionsContainer'
import TargetScoreInput from '../TargetScoreInput/TargetScoreInput'

import './GameSettingsSection.css'

const GameSettingsSection = ({ onStartGame }) => {
  const min = 50
  const max = 150

  return (
    <section className="game-settings-section">
      <div className="game-settings-container">
        <InstructionsContainer />
        <TargetScoreInput
          min={min}
          max={max}
          placeholder={`${min} to ${max}`}
          onStartGame={onStartGame}
        />
      </div>
    </section>
  )
}
GameSettingsSection.propTypes = {
  onStartGame: PropTypes.func.isRequired,
}

export default GameSettingsSection

//
//
//
//

//  # instructions = game-settings-section
// .instructions-upper-container = instructions-container
// .instructions-upper-container img = instructions-img
// instructions-lower-container = target-score-container
//  .instructions-lower-container = target-score-container
//  .instructions-title = game-settings-title
// number-input = game-settings-title
// .instruction-input = .target-score-input-id
//  #instruction-btn = #game-settings-btn
