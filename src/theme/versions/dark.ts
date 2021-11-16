import { Theme } from '../types'
import { theme as def } from './light'

const theme = <Theme>JSON.parse(JSON.stringify(def))

theme.palette.primary = def.palette.secondary
theme.palette.secondary = def.palette.primary
theme.palette.shadow = '#646464'

export { theme }
