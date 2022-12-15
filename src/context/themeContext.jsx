import React, { createContext, useEffect, useState } from 'react'

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
  // if (typeof window !== 'undefined' && window.localStorage) {
  //   const storedPrefs = window.localStorage.getItem('dark-theme')
  //   if (typeof storedPrefs === 'string' && storedPrefs) {
  //     return true
  //   }
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     return true
  //   }
  // }
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [themeIsDark, setThemeIsDark] = useState(getTheme)

  const setTheme = existing => {
    const root = window.document.documentElement
    const isDark = existing
    console.log(existing)

    // document.documentElement.classList.toggle('dark')
    // document.documentElement.classList.toggle('dark')
    root.classList.remove(isDark ? 'dark' : 'light')
    root.classList.add(existing ? 'dark' : 'light')

    localStorage.setItem('current-theme', existing)
  }

  console.log(themeIsDark)
  // if (initialTheme) {
  //   checkTheme(initialTheme)
  // }

  // useEffect(() => {
  //   checkTheme(themeIsDark)
  // }, [])

  const toggleTheme = () => {
    // document.documentElement.classList.toggle('dark')
    setThemeIsDark(prev => {
      console.log('setting theme to ' + !prev)

      if (!prev) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      // checkTheme(!prev)
      return !prev
    })
  }

  return (
    <ThemeContext.Provider value={{ themeIsDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
