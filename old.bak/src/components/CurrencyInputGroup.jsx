import React, {useContext} from 'react'
import {CurrencyInput} from 'components/CurrencyInput/CurrencyInput'
import {FormContext} from 'components/CurrencyForm/CurrencyForm'

export const CurrencyInputGroup = () => {
  const {formDataState} = useContext(FormContext)

  return formDataState.map((currencyInput, index) => {
    return (
      <CurrencyInput
        key={currencyInput.code + index}
        {...{
          currencyInput,
        }}
      />
    )
  })
}
