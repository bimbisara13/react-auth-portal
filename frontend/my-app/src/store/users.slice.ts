import { createSlice } from '@reduxjs/toolkit'
import { userDetails } from './users.thunk'
import type { UserState } from '../types'

/**
 * Initial state for the users slice.
 *
 *  - users: stores the list of user data (null initially)
 *  - loading: indicates whether a fetch request is in progress
 *  - error: stores error messages when a fetch fails
 */
const initialState: UserState = {
  users: null,
  loading: false,
}

/**
 * usersSlice
 *
 *  - Uses createSlice from Redux Toolkit
 *  - Handles async actions via extraReducers
 */
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
