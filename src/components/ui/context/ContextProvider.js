import React, { useState } from 'react'
import { cartItem,cartId, ProCartPage,mySmImg,increment } from './Context'

function ContextProvider({children}) {
    const [cart,setCart] = useState([])
    const [getCartId,setGetCartId] = useState(null)
    const [cartPage,setCartPage] = useState([])
    const [curImg,setCurImg] = useState(null)
    const [incre,setIncre] = useState(1)

    


  return (
    
    <cartItem.Provider value={{cart,setCart}}>

        <cartId.Provider value={{getCartId,setGetCartId}}>
        <ProCartPage.Provider value={{cartPage,setCartPage}}>
          <mySmImg.Provider value={{curImg,setCurImg}}>
            <increment.Provider value={{incre,setIncre}}>
      {children}
            </increment.Provider>
          </mySmImg.Provider>
        </ProCartPage.Provider>
        </cartId.Provider>
    </cartItem.Provider>
  )
}

export default ContextProvider
