import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) => createStyles({

  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  inputFile: {
    display: 'none'
  },
  smallSize: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  middleSize: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  },
  largeSize: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
})
