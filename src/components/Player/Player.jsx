import CurrentScoreContainer from '../CurrentScoreContainer/CurrentScoreContainer'
import TotalScoreContainer from '../TotalScoreContainer/TotalScoreContainer'
import './Player.css'

const Player = ({ PlayerId, totalScore, currentScore }) => {
  return (
    <div id={PlayerId} className=" player-container">
      <TotalScoreContainer PlayerId={PlayerId} totalScore={totalScore} />
      <CurrentScoreContainer PlayerId={PlayerId} currentScore={currentScore} />
    </div>
  )
}

export default Player
