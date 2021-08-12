import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'
import { RecipesView } from './RecipesView'

export const RecipesTab = () => {
    const products =  JSON.parse(window.localStorage.getItem('products') || '[]')
    const recipes =  JSON.parse(window.localStorage.getItem('recipes') || '{}')
    const [[currentRecipes, lastUpdate], setState] = useState([recipes, ''])

    window.localStorage.removeItem('selected')

    const addRecipe = (text: string) => {
        const selectedProducts = window.localStorage.getItem('selected') || []

        if (selectedProducts.length > 0 && text !== '') {
            setState([{...currentRecipes, [text]: selectedProducts}, new Date().toTimeString()])
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
