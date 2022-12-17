import React from 'react'
import { CurrencyInput } from 'components/CurrencyInput/CurrencyInput'
import { formArray } from 'config/currency-form-config'

export const CurrencyInputGroup = ({ isSuccess, changeInputCurrency }) => {
  return (
    formArray.map((currencyInput, index) => {
      return (
        <CurrencyInput
          key={currencyInput.code + index}
          {...{ currencyInput, isSuccess, changeInputCurrency }}
        />
      )
    })
  )
}
