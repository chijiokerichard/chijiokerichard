import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import './app.css'
// import SearcBar from './search/SearcBar'
// import Profile from './profile/Profile'
import Views from './view/View'
import { stations } from '../data'
import Mysearch from './mysearch/Mysearch'

function App() {
  const [backGround, setBackground] = useState('white')

  function changeBackground() {
    if (backGround === 'white') {
      setBackground('black')
    } else {
      setBackground('white')
    }
  }

  return (
    <div className='bg'>
      <div className='containers'>
        <div className='n'>
          <Navbar />
        </div>
        <div className='v'>
          <Mysearch/>
        </div>
        <div className='h'>
          <Home product={stations} />
        </div>
        <div className='f'>
          <Views />
        </div>
      </div>
    </div>
  )
}

export default App
