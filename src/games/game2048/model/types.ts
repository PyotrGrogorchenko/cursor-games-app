import { BaseData } from '@games/common/types'

export type Data = {
  items: number[]
  values: LooseObject
  moveInterval: number
} & BaseData

const height = 4
const width = 4

export const initialModel: Data = {
  gameId: '2048',
  score: 0,
  scoreBest: 0,
  condition: 'begin',
  height,
  width,
  items: [],
  values: {},
  moveInterval: 20
}
