import { Keys } from '@games/common/types'
import { getObserver } from '@games/common/utils/observer'
import {
  clearPause, clearTick, setPause, setTick
} from '@games/common/utils/timer'
import { Model } from './Model'

const model = new Model()

export const getModelData = () => model.data
export const updateScoreBest = (scoreBest: number) => {
  model.data.scoreBest = scoreBest
  model.updateData()
  getObserver().notify()
}

const stopGame = () => {
  clearTick()
  model.setCondition('end')
  model.updateData()
  getObserver().notify()
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
    getObserver().notify()
    return
  }
  model.move(coord)
  if (!model.data.gift) setTick(tick, model.data.tickInterval)
  model.gift()
  model.updateData()
  getObserver().notify()
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

export const modelMethods = {
  getModelData, onController, clear, updateScoreBest
}
