import { useEffect, useState } from 'react'

import { ThemeContext } from './theme.context'
import type { Theme } from '../types'

/**
 * Provides theme state and toggle function to the application via ThemeContext.
 *
 * Responsibilities:
 *  - Initializes theme from localStorage (default: 'light')
 *  - Applies theme class to the HTML root element
 *  - Persists theme changes to localStorage
 *  - Provides `theme` and `toggleTheme` via ThemeContext
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
