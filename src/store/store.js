import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { currencyApi } from './currency/currency.api'
import { currencyReducer } from './currency/currency.slice'

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    currency: currencyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApi.middleware),
})

setupListeners(store.dispatch)
