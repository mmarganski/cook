import { LocalStorageMethods } from '../types'

export const useLocalStorageProducts = () => {
    const set = (value: string) => window.localStorage.setItem('products', value)
    const get = () => window.localStorage.getItem('products') || '[]'
    const remove = () => window.localStorage.removeItem('products')

    return {set, get, remove} as LocalStorageMethods
}

export const useLocalStorageRecipes = () => {
    const set = (value: string) => window.localStorage.setItem('recipes', value)
    const get = () => window.localStorage.getItem('recipes') || '{}'
    const remove = () => window.localStorage.removeItem('recipes')

    return {set, get, remove} as LocalStorageMethods
}
