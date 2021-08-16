import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { ProductsView } from './ProductsView'
import { RecipesView } from './RecipesView'
import { useProductsStore, useRecipesStore } from '../stores'

export const SearchTab: React.FunctionComponent = () => {
    const { storeProducts } = useStore(useProductsStore)
    const { storeRecipes } = useStore(useRecipesStore)
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
            (Object.entries(storeRecipes) as Array<[string, Array<string>]>)
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
                products={storeProducts as Array<string>}
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
