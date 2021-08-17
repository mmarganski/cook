import React from 'react'
import styled from 'styled-components'

type MessageProps = {
    text: string
}

export const Message: React.FunctionComponent<MessageProps> = ({ text }) => (
    <Wrapper>
        {text}
    </Wrapper>
)

const Wrapper = styled.div`
    font-size: large;
    margin: 40px;
`
