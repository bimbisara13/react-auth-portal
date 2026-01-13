import { Link } from 'react-router-dom'

/**
 * NotFound Page
 *
 * Displays a 404 error when a user navigates to a non-existent route.
 * Responsibilities:
 *  - Shows a prominent 404 message
 *  - Provides a link to navigate back to the dashboard
 *
 * Usage:
 *  - Rendered for all unmatched routes via the router (* path)
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>

      <p className="mb-4">Page not found</p>

      <Link to="/" className="text-(--color-accent) underline">
        Go to dashboard
      </Link>
    </div>
  )
}
