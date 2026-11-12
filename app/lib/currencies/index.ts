import currenciesJson from '@/lib/currencies/currencies.json'

export const ALL_CURRENCIES = Object.entries(currenciesJson).map(
  ([code, name]) => ({
    code: code.toUpperCase(),
    name,
  }),
)
