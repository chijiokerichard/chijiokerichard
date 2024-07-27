import React, { useContext } from 'react'
import { ThemeContext } from './Context'
import '../context/btn.css'

function Button({children,onClick,type,disable}) {
    const theme = useContext(ThemeContext)
    const className = `button-${disable? '':theme}`
  return (
    <button disabled={disable} type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
