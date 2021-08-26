import { WithStyles } from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import { styles } from './styles'

export type Props = {
} & WithStyles<typeof styles> & RouteComponentProps
