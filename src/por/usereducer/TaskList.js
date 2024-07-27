import React from 'react'
import { useTask } from './method'
import Task from './Task'

function TaskList() {
  const tasks = useTask()
  return (
    <ul>
      {tasks.map(task=><li key={task.id}>
          <Task task={task}/>
        </li>
      )}
    </ul>
  )
}

export default TaskList
