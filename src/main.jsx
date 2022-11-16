import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { LazyMotion, domAnimation } from 'framer-motion'
import { ThemeProvider } from './context/themeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LazyMotion>
  </React.StrictMode>
)
