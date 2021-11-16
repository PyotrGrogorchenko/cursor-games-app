export type ColorLine = 'primary' | 'secondary' | 'field' | 'link' | 'err' | 'success'
export type Color = Record<ColorLine, string>

export type SizeLine = 'small' | 'medium' | 'large'
export type Size = Record<SizeLine, string>

export type Theme = {
  font: Size
  color: Color
}
