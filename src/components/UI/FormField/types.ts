import { WithStyles } from '@material-ui/core'
import { Types } from '@validation/patterns'
import { styles } from './styles'

export type Props = {
  id: string
  label: string
  type?: Types
  value?: string
  required?: boolean
} & WithStyles<typeof styles>
