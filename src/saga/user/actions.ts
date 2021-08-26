import { DataPassword, UserData } from '@apiYa/user/types'
import { Action } from 'redux'

export enum Actions {
  AVATAR = 'saga-user/AVATAR',
  PROFILE = 'saga-user/PROFILE',
  PASSWORD = 'saga-user/PASSWORD'
}

// PROFILE
export type ActionProfile = {
  payload: UserData
} & Action
export const profile = (data: UserData) => (
  {
    type: Actions.PROFILE,
    payload: data
  }
)

// PASSWORD
export type ActionPassword = {
  payload: DataPassword
} & Action
export const password = (data: DataPassword) => (
  {
    type: Actions.PASSWORD,
    payload: data
  }
)

// AVATAR
export type ActionAvatar = {
  payload: File
} & Action
export const avatar = (data: File) => (
  {
    type: Actions.AVATAR,
    payload: data
  }
)

// COMMON
export type ActionCommon = ActionAvatar
