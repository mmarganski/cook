import { useState } from 'react'

export const useRecipesStore = () => {
    const [storeRecipes, setRecipes] = useState<Record<string, Array<string>>>({})

    const addStoreRecipe = (name: string, products: Array<string>) => setRecipes(prevRecipes => ({
        ...prevRecipes,
        [name]: products
    }))

    return {
        storeRecipes,
        addStoreRecipe
    }
}
