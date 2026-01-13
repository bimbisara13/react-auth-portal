import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users.slice'

/**
 * Redux Store
 *
 * Configures the global Redux store for the application.
 * Combines all feature slices under a single reducer object.
 */
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
