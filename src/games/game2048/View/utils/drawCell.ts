import { fillText } from '@games/common/canvas/fillText'
import { rectRound } from '@games/common/canvas/rectRound'
import { getColor } from '@games/common/theme'
import {
  colors, edge, header, valueColors
} from '../../const'

export const drawCell = (ctx: Ctx, i: number, j: number, value?: number) => {
  const margin = 2
  const x = i * edge + margin
  const y = j * edge + header + margin
  const side = edge - margin * 2
  const color = value ? valueColors[value] || getColor('success') : colors.cell

  rectRound(ctx, x, y, side, side, color, 10, true, false)

  if (value) {
    fillText(ctx, value, x - margin + edge / 2, y + margin * 2 + edge / 2,
      value > 5000 ? getColor('secondary') : getColor('primary'), 'large', 'center')
  }
}
