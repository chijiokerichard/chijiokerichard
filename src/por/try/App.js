import React from 'react'
import Reducer from'./Reducer'
import List from './List'
import Forms from './Forms'

function App() {
  return (
    <Reducer>
        <div>
        <Forms/>
      <List/>
        </div>
    </Reducer>
  )
}

export default App
