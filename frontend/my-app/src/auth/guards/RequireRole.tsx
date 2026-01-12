import { useAuth } from '../../hooks/useAuth'
import NotFound from '../../pages/NotFound'
import type { RoleProps } from '../../types'

export default function RequireRole({ role, children }: RoleProps) {
  const { user } = useAuth()

  if (!user || user.role !== role) {
    return <NotFound />
  }

  return <>{children}</>
}
