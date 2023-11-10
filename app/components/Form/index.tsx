'use client'

import {createContext, useState, useEffect} from 'react'
import {formInputs} from '@/config'
import {useInput} from '@/hooks/useInput'
import {useLocalStorage} from '@/hooks/localstorage-hook'
import {useGetCurrenciesFormQuery} from '@/store/currency/currency.api'
import {LoaderCustom} from '@/components/LoaderCustom'
import {InputGroup} from '@/components/InputGroup'
import {Title} from '@/components/Title'
import s from './styles.module.scss'

export interface TVal {
  code: string
  value: string
}

export const FormContext = createContext<undefined | {}>({})

export const Form = () => {
  const {data, error, isLoading} = useGetCurrenciesFormQuery(formInputs)

  const [storageCurrency, setStorageCurrency] = useLocalStorage(
    'currencyData',
    'null',
  )

  const [currencyBase, setCurrencyBase] = useState<any>({})
  const [formState, setFormState] = useState([...formInputs])
  const {inputName, inputValue, setInputName, setInputValue} = useInput({
    name: '',
    value: '',
  })

  const changeInput = (value: string, name: string) => {
    setInputName(name)
    setInputValue(value ? value : '0')
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
      formState.forEach((val: TVal) => {
        const id: string = inputName + '_' + val.code
        const item: any = currencyBase[id]
        if (inputName === val.code) {
          newFormDataState.push({
            ...val,
            value: inputValue,
          })
        } else {
          const res: number = Number(Number(item.Value) * Number(inputValue))
          newFormDataState.push({
            ...val,
            value: res.toFixed(2),
          })
        }
      })
      setFormState(newFormDataState)
    }
  }, [inputName, inputValue])

  return (
    <FormContext.Provider
      value={{
        changeInput,
        formState,
      }}>
      <div className={s.form}>
        <LoaderCustom {...{isLoading}} />
        <Title />
        <InputGroup />
      </div>
    </FormContext.Provider>
  )
}
