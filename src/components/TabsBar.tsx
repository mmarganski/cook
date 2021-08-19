import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type TabsBarProps = {
    tabs: Array<string>,
    translation: Record<string, string>
}

export const TabsBar: React.FunctionComponent<TabsBarProps> = ({
    tabs,
    translation
}) => (
    <Wrapper>
        {tabs.map(tab => (
            <StyledLink
                to={`/${tab}`}
                key={tab}
            >
                {translation?.[tab] || null}
            </StyledLink>
        ))}
    </Wrapper>
)

const Wrapper = styled.div`
  margin: 20px 6% 40px 6%;
  display: flex;
  justify-content: center;
  font-size: x-large;
`
const StyledLink =styled(Link)`
  margin: 20px;
  border-bottom: solid 4px darkred;
  text-decoration: none;
  color: black;
  font-family: Lato, serif;
  font-size: 26px;
  :hover{
    margin: 18px;
    font-size: 30px;
  }
`
