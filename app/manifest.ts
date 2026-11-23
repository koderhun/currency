import type {MetadataRoute} from 'next'

export const dynamic = 'force-static' // ← Добавьте эту строку

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Currency Converter',
    short_name: 'Currency',
    description: 'Конвертер валют',
    start_url: '/',
    display: 'standalone',
    background_color: '#00ff00',
    theme_color: '#00ff00',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
