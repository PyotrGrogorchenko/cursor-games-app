import { BaseData } from '@games/common/types'
import { getColor } from '../theme'
import { fillRect } from './fillRect'
import { fillText } from './fillText'
import { line } from './line'
import { rectRound } from './rectRound'

type Params = {
  width: number
  height: number
  header: number
  edge: number
}

export const screenHeader = (ctx: Ctx, data: Params, model: BaseData) => {
  const { width, header, edge } = data
  const { score, scoreBest } = model
  const ctxWidth = edge * width

  fillRect(ctx, 0, 0, width * edge, header, getColor('secondary'))
  line(ctx, 0, header - 1, width * edge, header - 1, 2, getColor('primary'))

  let x = 5
  let y = 5
  rectRound(ctx, x, y, 50, 47, getColor('field'), 5, true, false)
  fillText(ctx, 'Best', x + 25, y + 15, getColor('success'), 'small', 'center')
  fillText(ctx, score > scoreBest ? score : scoreBest, x + 25, y + 40, getColor('primary'), 'medium', 'center')

  x = ctxWidth - 55
  y = 5
  rectRound(ctx, x, y, 50, 47, getColor('field'), 5, true, false)
  fillText(ctx, 'Score', x + 25, y + 15, getColor('link'), 'small', 'center')
  fillText(ctx, score, x + 25, y + 40, getColor('primary'), 'medium', 'center')
}

export const screenBegin = (ctx: Ctx, data: Params) => {
  const {
    width, height, edge, header
  } = data
  const ctxWidth = edge * width
  const ctxHeight = edge * height

  fillRect(ctx, 0, 0 + header, ctxWidth, ctxHeight, getColor('secondary'))
  fillText(ctx, 'Press cursor key to start', ctxWidth / 2, header + ctxHeight / 2, getColor('primary'), 'medium', 'center')
}

export const screenGameOver = (ctx: Ctx, data: Params) => {
  const {
    width, height, edge, header
  } = data
  const ctxWidth = edge * width
  const ctxHeight = edge * height

  fillText(ctx, 'Game over', ctxWidth / 2, header + ctxHeight / 2, getColor('primary'), 'medium', 'center')
}

export const screenEnd = (ctx: Ctx, data: Params) => {
  const {
    width, height, edge, header
  } = data
  const ctxWidth = edge * width
  const ctxHeight = edge * height

  fillText(ctx, 'Press cursor key to restart', ctxWidth / 2, header + 20 + ctxHeight / 2, getColor('link'), 'small', 'center')
}
