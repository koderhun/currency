// components/RatesLoader/RatesLoader.tsx
'use client'
import {useEffect} from 'react'
import {useCurrencyStore} from '@/store/currencyStore'

export function RatesLoader() {
  const setRates = useCurrencyStore((s) => s.setRates)

  useEffect(() => {
    fetch(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json',
    )
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch rates')
        return res.json()
      })
      .then((data) => setRates({usd: data.usd}))
      .catch((err) => {
        console.error('Failed to load rates:', err)
        // даже при ошибке стоит разблокировать UI, иначе лоадер зависнет
        // setRates({ usd: {} })
      })
  }, [setRates])

  return null
}
