import React from 'react'
import './styles/dice.css'

function DiceArea({rollDice,animate,rollDice2}) {
   
    return (
        <div className="dice-center">
            <img className={`diceImg img1 ${animate?`anim`:null}`} src={rollDice} alt="" />
            <img className={`diceImg2 img2 ${animate?`anim`:null}`} src={rollDice2} alt="" />
        </div>
    )
}

export default DiceArea
