import React from 'react'
import Head from 'next/head'

export const HeadHtml = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1, maximum-scale=5"
      />

      <meta name="description" content="Currency converter" />
      <meta name="keywords" content="converter, currency" />
      <meta name="application-name" content="Currency" />
      <title>Converter</title>

      <link rel="icon" href="./icons/favicon.png" type="image/png" />
      <link rel="icon" href="./icons/favicon.svg" type="image/svg+xml" />
      <link rel="manifest" href="./manifest.json" />

      <link rel="apple-touch-icon" href="./icons/favicon.png" />
      <meta name="theme-color" content="#05B16D" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Currency" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      <meta name="pwa-starter-template-identity" content="currency" />
    </Head>
  )
}
