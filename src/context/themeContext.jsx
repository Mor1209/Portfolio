import React, { createContext, useState } from 'react'

const getTheme = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    return true
  } else {
    document.documentElement.classList.remove('dark')
    return false
  }
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [themeIsDark, setThemeIsDark] = useState(getTheme)

  const toggleTheme = () => {
    setThemeIsDark(prev => {
      if (!prev) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return !prev
    })
  }

  return (
    <ThemeContext.Provider value={{ themeIsDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
