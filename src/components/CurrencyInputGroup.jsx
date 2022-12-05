import React from 'react'
import { CurrencyInput } from 'components/CurrencyInput/CurrencyInput'

export const CurrencyInputGroup = ({ list, isSuccess, changeInputCurrency }) => {
  return (
    list &&
    list.map((currencyInput, index) => {
      return (
        <CurrencyInput
          key={currencyInput.code + index}
          {...{ currencyInput, isSuccess, changeInputCurrency }}
        />
      )
    })
  )
}
