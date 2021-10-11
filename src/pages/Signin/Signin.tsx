import React, { FC, useCallback, useEffect } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { DataSignin } from '@apiYa/auth/types'
import { useDispatch } from 'react-redux'
import { signin } from '@saga/auth/actions'
import { conditionSuccessSelector } from '@store/selectors'
import { useMainContext } from '@components/providers/MainProvider'
import { Button } from '@components/UI/Button'
import { useHistory } from 'react-router-dom'
import { FormField } from '@components/UI/FormField1'
import { Form, Content, Buttons } from './styles'

const Signin: FC = () => {
  const dispatch = useDispatch()
  const postSigninSuccess = conditionSuccessSelector('postSignin')
  const { setTitle } = useMainContext()
  const history = useHistory()

  const formContext = useForm<DataSignin>()
  const { handleSubmit } = formContext

  useEffect(() => {
    setTitle('Signin')
  }, [])

  useEffect(() => {
    if (postSigninSuccess) history.push('/')
  }, [postSigninSuccess, history])

  const onSubmit: SubmitHandler<DataSignin> = useCallback(data => {
    dispatch(signin(data))
  }, [])

  const onSignup = useCallback((e: OnClick) => {
    e.preventDefault()
    history.push('/signup')
  }, [history])

  return (
    <>
      <FormProvider {...formContext}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <FormField id='login' label='Login' type='login'/>
            <FormField id='password' label='Password' type='password'/>
          </Content>
          <Buttons>
            <Button variant='contained' type='submit'>Sign in</Button>
            <Button onClick={onSignup}>Sign up</Button>
          </Buttons>
        </Form>
      </FormProvider>
    </>
  )
}

export const SigninTSX = Signin
