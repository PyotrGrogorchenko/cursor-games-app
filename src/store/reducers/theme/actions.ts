import { Themes } from '@theme'

export enum Actions {
  THEME = 'theme/THEME'
}

export type ActionTheme = {
  type: Actions
  payload: Themes
}

export const theme = (val: Themes): ActionTheme => (
  {
    type: Actions.THEME,
    payload: val
  }
)

// COMMON
export type ActionCommon = ActionTheme
