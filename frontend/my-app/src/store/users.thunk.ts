import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsers } from '../api/users.service'
import type { Users } from '../types'

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
