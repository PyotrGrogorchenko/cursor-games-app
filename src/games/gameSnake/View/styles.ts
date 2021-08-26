import { getColor } from '@games/aux/theme'
import { createStyles } from '@material-ui/core'

export const styles = () => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '80vh',
    width: '100%'
  },
  canvas: {
    border: '5px solid',
    borderColor: getColor('primary')

  }
})
