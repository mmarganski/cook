import React from 'react'
import styled from 'styled-components'

type ItemProps = {
    text: string,
    isWrapped: boolean
}

type WrapperStyles = {
    isWrapped: boolean
}

export const Item: React.FunctionComponent<ItemProps> = ({text, isWrapped}) => (
    <Wrapper isWrapped={isWrapped}>
        {text}
    </Wrapper>
)

const Wrapper = styled.div<WrapperStyles>`
  border-radius: 40px;
  background-color: coral;
  padding: 10px;
  margin: ${props => props.isWrapped ? '0' : '10px'};
  border: solid 4px transparent;
`
