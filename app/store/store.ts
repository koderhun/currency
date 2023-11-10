'use client'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {currencyApi} from './currency/currency.api'

const rootReducer = combineReducers({
  [currencyApi.reducerPath]: currencyApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: Function) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
})
