import { Keys } from '@games/common/types'
import { getObserver } from '@games/common/utils/observer'
import {
  clearPause, clearTick, setPause
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
  model.setCondition('end')
  model.updateData()
  getObserver().notify()
}

const gameOver = () => {
  model.setCondition('gameOver')
  model.updateData()
  getObserver().notify()
  setPause(stopGame, 2000)
}

const move = () => {
  model.move()
  if (!model.modify) {
    if (model.isFullHouse()) {
      gameOver()
      return
    }
    model.actionAllow = true
    model.createItem()
    model.updateData()
    getObserver().notify()
    return
  }

  model.updateData()
  getObserver().notify()
  setPause(move, model.data.moveInterval)
}

const tick = () => {
  if (!model.data.items.length) {
    model.start()
    getObserver().notify()
    model.actionAllow = true
    return
  }
  move()
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
      if (!model.actionAllow) return
      model.setDirection(key)
      model.actionAllow = false
      tick()
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
