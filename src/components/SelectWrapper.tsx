import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'

type WrapperStyles = {
    isActive: boolean
}

type SelectWrapperProps = {
    text: string,
    isActive: boolean,
    onSelect(text: string): void
}

export const SelectWrapper: React.FunctionComponent<SelectWrapperProps> = ({
    text,
    isActive,
    onSelect
}) => (
    <Wrapper
        onClick={() => onSelect(text)}
        isActive={isActive}
    >
        <Item
            text={text}
            isWrapped
        />
    </Wrapper>
)

const Wrapper = styled.div<WrapperStyles>`
  border-radius: 60px;
  margin: 10px;
  border: ${props => props.isActive ? 'solid 4px darkred' : 'solid 4px transparent'};
  :hover{
    cursor: pointer;
  }
`
