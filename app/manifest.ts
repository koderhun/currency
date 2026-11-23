// app/manifest.ts
import type {MetadataRoute} from 'next'
import {APP_CONFIG} from '$/config'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_CONFIG.name,
    short_name: APP_CONFIG.shortName,
    description: APP_CONFIG.description,
    id: APP_CONFIG.startUrl,
    start_url: APP_CONFIG.startUrl,
    scope: APP_CONFIG.scope,
    display: APP_CONFIG.display,
    background_color: APP_CONFIG.backgroundColor,
    theme_color: APP_CONFIG.themeColor,
    icons: [
      {
        src: APP_CONFIG.icons.pwa192,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: APP_CONFIG.icons.pwa512,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
