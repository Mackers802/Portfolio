import React, { useState } from 'react'

export const ThemeProviderContext = React.createContext();

export const ThemeProvider  = (props) => {

    const [theme, setTheme] = useState("Light")
    
    function changeColor(e){
        setTheme(e.target.value)
    }
    
    return (
        <ThemeProviderContext.Provider value={{
            ...theme,
            changeColor
            }}>
            {props.children}
        </ThemeProviderContext.Provider>
    )
}
