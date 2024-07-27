import React, { useReducer } from 'react'
import { reducerTask } from './ReducerTask'
import { dataContext,dispatchDataContext } from './Context'

function Reducer({children,className}) {
    const [task,dispatch] = useReducer(reducerTask,[])

    return (
        <div className=' w-full h-[100vh]'>
        <dataContext.Provider value={task} className={className}>
            <dispatchDataContext.Provider value={dispatch} className={className}>
                {children}
            </dispatchDataContext.Provider>
        </dataContext.Provider>
        </div>
    )

} 
export default Reducer