import React, { FC, useCallback, useEffect } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { FormField } from '@components/UI/FormField'
import { DataSignup } from '@apiYa/auth/types'
import { useDispatch } from 'react-redux'
import { signup } from '@saga/auth/actions'
import { conditionSuccessSelector } from '@store/selectors'
import { useMainContext } from '@components/providers/MainProvider'
import { Button } from '@components/UI/Button'
import { useHistory } from 'react-router-dom'
import { Form, Content, Buttons } from './styles'

const Signup: FC = () => {
  const dispatch = useDispatch()
  const postSignupSuccess = conditionSuccessSelector('postSignup')
  const { setTitle } = useMainContext()
  const history = useHistory()

  const formContext = useForm<DataSignup>()
  const { handleSubmit } = formContext

  useEffect(() => {
    setTitle('Signup')
  }, [])

  useEffect(() => {
    if (postSignupSuccess) history.push('/')
  }, [postSignupSuccess])

  const onSubmit: SubmitHandler<DataSignup> = useCallback(data => {
    dispatch(signup(data))
  }, [])

  const onSignin = useCallback((e: OnClick) => {
    e.preventDefault()
    history.push('/signin')
  }, [history])

  return (
    <>
      <FormProvider {...formContext}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <FormField id='first_name' label='First name' type='name'/>
            <FormField id='second_name' label='Second name' type='name'/>
            <FormField id='login' label='Login' type='login'/>
            <FormField id='email' label='Email' type='email'/>
            <FormField id='password' label='Password' type='password'/>
            <FormField id='phone' label='Phone' type='phone'/>
          </Content>
          <Buttons>
            <Button variant='contained' type='submit'>Sign up</Button>
            <Button onClick={onSignin}>Sign in</Button>
            {/* <Button variant='contained' color='primary' type='submit'>Sign up</Button>
            <Button color='default' onClick={onClick}>Sign in</Button> */}
          </Buttons>
        </Form>
      </FormProvider>
    </>
  )
}

export const SignupTSX = Signup
