import {Suspense} from 'react'
import {Header} from '$/components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <h1>About</h1>
          <p className="text-overflow">
            This application is a household currency converter. It provides
            approximate conversion to various currencies based on USD. Exchange
            rate data is sourced from an open-source provider (
            <a
              href="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
              target="_blank">
              https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
            </a>
            ). The application is intended for educational purposes only and has
            no commercial basis.
          </p>
          <ol>
            <li> Author: Koderhun</li>
            <li>
              Repository link:{' '}
              <a href="https://github.com/koderhun/currency" target="_blank">
                https://github.com/koderhun/currency
              </a>
            </li>
            <li> License: MIT</li>
          </ol>
        </Suspense>
      </main>
    </>
  )
}
