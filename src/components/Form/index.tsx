
import { createContext, useState, useEffect } from 'react'
import { formInputs } from '@/config'
import { useInput } from '@/hooks/useInput'
import { useLocalStorage } from '@/hooks/localstorage-hook'
import { useGetCurrenciesFormQuery } from '@/store/currency/currency.api'
import { LoaderCustom } from '@/components/LoaderCustom'
import { InputGroup } from '@/components/InputGroup'
import { Title } from '@/components/Title'
import s from './styles.module.scss'


interface val {
  code: string,
  value: string
}


interface InputReturn {
  inputName: string
  setInputName: Function
  inputValue: string
  setInputValue: Function
}

interface FormContextProps {
  changeInput?: Function
  formState?: Object
}

export const FormContext = createContext({})

export const Form = () => {
  const { data, error, isLoading, refetch } =
    useGetCurrenciesFormQuery(formInputs)

  const [storageCurrency, setStorageCurrency] = useLocalStorage(
    'currencyData',
    'null',
  )

  const [currencyBase, setCurrencyBase] = useState([])
  const [formState, setFormState] = useState([...formInputs])
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
        const id: string = inputName + "_" + val.code
        const item: any = currencyBase[id]
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
      <div className={s.form}>
        {isLoading && <LoaderCustom />}
        <Title />
        <InputGroup />
      </div>
    </FormContext.Provider>
  )
}
