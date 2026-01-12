import api from './axios'
import type { Users, UserResponse } from '../types'

const USERS_API = import.meta.env.VITE_USERS_API

export const fetchUsers = async (): Promise<Users[]> => {
  const { data } = await api.get<UserResponse>(USERS_API, {
    skipAuth: true,
  })

  if (!Array.isArray(data?.results)) {
    throw new Error('Invalid data format received')
  }

  return data.results
}
