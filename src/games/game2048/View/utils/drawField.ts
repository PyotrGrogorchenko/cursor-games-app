import { fillRect } from '@games/common/canvas/fillRect'
import { getColor } from '@games/common/theme'
import { edge, header } from '@games/game2048/const'
import { Data } from '@games/game2048/model/types'
import { drawCell } from './drawCell'

export const drawField = (ctx: Ctx, model: Data) => {
  const { width, height } = model
  const ctxWidth = edge * width
  const ctxHeight = edge * height

  fillRect(ctx, 0, 0 + header, ctxWidth, ctxHeight, getColor('field'))
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      drawCell(ctx, i, j)
    }
  }
}
