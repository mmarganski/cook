import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsTab, RecipesTab, SearchTab, TabsBar } from './index'

enum Tab {
    Products,
    Recipes,
    Search
}

export const Main = () => {
    const [currentState, setState] = useState(Tab.Recipes)
    const onSelectProducts = () => setState(Tab.Products)
    const onSelectRecipes = () => setState(Tab.Recipes)
    const onSelectSearch = () => setState(Tab.Search)

    return (
        <Wrapper>
            <TabsBar />
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
