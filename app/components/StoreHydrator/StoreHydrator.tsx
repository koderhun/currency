'use client'

import {useEffect} from 'react'
import {useCurrencyStore} from '@/store/currencyStore'
import {useSettingsStore} from '@/store/settingsStore'
import {useCurrencyListStore} from '@/store/currencyListStore'

export function StoreHydrator({
  rates,
  children,
}: {
  rates: Record<string, number>
  children: React.ReactNode
}) {
  const setRates = useCurrencyStore((s) => s.setRates)

  useEffect(() => {
    // 1. гидратация курсов (ваши существующие данные с сервера)
    setRates({usd: rates})

    // 2. ручная гидратация persist-store'ов.
    //    Нужна, потому что в них стоит skipHydration: true —
    //    без этого вызова localStorage не будет прочитан.
    useSettingsStore.persist.rehydrate()
    useCurrencyListStore.persist.rehydrate()
  }, [rates, setRates])

  return <>{children}</>
}
