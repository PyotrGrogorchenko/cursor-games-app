import { WithStyles } from '@material-ui/core'
import { RouteComponentProps } from 'react-router'
import { styles } from './styles'

export type Props = {
  error?: string,
  errorInfo?: string
  hideBtn?: boolean
} & WithStyles<typeof styles> & RouteComponentProps
