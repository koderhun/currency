import {useEffect} from 'react'
import {createContext, useState} from 'react'
import {CurrencyInputGroup} from 'components/CurrencyInputGroup'
import {useGetCurrenciesFormQuery} from 'store/currency/currency.api'
import {useInput} from 'hooks/useInput'
import {formCurrencyInput} from 'config'
import {LoaderCustom} from 'components/LoaderCustom'
import {ErrorMsg} from '../ErrorMsg'
import {useLocalStorage} from 'hooks/localstorage-hook'
import './CurrencyForm.scss'

export const FormContext = createContext()

export const CurrencyForm = () => {
  const {data, error, isLoading, isFetching} = useGetCurrenciesFormQuery(
    formCurrencyInput,
    {pollingInterval: 60000},
  )

  const [storageCurrency, setStorageCurrency] = useLocalStorage(
    'currencyData',
    'null',
  )

  const [formDataState, setFormDataState] = useState([...formCurrencyInput])
  const [currencyBase, setCurrencyBase] = useState({})
  const {inputName, inputValue, setInputName, setInputValue} = useInput({
    name: '',
    value: 0,
  })

  const changeItemInput = (value, name) => {
    setInputName(name)
    setInputValue(value)
  }

  useEffect(() => {
    if (data && !error) {
      setCurrencyBase(data)
      setStorageCurrency(data)
    } else {
      setCurrencyBase(storageCurrency)
    }
  }, [data])

  useEffect(() => {
    if (inputName) {
      let newFormDataState = []
      formDataState.map((val) => {
        const item = currencyBase[`${inputName}_${val.code}`]
        if (inputName === val.code) {
          newFormDataState.push({
            ...val,
            value: Number(inputValue),
          })
        } else {
          newFormDataState.push({
            ...val,
            value: Number(item.Value) * Number(inputValue),
          })
        }
      })
      setFormDataState(newFormDataState)
    }
  }, [inputName, inputValue])

  return (
    <FormContext.Provider value={{changeItemInput, formDataState}}>
      <form className='form'>
        <div className='loader-group'>
          {isLoading && <LoaderCustom />}
          <CurrencyInputGroup />
        </div>
        {error && <ErrorMsg error={error} />}
      </form>
    </FormContext.Provider>
  )
}
