import Navbar from '../components/Navbar'
import { useAuth } from '../hooks/useAuth'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-xl font-semibold mb-2">Dashboard</h1>
        <div className="text-lg my-4">
          <p className="mb-2">Welcome back, {user?.firstName}.</p>

          <p>
            You are logged in as{' '}
            <span className="font-semibold text-sky-500">{user?.role}</span>.
          </p>
        </div>
      </main>
    </>
  )
}
