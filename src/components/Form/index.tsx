import { createContext, useState, useEffect } from 'react'
import { formCurrencyInput } from '@/config'
import { useInput } from '@/hooks/useInput'
import { useLocalStorage } from '@/hooks/localstorage-hook'
import { useGetCurrenciesFormQuery } from '@/store/currency/currency.api'
import s from './styles.module.scss'

export const FormContext = createContext({})

interface val {
  code: string,
  value: string
}

export const Form = () => {
  const { data, error, isLoading, refetch } =
    useGetCurrenciesFormQuery(formCurrencyInput)

  const [storageCurrency, setStorageCurrency] = useLocalStorage(
    'currencyData',
    'null',
  )

  const [currencyBase, setCurrencyBase] = useState([])
  const [formState, setFormState] = useState([...formCurrencyInput])
  const { inputName, inputValue, setInputName, setInputValue } = useInput({
    name: '',
    value: '',
  })

  const changeInput = (value: string, name: string) => {
    const newValue = !value ? '' : value
    setInputName(name)
    setInputValue(newValue)
  }

  useEffect(() => {
    if (data && !error) {
      setCurrencyBase(data)
      setStorageCurrency(data)
    } else {
      setCurrencyBase(storageCurrency)
    }
  }, [data, error])

  useEffect(() => {
    if (inputName) {
      let newFormDataState: any = []
      formState.map((val: val) => {
        const item: any = currencyBase[`${inputName}_${val.code}`]
        if (inputName === val.code) {
          newFormDataState.push({
            ...val,
            value: inputValue,
          })
        } else {
          newFormDataState.push({
            ...val,
            value: Number(item.Value) * Number(inputValue),
          })
        }
      })
      setFormState(newFormDataState)
    }
  }, [inputName, inputValue])

  return (
    <FormContext.Provider value={{
      changeInput,
      formState
    }}>
      <div className={s.form}>Form</div>
    </FormContext.Provider>
  )
}
