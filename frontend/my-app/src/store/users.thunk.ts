import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsers } from '../api/users.service'
import type { Users } from '../types'

/**
 * userDetails
 *
 * Redux async thunk for fetching users data from the API.
 *
 * Generics:
 *  - Users[]: the type of the successful return value
 *  - void: the argument passed to the thunk (none in this case)
 *  - { rejectValue: string }: type of rejected value for error handling
 *
 * Error Handling:
 *  - If the fetchUsers call throws an Error instance, its message is returned
 *  - Otherwise, a generic 'Network error' message is returned
 */
export const userDetails = createAsyncThunk<
  Users[],
  void,
  { rejectValue: string }
>('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    return await fetchUsers()
  } catch (err) {
    if (err instanceof Error) {
      return rejectWithValue(err.message)
    }
    return rejectWithValue('Network error')
  }
})
