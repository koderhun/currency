import { useState } from 'react'

interface Props {
  name: string
  value: string
}

interface InputReturn {
  inputName: string
  setInputName: Function
  inputValue: string
  setInputValue: Function
}

export const useInput = ({ name, value }: Props): InputReturn => {
  const [inputName, setInputName] = useState<string>(name)
  const [inputValue, setInputValue] = useState<string>(value)

  return { inputName, setInputName, inputValue, setInputValue }
}
