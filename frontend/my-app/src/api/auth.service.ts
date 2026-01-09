import api from './axios'
import { type User } from '../auth/auth.context'

type LoginPayload = {
  username: string
  password: string
}

type LoginResponse = {
  user: User
}

export const login = async (payload: LoginPayload): Promise<User> => {
  const { data } = await api.post<LoginResponse>('/auth/login', payload)

  localStorage.setItem('user', JSON.stringify(data.user))
  return data.user
}

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout')
  localStorage.removeItem('user')
  window.location.href = '/login'
}

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}
