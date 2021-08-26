import { WithStyles } from '@material-ui/core'
import { styles } from './styles'

export type Props = {
} & WithStyles<typeof styles>

export type Fields = {
  oldPassword: string
  newPassword: string
  newPasswordСonfirm: string
}
