import { RouterProvider } from 'react-router-dom'

import { AuthProvider } from './auth/AuthProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import AppRoutes from './routes'

function App() {
  const router = AppRoutes()

  /**
   * Root App component.
   *
   * Responsibilities:
   *  - Provides Theme context to the entire app via ThemeProvider
   *  - Provides Auth context via AuthProvider
   *  - Renders application routes using React Router's RouterProvider
   *  - Wraps the router in a layout container for responsive width
   */
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="flex-1 w-full max-w-[1920px] mx-auto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
