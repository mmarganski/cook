import React from 'react'
import { Provider } from 'outstated'
import { Main } from './Main'
import { storeGroup } from '../stores'

export const StoreWrapper = () => (
    <Provider stores={storeGroup}>
        <Main/>
    </Provider>
)
