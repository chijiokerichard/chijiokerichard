import React, { useState } from 'react'
import { CurrentUserContext, ThemeContext } from '../Context'

function MyProvider({children,theme}) {
    const [currentUser,setCurrentUser] = useState(null)
  return (
    <ThemeContext.Provider value={theme}>
        <p>{theme}</p>
        <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
        {children}
        </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default MyProvider
