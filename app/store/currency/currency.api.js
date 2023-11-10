import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl =
  'https://api-currconverter.p1ratrulezzz.com/api/currency-converter/v1/'

export const currencyApi = createApi({
  reducerPath: 'currency/api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getCurrenciesForm: build.query({
      query: (currencyArray) => {
        let currencyUrl = '?limit_to_bases=true&'
        currencyArray?.forEach((val) => {
          currencyUrl += `bases[]=${val.code}&`
        })

        return {
          url: `from-to-currencies${currencyUrl}`,
        }
      },
    }),
  }),
})

export const {
  useSetCurrencyMutation,
  useGetCurrencyListQuery,
  useGetCurrenciesFormQuery,
} = currencyApi
