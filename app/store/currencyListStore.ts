// store/currencyListStore.ts
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export interface CurrencyItem {
  code: string
}

interface CurrencyListStore {
  currencies: CurrencyItem[]
  hasHydrated: boolean

  addCurrency: (code: string) => void
  removeCurrency: (code: string) => void
  setCurrencies: (currencies: CurrencyItem[]) => void
  setHasHydrated: (hasHydrated: boolean) => void
}

const DEFAULT_CURRENCIES: CurrencyItem[] = [
  {code: 'USD'},
  {code: 'EUR'},
  {code: 'RUB'},
]

const CURRENCY_LIST_VERSION = 1

export const useCurrencyListStore = create<CurrencyListStore>()(
  persist(
    (set, get) => ({
      currencies: DEFAULT_CURRENCIES,
      hasHydrated: false,

      addCurrency: (code) => {
        const {currencies} = get()
        if (currencies.some((c) => c.code === code)) return
        set({currencies: [...currencies, {code}]})
      },

      removeCurrency: (code) => {
        const {currencies} = get()
        // не даём удалить последнюю валюту
        if (currencies.length <= 1) return
        set({currencies: currencies.filter((c) => c.code !== code)})
      },

      setCurrencies: (currencies) => set({currencies}),
      setHasHydrated: (hasHydrated) => set({hasHydrated}),
    }),
    {
      name: 'currency-list',
      version: CURRENCY_LIST_VERSION,
      skipHydration: true,

      // сохраняем только список, не служебный флаг
      partialize: (state) => ({
        currencies: state.currencies,
      }),

      migrate: (persistedState, version) => {
        if (version === 0) {
          // на случай старой схемы без currencies
          const state = persistedState as {currencies?: CurrencyItem[]}
          return {
            currencies:
              Array.isArray(state?.currencies) && state.currencies.length > 0
                ? state.currencies
                : DEFAULT_CURRENCIES,
          }
        }
        return persistedState as {currencies: CurrencyItem[]}
      },

      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error('Failed to rehydrate currency list:', error)
        }
        state?.setHasHydrated(true)
      },
    },
  ),
)
