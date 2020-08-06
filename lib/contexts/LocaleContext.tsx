import React, { useState, useEffect } from 'react'
import { isValidLocale } from "../utilities/translations/strings"

const LocaleContext = React.createContext(undefined as any)

export default function LocaleProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const defaultLanguage = `en`
    const [language, setLanguage] = useState(defaultLanguage)

    // Load Language From Local Storage
    useEffect(() => {
        const loadedLanguage: any = localStorage.getItem(`language`)
        if (!loadedLanguage) {
            const [browserSetting] = navigator.language.split(`-`)
            setLanguage(!isValidLocale(browserSetting) ? defaultLanguage : browserSetting)
        } else if (loadedLanguage != defaultLanguage) {
            setLanguage(JSON.parse(loadedLanguage))
        }
    }, [])

    // Save Language On Change
    useEffect(() => {
        if (JSON.stringify(language) != undefined) {
            localStorage.setItem(`language`, JSON.stringify(language))	
        }
    }, [language])

    const defaultContext = {
        language,
        setLanguage
    }

    return (
        <LocaleContext.Provider value={defaultContext}>
            {children}
        </LocaleContext.Provider>
    )
}

export { LocaleContext }