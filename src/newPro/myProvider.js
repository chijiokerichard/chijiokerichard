import React, { useState } from 'react'
import { themeContext, activeContext, useActive, useTheme, useToggle,
     toggleContext,pageContext, selectedContext, useSelected,useProjectActive,projectPageContext,projecActivetContext,
     useProjectPage} from './Context'

export function MyProvider({ children }) {
    const themes = useTheme()
    const togglebar = useToggle()
    const actives = useActive()
    const select = useSelected()
    const selectActive = useProjectActive()
    const projectPage = useProjectPage()

    const [theme, setTheme] = useState(themes)
    const [active, setActive] = useState(actives)
    const [toggle, setToggle] = useState(togglebar)
    const [selected, setSelected] = useState(select)
    const [page,setPage] = useState([])
    const [pro,setPro] = useState(projectPage)

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            <activeContext.Provider value={{ active, setActive }}>
                <toggleContext.Provider value={{ toggle, setToggle }}>
                    <selectedContext.Provider value={{ selected, setSelected }}>
                        <pageContext.Provider value={{page,setPage}}>
                        <projecActivetContext.Provider value={selectActive}>
                            <projectPageContext.Provider value={{pro,setPro}}>
                        {children}
                            </projectPageContext.Provider>
                        </projecActivetContext.Provider>
                        </pageContext.Provider>
                    </selectedContext.Provider>
                </toggleContext.Provider>
            </activeContext.Provider>
        </themeContext.Provider>
    )
}

