import {
  Actions, ActionCommon, ActionCondition
} from './actions'
import { initialState, State } from './state'

export const reducer = (state: State = initialState, action: ActionCommon): State => {
  switch (action.type) {
    case Actions.CONDITION:
      return {
        ...state,
        condition: (<ActionCondition>action).payload
      }
    default:
      return state
  }
}
