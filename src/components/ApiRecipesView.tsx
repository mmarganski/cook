import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { Tab, ApiResponseRecipe } from '../types'
import { RecipeItem } from './RecipeItem'
import { useFetch } from '../hooks'
import { Message } from './Message'

type ApiRecipesViewProps = {
    url: string,
    onSelect(text: string): void
}

export const ApiRecipesView: React.FunctionComponent<ApiRecipesViewProps> = ({
    url,
    onSelect
}) => {

    const { fetchData, loading, error } = useFetch()
    const [recipes, setRecipes] = useState<Record<string, number>>({})

    useEffect(() => {
        loadData(url)
    }, [url])

    const loadData = async (url: string) => {
        const data = await fetchData(url)

        if (data) {
            const recipes = data.reduce((acc: Record<string, number>, recipe: ApiResponseRecipe) => {
                acc[recipe.title] = recipe.id

                return acc
            }, {})
            setRecipes(recipes)
        }
    }

    const renderRecipes = () => {
        if (url === '') {
            return(
                <Message text="select product to find matching recipes"/>
            )
        }

        if (loading) {
            return(
                <Message text="loading"/>
            )
        }

        if (error || !Object.entries(recipes).length) {
            return(
                <Message text="no matching recipes found"/>
            )
        }

        return(Object.entries(recipes)
            .map(([name, id]) => (
                <RecipeItem
                    key={`${id}-${name}`}
                    text={name}
                    recipeId={`${id}`}
                    onSelect={onSelect}
                />
            )))
    }

    return(
        <ColumnWrapper>
            <Header text={Tab.Products}/>
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
