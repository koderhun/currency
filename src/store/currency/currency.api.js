import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const currencyApi = createApi({
  reducerPath: 'currency/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.github.com/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    setCurrency: build.mutation({
      mutation: (search) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response) => response.items,
    }),
  }),
})

export const { useSetCurrencyMutation } = currencyApi
