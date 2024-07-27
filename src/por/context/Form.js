import React, { useContext } from 'react'
import Button from './Button'
import Panel from './Panel'
import { CurrentUserContext } from './Context'


function Form() {
  const {currentUser,setCurrentUser} = useContext(CurrentUserContext)
  if(currentUser !== null){
    return <p>Your ar logged in as {currentUser.name} {currentUser.lastName}</p>
  }
  return (
    <Panel title='Welcome'>
        <input type="text" placeholder='search' />
        <Button onClick={()=>{
          setCurrentUser({name:'chijioke',lastName:'igwe'})
        }}>
            Log in
        </Button>
        <Button>
            Sign up
        </Button>
    </Panel>
  )
}

export default Form
