import './TotalScoreContainer.css'

const TotalScoreContainer = ({ PlayerId, totalScore }) => {
  return (
    <div className="player-upper">
      <h1 className="player-title">{PlayerId}</h1>
      <h2 className="toatl-score" id={`${PlayerId}-total-points`}>
        {totalScore}
      </h2>
    </div>
  )
}

export default TotalScoreContainer
