import { useProductsStore } from './useProductsStore'
import { useLanguageStore } from './useLanguageStore'
import { useRecipesStore } from './useRecipesStore'

export const storeGroup = [
    useProductsStore,
    useRecipesStore,
    useLanguageStore
]
