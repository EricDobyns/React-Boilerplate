import React, { useState, useEffect } from 'react'

const LocalStorageContext = React.createContext(undefined as any)

export default function Context({ key, value, children }: {key: string, value: string, children: React.ReactNode}): JSX.Element {

    const [item, setItem] = useState(localStorage.getItem(key))

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [item])

    const defaultContext = {
        item,
        setItem
    }

    return (
        <LocalStorageContext.Provider value={defaultContext}>
            {children}
        </LocalStorageContext.Provider>
    )
}

export { LocalStorageContext }