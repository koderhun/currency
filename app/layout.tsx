import '/node_modules/flag-icons/css/flag-icons.min.css'
import './globals.scss'
import {Providers} from './store'
import {Metadata} from '@/Metadata'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <Metadata />
      </head>
      <body>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
