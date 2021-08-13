import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsTab, RecipesTab, SearchTab, TabsBar } from './index'
import { Tab } from '../types'

export const Main: React.FunctionComponent = () => {
    const [activeTab, setActiveTab] = useState(Tab.Products)

    const onSelectTab= (tab: Tab) => {
        switch (tab) {
            case Tab.Products:
                setActiveTab(Tab.Products)
                break
            case Tab.Recipes:
                setActiveTab(Tab.Recipes)
                break
            case Tab.Search:
                setActiveTab(Tab.Search)
                break
            default:
                setActiveTab(Tab.Products)
        }
    }

    const renderTabs = () => {
        switch (activeTab) {
            case Tab.Products:
                return(<ProductsTab/>)
            case Tab.Recipes:
                return(<RecipesTab/>)
            case Tab.Search:
                return(<SearchTab/>)
            default:
                return(<ProductsTab/>)
        }
    }

    return (
        <Wrapper>
            <TabsBar onSelect={onSelectTab}/>
            {renderTabs()}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
