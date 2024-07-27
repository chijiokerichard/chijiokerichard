import { createContext, useContext} from "react";

export const cartItem = createContext([])
export const cartId = createContext(null)
export const ProCartPage = createContext([])
export const mySmImg =createContext(null)
export const increment =createContext(null)
export const initialCop = createContext(null)

export function useIcrement(){
    return useContext(increment)
}

export function useCart(){
    return useContext(cartItem)
}

export function useCoupon(){
    return useContext(initialCop)
}

export function useCurSmImg(){
    return useContext(mySmImg)
}


export function useId(){
    return useContext(cartId)
}

export function useCartPage(){
    return useContext(ProCartPage)
}