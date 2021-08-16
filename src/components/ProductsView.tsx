import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'
import { SelectWrapper } from './SelectWrapper'
import { Header } from './Header'
import { Tab } from '../types'

type ProductsViewProps = {
    products: Array<string>,
    isSelectable: boolean,
    activeItems: Array<string>,
    onSelect(text: string): void
}

export const ProductsView: React.FunctionComponent<ProductsViewProps> = ({
    products,
    isSelectable,
    activeItems,
    onSelect
}) => (
    <ColumnWrapper>
        <Header text={Tab.Products}/>
        <RowWrapper>
            {products
                .filter(product => product !== '')
                .map((product, index) => isSelectable
                    ? (
                        <SelectWrapper
                            key={`${index}-${product}`}
                            text={product}
                            isActive={activeItems.includes(product)}
                            onSelect={onSelect}
                        />
                    ) : (
                        <Item
                            key={`${index}-${product}`}
                            text={product}
                            isWrapped={false}
                        />)
                )}</RowWrapper>
    </ColumnWrapper>
)

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
`
