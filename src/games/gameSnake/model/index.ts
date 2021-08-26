import { Keys } from '@games/aux/types'
import { getObserver } from '@games/aux/utils/observer'
import {
  clearPause, clearTick, setPause, setTick
} from '@games/aux/utils/timer'
import { Model } from './Model'

const model = new Model()
const observer = getObserver()

export const getModelData = () => model.data
export const updateScoreBest = (scoreBest: number) => {
  model.data.scoreBest = scoreBest
  model.updateData()
  observer.notify()
}

export { observer }

const stopGame = () => {
  clearTick()
  model.setCondition('end')
  model.updateData()
  observer.notify()
  model.actionAllow = true
}

const gameOver = () => {
  clearTick()
  model.setCondition('gameOver')
  setPause(stopGame, 2000)
}

const tick = () => {
  model.actionAllow = true
  const coord = model.calculate()
  if (model.isSnakeDied(coord)) {
    gameOver()
    model.updateData()
    observer.notify()
    return
  }
  model.move(coord)
  if (!model.data.gift) setTick(tick, model.data.tickInterval)
  model.gift()
  model.updateData()
  observer.notify()
}

export const clear = () => {
  clearTick()
  clearPause()
}

export const onController = (key: Keys) => {
  switch (model.data.condition) {
    case 'begin':
      model.setDirection(key)
      model.setCondition('game')
      tick()
      break
    case 'ready':
      break
    case 'game':
      model.setDirection(key)
      break
    case 'gameOver':
      break
    case 'end':
      model.updateData(true)
      model.setDirection(key)
      model.setCondition('game')
      tick()
      break
    default:
      throw new Error('Condition is incorrect')
  }
}
