import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) => createStyles({
  root: {
  },
  container: {
    margin: 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  cardGrid: {
    marginTop: theme.spacing(2)
  },
  card: {
  },
  cardMedia: {
    height: 200,
    margin: 10
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0
  }
})
