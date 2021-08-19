import { useEffect, useState } from 'react'
import { LanguageDictionaries, LanguageNames } from '../languages'

const languageKey = process.env.REACT_APP_STORAGE_LANGUAGE as string

export const useLanguageStore = () => {
    const [currentLanguage, setLanguage] = useState<LanguageNames>(
        window.localStorage.getItem(languageKey)
            ? JSON.parse(window.localStorage.getItem(languageKey) as LanguageNames)
            : LanguageNames.eng
    )

    useEffect(() => {
        window.localStorage.setItem(languageKey, JSON.stringify(currentLanguage))
    }, [currentLanguage])

    return {
        currentLanguage,
        setLanguage,
        language: LanguageDictionaries[currentLanguage]
    }
}
