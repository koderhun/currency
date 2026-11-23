export const API_URL =
  'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'

export const formInputs = [
  {
    code: 'USD',
    value: '',
  },
  {
    code: 'EUR',
    value: '',
  },
  {
    code: 'UAH',
    value: '',
  },
  {
    code: 'KGS',
    value: '',
  },
  {
    code: 'GEL',
    value: '',
  },
  {
    code: 'TRY',
    value: '',
  },
  {
    code: 'KZT',
    value: '',
  },
  {
    code: 'RUB',
    value: '',
  },
  {
    code: 'BYN',
    value: '',
  },
]

export const APP_CONFIG = {
  name: 'Currency Converter',
  shortName: 'Currency',
  description: 'This application is a household currency converter.',
  themeColor: '#16a34a',
  backgroundColor: '#ffffff',
  startUrl: '/',
  scope: '/',
  display: 'standalone' as const,
  icons: {
    favicon: '/favicon.png',
    apple: '/apple-touch-icon.png',
    pwa192: '/pwa-192x192.png',
    pwa512: '/pwa-512x512.png',
  },
} as const
