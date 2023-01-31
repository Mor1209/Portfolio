import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { LazyMotion, domAnimation } from 'framer-motion'
import { ThemeProvider } from './context/themeContext'
import { NavProvider } from './context/navContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <NavProvider>
          <App />
        </NavProvider>
      </ThemeProvider>
    </LazyMotion>
  </React.StrictMode>
)
