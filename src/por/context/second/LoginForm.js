import React, { useContext, useState } from 'react'
import Panel from '../Panel'
import Button from '../Button'
import { CurrentUserContext } from '../Context'

function LoginForm() {
    const {currentUser,setCurrentUser} = useContext(CurrentUserContext)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const canLogin = firstName.trim() !== '' && lastName.trim() !== '';

  return (
    <Panel>
      {currentUser}
      <form>
        <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}  placeholder='firstName'/>
        <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName} placeholder='lastName'/>
        <Button onClick={()=>setCurrentUser({name:`${firstName} ${lastName}`})} disable ={!canLogin} type='submit'>Login in</Button>
      </form>
      {!canLogin && <p>Fill in the both fields</p>}
    </Panel>
  )
}

export default LoginForm
