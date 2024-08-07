import React, { useContext } from 'react'
import { ThemeContext } from './Context'

function Panel({title,children}) {
    const theme = useContext(ThemeContext)
    const clasName = `panel- ${theme}`

  return (
    <section className={clasName}>
        <h1>{title}</h1>
      {children}
    </section>
  )
}

export default Panel
