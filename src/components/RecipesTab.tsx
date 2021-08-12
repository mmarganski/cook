import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'
import { RecipesView } from './RecipesView'

enum Storage {
    selected = 'selected',
    products = 'products',
    recipes = 'recipes'
}

export const RecipesTab = () => {
    const products =  JSON.parse(window.localStorage.getItem(Storage.products) || '[]') as Array<string>
    const recipes =  JSON.parse(window.localStorage.getItem(Storage.recipes) || '{}')
    const [[currentRecipes, lastUpdate], setState] = useState([recipes, ''])

    useEffect(() => {
        window.localStorage.removeItem(Storage.selected)
        window.localStorage.setItem(Storage.recipes, JSON.stringify(currentRecipes))
    }, [currentRecipes])

    const addRecipe = (text: string) => {
        const selectedProducts = window.localStorage.getItem(Storage.selected) || []

        if (selectedProducts.length > 0 && text !== '') {
            setState(([prevRecipes]) => [{...prevRecipes, [text]: selectedProducts}, new Date().toTimeString()])
        }
    }

    return(
        <WrapperColumn>
            <NameInput onSubmittedInput={addRecipe}/>
            <WrapperRow>
                <ProductsView
                    products={products}
                    selectable={false}
                    lastUpdate={lastUpdate}/>
                <RecipesView recipes={currentRecipes}/>
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
