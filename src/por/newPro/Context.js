import { createContext, useContext} from "react";

export const themeContext = createContext('light')
export const activeContext = createContext(false)
export const toggleContext = createContext(true)
export const selectedContext = createContext('Home')
export const projecActivetContext = createContext('All')
export const pageContext = createContext(null)
export const projectPageContext = createContext([])


export function useProjectActive(){
    return useContext(projecActivetContext)
}
export function useActive(){
    return useContext(activeContext)
}

export function useProjectPage(){
    return useContext(projectPageContext)
}

export function usePage(){
    return useContext(pageContext)
}

export function useTheme (){
    return useContext(themeContext)
}

export function useSelected(){
    return useContext(selectedContext)
}

export function useToggle(){
    return useContext(toggleContext)
}