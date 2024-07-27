import React from 'react'
import '../grid/gird.css'

function ex() {
  return (
    <div>
      <h1 className='title'>
        <span>The Complete Guild to</span>
        <br/>CSS Grid
      </h1>
      <div id='container'>
        <div className='item header' style={{backgroundColor:'orange'}}>header</div>
        <div className='item main' style={{backgroundColor:'blue'}}>main</div>
        <div className='item sidebar' style={{backgroundColor:'pink'}}>sidebar</div>
        <div className='item footer' style={{backgroundColor:'violet'}}>footer</div>
        {/* <div className='item one'>1</div>
        <div className='item two'>2</div>
        <div className='item three'>3</div>
        <div className='item four'>4</div>
        <div className='item five'>5</div>
        <div className='item six'>6</div> */}
      </div>
    </div>
  )
}

export default ex
