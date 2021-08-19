import React from 'react'
import { Provider } from 'outstated'
import { Main } from './Main'
import { useProductsStore, useRecipesStore, useLanguageStore } from '../stores'

export const StoreWrapper = () => (
    <Provider stores={[useProductsStore, useRecipesStore, useLanguageStore]}>
        <Main/>
    </Provider>
)

