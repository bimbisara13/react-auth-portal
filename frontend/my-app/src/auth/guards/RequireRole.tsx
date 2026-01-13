import { useAuth } from '../../hooks/useAuth'
import NotFound from '../../pages/NotFound'
import type { RoleProps } from '../../types'

/**
 * Protects routes by ensuring the user has the required role.
 * If the user does not have the correct role or is not authenticated,
 * it renders a `NotFound` page.
 *
 * Props:
 *  - `role`: The required role for accessing the content
 *  - `children`: Content to render if the user has the correct role
 */
export default function RequireRole({ role, children }: RoleProps) {
  const { user } = useAuth()

  if (!user || user.role !== role) {
    return <NotFound />
  }

  return <>{children}</>
}
