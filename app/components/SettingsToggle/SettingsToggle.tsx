'use client'
import {useSettingsStore} from '$/store/settingsStore'
import s from './styles.module.scss'

export function SettingsToggle() {
  const settingsEnabled = useSettingsStore((s) => s.settingsEnabled)
  const toggleSettings = useSettingsStore((s) => s.toggleSettings)

  return (
    <button
      type="button"
      onClick={toggleSettings}
      aria-pressed={settingsEnabled}
      className={`${s.toggle} ${settingsEnabled ? s.toggleOn : ''}`}>
      Settings: {settingsEnabled ? 'on' : 'off'}
    </button>
  )
}
