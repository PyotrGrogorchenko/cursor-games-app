export type ColorLine = 'primary' | 'secondary' | 'field' | 'link' | 'err' | 'success'
export type Color = {
  [key in ColorLine]: string
}

export type SizeLine = 'small' | 'medium' | 'large'
export type Size = {
  [key in SizeLine]: string
}

export type Theme = {
  font: Size
  color: Color
}
