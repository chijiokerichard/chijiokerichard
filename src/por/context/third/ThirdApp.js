import React, { useState } from 'react'
import MyProvider from './MyProvider'
import WelcomePanel from '../second/Welcome'
import Received from '../Received/Received'

function ThirdApp() {
    const [theme,setTheme] = useState('light')
  return (
    <MyProvider theme={theme} setTheme={setTheme}>
      <WelcomePanel/>
      <Received/>
      <label>
        <input type="checkbox"
        checked={theme === 'dark'}
        onChange={(e)=>setTheme(e.target.checked?'dark':'light')}
        />
        use {theme} mode
      </label>
    </MyProvider>
  )
}

export default ThirdApp
