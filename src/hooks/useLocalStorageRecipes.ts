import { Storage } from '../types'

export const useLocalStorageRecipes = () => {
    const setStorageRecipes = (value: string) => window.localStorage.setItem(Storage.recipes, JSON.stringify(value))
    const getStorageRecipes = () => JSON.parse(window.localStorage.getItem(Storage.recipes) || '{}')
    const removeStorageRecipes = () => window.localStorage.removeItem(Storage.recipes)

    return {
        setStorageRecipes,
        getStorageRecipes,
        removeStorageRecipes
    }
}
