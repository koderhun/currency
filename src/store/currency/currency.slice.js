import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  currency: []
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    getCurrency(state, action) {
      console.log('gett', action)
      state.currency = action.payload
    }
  }
})

export const currencyActions = currencySlice.actions
export const currencyReducer = currencySlice.reducer
