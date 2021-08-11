import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'

export const ProductsView = (props: {products: Array<string>}) => {
    window.localStorage.setItem('products', `${[...props.products]}`)

    return(
        <Wrapper>
            {props.products
                .filter(product => product !== '')
                .map((product, index) => (
                    <Item
                        key={`${index}-${product}`}
                        text={product}
                    />
                ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
`
