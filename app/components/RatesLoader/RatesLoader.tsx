'use client'
import {useEffect} from 'react'
import {useCurrencyStore} from '$/store/currencyStore'
import {API_URL} from '$/config'

export function RatesLoader() {
  const setRates = useCurrencyStore((s) => s.setRates)

  useEffect(() => {
    fetch(API_URL)
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
