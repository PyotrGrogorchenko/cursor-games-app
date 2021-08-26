import { decrypt } from '@games/aux/utils/math'
import { Data } from '@games/game2048/model/types'
import { drawCell } from './drawCell'

export const drawItems = (ctx: Ctx, model: Data) => {
  const { items, values } = model

  items.forEach((item) => {
    const { x, y } = decrypt(item)
    drawCell(ctx, x, y, values[String(item)])
  })
}
