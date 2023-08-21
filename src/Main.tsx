import './style.css'
import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Box, CssBaseline } from '@mui/material'

import MyApp from './App'
import Theme, { lightMode, darkMode } from './theme'
import { TTheme } from './service/type'
import { purple } from '@mui/material/colors'
import TopNavigationBar from './components/TopNavigationBar'
import { TStore, store } from './service/store'
import { Provider, useSelector } from 'react-redux'

const Main = () => {
  // get theme from store
  // const themeState = useSelector((state: TStore) => state.theme);
  return (
    <React.StrictMode>
      <Provider store={store}>
        {/* <ThemeProvider theme={darkMode}> */}
          {/* <ThemeProvider theme={themeState == "light" ? lightMode : darkMode}> */}
          
          <MyApp />
        {/* </ThemeProvider> */}
      </Provider>
    </React.StrictMode >)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Main />
)
