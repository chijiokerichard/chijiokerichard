import React from 'react'
import { useTheme } from './Context'

function Footer() {
    const {theme} = useTheme()
  return (
    <footer className={`text-center h-[30px] md:fixed   fixed   bottom-0 w-full ${theme === 'light'? 'bg-purple-500':'bg-green-300'} `}>come</footer>
  )
}

export default Footer
