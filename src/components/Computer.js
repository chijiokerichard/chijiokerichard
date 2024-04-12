import React from 'react'
import './styles/dice.css'


function Computer({score,total,autoPlay,play2}) {


  return (
    <div className="player2">
    <h1 className='fs-5'>Player 2</h1>
    <div className="score-container">
        {/* <div className="sc">
            <span>score</span>
            <div className="score score2">{score}</div>
        </div> */}
        <div className="sc">
            <span className="total fs-6 ">total</span>
            <div className="total-score total-score2">{total}</div>
        </div>
    </div>
    <div className="dice-roll2">
    { play2&& <button className="rol1" onClick={autoPlay}>roll 🎲</button>}
    </div>
</div>
  )
}

export default Computer
