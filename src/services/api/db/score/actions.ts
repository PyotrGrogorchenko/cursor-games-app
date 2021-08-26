import { DbResponse } from '../types'
import { exe } from './methods'
import { ResGetScore } from './types'

export const saveScore = async (userId: number, data: { gameId: string, score: number, scoreBest: number }): Promise<DbResponse> => {
  if (data.score <= data.scoreBest) return { ok: true }
  const res = await exe('postScore', {
    userId,
    score: data.score,
    gameId: data.gameId
  })
  return { ok: res.status === 201 }
}

export const getScore = async (userId: number, data: { gameId: string }): Promise<{ score: number } & DbResponse> => {
  const res = await exe('getScore', {
    userId,
    gameId: data.gameId
  }) as ResGetScore
  if (res.status === 200) return { ok: true, score: res.data.score }
  return { ok: false, score: 0 }
}
