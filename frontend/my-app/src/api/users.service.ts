import api from './axios'
import type { Users, UserResponse } from '../types'

const USERS_API = import.meta.env.VITE_USERS_API

/**
 * Fetches a list of users from the external API.
 *
 * This function makes a GET request to the configured `USERS_API` endpoint,
 * processes the response, and returns an array of user objects.
 * It also validates the data format to ensure it matches the expected structure.
 *
 * @returns {Promise<Users[]>} - A promise that resolves to an array of users.
 * @throws {Error} - Throws an error if the response data format is invalid.
 */
export const fetchUsers = async (): Promise<Users[]> => {
  const { data } = await api.get<UserResponse>(USERS_API, {
    skipAuth: true,
  })

  if (!Array.isArray(data?.results)) {
    throw new Error('Invalid data format received')
  }

  return data.results
}
