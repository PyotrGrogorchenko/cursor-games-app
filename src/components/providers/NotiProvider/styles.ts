import { createStyles } from '@material-ui/core/styles'

const opacity = 0.7

export const styles = () => createStyles({
  title: {
    textTransform: 'capitalize'
  },

  success: { backgroundColor: 'green', opacity },
  error: { backgroundColor: 'red', opacity },
  warning: { backgroundColor: 'purple', opacity },
  info: { backgroundColor: 'blue', opacity }

})
