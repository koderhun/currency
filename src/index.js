import { Layout } from 'layout/Layout'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from 'store/store'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
