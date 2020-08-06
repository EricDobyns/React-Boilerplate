import { useContext, FormEvent } from "react"
import { LocaleContext } from "../../lib/contexts/LocaleContext"
import { locales } from "../../lib/utilities/translations/strings"

export function LocaleSwitcher(): JSX.Element {
    const { language, setLanguage } = useContext(LocaleContext)
	
    function handleChange(event: FormEvent<HTMLSelectElement>) {
        setLanguage(event.currentTarget.value)
    }

    return (
        <select value={language} onChange={handleChange}>
            {locales.map(locale => {
                return <option key={locale} value={locale}>{locale}</option>
            })}
        </select>		
    )
}