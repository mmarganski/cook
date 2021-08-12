import React, { useState } from 'react'
import styled from 'styled-components'
import { Item } from './Item'

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
        const currentSelect = window.localStorage.getItem('selected')
            ? JSON.parse(window.localStorage.getItem('selected') as string)
            : []
        const newSelect = isActive
            ? [...currentSelect].filter(element => element !== props.text)
            : [...currentSelect, props.text]

        window.localStorage.setItem('selected', JSON.stringify(newSelect))
        setState([!isActive, lastRecipe])
    }

    return(
        <Wrapper onClick={selectItem} isActive={isActive}>
            <Item text={props.text}/>
        </Wrapper>
    )
}

const Wrapper = styled.div<WrapperStyles>`
  border-radius: 40px;
  background-color: coral;
  margin: 10px;
  border: ${props => props.isActive ? 'solid 4px darkred' : 'solid 4px transparent'};
  :hover{
    cursor: pointer;
  }
`
