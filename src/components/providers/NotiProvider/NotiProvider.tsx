import React, { createRef, FC, useCallback } from 'react'
import { SnackbarKey, SnackbarProvider } from 'notistack'
import { Button } from '@components/UI/Button'
import { Props } from './types'
import { notiClasses } from './styles'

const NotiProvider: FC<Props> = (props: Props) => {
  const { children } = props
  const notistackRef = createRef<SnackbarProvider>()

  const onClickUndo = useCallback((key: SnackbarKey) => () => {
    notistackRef.current?.closeSnackbar(key)
  }, [])

  return (
    <SnackbarProvider
      ref={notistackRef}
      classes={{
        variantSuccess: notiClasses.success,
        variantError: notiClasses.error,
        variantWarning: notiClasses.warning,
        variantInfo: notiClasses.info
      }}
      action={(key) => (
        <Button onClick={onClickUndo(key)} icon='close' color='secondary'/>
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
export const NotiProviderTSX = NotiProvider
