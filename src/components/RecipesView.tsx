import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'
import { Header } from './Header'
import { useTranslation } from '../hooks'

type RecipesViewProps= {
    recipes: Array<string>
}

export const RecipesView: React.FunctionComponent<RecipesViewProps> = ({ recipes }) => {
    const Translation = useTranslation()

    return (
        <ColumnWrapper>
            <Header text={Translation.tabs.recipes}/>
            <RowWrapper>
                {recipes
                    .map((name, index) => (
                        <Item
                            key={`${index}-${name}`}
                            text={name}
                            isWrapped={false}
                        />
                    ))
                }
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
