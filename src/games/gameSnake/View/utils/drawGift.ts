import { rectRound } from '@games/common/canvas/rectRound'
import { decrypt } from '@games/common/utils/math'
import { Data } from '@games/gameSnake/model/types'
import { colors, edge, header } from '../../const'
import { drawCell } from './drawCell'

export const drawGift = (ctx: Ctx, model: Data) => {
  const { gift } = model

  if (!gift) return
  const { x, y } = decrypt(gift)
  drawCell(ctx, x, y)
  rectRound(ctx, x * edge + 2, y * edge + 2 + header, edge - 4, edge - 4, colors.gift, 5, true, false)
}
