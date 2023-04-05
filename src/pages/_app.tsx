import '/node_modules/flag-icons/css/flag-icons.min.css'
import { Provider } from 'react-redux'
import { wrapper } from '@/store'
import Head from 'next/head'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Currency</title>

      <link rel="icon" href="./icons/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="./icons/favicon.png" />
      <meta name="theme-color" content="#317EFB" />
      <link rel="manifest" href="./manifest.json" />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}
