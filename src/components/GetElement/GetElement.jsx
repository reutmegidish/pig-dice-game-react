import './GetElement.css'

const GetElement = ({
  type,
  id,

  imgSrc,
  altText,
  text,
  onClick,
}) => {
  return type === 'button' ? (
    <button id={id} className="game-btn" onClick={onClick}>
      {text}
    </button>
  ) : (
    <div className="dice-container">
      <img className="dice-img" id={id} src={imgSrc} alt={altText} />
    </div>
  )
}

export default GetElement
