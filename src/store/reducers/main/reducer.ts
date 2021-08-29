import {
  Actions, ActionCommon, ActionCondition, ActionLoader
} from './actions'
import { initialState, State } from './state'

export const reducer = (state: State = initialState, action: ActionCommon): State => {
  switch (action.type) {
    case Actions.CONDITION:
      return {
        ...state,
        condition: (<ActionCondition>action).payload
      }
    case Actions.LOADER:
      return {
        ...state,
        loader: (<ActionLoader>action).payload
      }
    default:
      return state
  }
}
