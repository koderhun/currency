import { createContext, useContext } from 'react'
import './CurrencyForm.scss'
import { CurrencyInputGroup } from 'components/CurrencyInputGroup'
import { normalizeRequest } from 'services'
import { LoaderCustom } from 'components/LoaderCustom'
import { ErrorMsg } from 'components/ErrorMsg'
import { useInput } from 'hooks/useInput'
import { useEffect } from 'react'
import { Button } from 'antd'

export const FormContext = createContext({});

export const CurrencyForm = () => {
  const { inputName, inputValue, setInputName, setInputValue } = useInput({
    name: '',
    value: 0,
  })
  const changeItemInput = (value, name) => {
    setInputName(name)
    setInputValue(value)
    console.log('change', value, name)
  }

  useEffect(() => {

  }, [])

  const handleClick = () => {

  }

  return (
    <FormContext.Provider value={{ changeItemInput }}>
      <form className='form'>
        <div className='loader-group'>
          <CurrencyInputGroup />
        </div>
        <Button
          size='large'
          type='primary'
          className='send'
          onClick={handleClick}
        >
          Send
        </Button>
      </form>
    </FormContext.Provider>
  )
}
