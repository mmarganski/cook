import React from 'react'
import styled from 'styled-components'

export const Item = (props: {text: string}) => (
    <Wrapper>
        {props.text}
    </Wrapper>
)

const Wrapper = styled.div`
  border-radius: 40px;
  background-color: coral;
  padding: 10px;
  margin: 10px;
  border: solid 4px transparent;
`
