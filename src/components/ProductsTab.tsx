import React from 'react'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'
import { useProductsStore } from '../stores'

export const ProductsTab: React.FunctionComponent = () => {
    const { storeProducts, addStoreProduct } = useStore(useProductsStore)

    const addProduct = (text: string) => {
        if (!storeProducts.includes(text)) {
            addStoreProduct(text)
        }
    }

    return (
        <Wrapper>
            <NameInput onSubmittedInput={addProduct}/>
            <ProductsView
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
