'use client'

import {useEffect} from 'react'
import {useCurrencyStore} from '@/store/currencyStore'

export function StoreHydrator({
  rates,
  children,
}: {
  rates: Record<string, number>
  children: React.ReactNode
}) {
  const setRates = useCurrencyStore((s) => s.setRates)

  useEffect(() => {
    // Предполагая, что базовая валюта — usd, сохраняем полный объект курсов
    setRates({usd: rates})
  }, [rates, setRates])

  return <>{children}</>
}
