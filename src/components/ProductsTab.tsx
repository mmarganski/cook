import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'

export const ProductsTab = () => {
    const products = JSON.parse(window.localStorage.getItem('products') || '[]')
    const [currentState, setState] = useState<Array<string>>(products)

    const addProduct = (text: string) => {
        if (!currentState.includes(text)) {
            setState(() => currentState.concat(text))
        }
    }

    return (
        <Wrapper>
            <NameInput onSubmittedInput={addProduct}/>
            <ProductsView products={currentState} lastUpdate={''} selectable/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
