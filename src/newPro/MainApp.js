import React from 'react'
import App from './App'
import { MyProvider } from './myProvider'

function MainApp() {
  return (
    <MyProvider>
    <App/>
    </MyProvider>
  )
}

export default MainApp
