export const convertColor = (color: string) => {
  if (color.substring(0, 1) === '#') color = color.substring(1)

  const rgb = {
    r: parseInt(color.substring(0, 2), 16),
    g: parseInt(color.substring(2, 4), 16),
    b: parseInt(color.substring(4), 16)
  }

  return `${rgb.r} ${rgb.g} ${rgb.b}`
}
