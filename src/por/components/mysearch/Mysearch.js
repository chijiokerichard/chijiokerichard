import React from 'react'
import Profile from '../profile/Profile'
import SearcBar from '../search/SearcBar'
import myStyle from './mysearch.module.css'

function Mysearch() {
    const {mysearch} = myStyle
    return (
        <div className={mysearch}>
            <SearcBar />
            <Profile />
        </div>
    )
}

export default Mysearch
