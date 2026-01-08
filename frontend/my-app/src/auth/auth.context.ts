import { createContext } from 'react'

export type User = {
  id: number
  username: string
  role: 'admin' | 'user'
  firstName: string
  lastName: string
}

export type AuthContextType = {
  user: User | null
  login: (credentials: { username: string; password: string }) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)
