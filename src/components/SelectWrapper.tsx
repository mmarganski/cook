import React, { useState } from 'react'
import styled from 'styled-components'
import { Item } from './Item'

enum Storage {
    selected = 'selected',
    products = 'products',
    recipes = 'recipes'
}

type WrapperStyles = {
    isActive: boolean
}

type SelectWrapperProps = {
    text: string,
    lastUpdate: string
}

export const SelectWrapper = (props: SelectWrapperProps) => {
    const [[isActive, lastRecipe], setState] = useState([false, props.lastUpdate])

    if (props.lastUpdate !== lastRecipe) {
        setState([false, props.lastUpdate])
    }

    const selectItem = () => {
        const currentSelect = window.localStorage.getItem(Storage.selected)
            ? JSON.parse(window.localStorage.getItem(Storage.selected) || '') as Array<string>
            : []
        const newSelect = isActive
            ? [...currentSelect].filter(element => element !== props.text)
            : [...currentSelect, props.text]

        window.localStorage.setItem(Storage.selected, JSON.stringify(newSelect))
        setState([!isActive, lastRecipe])
    }

    return(
        <Wrapper onClick={selectItem} isActive={isActive}>
            <Item text={props.text} isWrapped/>
        </Wrapper>
    )
}

const Wrapper = styled.div<WrapperStyles>`
  border-radius: 60px;
  margin: 10px;
  border: ${props => props.isActive ? 'solid 4px darkred' : 'solid 4px transparent'};
  :hover{
    cursor: pointer;
  }
`
