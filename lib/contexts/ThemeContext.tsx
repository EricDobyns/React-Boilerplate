import React, { useState, useEffect } from 'react'

const ThemeContext = React.createContext(undefined as any)

export default function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const defaults = {
        pageColor: `#eeeeee`,
    }

    const [theme, setTheme] = useState(defaults)

    // Load Theme From Local Storage
    useEffect(() => {
        const loadedTheme: any = localStorage.getItem(`theme`)
        if (!loadedTheme) {
            setTheme(defaults)
        } else if (loadedTheme != defaults) {
            setTheme(JSON.parse(loadedTheme))
        }
    }, [])

    // Save Theme On Change
    useEffect(() => {
        if (JSON.stringify(theme) != undefined) {
            localStorage.setItem(`theme`, JSON.stringify(theme))	
        }
    }, [theme])

    const defaultContext = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={defaultContext}>
            {theme ? children : null}
        </ThemeContext.Provider>
    )
}

export { ThemeContext }