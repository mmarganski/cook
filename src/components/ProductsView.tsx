import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'
import { SelectWrapper } from './SelectWrapper'
import { Header } from './Header'

type ProductsViewProps = {
    products: Array<string>,
    selectable: boolean,
    lastUpdate: string
}

export const ProductsView = (props: ProductsViewProps) => {
    window.localStorage.setItem('products', JSON.stringify(props.products))

    return(
        <ColumnWrapper>
            <Header text={'Products'}/>
            <RowWrapper>
                {props.products
                    .filter(product => product !== '')
                    .map((product, index) => props.selectable
                        ? (<Item
                            key={`${index}-${product}`}
                            text={product}
                        />)
                        : (<SelectWrapper
                            key={`${index}-${product}`}
                            text={product}
                            lastUpdate={props.lastUpdate}
                        />)
                    )}
            </RowWrapper>
        </ColumnWrapper>
    )
}

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 70%;
`

const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
`
