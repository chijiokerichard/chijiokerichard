import React from 'react'
import searchStyle from './searchbar.module.css'
import { GiSettingsKnobs } from 'react-icons/gi'



function SearcBar({OnHandleSubmit}) {
  return (
    <>
     <form onSubmit={OnHandleSubmit} className={searchStyle.form}>
      <div>
        <input type="text" className={searchStyle.input} placeholder={`search`} />
        <button>
          <GiSettingsKnobs color='white'/>
          </button>
      </div>
     </form> 
    </>
  )
}

export default SearcBar
