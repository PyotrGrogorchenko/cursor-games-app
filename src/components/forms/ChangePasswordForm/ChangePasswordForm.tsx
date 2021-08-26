import React, {
  FC, useCallback, useEffect, useState
} from 'react'
import {
  Box, Button, DialogActions, DialogContent, DialogTitle, withStyles, Dialog
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { FormField } from '@components/UI/FormField'
import { useDispatch } from 'react-redux'
import { password } from '@saga/user/actions'
import { conditionSuccessSelector } from '@store/selectors'
import { useSnackbar } from 'notistack'
import { styles } from './styles'
import { Fields, Props } from './types'

const defaultValues: Fields = {
  oldPassword: '',
  newPassword: '',
  newPasswordСonfirm: ''
}

const ChangePasswordForm: FC<Props> = (props: Props) => {
  const { classes } = props
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const putPasswordSuccess = conditionSuccessSelector('putPassword')
  const { enqueueSnackbar } = useSnackbar()
  const formContext = useForm<Fields>({ defaultValues })

  const close = useCallback(() => {
    formContext.reset(defaultValues)
    setOpen(false)
  }, [open])

  useEffect(() => {
    if (putPasswordSuccess) {
      enqueueSnackbar('Password saved', { variant: 'success' })
      close()
    }
  }, [putPasswordSuccess])

  const onSubmit: SubmitHandler<Fields> = data => {
    if (data.newPassword !== data.newPasswordСonfirm) {
      enqueueSnackbar('Тew password and the password confirm are not equal', { variant: 'error' })
      return
    }
    dispatch(password(data))
  }

  const onCancel = useCallback((e: OnClick) => {
    e.preventDefault()
    close()
  }, [open])

  const onOpen = useCallback((e: OnClick) => {
    e.preventDefault()
    setOpen(true)
  }, [open])

  return (
    <>
      <Box >
        <Button id='change-password_open' variant='outlined' color='primary' onClick={onOpen} startIcon={<LockIcon/>}>
          Change password
        </Button>
      </Box>
      {open && (
        <Dialog
          open
          aria-labelledby='change-password-dialog_title'
        >
          <DialogTitle id='change-password-dialog_title'>
            Change password
          </DialogTitle>
          <FormProvider {...formContext}>
            <form onSubmit={formContext.handleSubmit(onSubmit)}>
              <DialogContent className={classes.dialogContent}>
                <FormField id='oldPassword' label='Old password' type='password'/>
                <FormField id='newPassword' label='New password' type='password'/>
                <FormField id='newPasswordСonfirm' label='New password confirm' type='password'/>
              </DialogContent>
              <DialogActions>
                <Button id='change-password_save' color='primary' type='submit'>
                  Save
                </Button>
                <Button id='change-password_cancel' onClick={onCancel} color='primary'>
                  Close
                </Button>
              </DialogActions>
            </form>
          </FormProvider>
        </Dialog>
      )}
    </>
  )
}

export const ChangePasswordFormTSX = withStyles(styles)(ChangePasswordForm)
