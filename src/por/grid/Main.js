import React from 'react'
import Ex from './ex'

const Main = () => {
  return (
    <div>
      <Ex/>

      import React from 'react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Views from './Views'
import appStyle from './app.module.css'
import SearcBar from './search/SearcBar'
import Profile from './profile/Profile'

function App() {
  const { container2, container,inputContainer } = appStyle
  return (
    <div className={container}>
      <Navbar />
      <div>
        <div className={inputContainer}>
          <SearcBar />
          <Profile />
        </div>
        <div className={container2}>
          <Home />
          <Views />
        </div>

      </div>
    </div>
  )
}

export default App

    </div>
  )
}

export default Main
