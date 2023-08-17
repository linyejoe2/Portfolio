import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Box, CssBaseline } from '@mui/material'

import MyApp from './App'
import Theme from './Theme'
import { purple } from '@mui/material/colors'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme.darkMode}>
      <CssBaseline />
      <MyApp />
      <Box
        bgcolor={purple}
        sx={{
          height: "60px",
          marginTop: "100px",
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.dark"
        }}>
        Copyright © 2023 linyejoe2

      </Box>
    </ThemeProvider>
  </React.StrictMode>,
)
