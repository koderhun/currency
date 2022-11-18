import './CurrencyForm.scss'
import { useSetCurrencyMutation } from 'store/currency/currency.api'
import { CurrencyInputGroup } from 'components/CurrencyInputGroup'
// import { LoaderCustom } from 'components/LoaderCustom'
import { normalizeRequest } from 'services'
import { LoaderCustom } from 'components/LoaderCustom'

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
  const [setCurrency, { isLoading, isError, data: resultCurrency }] =
    useSetCurrencyMutation()

  const changeItemInput = (value, name) => {
    setCurrency(
      normalizeRequest({
        items: resultCurrency ? resultCurrency : currencyDefault,
        value_from: parseFloat(value),
        code_from: name,
      }),
    )
  }
  return (
    <form className='form'>
      {isLoading && <LoaderCustom />}

      <CurrencyInputGroup
        {...{
          list: resultCurrency ? resultCurrency : currencyDefault,
          changeInputCurrency: changeItemInput,
        }}
      />
      <p>{isError && <span>Ощибка запроса</span>}</p>
    </form>
  )
}
