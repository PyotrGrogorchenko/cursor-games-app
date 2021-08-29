import { BaseData } from '../types'

export const isBegin = (model: BaseData) => model.condition === 'begin'
export const isReady = (model: BaseData) => model.condition === 'ready'
export const isGame = (model: BaseData) => model.condition === 'game'
export const isGameOver = (model: BaseData) => model.condition === 'gameOver'
export const isEnd = (model: BaseData) => model.condition === 'end'
