'use client'
import {useMemo, useState} from 'react'
import {useCurrencyConverter} from '@/hooks/useCurrencyConverter'
import {InputLine} from '@/components/InputLine/InputLine'

const currencies = [{code: 'USD'}, {code: 'EUR'}, {code: 'KGS'}]

export function Form() {
  const {convert} = useCurrencyConverter()

  // источник правды: какая валюта редактируется и её значение
  const [source, setSource] = useState({code: 'USD', amount: ''})

  // вычисленные значения для всех полей
  const values = useMemo(() => {
    const amount = parseFloat(source.amount)
    return currencies.reduce<Record<string, string>>((acc, {code}) => {
      if (code === source.code) {
        acc[code] = source.amount
      } else if (Number.isFinite(amount)) {
        const result = convert(amount, source.code, code)
        acc[code] = Number.isFinite(result) ? result.toFixed(2) : ''
      } else {
        acc[code] = ''
      }
      return acc
    }, {})
  }, [source, convert])

  const handleChange = ({
    fromCode,
    amount,
  }: {
    fromCode: string
    amount: string
  }) => {
    setSource({code: fromCode, amount: amount})
  }

  return (
    <div className="flex flex-col gap-4">
      {currencies.map(({code}) => (
        <InputLine
          key={code}
          currencyCode={code}
          inputValue={values[code] ?? ''}
          changeCurrencyHandler={handleChange}
        />
      ))}
    </div>
  )
}
