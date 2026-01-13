import { useContext } from 'react'
import { ThemeContext } from '../theme/theme.context'

/**
 * Provides access to the theme context.
 */
export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return ctx
}
