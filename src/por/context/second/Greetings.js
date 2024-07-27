import React, { useContext, useEffect } from 'react'
import { CurrentUserContext } from '../Context'
// import Received from './Received/Received'

function Greetings() {
    const {currentUser} = useContext(CurrentUserContext)
    useEffect(()=>{
        const rem = setInterval(()=>{
        },3000)
        return ()=>{
            setTimeout(rem)
        }
    },[currentUser])
  return (
   <p>Welcome back, {currentUser.name}</p>
  )
}

export default Greetings
