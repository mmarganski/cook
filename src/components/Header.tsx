import React from 'react'
import styled from 'styled-components'

type HeaderProps = {
    text: string
}

export const Header = (props: HeaderProps) => (
    <Text>
        {props.text}
    </Text>
)

const Text =styled.div`
  text-align: center;
  font-family: Lato;
  border-bottom: solid 4px darkred;
  width: 70%;
  min-width: 140px;
  margin: 30px 4% 40px 4%;
`
