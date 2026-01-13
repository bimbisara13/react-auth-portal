import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

/**
 * Protects routes by ensuring the user is authenticated.
 * If the user is not authenticated, redirects them to the login page.
 *
 * Props:
 *  - `children`: Content to render if the user is authenticated
 */
export default function RequireAuth({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
