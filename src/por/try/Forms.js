import React, { useState } from 'react'
import { useDispatchData } from './Context'

function Forms() {
    const [value,setValue] = useState('')
    const dispatch= useDispatchData()
  return (
    <div className='flex xl:justify-between items-center h-full w-[500px] mx-auto'>
      <input type="text"
      className='border-2 rounded-md w-[400px] outline-0 py-1 pl-1 '
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      />
      <button className='text-2xl px-2 rounded-md bg-red-400 text-white' onClick={()=>{
        dispatch({
          type:'Add',
          id:Date.now(),
          value:value
        })
      }}>
        Add
      </button>
    </div>
  )
}

export default Forms
