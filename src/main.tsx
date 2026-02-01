/* istanbul ignore file */
import '@fontsource/eb-garamond' // Regular 400, SemiBold 600
import '@fontsource/unifrakturcook' // Bold 700
import '@fontsource/medievalsharp' // Regular

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'

import theme from 'style/theme.js'
import App from './App.js'
import './index.css'

const themeParam = new URLSearchParams(window.location.search).get('theme')
let mode: 'light' | 'dark' | 'system' = 'dark'

if (themeParam === 'light' || themeParam === 'dark' || themeParam === 'system') {
  mode = themeParam
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} defaultMode={mode}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
