import React from 'react'
import './styles/dice.css'

function Human({changeDice,score,total,play}) {
    
    return (
        <div className="player1">
            <h1 className='fs-5'>Player 1</h1>
            <div className="score-container">
                {/* <div>
                    <span className='fs-5'>score</span>
                    <div className="score fs-5">{score}</div>
                </div> */}

                <div>
                    <span className="total fs-5 flex-shrink-1">total</span>
                    <div className="total-score fs-5">{total}</div>
                </div>
            </div>
            <div className="dice-roll">
                { play&& <button className="rol1" onClick={changeDice }>roll 🎲</button>}
            </div>
        </div>
    )
}

export default Human
