import './CurrencyForm.scss'
import { useSetCurrencyMutation } from 'store/currency/currency.api'
import { CurrencyInputGroup } from 'components/CurrencyInputGroup'
// import { LoaderCustom } from 'components/LoaderCustom'
import { normalizeRequest } from 'services'
import { LoaderCustom } from 'components/LoaderCustom'
import { ErrorMsg } from 'components/ErrorMsg'
import { useDebounce } from 'hooks/debounce'
import { useState, useEffect } from 'react'

const currencyDefault = [
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

export const CurrencyForm = () => {
  const [setCurrency, { isLoading, isError, error, data: resultCurrency }] =
    useSetCurrencyMutation()
  const [inputName, setInputName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const nameDebounce = useDebounce(inputName)
  const valueDebounce = useDebounce(inputValue)

  const changeItemInput = (value, name) => {
    setInputName(name)
    setInputValue(value)
  }

  useEffect(() => {
    if (nameDebounce !== '' || valueDebounce !== '' &&
      valueDebounce !== inputValue || nameDebounce !== inputName) {
      setCurrency(
        normalizeRequest({
          items: resultCurrency ? resultCurrency : currencyDefault,
          value_from: valueDebounce,
          code_from: nameDebounce,
        }),
      )
    }
  }, [nameDebounce, valueDebounce])

  return (
    <form className='form'>
      {isLoading && <LoaderCustom />}

      <CurrencyInputGroup
        {...{
          list: resultCurrency ? resultCurrency : currencyDefault,
          changeInputCurrency: changeItemInput,
        }}
      />
      {isError && <ErrorMsg {...{error}}/>}
    </form>
  )
}
