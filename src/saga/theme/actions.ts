import { Themes } from '@theme'

export enum Actions {
  SET = 'saga-theme/SET'
}

// SET
export type ActionSet = {
  type: Actions
  payload: Themes
}
export const set = (val: Themes): ActionSet => (
  {
    type: Actions.SET,
    payload: val
  }
)

// COMMON
export type ActionCommon = ActionSet
