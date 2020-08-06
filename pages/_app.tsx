import type { AppProps } from 'next/app'
import RootProvider from "../lib/contexts/RootContext"
import ThemeProvider from "../lib/contexts/ThemeContext"
import LocaleProvider from '../lib/contexts/LocaleContext'

export default function Application({ Component, pageProps }: AppProps): JSX.Element {

    // Silence console logs in production
    if (process.env.NODE_ENV === `production`) {
        console.log = console.info = console.warn = console.debug = function () { }
    }

    return (
        <ThemeProvider>
            <RootProvider>
                <LocaleProvider>
                    <Component {...pageProps} />
                </LocaleProvider>
            </RootProvider>
        </ThemeProvider>
    )
}