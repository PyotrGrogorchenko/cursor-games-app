import { Data } from '@games/gameSnake/model/types'
import { drawCell } from './drawCell'

export const drawField = (ctx: Ctx, model: Data) => {
  const { width, height } = model

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      drawCell(ctx, i, j)
    }
  }
}
