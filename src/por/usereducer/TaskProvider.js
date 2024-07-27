import React, { useReducer } from 'react'
import { TaskContext, TaskDispatchContext, initialTasks } from './ContextReducer'
import { taskReducer } from './method'

function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)
    return (
        <TaskContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>
    )
}

export default TaskProvider
