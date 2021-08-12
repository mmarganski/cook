import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'
import { Header } from './Header'

type RecipesViewProps = {
    recipes: any
}

export const RecipesView = (props: RecipesViewProps) => (
    <ColumnWrapper>
        <Header text="Recipes"/>
        <RowWrapper>
            {Object.entries(props.recipes)
                .map(([name, ingredients], index) => (
                    <Item
                        key={`${index}-${name}`}
                        text={name}
                        isWrapped={false}
                    />
                )
                )}
        </RowWrapper>
    </ColumnWrapper>
)

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 30%;
`

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
`
