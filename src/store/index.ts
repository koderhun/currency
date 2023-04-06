import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { currencyApi } from './currency/currency.api'

const makeStore = () =>
  configureStore({
    reducer: {
      [currencyApi.reducerPath]: currencyApi.reducer
    },
    middleware: (getDefaultMiddleware: Function) =>
      getDefaultMiddleware().concat(currencyApi.middleware)
  })

export const wrapper = createWrapper(makeStore, { debug: true })
