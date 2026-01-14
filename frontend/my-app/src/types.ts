import type { ReactNode } from 'react'
import type { InternalAxiosRequestConfig } from 'axios'

/**
 * Payload for login API call
 */
export type LoginPayload = {
  username: string
  password: string
}

/**
 * User object returned by the backend
 */
export type User = {
  id: number
  username: string
  role: 'admin' | 'user'
  firstName: string
  lastName: string
}

/**
 * Response from login endpoint.
 */
export type LoginResponse = {
  user: User
}

/**
 * Nested structure for users APIs.
 */
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

export interface UserState {
  users: Users[] | null
  loading: boolean
  error?: string
}

/**
 * Extended Axios request config to support optional flags.
 */
export type ExtendedConfig = InternalAxiosRequestConfig & {
  skipAuth?: boolean
  _retry?: boolean
}

/**
 * Shape of Auth Context state and methods.
 */
export type AuthContextType = {
  user: User | null
  login: (credentials: { username: string; password: string }) => Promise<void>
  logout: () => Promise<void>
}

/**
 * Props for role-protected components.
 */
export type RoleProps = {
  role: 'admin' | 'user'
  children: React.ReactNode
}

/**
 * Supported theme values.
 */
export type Theme = 'light' | 'dark'

/**
 * Shape of Theme Context state and methods.
 */
export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

/**
 * Props for a modal component.
 */
export type ModalProps = {
  open: boolean
  title?: string
  description?: ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
}

/**
 * Generic table column definition.
 */
export interface Column<T> {
  key: string
  header: string
  render: (row: T, index: number) => ReactNode
}

/**
 * Props for a searchable, paginated table component.
 */
export interface SearchTableProps<T> {
  data: T[]
  columns: Column<T>[]
  getRowId: (row: T, index: number) => string | number
  filterFn?: (row: T, search: string) => boolean
  itemsPerPage?: number
  loading?: boolean
}
