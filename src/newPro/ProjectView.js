import React from 'react'
import { useTheme } from './Context'


function ProjectView({ img,name,id }) {
  const {theme} = useTheme()
  return (
        <div>
          <div className={`md:w-[200px] md:h-[200px] h-[210px] rounded-2xl  w-[220] flex items-center justify-center mx-auto shadow-2xl  `}>
            <img src={img} className='md:h-full md:w-full w-full rounded-2xl  h-full' alt={id} />
          </div>
          <p className={`my-2 font-san text-slate-700 ${theme === 'light'? 'txt':'txt2'} `}>{name}</p>
        </div>
  )
}

export default ProjectView

