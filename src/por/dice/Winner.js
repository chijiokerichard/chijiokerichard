import React from 'react'
import './styles/dice.css'


function Winner({WinFunc,restart,time}) {

    
    let ar = []
    let win;
    
    // let check = time ;
    
    if (time) {
        win = <div className={time?'winner':''}>
            <button  onClick={restart}>↪</button>
            {WinFunc()}
        </div>
        ar.push(win)
    }else{
            return ''
        
    }


    return (
        <div className={`text-center`}>
            {ar[0]}
        </div>
    )
}

export default Winner
