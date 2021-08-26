import { WithStyles } from '@material-ui/core'
import { styles } from './styles'

export type Props = {
  showBtn?: boolean,
  size?: 'small' | 'middle' | 'large'
} & WithStyles<typeof styles>

export type AvatarSizeStyle = 'smallSize' | 'middleSize' | 'largeSize'
