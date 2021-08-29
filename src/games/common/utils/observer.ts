import { cloneDeep } from 'lodash'
import { Func } from '../types'

const observers: Func[] = []

const obs = {
  observers,
  subscribe: (func: Func) => obs.observers.push(func),
  unsubscribe: (func: Func) => {obs.observers = obs.observers.filter(o => o !== func)},
  notify: () => obs.observers.forEach(o => o())
}

export const getObserver = (reset?: boolean) => {
  if (reset) {
    const newObs = cloneDeep(obs)
    newObs.observers = []
    return newObs
  }
  return obs
}

export const resetObserver = () => {
  obs.observers = []
}
