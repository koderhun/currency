import './CurrencyForm.scss'
import {
  useSetCurrencyMutation,
  currencyDefault,
} from 'store/currency/currency.api'
import { CurrencyInputGroup } from 'components/CurrencyInputGroup'
import { normalizeRequest } from 'services'
import { LoaderCustom } from 'components/LoaderCustom'
import { ErrorMsg } from 'components/ErrorMsg'
import { useInput } from 'hooks/useInput'
import { useEffect } from 'react'
import { Button } from 'antd'

export const CurrencyForm = () => {
  const [setCurrency, { isLoading, isError, error, data: resultCurrency }] =
    useSetCurrencyMutation()
  const { inputName, inputValue, setInputName, setInputValue } = useInput({
    name: '',
    value: 0,
  })
  const changeItemInput = (value, name) => {
    setInputName(name)
    setInputValue(value)
  }

  useEffect(() => {
    if (!resultCurrency) {
      setCurrency(
        normalizeRequest({
          items: currencyDefault,
          value_from: 0,
          code_from: 'KZT',
        }),
      )
    }
  }, [])

  const handleClick = () => {
    if (inputValue !== 0) {
      setCurrency(
        normalizeRequest({
          items: resultCurrency,
          value_from: inputValue,
          code_from: inputName,
        }),
      )
    }
  }

  return (
    <form className='form'>
      <div className='loader-group'>
        {isLoading && <LoaderCustom />}

        <CurrencyInputGroup
          {...{
            list: resultCurrency,
            changeInputCurrency: changeItemInput,
          }}
        />
      </div>
      <Button
        size='large'
        type='primary'
        className='send'
        onClick={handleClick}
      >
        Send
      </Button>
      {isError && <ErrorMsg {...{ error }} />}
    </form>
  )
}
