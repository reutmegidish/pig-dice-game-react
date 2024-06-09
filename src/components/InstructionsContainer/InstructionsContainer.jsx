import instructionsConfig from '../../config/instructionsConfig'
import InstructionItem from '../InstructionItem/InstructionItem'

import './InstructionsContainer.css'

const InstructionsContainer = () => {
  const sortedInstructions = instructionsConfig.sort(
    (a, b) => a.order - b.order
  )

  return (
    <section className="instructions-container">
      <h1 className="game-settings-title">Game Instructions</h1>
      <div className="div-intructions-container">
        {sortedInstructions.map((instruction) => (
          <InstructionItem key={instruction.key} {...instruction} />
        ))}
      </div>
    </section>
  )
}

export default InstructionsContainer
