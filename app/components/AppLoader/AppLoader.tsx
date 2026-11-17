// components/AppLoader/AppLoader.tsx
'use client'
import {useSettingsStore} from '@/store/settingsStore'
import s from './styles.module.scss'

export function AppLoader({children}: {children: React.ReactNode}) {
  const hasHydrated = useSettingsStore((s) => s.hasHydrated)

  return (
    <>
      {children}
      {!hasHydrated && (
        <div className={s.overlay} role="status" aria-live="polite">
          <div className={s.spinner} aria-hidden="true" />
          <span className={s.text}>Загрузка…</span>
        </div>
      )}
    </>
  )
}
