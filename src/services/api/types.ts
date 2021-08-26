import { Methods as MethodsAuth } from '@apiYa/auth/types'
import { Methods as MethodsUser } from '@apiYa/user/types'

export type Options = {
  headers?: LooseObject,
  withCredentials?: boolean
  timeout?: number
}

export type ResBase = {
  status: number
  data: {
    error: string & Error
    reason: string
  }
}

export type Methods = MethodsAuth | MethodsUser
