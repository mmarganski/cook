import { Storage } from '../types'

export const useLocalStorageProducts = () => {
    const setStorageProducts = (value: Array<string>) => window.localStorage.setItem(Storage.products, JSON.stringify(value))
    const getStorageProducts = () => JSON.parse(window.localStorage.getItem(Storage.products) || '[]')
    const removeStorageProducts = () => window.localStorage.removeItem(Storage.products)

    return {
        setStorageProducts,
        getStorageProducts,
        removeStorageProducts
    }
}
