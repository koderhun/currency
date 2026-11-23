import './globals.scss'
import 'flag-icons/css/flag-icons.min.css'

import {metadata} from '$/utils/metadate'
import {DataHead} from '$/components/DataHead/DataHead'

import type {ReactNode} from 'react'
import {StoreHydrator} from './components/StoreHydrator/StoreHydrator'

import {AppLoader} from './components/AppLoader/AppLoader'
import {RatesLoader} from './components/RatesLoader/RatesLoader'

export {metadata}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html>
      <DataHead />
      <body>
        <StoreHydrator />
        <RatesLoader />
        <AppLoader>{children}</AppLoader>
      </body>
    </html>
  )
}
