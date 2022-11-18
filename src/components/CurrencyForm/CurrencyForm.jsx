import './CurrencyForm.scss'
import { useSetCurrencyMutation } from 'store/currency/currency.api'
import { CurrencyInputGroup } from 'components/CurrencyInputGroup'
// import { LoaderCustom } from 'components/LoaderCustom'
import { normalizeRequest } from 'services'

const currencyDefault = [
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

export const CurrencyForm = () => {
  const [
    setCurrency,
    { isLoading, isSuccess, isUninitialized, data: resultCurrency },
  ] = useSetCurrencyMutation()

  const changeItemInput = (value, name) => {
    setCurrency(
      normalizeRequest({
        items: resultCurrency ? resultCurrency : currencyDefault,
        value_from: parseFloat(value),
        code_from: name,
      }),
    )
  }
  console.log(
    'isLoading, isSuccess, isUninitialized',
    isLoading,
    isSuccess,
    isUninitialized,
  )

  return (
    <form className='form'>
      <CurrencyInputGroup
        {...{
          list: resultCurrency ? resultCurrency : currencyDefault,
          changeInputCurrency: changeItemInput,
        }}
      />
    </form>
  )
}
