import React from 'react'
import { useSelected, useTheme, useToggle } from './Context'

function List({ id, name, icon}) {
    const { theme } = useTheme()
    const {selected,setSelected} = useSelected()
    const {toggle,setToggle} = useToggle()
    
    return (
        <li onClick={()=>{
            setSelected(id)
            setToggle(!toggle)
        }}
            className={`md:flex  flex gap-1 ${toggle && 'hidden'} items-center justify-start border-[5px]
      rounded-md  ${selected === name ? theme === 'light' ? ' bg-purple-500 border-green-300' :
                    ' border-purple-500 bg-green-300' :
                    theme === 'light' ? 'hover:bg-green-200 hover:border-purple-500' :
                        'hover:bg-purple-300 hover:border-green-300'} 
      border-t-0 border-b-0 border-r-0 `}>{icon}{name}</li>

    )
}

export default List
