import axios from 'axios'

/**
 * Returns a user-friendly error message for login failures.
 *
 * @param err - The error object caught from a login request.
 * @returns A string suitable for displaying to the user.
 */
export const getLoginErrorMessage = (err: unknown): string => {
  if (!axios.isAxiosError(err)) {
    return 'An unexpected error occurred.'
  }

  if (!err.response) {
    return 'Unable to connect to the server.'
  }

  const status = err.response.status

  if (status === 401) {
    return 'Invalid username or password'
  }

  if (status >= 500) {
    return 'Server Error: Something went wrong.'
  }

  return 'Something went wrong. Please try again later.'
}
