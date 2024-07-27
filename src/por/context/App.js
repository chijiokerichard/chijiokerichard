import React, { useContext, useState } from 'react'
import { ThemeContext,CurrentUserContext } from './Context'
import Form  from './Form'
import Button from './Button'
function App() {
    const [currentUser,setCurrentUser] = useState(null)
    const theme = useContext(ThemeContext)
    const [data,setData] = useState(theme)
    
  return (
    <ThemeContext.Provider value={data}>
        <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
      <Form/>
      <label>
        <input
        type='checkbox'
        checked={data === 'dark'}
        onChange={(e)=>setData(e.target.checked ? 'dark':'light')}
        />
        use {data} mode
      </label>
      <Button onClick={()=>{
        setData('light')
      }}>
        {data}
      </Button>
        </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
