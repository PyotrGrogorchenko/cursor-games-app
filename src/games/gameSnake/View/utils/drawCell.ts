import { fillRect } from '@games/common/canvas/fillRect'
import { colors, edge, header } from '../../const'

export const drawCell = (ctx: Ctx, i: number, j: number) => {
  let colorCell = j % 2 ? colors.cellSecondary : colors.cellPrimary

  if (i % 2) colorCell = j % 2 ? colors.cellPrimary : colors.cellSecondary
  fillRect(ctx, i * edge, j * edge + header, edge, edge, colorCell)
}
