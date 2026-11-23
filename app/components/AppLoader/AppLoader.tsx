// components/AppLoader/AppLoader.tsx
'use client'
import {useEffect, useState} from 'react'
import {useSettingsStore} from '$/store/settingsStore'
import {useCurrencyListStore} from '$/store/currencyListStore'
import s from './styles.module.scss'

const UI_DELAY_MS = 100

export function AppLoader({children}: {children: React.ReactNode}) {
  const settingsHydrated = useSettingsStore((s) => s.hasHydrated)
  const currenciesHydrated = useCurrencyListStore((s) => s.hasHydrated)
  const ready = settingsHydrated && currenciesHydrated

  // показывать ли интерфейс (после задержки в 1 с)
  const [showUi, setShowUi] = useState(false)

  useEffect(() => {
    if (!ready) {
      // данные ещё не готовы — сбрасываем, чтобы после готовности
      // задержка отсчитывалась заново
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowUi(false)
      return
    }

    const t = setTimeout(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowUi(true)
    }, UI_DELAY_MS)

    return () => clearTimeout(t)
  }, [ready])

  return (
    <>
      {children}
      {!showUi && (
        <div
          className={s.overlay}
          role="status"
          aria-live="polite"
          aria-busy="true">
          <div className={s.spinner} aria-hidden="true" />
          <span className={s.text}>Загрузка…</span>
        </div>
      )}
    </>
  )
}
