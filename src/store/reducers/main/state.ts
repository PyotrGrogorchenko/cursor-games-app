import { Methods } from 'src/services/api/types'

export type ConditionPhases = 'REQUEST' | 'SUCCESS' | 'ERROR'

export type Condition = {
  phase?: ConditionPhases
  method?: Methods
}

export type State = {
  condition?: Condition
  title?: string
}

export const initialState: State = {}
