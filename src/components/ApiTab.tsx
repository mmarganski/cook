import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductsView } from './ProductsView'
import { useStore } from 'outstated'
import { useProductsStore } from '../stores'
import { ApiRecipesView } from './ApiRecipesView'
import { Modal } from './Modal'

export const ApiTab: React.FunctionComponent = () => {
    const { storeProducts } = useStore(useProductsStore)
    const [activeProducts, setActiveProducts] = useState<Array<string>>([])
    const [recipesUrl, setRecipesUrl] = useState<string>('')
    const [modalUrl, setModalUrl] = useState<string>('')
    const [isModalActive, setModal] = useState(false)

    const onProductSelect = (text: string) => {
        setActiveProducts(prevActiveProducts =>
            prevActiveProducts.includes(text)
                ? prevActiveProducts.filter(item => item !== text)
                : prevActiveProducts.concat(text)
        )
    }

    useEffect(() => {
        if (activeProducts.length === 0) {
            setRecipesUrl('')
        }

        if (activeProducts.length) {
            const apiKey = process.env.REACT_APP_API_KEY
            const limit = process.env.REACT_APP_RECIPES_LIMIT
            const ingredients = activeProducts
                .reduce((acc, product) => `${acc},+${product}`)
                .replace(/\s/g, '')
            const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&number=${limit}&ingredients=${ingredients}`

            setRecipesUrl(url)
        }
    }, [activeProducts])

    const fetchRecipeSpecs = (id: string) => {
        const apiKey = process.env.REACT_APP_API_KEY
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`

        setModalUrl(url)
        setModal(true)
    }

    return (
        <Wrapper>
            <ProductsView
                products={storeProducts as Array<string>}
                isSelectable
                activeItems={activeProducts}
                onSelect={onProductSelect}
            />
            <Separator/>
            <ApiRecipesView
                url={recipesUrl}
                onSelect={fetchRecipeSpecs}
            />
            <Modal
                isActive={isModalActive}
                onClose={() => setModal(false)}
                url={modalUrl}
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

const Separator = styled.div`
  margin: 40px;
`
