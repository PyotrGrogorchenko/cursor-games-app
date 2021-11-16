import { Func } from '../types'

let tickId: NodeJS.Timeout | undefined
let pauseId: NodeJS.Timeout | undefined

export const clearTick = () => {
  if (!tickId) return
  clearInterval(tickId)
  tickId = undefined
}

export const setTick = (cb: Func, interval: number, ...args: unknown[]) => {
  clearTick()
  // @ts-ignore
  tickId = setInterval(() => cb(...args), interval)
}

export const clearPause = () => {
  if (!pauseId) return
  clearInterval(pauseId)
  tickId = undefined
}

export const setPause = (cb: Func, interval: number, ...args: unknown[]) => {
  clearPause()
  // @ts-ignore
  pauseId = setTimeout(() => {
    clearPause()
    cb(...args)
  }, interval)
}
