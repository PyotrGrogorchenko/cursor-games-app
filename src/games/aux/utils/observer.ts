import { cloneDeep } from 'lodash'
import { Func } from '../types'

const observers: Func[] = []

const obs = {
  observers,
  subscribe: (func: Func) => obs.observers.push(func),
  unsubscribe: (func: Func) => {obs.observers = obs.observers.filter(o => o !== func)},
  notify: () => obs.observers.forEach(o => o())
}

export const getObserver = () => {
  const newObs = cloneDeep(obs)
  newObs.observers = []
  return newObs
}
