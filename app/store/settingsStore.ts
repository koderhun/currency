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
      onRehydrateStorage: () => (state) => {
        // state — это уже восстановленный store; если localStorage пуст, state тоже есть
        state?.setHasHydrated(true)
      },
    },
  ),
)
