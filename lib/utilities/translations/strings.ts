type Strings = {
    [key in string]: {
        [key: string]: string
    }
}

export function isValidLocale(locale: string): boolean {
    return locales.includes(locale)
}

export const locales: string[] = [
    `en`,
    `es`
]

export const strings: Strings = {
    en: {
        hello: `hello`,
        world: `world`
    },
    es: {
        hello: `hola`,
        world: `mundo`
    }
}