'use client'
import {ReactNode} from 'react'
import {Provider} from 'react-redux'
import {store} from './store'

interface ProvidersType {
  children: ReactNode
}

export function Providers({children}: ProvidersType) {
  return <Provider store={store}>{children}</Provider>
}
