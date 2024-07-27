import { createContext, useContext } from "react";

export const dataContext = createContext([])
export const dispatchDataContext = createContext(null)


export function useMyTask(){
    return useContext(dataContext)
}

export function useDispatchData(){
    return useContext(dispatchDataContext)
}