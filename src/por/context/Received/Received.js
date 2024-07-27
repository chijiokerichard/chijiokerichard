import React, { useContext } from 'react'
import { CurrentUserContext } from '../Context'

function Received() {
    const {currentUser} = useContext(CurrentUserContext)
  return (
        <p>I received the user named {currentUser !== null? currentUser.name : ''}</p>
  )
}

export default Received
