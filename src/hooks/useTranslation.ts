import { useStore } from 'outstated'
import { useLanguageStore } from '../stores'

export const useTranslation = () => {
    const { language } = useStore(useLanguageStore)

    return language
}
