import { Methods, User } from '@apiYa/user/types'
import { ConditionPhases } from '@store/reducers/main/state'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../reducers'

export const typedState: TypedUseSelectorHook<RootState> = useSelector

// user
export const userSelector = () => typedState(s => s).user

export const userDataSelector = () => userSelector().data
export const userAuthSelector = () => !!userSelector().data

export const userDataPropSelector = (prop: keyof User) => {
  const data = userDataSelector()
  if (!data) return ''
  return data[prop] ? data[prop] : ''
}

// main
export const mainSelector = () => typedState(s => s).main
export const titleSelector = () => mainSelector().condition

export const conditionSelector = () => mainSelector().condition
export const conditionPhaseSelector = (phase: ConditionPhases, method?: Methods) => {
  const condition = conditionSelector()
  if (!condition) return false
  if (!method) return condition.phase === phase
  return condition.method === method && condition.phase === phase
}

export const conditionSuccessSelector = (method?: any) => conditionPhaseSelector('SUCCESS', method)
export const conditionRequestSelector = (method?: any) => conditionPhaseSelector('REQUEST', method)
export const conditionErrorSelector = (method?: any) => conditionPhaseSelector('ERROR', method)

// err
export const errSelector = () => typedState(s => s).err
export const errDataSelector = () => errSelector().data
