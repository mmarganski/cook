import { useState } from 'react'
import { LanguageNames, LanguageDictionaries } from '../languages'

export const useLanguageStore = () => {
    const [currentLanguage, setLanguage] = useState<LanguageNames>(LanguageNames.eng)

    return {
        currentLanguage,
        setLanguage,
        language: LanguageDictionaries[currentLanguage]
    }
}
