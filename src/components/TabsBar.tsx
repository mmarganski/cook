import React from 'react'
import styled from 'styled-components'
import { Header } from './Header'

export const TabsBar = () => (
    <Wrapper>
        <Header text={'Products'}/>
        <Header text={'Recipes'}/>
        <Header text={'Search'}/>
    </Wrapper>
)

const Wrapper = styled.div`
  margin: 20px 6% 40px 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: x-large;
`
