import { BaseData } from '@games/common/types'
import { encrypt } from '@games/common/utils/math'

export type Data = {
  tickInterval: number
  tickDecrease: number
  snake: number[]
  gift?: number
} & BaseData

export const initialModel: Data = {
  gameId: 'snake',
  score: 0,
  scoreBest: 0,
  tickInterval: 200,
  tickDecrease: 3,
  condition: 'begin',
  height: 20,
  width: 20,
  snake: [encrypt(9, 9)]
}
