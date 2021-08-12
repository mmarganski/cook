import React from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { ClickableWrapper } from './ClickableWrapper'

enum Tab {
    Products = 'Products',
    Recipes = 'Recipes',
    Search = 'Search'
}

type TabsBarProps = {
    onSelect(tab: Tab): void
}

export const TabsBar: React.FunctionComponent<TabsBarProps> = props => (
    <Wrapper>
        {Object.values(Tab).map((tabName, index) => (
            <ClickableWrapper key={`${index}-${tabName}`} onSelect={() => props.onSelect(tabName)}>
                <Header text={`${tabName}`}/>
            </ClickableWrapper>
        ))}
    </Wrapper>
)

const Wrapper = styled.div`
  margin: 20px 6% 40px 6%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: x-large;
`
