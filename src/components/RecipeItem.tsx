import React from 'react'
import styled from 'styled-components'

type RecipeItemProps = {
    text: string,
    recipeId: string,
    onSelect(text: string): void
}

export const RecipeItem: React.FunctionComponent<RecipeItemProps> = ({ text, recipeId, onSelect }) => (
    <Wrapper onClick={() => onSelect(recipeId)}>
        {text}
    </Wrapper>
)

const Wrapper = styled.div`
  border-radius: 40px;
  background-color: coral;
  padding: 5px;
  border: solid 4px transparent;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: large;
  :hover{
    cursor: pointer;
  }
`
