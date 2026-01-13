import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './store'
import App from './App.tsx'

import './styles/global.css'

/**
 * Entry point of the frontend application.
 *
 * Responsibilities:
 *  - Mounts the React application into the DOM
 *  - Wraps the app in React.StrictMode for highlighting potential problems
 *  - Provides the Redux store to the entire application via Provider
 *  - Imports global CSS
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
