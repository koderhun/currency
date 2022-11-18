import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    code: 'RUB',
    value: 0,
  },
  {
    code: 'USD',
    value: 0,
  },
  {
    code: 'KZT',
    value: 0,
  },
]
export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setConvert(state, action) {
      console.log('gett', action, state)
      state.currency = [...action.payload]
    },
  },
})

export const currencyActions = currencySlice.actions
export const currencyReducer = currencySlice.reducer

export const currencySelect = (state) => state.currency
export const { setConvert } = currencyActions
