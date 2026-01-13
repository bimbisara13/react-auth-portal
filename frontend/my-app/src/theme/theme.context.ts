import { createContext } from 'react'

import type { Theme } from '../types'

/**
 * ThemeContextType
 *
 * Defines the shape of the ThemeContext, including:
 *  - `theme`: current theme value ('light' | 'dark')
 *  - `toggleTheme`: function to toggle between themes
 */
export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

/**
 * ThemeContext
 *
 * React context used to provide theme state across the app.
 * Default value is `null` to indicate that the provider must wrap components.
 *
 * Usage:
 *  - Wrap the app with <ThemeProvider>
 *  - Consume via useContext(ThemeContext)
 */
export const ThemeContext = createContext<ThemeContextType | null>(null)
