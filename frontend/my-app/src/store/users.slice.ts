import { createSlice } from '@reduxjs/toolkit'
import { userDetails } from './users.thunk'
import type { Users } from '../types'

interface UsersState {
  users: Users[] | null
  loading: boolean
  error?: string
}

const initialState: UsersState = {
  users: null,
  loading: false,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userDetails.pending, (state) => {
        state.loading = true
        state.error = undefined
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.users = action.payload
        state.loading = false
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default usersSlice.reducer
