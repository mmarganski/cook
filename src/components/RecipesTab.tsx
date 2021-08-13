import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'
import { RecipesView } from './RecipesView'
import { useLocalStorageProducts, useLocalStorageRecipes } from '../hooks'

export const RecipesTab: React.FunctionComponent= () => {
    const {getStorageRecipes, setStorageRecipes} = useLocalStorageRecipes()
    const {getStorageProducts} = useLocalStorageProducts()
    const [recipes, setRecipes] = useState(Object.keys(getStorageRecipes()))
    const [activeItems, setActiveItems] = useState<Array<string>>([])

    const addRecipe = (text: string) => {
        if (activeItems.length > 0 && text !== '') {
            setRecipes(prevRecipes => {
                const storageRecipes = getStorageRecipes()
                setStorageRecipes({...storageRecipes, [text]: activeItems})

                return prevRecipes.concat(text)
            })
            setActiveItems([])
        }
    }

    const onSelect = (text: string) => {
        setActiveItems(prevActiveItems =>
            prevActiveItems.includes(text)
                ? prevActiveItems.filter(item => item !== text)
                : prevActiveItems.concat(text)
        )
    }

    return(
        <WrapperColumn>
            <NameInput onSubmittedInput={addRecipe}/>
            <WrapperRow>
                <ProductsView
                    products={getStorageProducts() as Array<string>}
                    isSelectable
                    onSelect={onSelect}
                    activeItems={activeItems}
                />
                <RecipesView recipes={recipes}/>
            </WrapperRow>
        </WrapperColumn>
    )
}

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`
