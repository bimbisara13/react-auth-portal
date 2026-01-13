import 'axios'

/**
 * Module augmentation for AxiosRequestConfig.
 */
declare module 'axios' {
  export interface AxiosRequestConfig {
    skipAuth?: boolean
    _retry?: boolean
  }
}
