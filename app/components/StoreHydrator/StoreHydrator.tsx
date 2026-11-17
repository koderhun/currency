// components/StoreHydrator/StoreHydrator.tsx
'use client'
import {useEffect} from 'react'
import {useSettingsStore} from '@/store/settingsStore'
import {useCurrencyListStore} from '@/store/currencyListStore'

export function StoreHydrator() {
  useEffect(() => {
    // Вручную запускаем чтение localStorage для обоих store'ов
    useSettingsStore.persist.rehydrate()
    useCurrencyListStore.persist.rehydrate()
  }, [])

  return null
}
