import { Sun, Moon } from 'lucide-react'

import { useTheme } from '../hooks/useTheme'

/**
 * ThemeToggle Component
 *
 * A button to toggle between light and dark themes.
 * It uses the `useTheme` hook to read and toggle the current theme.
 *
 * Responsibilities:
 *  - Displays either a Sun or Moon icon based on the current theme
 *  - Toggles the theme between light and dark on click
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="p-1 rounded transition-all duration-200 hover:ring-2 hover:ring-blue-500"
    >
      {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
