// lib/metadata.ts
import type {Metadata} from 'next'
import {APP_CONFIG} from '$/config'

export const metadata: Metadata = {
  title: APP_CONFIG.name,
  description: APP_CONFIG.description,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_CONFIG.shortName,
  },
  icons: {
    icon: APP_CONFIG.icons.favicon,
    apple: APP_CONFIG.icons.apple,
  },
}
