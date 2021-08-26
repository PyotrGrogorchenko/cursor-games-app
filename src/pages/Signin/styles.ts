import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '80vh',
    width: '100%'

  },
  formControl: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '300px',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
})
