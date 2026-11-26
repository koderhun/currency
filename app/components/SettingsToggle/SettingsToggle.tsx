'use client'
import {useSettingsStore} from '$/store/settingsStore'
import s from './styles.module.scss'

export function SettingsToggle({onChange}: {onChange?: () => void}) {
  const settingsEnabled = useSettingsStore((s) => s.settingsEnabled)
  const toggleSettings = useSettingsStore((s) => s.toggleSettings)

  const handleClick = () => {
    toggleSettings()
    onChange?.()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={settingsEnabled}
      className={`${s.toggle} ${settingsEnabled ? s.toggleOn : ''}`}>
      Settings: {settingsEnabled ? 'on' : 'off'}
    </button>
  )
}
