import React, { createContext, useEffect, useState } from 'react'

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme')
    if (typeof storedPrefs === 'boolean') {
      return storedPrefs
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true
    }
  }
  return false
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ initialTheme, children }) => {
  const [themeIsDark, setThemeIsDark] = useState(getInitialTheme)

  const checkTheme = existing => {
    const root = window.document.documentElement
    const isDark = existing

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(existing)

    localStorage.setItem('current-theme', existing)
  }

  if (initialTheme) {
    checkTheme(initialTheme)
  }

  useEffect(() => {
    checkTheme(themeIsDark)
  }, [themeIsDark])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setThemeIsDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ themeIsDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
