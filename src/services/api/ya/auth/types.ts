import { ResBase } from '../types'
import { UserData } from '../user/types'

export type Methods = 'postSignup' | 'postSignin' | 'postLogout' | 'getUser'

// SIGNUP
export type DataSignup = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export type ResSignup = {
  data: {
    id: number
  }
} & ResBase

// SIGNIN
export type DataSignin = {
  login: string
  password: string
}

export type ResSignin = ResBase

// USER
export type ResUserGet = {
  data: UserData
} & ResBase

// LOGOUT
export type ResLogout = ResBase

// COMMON
export type DataAuth = DataSignup | DataSignin
export type ResAuth = ResSignup | ResUserGet | ResLogout | ResSignin
