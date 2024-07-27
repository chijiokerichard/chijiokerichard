import React, {useState } from 'react'
import { useTheme } from './Context'


function Contact() {
    const [msg, setMsg] = useState('')
    const [email, setEmail] = useState('')
    const { theme } = useTheme()

    

    function submitForm(e) {
        e.preventDefault()
        // const empty = email.trim.length !== '@gmail.com' && msg.trim.length === 0
        
    }

    return (
        <div className=' md:col-start-2 col-start-1 relative text-white col-end-12 z-0 sd  row-start-2 '>
            <div className='ss top-0 left-0 bottom-0 right-0'>

                <form className='md:w-[400px]  w-[300px] h-full' onSubmit={submitForm}>
                    <label >
                        <p className={`uppercase ${theme === 'light' ? 'text-purple-500' : 'text-green-500'}`}>email</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className={`my-3 outline-none bg-transparent w-full rounded-md pl-1 h-[40px] md:py-3  border-2 border-slate-200`} type="tmy-2 ext" />
                    </label>
                    <label >
                        <p className={`uppercase ${theme === 'light' ? 'text-purple-500' : 'text-green-500'}`}>message</p>
                        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className={`my-3 border-2 w-full rounded-md pl-1 outline-none bg-transparent  border-slate-200`} cols="35" rows="4"></textarea>
                    </label>
                    <button type='submit' className={`md:w-[200px] w-[100px[ font-sans font-bold flex text-white rounded-full  items-center outline-none shadow-inner
                             ${theme === 'light' ? 'bg-purple-500' : 'bg-green-300'}  w-[100px] justify-center py-1 px-2 mx-auto`}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
