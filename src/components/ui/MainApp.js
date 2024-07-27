import React from 'react'
import ContextProvider from './context/ContextProvider'
import App from '../../App'

function MainApp() {
  return (
    <ContextProvider>
      <App/>
    </ContextProvider>
  )
}

export default MainApp
