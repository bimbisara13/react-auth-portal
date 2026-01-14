import { createContext } from 'react'

/**
 * ThemeContextType
 *
 * Defines the shape of the ThemeContext, including:
 *  - `theme`: current theme value ('light' | 'dark')
 *  - `toggleTheme`: function to toggle between themes
 */
import type { ThemeContextType } from '../types'

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
