import React, { FC, useCallback, useEffect } from 'react'
import { Button } from '@components/UI/Button'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { FormField } from '@components/UI/FormField'
import { UserData } from '@apiYa/user/types'
import { Avatar } from '@components/UI/Avatar'
import { userDataSelector, conditionSuccessSelector, conditionSelector } from '@store/selectors'
import { logout } from '@saga/auth/actions'
import { profile } from '@saga/user/actions'
import { useDispatch } from 'react-redux'
import { useMainContext } from '@components/providers/MainProvider'
import { ChangePasswordForm } from '@components/forms/ChangePasswordForm'
import { useHistory } from 'react-router'
import { useNoti } from '@components/UI/Noti/NotiProvider'
import { Form, Content, Actions } from './styles'

const Profile: FC = () => {
  const userData = userDataSelector()
  const formContext = useForm<UserData>()
  const dispatch = useDispatch()
  const putProfileSuccess = conditionSuccessSelector('putProfile')
  const putLogoutSuccess = conditionSuccessSelector('postLogout')
  const condition = conditionSelector()
  const { setTitle } = useMainContext()
  const history = useHistory()
  const { pushNoti } = useNoti()

  useEffect(() => {
    setTitle('Profile')
  }, [])

  useEffect(() => {
    if (putProfileSuccess) {pushNoti('Profile saved', 'info')}
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
    <>
      <FormProvider {...formContext}>
        {userData && (
          <>
            <Avatar showBtn size='l'/>
            <Form onSubmit={formContext.handleSubmit(onSubmit)}>
              <Content>
                <FormField id='first_name' label='First name' type='name' value={userData.first_name}/>
                <FormField id='second_name' label='Second name' type='name' value={userData.second_name}/>
                <FormField id='display_name' label='Display name' type='name' value={userData.display_name}/>
                <FormField id='login' label='Login' type='login' value={userData.login}/>
                <FormField id='email' label='Email' type='email' value={userData.email}/>
                <FormField id='phone' label='Phone' type='phone' value={userData.phone}/>
              </Content>
              <Actions>
                <Button variant='contained' color='success' type='submit'>Save</Button>
                <ChangePasswordForm/>
                <Button variant='outlined' color='error' onClick={onLogout}>Log out</Button>
              </Actions>
            </Form>
          </>
        )}
      </FormProvider>
    </>
  )
}

export const ProfileTSX = Profile
