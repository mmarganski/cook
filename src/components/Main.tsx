import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsTab, RecipesTab, SearchTab, TabsBar } from './index'

enum Tab {
    Products = 'Products',
    Recipes = 'Recipes',
    Search = 'Search'
}

export const Main = () => {
    const [currentState, setState] = useState(Tab.Products)

    const onSelectTab= (tab: Tab) => {
        switch (tab) {
            case Tab.Products:
                setState(Tab.Products)
                break
            case Tab.Recipes:
                setState(Tab.Recipes)
                break
            case Tab.Search:
                setState(Tab.Search)
                break
            default:
                setState(Tab.Products)
        }
    }

    return (
        <Wrapper>
            <TabsBar onSelect={onSelectTab}/>
            {currentState === Tab.Products && <ProductsTab/>}
            {currentState === Tab.Recipes && <RecipesTab/>}
            {currentState === Tab.Search && <SearchTab/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
