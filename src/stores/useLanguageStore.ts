import { useEffect, useState } from 'react'
import { LanguageDictionaries, LanguageNames } from '../languages'

export const useLanguageStore = () => {
    const [currentLanguage, setLanguage] = useState<LanguageNames>(
        window.localStorage.getItem('language')
            ? JSON.parse(window.localStorage.getItem('language') as LanguageNames)
            : LanguageNames.eng
    )

    useEffect(() => {
        window.localStorage.setItem('language', JSON.stringify(currentLanguage))
    }, [currentLanguage])

    return {
        currentLanguage,
        setLanguage,
        language: LanguageDictionaries[currentLanguage]
    }
}
