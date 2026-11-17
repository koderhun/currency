'use client'

import {useCallback} from 'react'
import {useCurrencyStore} from '@/store/currencyStore'

// берем как базу USD
const BASE = 'usd'

export function useCurrencyConverter() {
  const rates = useCurrencyStore((s) => s.rates)

  const convert = useCallback(
    (amount: number, from: string, to: string): number => {
      const baseRates = rates[BASE]
      if (!baseRates) return NaN

      const f = from.toLowerCase()
      const t = to.toLowerCase()

      const fromRate = f === BASE ? 1 : baseRates[f]
      const toRate = t === BASE ? 1 : baseRates[t]

      if (!fromRate || !toRate) return NaN

      return (amount / fromRate) * toRate
    },
    [rates],
  )

  const getRate = useCallback(
    (from: string, to: string): number => convert(1, from, to),
    [convert],
  )

  return {convert, getRate}
}
