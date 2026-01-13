import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

/**
 * Redirects authenticated users to the homepage and renders children for unauthenticated users.
 *
 * Props:
 *  - `children`: Content to display if the user is not authenticated
 */
export default function RedirectIfAuth({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()

  if (user) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
