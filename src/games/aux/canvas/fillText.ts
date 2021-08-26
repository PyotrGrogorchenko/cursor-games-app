import { getFont } from '../theme'
import { SizeLine } from '../theme/types'

export const fillText = (
  ctx: Ctx, text: number | string, x: number, y: number, color?: string, font: SizeLine = 'medium', align: CanvasTextAlign = 'center'
) => {
  if (color) ctx.fillStyle = color
  ctx.font = getFont(font)
  ctx.textAlign = align
  ctx.fillText(String(text), x, y)
}
