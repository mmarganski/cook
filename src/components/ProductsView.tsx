import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'
import { SelectWrapper } from './SelectWrapper'
import { Header } from './Header'

type ProductsViewProps = {
    products: Array<string>,
    isSelectable: boolean,
    activeItems: Array<string>,
    onSelect(text: string): void
}

export const ProductsView = (props: ProductsViewProps) => (
    <ColumnWrapper>
        <Header text={'Products'}/>
        <RowWrapper>
            {props.products
                .filter(product => product !== '')
                .map((product, index) => props.isSelectable
                    ? (
                        <SelectWrapper
                            key={`${index}-${product}`}
                            text={product}
                            isActive={props.activeItems.includes(product)}
                            onSelect={props.onSelect}
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
