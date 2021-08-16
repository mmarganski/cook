import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { RecipesView } from './RecipesView'
import { useLocalStorageRecipes, useLocalStorageProducts } from '../hooks'

export const SearchTab: React.FunctionComponent = () => {
    const { getStorageRecipes } = useLocalStorageRecipes()
    const { getStorageProducts } = useLocalStorageProducts()
    const [recipes] = useState<Record<string, Array<string>>>(getStorageRecipes())
    const [activeProducts, setActiveProducts] = useState<Array<string>>([])
    const [activeRecipes, setActiveRecipes] = useState<Array<string>>([])

    const onSelect = (text: string) => {
        setActiveProducts(prevActiveProducts =>
            prevActiveProducts.includes(text)
                ? prevActiveProducts.filter(item => item !== text)
                : prevActiveProducts.concat(text)
        )
    }

    useEffect(() => {
        setActiveRecipes(
            Object.entries(recipes)
                .map(([name, products]) =>
                    products.every(product => activeProducts.includes(product))
                        ? name
                        : ''
                ).filter(Boolean)
        )
    }, [activeProducts])

    return(
        <Wrapper>
            <ProductsView
                products={getStorageProducts() as Array<string>}
                isSelectable
                activeItems={activeProducts}
                onSelect={onSelect}
            />
            <Separator/>
            <RecipesView recipes={activeRecipes}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Separator = styled.div`
  margin: 40px;
`
