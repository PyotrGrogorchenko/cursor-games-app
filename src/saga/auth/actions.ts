import { DataSignin, DataSignup } from '@apiYa/auth/types'
import { Action } from 'redux'

export enum Actions {
  SIGNUP = 'saga-auth/SIGNUP',
  SIGNIN = 'saga-auth/SIGNIN',
  LOGOUT = 'saga-auth/LOGOUT',
  USER = 'saga-auth/USER'
}

type ActionBase = {
  type: Actions
  payload?: unknown
}

// USER
export type ActionUser = ActionBase
export const user = (): ActionUser => (
  {
    type: Actions.USER
  }
)

// SIGNUP
export type ActionSignup = {
  payload: DataSignup
} & ActionBase
export const signup = (data: DataSignup) => (
  {
    type: Actions.SIGNUP,
    payload: data
  }
)

// SIGNIN
export type ActionSignin = {
  payload: DataSignin
} & Action
export const signin = (data: DataSignin) => (
  {
    type: Actions.SIGNIN,
    payload: data
  }
)

// LOGOUT
export type ActionLogout = Action
export const logout = () => (
  {
    type: Actions.LOGOUT
  }
)

// COMMON
export type ActionCommon = ActionUser | ActionSignup | ActionLogout
