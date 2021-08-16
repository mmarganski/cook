import { useState } from 'react'

export const useProductsStore = () => {
    const [storeProducts, setProducts] = useState<Array<string>>([])

    const addStoreProduct = (newProduct: string) =>
        setProducts(prevProducts => prevProducts.concat(newProduct))

    return {
        storeProducts,
        addStoreProduct
    }
}
