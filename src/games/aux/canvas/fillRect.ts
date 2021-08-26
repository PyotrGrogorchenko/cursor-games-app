export const fillRect = (ctx: Ctx, x: number, y: number, width: number, height: number, color?: string) => {
  if (color) ctx.fillStyle = color
  ctx.fillRect(x, y, width, height)
}
