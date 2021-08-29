import { primary } from './primary'
import { ColorLine, SizeLine } from './types'

const getTheme = () => primary
const theme = getTheme()

export const getFont = (size: SizeLine) => theme.font[size]
export const getColor = (color: ColorLine) => theme.color[color]
