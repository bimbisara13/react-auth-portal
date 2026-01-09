import { createAsyncThunk } from '@reduxjs/toolkit'

interface UserName {
  first: string
  last: string
}

export interface User {
  name: UserName
  email: string
}

const USERS_API = 'https://randomuser.me/api/?results=30'

export const userDetails = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(USERS_API)

    if (!res.ok) {
      return rejectWithValue('Failed to fetch users: ' + res.statusText)
    }

    const data = await res.json()

    if (!data.results || !Array.isArray(data.results)) {
      return rejectWithValue('Invalid data format received')
    }

    return data.results as User[]
  } catch (error) {
    console.error('Error fetching users:', error)
    return rejectWithValue('Network error')
  }
})
