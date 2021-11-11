import {
  ActionCommon, ActionTheme, Actions
} from './actions'
import { initialState, State } from './state'

export const reducer = (state: State = initialState, action: ActionCommon): State => {
  switch (action.type) {
    case Actions.THEME:
      return {
        ...state,
        name: (<ActionTheme>action).payload
      }
    default:
      return state
  }
}
