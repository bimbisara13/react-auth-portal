import { useAuth } from '../hooks/useAuth'
import NotFound from '../pages/NotFound'

type Props = {
  role: 'admin' | 'user'
  children: React.ReactNode
}

export default function RequireRole({ role, children }: Props) {
  const { user } = useAuth()

  if (!user || user.role !== role) {
    return <NotFound />
  }

  return <>{children}</>
}
