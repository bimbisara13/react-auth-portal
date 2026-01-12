import { useState } from 'react'
import * as authService from '../api/auth.service'
import { AuthContext } from './auth.context'
import type { User } from '../types'

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
