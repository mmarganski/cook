import { useStore } from 'outstated'
import { useLanguageStore } from '../stores'

export const useTranslation = () => useStore(useLanguageStore).language
