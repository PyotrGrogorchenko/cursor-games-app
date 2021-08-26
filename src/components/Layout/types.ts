import { WithStyles } from '@material-ui/core'
import { ReactNode } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { styles } from './styles'

export type Props = {
  children: ReactNode
} & WithStyles<typeof styles> & RouteComponentProps
