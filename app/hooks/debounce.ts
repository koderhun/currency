import {useEffect, useState} from 'react'

interface Props {
  value: string
  delay: number
}

export const useDebounce = ({value, delay = 3000}: Props) => {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debounced
}
