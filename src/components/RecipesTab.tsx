import React, { useState } from 'react'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'
import { RecipesView } from './RecipesView'
import { store } from './Main'

export const RecipesTab: React.FunctionComponent= () => {
    const { storeProducts, storeRecipes, addStoreRecipe } = useStore(store)
    const [activeItems, setActiveItems] = useState<Array<string>>([])

    const addRecipe = (text: string) => {
        if (activeItems.length > 0 && text !== '') {
            addStoreRecipe(text, activeItems)
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
                    products={storeProducts as Array<string>}
                    isSelectable
                    onSelect={onSelect}
                    activeItems={activeItems}
                />
                <RecipesView recipes={Object.keys(storeRecipes)}/>
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
