import './globals.scss'

import type {ReactNode} from 'react'
import {StoreHydrator} from './components/StoreHydrator/StoreHydrator'
const API_URL: string =
  'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'

// обновление курсов валют с использованием API и кэширования
async function getRates() {
  const res = await fetch(API_URL, {cache: 'force-cache'})
  if (!res.ok) throw new Error('Failed to fetch rates')
  const data = await res.json()
  // console.log('Fetched rates:', data.usd)
  return data.usd
}

export default async function RootLayout({children}: {children: ReactNode}) {
  const rates = await getRates()
  return (
    <html>
      <body>
        <StoreHydrator rates={rates}>{children}</StoreHydrator>
      </body>
    </html>
  )
}
