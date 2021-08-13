import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { RecipesView } from './RecipesView'
import { useLocalStorageRecipes, useLocalStorageProducts } from '../hooks'

export const SearchTab: React.FunctionComponent = () => {
    const {get: getStorageRecipes} = useLocalStorageRecipes()
    const {get: getStorageProducts} = useLocalStorageProducts()
    const [recipes] = useState<Record<string, Array<string>>>(JSON.parse(getStorageRecipes()))
    const [[activeProducts, activeRecipes], setActiveItems] = useState<Array<Array<string>>>([[], []])

    const onSelect = (text: string) => {
        setActiveItems(([prevActiveProducts]) => {
            const newActiveProducts = prevActiveProducts.includes(text)
                ? prevActiveProducts.filter(item => item !== text)
                : prevActiveProducts.concat(text)
            const newActiveRecipes = Object.entries(recipes).map(([name, products]) =>
                products.every(product => newActiveProducts.includes(product))
                    ? name
                    : ''
            ).filter(product => product !== '')

            return [newActiveProducts, newActiveRecipes]
        })
    }

    return(
        <Wrapper>
            <ProductsView
                products={JSON.parse(getStorageProducts()) as Array<string>}
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
