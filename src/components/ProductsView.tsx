import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'
import { SelectWrapper } from './SelectWrapper'
import { Header } from './Header'
import { useStore } from 'outstated'
import { useProductsStore } from '../stores'
import { useTranslation } from '../hooks'

type ProductsViewProps = {
    isSelectable: boolean,
    activeItems: Array<string>,
    onSelect(text: string): void
}

export const ProductsView: React.FunctionComponent<ProductsViewProps> = ({
    isSelectable,
    activeItems,
    onSelect
}) => {
    const { storeProducts } = useStore(useProductsStore)
    const translation = useTranslation()

    return (
        <ColumnWrapper>
            <Header text={translation.tabs.products}/>
            <RowWrapper>
                {storeProducts
                    .filter(product => product !== '')
                    .map((product, index) => isSelectable ? (
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
                        />
                    ))}
            </RowWrapper>
        </ColumnWrapper>
    )
}

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
  justify-content: center;
`
