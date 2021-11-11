import { theme as def } from './def'

const theme = JSON.parse(JSON.stringify(def))

theme.palette.primary = def.palette.secondary
theme.palette.secondary = def.palette.primary

export { theme }
