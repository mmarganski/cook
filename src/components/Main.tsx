import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { ProductsTab } from './ProductsTab'
import { RecipesTab } from './RecipesTab'
import { SearchTab } from './SearchTab'
import { ApiTab } from './ApiTab'
import { LanguageSelector } from './LanguageSelector'
import { TabsBar } from './TabsBar'
import { useTranslation } from '../hooks'

const TabComponents = {
    products: () => (<ProductsTab/>),
    recipes: () => (<RecipesTab/>),
    search: () => (<SearchTab/>),
    api: () => (<ApiTab/>)
}

export const Main: React.FunctionComponent = () => {
    const Translation = useTranslation()

    return (
        <>
            <LanguageSelector/>
            <Router>
                <TabsBar
                    tabs={Object.keys(TabComponents)}
                    translation={Translation.tabs}
                />
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
        </>
    )
}
