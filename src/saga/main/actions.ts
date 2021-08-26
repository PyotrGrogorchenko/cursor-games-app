import { Action } from 'redux'

export enum Actions {
  RESET = 'saga-main/RESET'
}

// RESET
export type ActionReset = Action
export const reset = (): ActionReset => (
  {
    type: Actions.RESET
  }
)

// COMMON
export type ActionCommon = ActionReset
