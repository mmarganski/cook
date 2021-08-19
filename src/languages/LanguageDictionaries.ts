import { PolishDictionary } from './pl_PL'
import { EnglishDictionary } from './eng_GB'
import { LanguageNames } from './LanguageNames'

export const LanguageDictionaries = {
    [LanguageNames.pl]: PolishDictionary,
    [LanguageNames.eng]: EnglishDictionary
}
