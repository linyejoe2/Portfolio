import './style.css'
import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Box, CssBaseline } from '@mui/material'

import MyApp from './App'
import { lightMode, darkMode } from './theme'
import { TTheme } from './service/type'
import { purple } from '@mui/material/colors'
import TopNavigationBar from './components/TopNavigationBar'
import { TStore, store } from './service/store'
import { Provider, useSelector } from 'react-redux'

const Main = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </React.StrictMode >)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Main />
)
