import { createContext } from 'react'

/**
 * AuthContextType
 *
 * Defines the shape of the AuthContext, including:
 *  - `user`: the current authenticated user or `null` if not logged in
 *  - `login`: function to authenticate and set the user state
 *  - `logout`: function to log the user out and clear the user state
 */
import type { AuthContextType } from '../types'

/**
 * AuthContext
 *
 * React context used to manage user authentication state across the app.
 * Default value is `null` to indicate that the provider must wrap components.
 *
 * Usage:
 *  - Wrap the app with <AuthProvider>
 *  - Consume via useContext(AuthContext)
 */
export const AuthContext = createContext<AuthContextType | null>(null)
