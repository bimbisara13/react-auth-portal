import { useContext } from 'react'
import { AuthContext } from '../auth/auth.context'

/**
 * Provides access to the authentication context.
 */
export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return ctx
}
