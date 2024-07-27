import { useContext } from "react"
import { TaskContext,TaskDispatchContext } from "./ContextReducer"

export function taskReducer(tasks,action) {
    switch(action.type){
        case 'added':{
            return [...tasks,{
                id:action.id,
                text:action.text,
                done:false
            }]
        }
        case 'changed':{
            return tasks.map(t=>{
                if(t.id === action.task.id){
                    return tasks
                }else{
                    return t
                }
            })
        }
        case 'deleted':{
            return tasks.filter(t=> t.id !== action.id)
        }
        default:
            throw Error(`Unknown action ${action.type}`)

    }
    
}

export function useTask(){
    return useContext(TaskContext)
}

export function useTaskDispatch(){
    return useContext(TaskDispatchContext)
}