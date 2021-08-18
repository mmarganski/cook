import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import styled from 'styled-components'
import { Provider } from 'outstated'
import { ProductsTab } from './ProductsTab'
import { RecipesTab } from './RecipesTab'
import { SearchTab } from './SearchTab'
import { ApiTab } from './ApiTab'
import { useProductsStore, useRecipesStore } from '../stores'

const TabComponents = {
    products: () => (<ProductsTab/>),
    recipes: () => (<RecipesTab/>),
    search: () => (<SearchTab/>),
    api: () => (<ApiTab/>)
}

export const Main: React.FunctionComponent = () => (
    <Provider stores={[useProductsStore, useRecipesStore]}>
        <Router>
            <TabWrapper>
                {Object.keys(TabComponents).map(tab => (
                    <StyledLink
                        to={`/${tab}`}
                        key={tab}
                    >
                        {tab}
                    </StyledLink>
                ))}
            </TabWrapper>
            <Switch>
                {Object.entries(TabComponents).map(([tabName, tabComponent]) => (
                    <Route
                        key={tabName}
                        path={`/${tabName}`}
                    >
                        {tabComponent}
                    </Route>
                ))}
                <Redirect to={Object.keys(TabComponents).find(Boolean) || ''}/>
            </Switch>
        </Router>
    </Provider>
)

const TabWrapper = styled.div`
  margin: 20px 6% 40px 6%;
  display: flex;
  justify-content: center;
  font-size: x-large;
`

const StyledLink =styled(Link)`
  margin: 20px;
  border-bottom: solid 4px darkred;
  text-decoration: none;
  color: black;
  font-family: Lato, serif;
  font-size: 26px;
  :hover{
    margin: 18px;
    font-size: 30px;
  }
`
