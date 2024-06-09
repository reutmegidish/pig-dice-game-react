import './CurrentScoreContainer.css'

const CurrentScoreContainer = ({ PlayerId, currentScore }) => {
  return (
    <div className="player-bottom">
      <div className="current-points-container">
        <p className="current-score-title">current</p>
        <p className="current-points" id={`${PlayerId}-current-points`}>
          {currentScore}
        </p>
      </div>
    </div>
  )
}

export default CurrentScoreContainer
