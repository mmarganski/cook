import React from 'react'
import styled from 'styled-components'

type ItemProps = {
    text: string
}

export const Item = (props: ItemProps) => (
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
