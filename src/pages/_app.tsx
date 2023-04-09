import '/node_modules/flag-icons/css/flag-icons.min.css'
import { Provider } from 'react-redux'
import { wrapper } from '@/store'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { HeadHtml } from '@/config/HeadHtml'

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  return <>
    <HeadHtml />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}
