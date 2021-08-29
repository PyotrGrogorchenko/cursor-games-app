export type ConditionPhases = 'REQUEST' | 'SUCCESS' | 'ERROR'

export type Condition = {
  phase?: ConditionPhases
  method?: any
}

export type State = {
  condition?: Condition
  loader?: boolean
}

export const initialState: State = {}
