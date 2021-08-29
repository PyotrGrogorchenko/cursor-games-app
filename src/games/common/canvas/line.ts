export const line = (ctx: Ctx, x1: number, y1: number, x2: number, y2: number, width: number = 1, color?: string) => {
  if (color) ctx.strokeStyle = color
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineWidth = width
  ctx.stroke()
}
