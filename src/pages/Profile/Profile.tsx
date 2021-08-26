import React, { FC, useCallback, useEffect } from 'react'
import {
  Box, Button, withStyles
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { FormField } from '@components/UI/FormField'
import { UserData } from '@apiYa/user/types'
import { AvatarUI } from '@components/UI/AvatarUI'
import { userDataSelector, conditionSuccessSelector, conditionSelector } from '@store/selectors'
import { logout } from '@saga/auth/actions'
import { profile } from '@saga/user/actions'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import SaveIcon from '@material-ui/icons/Save'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { ChangePasswordForm } from '@components/forms/ChangePasswordForm'
import { useMainContext } from '@components/providers/MainProvider'
import { styles } from './styles'
import { Props } from './types'

const Profile: FC<Props> = (props: Props) => {
  const { classes, history } = props
  const userData = userDataSelector()
  const formContext = useForm<UserData>()
  const dispatch = useDispatch()
  const putProfileSuccess = conditionSuccessSelector('putProfile')
  const putLogoutSuccess = conditionSuccessSelector('postLogout')
  const condition = conditionSelector()
  const { enqueueSnackbar } = useSnackbar()
  const { setTitle } = useMainContext()

  useEffect(() => {
    setTitle('Profile')
  }, [])

  useEffect(() => {
    if (putProfileSuccess) enqueueSnackbar('Profile saved', { variant: 'success' })
  }, [putProfileSuccess])

  useEffect(() => {
    if (putLogoutSuccess) history.push('/')
  }, [condition])

  const onSubmit: SubmitHandler<UserData> = useCallback(data => {
    dispatch(profile(data))
  }, [])

  const onLogout = useCallback((e: OnClick) => {
    e.preventDefault()
    dispatch(logout())
  }, [])

  return (
    <Box className={classes.root}>
      <FormProvider {...formContext}>
        {userData && (
          <>
            <AvatarUI showBtn size='large'/>
            <form className={classes.formControl} onSubmit={formContext.handleSubmit(onSubmit)}>
              <FormField id='first_name' label='First name' type='name' value={userData.first_name}/>
              <FormField id='second_name' label='Second name' type='name' value={userData.second_name}/>
              <FormField id='display_name' label='Display name' type='name' value={userData.display_name}/>
              <FormField id='login' label='Login' type='login' value={userData.login}/>
              <FormField id='email' label='Email' type='email' value={userData.email}/>
              <FormField id='phone' label='Phone' type='phone' value={userData.phone}/>
              <Button variant='contained' color='primary' type='submit' startIcon={<SaveIcon/>}>Save</Button>
            </form>
            <ChangePasswordForm/>
            <Button variant='outlined' color='secondary' size='small' onClick={onLogout} startIcon={<MeetingRoomIcon/>}>Log out</Button>
          </>
        )}
      </FormProvider>
    </Box>
  )
}

export const ProfileTSX = withStyles(styles)(withRouter(Profile))
