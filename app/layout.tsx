import '/node_modules/flag-icons/css/flag-icons.min.css'
import './globals.scss'
import type {Metadata} from 'next'
import {Providers} from './store'

export const metadata: Metadata = {
  title: 'Currency Converter',
  description: '',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <body>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
