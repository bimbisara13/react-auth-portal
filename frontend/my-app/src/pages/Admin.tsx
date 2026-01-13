import Navbar from '../components/Navbar'

/**
 * Admin Page
 *
 * Protected route only accessible to users with the 'admin' role.
 * Responsibilities:
 *  - Renders the main admin panel layout
 *  - Displays a message indicating the page is protected
 *  - Uses the Navbar component for consistent navigation
 *
 * Usage:
 *  - Wrapped in <RequireAuth> and <RequireRole role="admin"> in the router
 */
export default function Admin() {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <p className="text-xl font-semibold mb-2">Admin Panel</p>

        <p className="text-lg">
          This is a{' '}
          <span className="font-semibold text-teal-500">protected</span> route
          and is available only to administrators.
        </p>
      </main>
    </>
  )
}
