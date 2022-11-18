import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { normalizeResponse } from 'services'
import { currencyActions } from './currency.slice'

const baseUrl = 'http://p1ratrulezzz.me:20000/api/currency-converter/v1/'

export const currencyApi = createApi({
  reducerPath: 'currency/api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    setCurrency: build.mutation({
      query: (data) => {
        return {
          url: `convert`,
          method: 'POST',
          body: data,
        }
      },
      transformResponse: (response) => normalizeResponse(response),
    }),
    getCurrencyList: build.query({
      query: () => ({
        url: `symbols`,
      }),
    }),
  }),
})

export const { useSetCurrencyMutation, useGetCurrencyListQuery } = currencyApi
