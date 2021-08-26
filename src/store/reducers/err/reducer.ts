import {
  Actions, ActionCommon, ActionSetErr
} from './actions'
import { initialState, State } from './state'

export const reducer = (state: State = initialState, action: ActionCommon): State => {
  switch (action.type) {
    case Actions.ERR:
      return {
        ...state,
        data: (<ActionSetErr>action).payload
      }
    default:
      return state
  }
}
