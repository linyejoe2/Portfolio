import './style.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { CssBaseline } from '@mui/material'

import MyApp from './app'
import Theme from './Theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme.darkMode}>
      <CssBaseline />
      <MyApp />
    </ThemeProvider>
  </React.StrictMode>,
)
