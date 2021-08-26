import { WithStyles } from '@material-ui/core'
import { Data } from '../model/types'
import { styles } from './styles'

export type Props = {
  model: Data
} & WithStyles<typeof styles>

export type State = {
  init: boolean
  snakeTail: number
}

export const initialState = {
  init: false,
  snakeTail: 0
}

export type Context = {
  setState: React.Dispatch<React.SetStateAction<{
    init: boolean
    snakeTail: number
  }>>
  state: State
}
