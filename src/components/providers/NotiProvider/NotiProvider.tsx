import React, { createRef, FC } from 'react'
import { withStyles, IconButton } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { SnackbarKey, SnackbarProvider } from 'notistack'
import CloseIcon from '@material-ui/icons/Close'
import { Props } from './types'
import { styles } from './styles'

const NotiProvider: FC<Props> = (props: Props) => {
  const { children, classes } = props
  const notistackRef = createRef<SnackbarProvider>()
  const onClickUndo = (key: SnackbarKey) => () => {
    notistackRef.current?.closeSnackbar(key)
  }

  return (
    <SnackbarProvider
      ref={notistackRef}
      classes={{
        variantSuccess: classes.success,
        variantError: classes.error,
        variantWarning: classes.warning,
        variantInfo: classes.info
      }}
      action={(key) => (
        <IconButton onClick={onClickUndo(key)} color='inherit'>
          <CloseIcon/>
        </IconButton>
      )}
      maxSnack={5}
      dense
      preventDuplicate
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      {children}
    </SnackbarProvider>
  )
}
export const NotiProviderTSX = withStyles(styles)(withRouter(NotiProvider))
