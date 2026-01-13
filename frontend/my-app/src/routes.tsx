import { createBrowserRouter } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

import RequireAuth from './auth/guards/RequireAuth'
import RequireRole from './auth/guards/RequireRole'
import RedirectIfAuth from './auth/guards/RedirectIfAuth'

/**
 * Route Guards:
 *  - RedirectIfAuth: redirects logged-in users away from login page
 *  - RequireAuth: ensures user is authenticated
 *  - RequireRole: ensures user has the required role
 */
export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: (
        // Redirect logged-in users to dashboard.
        <RedirectIfAuth>
          <Login />
        </RedirectIfAuth>
      ),
    },
    {
      path: '/',
      element: (
        // Requires user to be authenticated.
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
    },
    {
      path: '/admin',
      element: (
        // Requires user to be authenticated AND have 'admin' role.
        <RequireAuth>
          <RequireRole role="admin">
            <Admin />
          </RequireRole>
        </RequireAuth>
      ),
    },
    {
      // Catch-all 404 route.
      path: '*',
      element: <NotFound />,
    },
  ])

  return router
}
