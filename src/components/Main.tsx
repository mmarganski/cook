import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsTab } from './ProductsTab'
import { RecipesTab } from './RecipesTab'
import { SearchTab } from './SearchTab'
import { TabsBar } from './TabsBar'
import { Tab } from '../types'

export const Main: React.FunctionComponent = () => {
    const [activeTab, setActiveTab] = useState(Tab.Products)
    const onSelectTab = (tab: Tab) => {
        switch (tab) {
            case Tab.Recipes:
                setActiveTab(Tab.Recipes)
                break
            case Tab.Search:
                setActiveTab(Tab.Search)
                break
            case Tab.Products:
            default:
                setActiveTab(Tab.Products)
        }
    }

    const renderTabs = () => {
        switch (activeTab) {
            case Tab.Recipes:
                return (
                    <RecipesTab/>
                )
            case Tab.Search:
                return(
                    <SearchTab/>
                )
            case Tab.Products:
            default:
                return(
                    <ProductsTab/>
                )
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
