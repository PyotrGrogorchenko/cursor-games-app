import { UserData } from '@apiYa/user/types'

export enum Actions {
  USER = 'user/USER'
}

type ActionBase = {
  type: Actions
  payload?: unknown
}

// USER
export type ActionUser = {
  payload?: UserData
} & ActionBase
export const user = (userVal?: UserData): ActionUser => (
  {
    type: Actions.USER,
    payload: userVal
  }
)

// COMMON
export type ActionCommon = ActionUser
