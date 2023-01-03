import {Layout} from 'layout'
import React from 'react'
import ReactDOM from 'react-dom/client'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import {store} from 'store'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Layout />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)

serviceWorkerRegistration.register()
