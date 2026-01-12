import type { ReactNode } from 'react'
import type { InternalAxiosRequestConfig } from 'axios'

// API and Axios

export type LoginPayload = {
  username: string
  password: string
}

export type User = {
  id: number
  username: string
  role: 'admin' | 'user'
  firstName: string
  lastName: string
}

export type LoginResponse = {
  user: User
}

interface UserName {
  first: string
  last: string
}

export interface Users {
  name: UserName
  email: string
}

export type UserResponse = {
  results: Users[]
}

export type ExtendedConfig = InternalAxiosRequestConfig & {
  skipAuth?: boolean
  _retry?: boolean
}

// Auth Context

export type AuthContextType = {
  user: User | null
  login: (credentials: { username: string; password: string }) => Promise<void>
  logout: () => Promise<void>
}

export type RoleProps = {
  role: 'admin' | 'user'
  children: React.ReactNode
}

// Theme Context

export type Theme = 'light' | 'dark'

// Components

export type ModalProps = {
  open: boolean
  title?: string
  description?: ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
}

export interface Column<T> {
  key: string
  header: string
  render: (row: T, index: number) => ReactNode
}

export interface SearchTableProps<T> {
  data: T[]
  columns: Column<T>[]
  getRowId: (row: T, index: number) => string | number
  filterFn?: (row: T, search: string) => boolean
  itemsPerPage?: number
  loading?: boolean
}
