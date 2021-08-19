import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { RecipeItem } from './RecipeItem'
import { Message } from './Message'
import { useFetch, useTranslation } from '../hooks'
import { ApiResponseRecipe } from '../types'

type ApiRecipesViewProps = {
    url: string,
    onSelect(text: string): void
}

export const ApiRecipesView: React.FunctionComponent<ApiRecipesViewProps> = ({
    url,
    onSelect
}) => {
    const { fetchData, isLoading, hasError } = useFetch<Array<ApiResponseRecipe>>()
    const [recipes, setRecipes] = useState<Record<string, number>>({})
    const Translation = useTranslation()

    useEffect(() => {
        fetchData(url, onDataLoaded, onLoadingError)
    }, [url])

    const onDataLoaded = (data: Array<ApiResponseRecipe>) => {
        const recipes = data.reduce((acc, recipe) => ({
            ...acc,
            [recipe.title]: recipe.id
        }), {} as Record<string, number>)

        setRecipes(recipes)
    }

    const onLoadingError = () => {
        // additional error handling may be implemented later
    }

    const renderRecipes = () => {
        if (url === '') {
            return(
                <Message text={Translation.messages.callToSelect}/>
            )
        }

        if (isLoading) {
            return(
                <Message text={Translation.messages.loading}/>
            )
        }

        if (hasError || !Object.entries(recipes).length) {
            return(
                <Message text={Translation.messages.noMatch}/>
            )
        }

        return Object.entries(recipes)
            .map(([name, id]) => (
                <RecipeItem
                    key={`${id}-${name}`}
                    text={name}
                    recipeId={String(id)}
                    onSelect={onSelect}
                />
            ))
    }

    return(
        <ColumnWrapper>
            <Header text={Translation.tabs.products}/>
            <RowWrapper>
                {renderRecipes()}
            </RowWrapper>
        </ColumnWrapper>
    )
}

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  justify-content: center;
`
