import { useState } from 'react'

interface Props {
  name: string
  value: string
}

export const useInput = ({ name, value }: Props) => {
  const [inputName, setInputName] = useState(name)
  const [inputValue, setInputValue] = useState(value)

  return { inputName, setInputName, inputValue, setInputValue }
}
