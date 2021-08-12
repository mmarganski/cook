import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'

enum Storage {
    selected = 'selected',
    products = 'products',
    recipes = 'recipes'
}

export const ProductsTab = () => {
    const products = JSON.parse(window.localStorage.getItem(Storage.products) || '[]') as Array<string>
    const [currentState, setState] = useState<Array<string>>(products)

    const addProduct = (text: string) => {
        if (!currentState.includes(text)) {
            setState(prevState => {
                window.localStorage.setItem(Storage.products, JSON.stringify(prevState.concat(text)))

                return prevState.concat(text)
            })
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
