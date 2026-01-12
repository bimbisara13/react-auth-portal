import { createBrowserRouter } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

import RequireAuth from './auth/guards/RequireAuth'
import RequireRole from './auth/guards/RequireRole'
import RedirectIfAuth from './auth/guards/RedirectIfAuth'

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: (
        <RedirectIfAuth>
          <Login />
        </RedirectIfAuth>
      ),
    },
    {
      path: '/',
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
    },
    {
      path: '/admin',
      element: (
        <RequireAuth>
          <RequireRole role="admin">
            <Admin />
          </RequireRole>
        </RequireAuth>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  return router
}
