import { useState } from 'react'
import * as authService from '../api/auth.service'
import { AuthContext } from './auth.context'
import type { User } from '../types'

/**
 * Provides user authentication state and login/logout functions to the application via AuthContext.
 *
 * Responsibilities:
 *  - Initializes user state from localStorage (if available)
 *  - Stores authenticated user in localStorage for persistence
 *  - Provides `user`, `login`, and `logout` via AuthContext
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const login = async (credentials: { username: string; password: string }) => {
    const loggedInUser = await authService.login(credentials)
    setUser(loggedInUser)
  }

  const logout = async () => {
    await authService.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
