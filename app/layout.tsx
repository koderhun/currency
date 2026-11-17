import './globals.scss'
import 'flag-icons/css/flag-icons.min.css'

import type {ReactNode} from 'react'
import {AppLoader} from './components/AppLoader/AppLoader'
import {RatesLoader} from './components/RatesLoader/RatesLoader'

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html>
      <body>
        <RatesLoader />
        <AppLoader>{children}</AppLoader>
      </body>
    </html>
  )
}
