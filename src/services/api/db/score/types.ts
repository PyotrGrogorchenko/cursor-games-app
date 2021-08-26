import { ResBase } from '../../types'

export type Methods = 'postScore' | 'getScore'

type DataBase = {
  userId: number
}

// SAVE SCORE
export type DataSaveScore = {
  gameId: string
  score: number
} & DataBase

export type ResSaveScore = ResBase

// GET SCORE
export type DataGetScore = {
  gameId: string
} & DataBase

export type ResGetScore = {
  data: {
    score: number
  }
} & ResBase

// COMMON
export type Data = DataSaveScore | DataGetScore
export type Res = ResSaveScore | ResGetScore
