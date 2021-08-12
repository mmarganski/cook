import React, { useState } from 'react'
import styled from 'styled-components'

type NameInputProps = {
    onSubmittedInput(text: string): void
}

export const NameInput = (props: NameInputProps) => {
    const [currentState, setState] = useState('')

    const submitInput = () => {
        props.onSubmittedInput(currentState)
        setState('')
    }

    return(
        <Wrapper>
            <Input
                value={currentState}
                onChange={event => setState(event.target.value)}
            />
            <ConfirmButton onClick={submitInput}>
                +
            </ConfirmButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  margin: 10px 0 50px 0;
`

const Input = styled.input`
  font-family: Consolas;
  font-size: large;
  box-sizing: border-box;
  margin: 0 5% 0 5%;
  padding: 0 10px 0 10px;
  border: solid 2px coral;
  border-radius: 20px;
  outline: none;
`

const ConfirmButton = styled.button`
  background-color: burlywood;
  border-radius: 5px;
  font-size: x-large;
  :hover{
    cursor: pointer;
    background-color: coral;
    color: white;
  }
`
