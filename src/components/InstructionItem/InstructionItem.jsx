import PropTypes from 'prop-types'

import './InstructionItem.css'

const InstructionItem = ({ message, iconName }) => {
  const imagePath = `./images/instructions/${iconName}`
  const altImageAtr = 'Instruction Icon'

  return (
    <div className="instruction">
      <img src={imagePath} alt={altImageAtr} className="instruction-img" />
      <p>{message}</p>
    </div>
  )
}

InstructionItem.propTypes = {
  message: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
}

export default InstructionItem
