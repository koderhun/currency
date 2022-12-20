import {useState} from 'react'

export const useInput = ({name, value}) => {
  const [inputName, setInputName] = useState(name)
  const [inputValue, setInputValue] = useState(value)

  return {inputName, setInputName, inputValue, setInputValue}
}
