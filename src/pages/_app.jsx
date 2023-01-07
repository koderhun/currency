import '/node_modules/flag-icons/css/flag-icons.min.css'
import 'styles/global.scss'
import {Provider} from 'react-redux'
import {wrapper} from 'store'

const MyApp = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest)
  const {pageProps} = props
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
