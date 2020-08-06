import { useContext } from 'react'
import { LocaleContext } from '../contexts/LocaleContext'
import { strings } from "../utilities/translations/strings"

export default function useTranslation(): any {
    const { language } = useContext(LocaleContext)

    function translate(key: string) {
        if (!strings[language][key]) {
            console.warn(`Translation '${key}' for locale '${language}' not found.`)
        }

        return strings[language][key] || ``
    }

    return {
        translate,
        language
    }
}