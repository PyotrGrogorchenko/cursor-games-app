import { Action } from 'redux'
import { Err } from './state'

export enum Actions {
  ERR = 'err/ERR'
}

// ERR
export type ActionSetErr = {
  payload?: Err
} & Action
export const err = (errVal?: Err): ActionSetErr => (
  {
    type: Actions.ERR,
    payload: errVal
  }
)

// SOMMON
export type ActionCommon = ActionSetErr
