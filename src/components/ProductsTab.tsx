import React, { useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'
import { useLocalStorageProducts } from '../hooks'

export const ProductsTab: React.FunctionComponent = () => {
    const {set: setStorageProducts, get: getStorageProducts} = useLocalStorageProducts()
    const [currentProducts, setProducts] = useState<Array<string>>(JSON.parse(getStorageProducts()) as Array<string>)

    const addProduct = (text: string) => {
        if (!currentProducts.includes(text)) {
            setProducts(prevProducts => {
                setStorageProducts(JSON.stringify(prevProducts.concat(text)))

                return prevProducts.concat(text)
            })
        }
    }

    return (
        <Wrapper>
            <NameInput onSubmittedInput={addProduct}/>
            <ProductsView
                products={currentProducts}
                activeItems={[]}
                isSelectable={false}
                onSelect={() => false}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
