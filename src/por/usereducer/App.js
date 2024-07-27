import React from 'react'
import TaskProvider from './TaskProvider'
import AddTask from './AddTask'
import TaskList from './TaskList'

function App() {
  return (
    <TaskProvider>
      <AddTask/>
      <TaskList/>
    </TaskProvider>
  )
}

export default App
