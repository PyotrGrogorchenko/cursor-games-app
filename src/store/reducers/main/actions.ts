import { Action } from 'redux'
import { Condition, ConditionPhases } from './state'

export enum Actions {
  CONDITION = 'main/CONDITION',
  LOADER = 'main/LOADER'
}

// CONDITION
export type ActionCondition = {
  payload?: Condition
} & Action
export const condition = (phase?: ConditionPhases, method?: unknown): ActionCondition => (
  {
    type: Actions.CONDITION,
    payload: { phase, method }
  }
)

// CONDITION
export type ActionLoader = {
  payload?: boolean
} & Action
export const loader = (payload?: boolean): ActionLoader => (
  {
    type: Actions.LOADER,
    payload
  }
)

// COMMON
export type ActionCommon = ActionCondition | ActionLoader
