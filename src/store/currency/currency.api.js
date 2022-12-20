import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { normalizeResponse } from 'services'
const baseUrl =
  'https://api-currconverter.p1ratrulezzz.com/api/currency-converter/v1/'

export const currencyDefault = [
  {
    code: 'KZT',
    value: 0,
  },
  {
    code: 'RUB',
    value: 0,
  },
  {
    code: 'USD',
    value: 0,
  },
  {
    code: 'EUR',
    value: 0,
  },
  {
    code: 'KGS',
    value: 0,
  },
  {
    code: 'GEL',
    value: 0,
  },
  {
    code: 'TRY',
    value: 0,
  },
]

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
      transformResponse: (response) => {
        return normalizeResponse(response)
      },
    }),
    getCurrencyList: build.query({
      query: () => ({
        url: `symbols`,
      }),
    }),
  }),
})

export const { useSetCurrencyMutation, useGetCurrencyListQuery } = currencyApi
