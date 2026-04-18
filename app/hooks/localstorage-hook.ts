import {useState} from 'react'

export const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      let item
      if (typeof window !== 'undefined') {
        item = localStorage.getItem(key)
      }
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: string | Function) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
