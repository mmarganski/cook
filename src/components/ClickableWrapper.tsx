import React from 'react'
import styled from 'styled-components'

type ClickableWrapperProps = {
    children: React.ReactChild,
    onSelect(): void
}

export const ClickableWrapper: React.FunctionComponent<ClickableWrapperProps> = props => (
    <Wrapper onClick={props.onSelect}>
        {props.children}
    </Wrapper>
)

const Wrapper = styled.div`
  margin: 20px 6% 40px 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: x-large;
  :hover{
    cursor: pointer;
  }
`
