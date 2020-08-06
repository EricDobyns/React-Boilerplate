import React, { useState } from 'react'

const RootContext = React.createContext(undefined as any)

export default function RootProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const [context, setContext] = useState({
        user: null
    })

    const defaultContext = {
        context,
        setContext
    }

    return (
        <RootContext.Provider value={defaultContext}>
            {children}
        </RootContext.Provider>
    )
}

export { RootContext }