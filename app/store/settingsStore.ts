// store/settingsStore.ts
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface SettingsStore {
  settingsEnabled: boolean
  hasHydrated: boolean
  setSettingsEnabled: (enabled: boolean) => void
  toggleSettings: () => void
  setHasHydrated: (hasHydrated: boolean) => void
}

// Текущая версия схемы. Увеличивайте при изменении структуры настроек.
const SETTINGS_VERSION = 1

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      // состояние
      settingsEnabled: false,
      hasHydrated: false,

      // методы
      setSettingsEnabled: (settingsEnabled) => set({settingsEnabled}),
      toggleSettings: () => set((s) => ({settingsEnabled: !s.settingsEnabled})),
      setHasHydrated: (hasHydrated) => set({hasHydrated}),
    }),
    {
      name: 'settings',
      version: SETTINGS_VERSION,
      skipHydration: true,

      // Сохраняем только реальные настройки — не служебный флаг hasHydrated.
      partialize: (state) => ({
        settingsEnabled: state.settingsEnabled,
      }),

      // Миграция при изменении версии схемы.
      // persistedState — то, что лежит в localStorage (уже распарсенный state).
      migrate: (persistedState, version) => {
        if (version === 0) {
          // Пример: раньше поле называлось иначе или отсутствовало.
          // Возвращаем объект, совместимый с текущей схемой.
          return {
            settingsEnabled:
              typeof (persistedState as {settingsEnabled?: unknown})
                ?.settingsEnabled === 'boolean'
                ? (persistedState as {settingsEnabled: boolean}).settingsEnabled
                : false,
          }
        }
        return persistedState as {settingsEnabled: boolean}
      },

      // Вызывается после попытки восстановления — и при успехе, и при ошибке.
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error('Failed to rehydrate settings:', error)
        }
        // Ставим флаг в любом случае, иначе AppLoader зависнет навсегда.
        state?.setHasHydrated(true)
      },
    },
  ),
)
