'use client'
import {useMemo, useState} from 'react'
import {useCurrencyConverter} from '@/hooks/useCurrencyConverter'
import {InputLine} from '@/components/InputLine/InputLine'
import {CurrencyPicker} from '@/components/CurrencyPicker/CurrencyPicker'
import {useSettingsStore} from '@/store/settingsStore'
import s from './styles.module.scss'

const ALL_CURRENCIES = [
  {code: 'USD'},
  {code: 'EUR'},
  {code: 'KGS'},
  {code: 'GEL'},
  {code: 'TRY'},
  {code: 'KZT'},
  {code: 'RUB'},
  {code: 'PLN'},
  {code: 'CZK'},
  {code: 'UZS'},
  {code: 'CNY'},
  {code: 'JPY'},
  {code: 'KRW'},
  {code: 'KPW'},
] as const

export function Form() {
  const {convert} = useCurrencyConverter()

  const [currencies, setCurrencies] = useState<{code: string}[]>([
    {code: 'USD'},
    {code: 'EUR'},
    {code: 'RUB'},
  ])
  const [selected, setSelected] = useState('')
  const [source, setSource] = useState({code: 'USD', amount: ''})

  const pickerOptions = useMemo(() => {
    const used = new Set(currencies.map((c) => c.code))
    return ALL_CURRENCIES.map(({code}) => ({
      code,
      disabled: used.has(code),
    }))
  }, [currencies])

  const safeSelected = pickerOptions.find((o) => o.code === selected)?.disabled
    ? ''
    : selected

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
  }, [source, convert, currencies])

  const handleChange = ({
    fromCode,
    amount,
  }: {
    fromCode: string
    amount: string
  }) => {
    setSource({code: fromCode, amount})
  }

  const handleAdd = () => {
    if (!safeSelected) return
    if (currencies.some((c) => c.code === safeSelected)) return
    setCurrencies((prev) => [...prev, {code: safeSelected}])
    setSelected('')
  }

  const handleRemove = (code: string) => {
    // Не даём удалить последнюю валюту — иначе конвертировать некуда
    if (currencies.length <= 1) return

    setCurrencies((prev) => prev.filter((c) => c.code !== code))

    // Если удалили источник — переносим источник на первую оставшуюся валюту,
    // сохраняя введённую сумму (она уже пересчитана в values для этой валюты)
    if (source.code === code) {
      const next = currencies.find((c) => c.code !== code)
      if (next) {
        setSource({code: next.code, amount: values[next.code] ?? ''})
      }
    }
  }

  const settingsEnabled = useSettingsStore((e) => e.settingsEnabled)

  return (
    <div className={s.form}>
      {currencies.map(({code}) => (
        <InputLine
          key={code}
          currencyCode={code}
          inputValue={values[code] ?? ''}
          changeCurrencyHandler={handleChange}
          onRemove={() => handleRemove(code)}
          canRemove={currencies.length > 1}
        />
      ))}

      {settingsEnabled && (
        <div className={s.addCurrency}>
          <CurrencyPicker
            options={pickerOptions}
            value={safeSelected}
            onChange={setSelected}
            onAdd={handleAdd}
          />
        </div>
      )}
    </div>
  )
}
