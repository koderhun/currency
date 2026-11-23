import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Currency Converter',
  description: 'Конвертер валют',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Currency',
  },
  icons: {
    apple: '/icon-192.png',
  },
}
