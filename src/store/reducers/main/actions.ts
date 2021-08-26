import { Methods } from 'src/services/api/types'
import { Action } from 'redux'
import { Condition, ConditionPhases } from './state'

export enum Actions {
  CONDITION = 'main/CONDITION'
}

// CONDITION
export type ActionCondition = {
  payload?: Condition
} & Action
export const condition = (phase?: ConditionPhases, method?: Methods): ActionCondition => (
  {
    type: Actions.CONDITION,
    payload: { phase, method }
  }
)

// COMMON
export type ActionCommon = ActionCondition
