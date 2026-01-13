import axios, { AxiosError } from 'axios'
import type { ExtendedConfig } from '../types'

/*
 * Create a single Axios instance with default configuration.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

/**
 * Request Interceptor
 *
 * This interceptor modifies the request configuration before the request is sent.
 * If the `skipAuth` flag is set in the request config, it disables the inclusion of credentials.
 *
 * @param {ExtendedConfig} config - The Axios request configuration.
 * @returns {ExtendedConfig} - The modified configuration.
 */
api.interceptors.request.use((config: ExtendedConfig) => {
  if (config.skipAuth) {
    config.withCredentials = false
  }
  return config
})

/**
 * Response Interceptor
 *
 * This interceptor is responsible for handling responses and errors.
 * If the server returns a 403, it tries to refresh the authentication token by
 * sending a `POST` request to `/auth/refresh`. If the refresh fails, the user is logged out.
 *
 * @param {AxiosError} error - The Axios error object.
 * @returns {Promise<any>} - The response or a rejected promise in case of error.
 */
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as ExtendedConfig

    if (
      error.response?.status === 403 &&
      !originalRequest._retry &&
      !originalRequest.skipAuth
    ) {
      originalRequest._retry = true

      try {
        await api.post('/auth/refresh')

        return api(originalRequest)
      } catch {
        localStorage.removeItem('user')
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export default api
