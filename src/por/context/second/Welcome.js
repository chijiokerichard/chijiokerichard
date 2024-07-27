import React, { useContext} from 'react'
import { CurrentUserContext } from '../Context'
import Panel from '../Panel'
import LoginForm from './LoginForm'
import Greetings from './Greetings'
// import Received from '../Received/Received'

function WelcomePanel() {
    const {currentUser} = useContext(CurrentUserContext)
  return (
    <Panel title='Welcome'>
        {currentUser !== null ?
        <Panel>
        {/* <Received/> */}
        <Greetings/>
        </Panel>
        :
        <LoginForm/>
    }
    </Panel>
  )
}

export default WelcomePanel
