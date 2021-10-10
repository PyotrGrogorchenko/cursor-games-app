import React, { FC, useCallback, useEffect } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { DataSignin } from '@apiYa/auth/types'
import { useDispatch } from 'react-redux'
import { signin } from '@saga/auth/actions'
import { conditionSuccessSelector } from '@store/selectors'
import { useMainContext } from '@components/providers/MainProvider'
import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Props } from './types'
import { Form, Content, Buttons } from './styles'

const Signin: FC<Props> = () => {
  const dispatch = useDispatch()
  const postSigninSuccess = conditionSuccessSelector('postSignin')
  const { setTitle } = useMainContext()

  const formContext = useForm<DataSignin>()
  const {
    register,
    handleSubmit
  } = formContext

  // console.log('formContext', formContext)
  useEffect(() => {
    setTitle('Signin')
  }, [])

  useEffect(() => {
    // if (postSigninSuccess) history.push('/')
  }, [postSigninSuccess])

  const onSubmit: SubmitHandler<DataSignin> = useCallback(data => {
    console.log('data', data)
    dispatch(signin(data))
  }, [])

  const onSignup = useCallback((e: OnClick) => {
    e.preventDefault()
    // history.push('/signup')
  }, [])

  return (
    <>
      <FormProvider {...formContext}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <Input id='login' label='login' {...register('login')}/>
            <Input id='password' label='Password' type='password' {...register('password')}/>
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
