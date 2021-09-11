import React, { FC, useCallback } from 'react'
import {
  Box, Button, Typography, withStyles
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { styles } from './styles'
import { Props } from './types'

const Err: FC<Props> = (props) => {
  const {
    classes, error, errorInfo, hideBtn, history
  } = props

  const onClick = useCallback((e: OnClick) => {
    e.preventDefault()
    history.goBack()
  }, [history])

  return (
    <Box className={classes.content}>
      <Typography align='center' variant='h3' color='error'>
        {error || 'Sorry'}
      </Typography>
      <Typography align='center' variant='h5'>
        {errorInfo || 'Something went wrong'}
      </Typography>
      { !hideBtn && (
        <Button
          className={classes.buttonBack}
          color='primary'
          onClick={onClick}
        >
          Back
        </Button>
      ) }
    </Box>
  )
}

export const ErrTSX = withStyles(styles)(withRouter(Err))
