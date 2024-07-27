
export function reducerTask(task ,action){

    switch(action.type){
        case 'Add':{
            return [...task,{value:action.value,id:action.id}]
        }
        case 'Remove':{
            return task.filter((t)=>t.id !== action.id)
        }
        case 'Edit':{
            return {
                value:action.value
            }
        }
        default:
            throw Error('Unknown type' + action.type)
    }

}