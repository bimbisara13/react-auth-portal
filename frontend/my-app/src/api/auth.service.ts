import api from './axios'
import type { User, LoginPayload, LoginResponse } from '../types'

/**
 * Logs in a user by sending credentials to the API.
 *
 * This function sends a POST request to the `/auth/login` endpoint with the provided login credentials.
 * Upon success, it stores the authenticated user object in `localStorage` and returns the user data.
 *
 * @param {LoginPayload} payload - The login credentials, including username and password.
 * @returns {Promise<User>} - A promise that resolves to the authenticated user data.
 * @throws {Error} - Throws an error if the login request fails.
 */
export const login = async (payload: LoginPayload): Promise<User> => {
  const { data } = await api.post<LoginResponse>('/auth/login', payload)

  localStorage.setItem('user', JSON.stringify(data.user))
  return data.user
}

/**
 * Logs out the current user by sending a logout request to the API.
 *
 * This function sends a POST request to the `/auth/logout` endpoint to terminate the user session.
 * It then removes the user data from `localStorage` and redirects the user to the login page.
 *
 * @returns {Promise<void>} - A promise that resolves when the logout process is complete.
 */
export const logout = async (): Promise<void> => {
  await api.post('/auth/logout')
  localStorage.removeItem('user')
  window.location.href = '/login'
}

/**
 * Retrieves the current authenticated user from localStorage.
 *
 * This function attempts to fetch the user object stored in `localStorage`.
 * If no user data exists, it returns `null`.
 *
 * @returns {User | null} - The user object if authenticated, or `null` if no user is logged in.
 */
export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}
