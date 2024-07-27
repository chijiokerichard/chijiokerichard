import React, { useState } from 'react'
import { CurrentUserContext } from '../Context'
import WelcomePanel from './Welcome'

function SecondApp() {
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <div>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <WelcomePanel />
        </CurrentUserContext.Provider>
        </div>
    )
}

export default SecondApp
