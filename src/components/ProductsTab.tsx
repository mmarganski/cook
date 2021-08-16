import React from 'react'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { ProductsView } from './ProductsView'
import { NameInput } from './NameInput'
import { store } from './Main'

export const ProductsTab: React.FunctionComponent = () => {
    const { storeProducts, addStoreProduct } = useStore(store)

    const addProduct = (text: string) => {
        if (!storeProducts.includes(text)) {
            addStoreProduct(text)
        }
    }

    return (
        <Wrapper>
            <NameInput onSubmittedInput={addProduct}/>
            <ProductsView
                products={storeProducts}
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
