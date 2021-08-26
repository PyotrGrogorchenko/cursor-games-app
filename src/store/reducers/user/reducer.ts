import {
  Actions, ActionCommon, ActionUser
} from './actions'
import { initialState, State } from './state'

export const reducer = (state: State = initialState, action: ActionCommon): State => {
  switch (action.type) {
    case Actions.USER:
      return {
        ...state,
        data: (<ActionUser>action).payload
      }
    default:
      return state
  }
}
