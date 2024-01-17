import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import MyApp from './App'
import { store } from './service/store'
import { Provider } from 'react-redux'

import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </React.StrictMode >
)
