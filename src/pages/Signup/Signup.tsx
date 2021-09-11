import React, { FC, useCallback, useEffect } from 'react'
import {
  Box, Button, withStyles
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { FormField } from '@components/UI/FormField'
import { DataSignup } from '@apiYa/auth/types'
import { useDispatch } from 'react-redux'
import { signup } from '@saga/auth/actions'
import { conditionSuccessSelector } from '@store/selectors'
import { useMainContext } from '@components/providers/MainProvider'
import { styles } from './styles'
import { Props } from './types'

const Signup: FC<Props> = (props) => {
  const { classes, history } = props
  const formContext = useForm<DataSignup>()
  const dispatch = useDispatch()
  const postSignupSuccess = conditionSuccessSelector('postSignup')
  const { setTitle } = useMainContext()

  useEffect(() => {
    setTitle('Signup')
  }, [])

  useEffect(() => {
    if (postSignupSuccess) history.push('/')
  }, [postSignupSuccess])

  const onSubmit: SubmitHandler<DataSignup> = useCallback(data => {
    dispatch(signup(data))
  }, [])

  const onClick = useCallback((e: OnClick) => {
    e.preventDefault()
    history.push('/signin')
  }, [history])

  return (
    <Box className={classes.root}>
      <FormProvider {...formContext}>
        <form className={classes.formControl} onSubmit={formContext.handleSubmit(onSubmit)}>
          <FormField id='first_name' label='First name' type='name'/>
          <FormField id='second_name' label='Second name' type='name'/>
          <FormField id='login' label='Login' type='login'/>
          <FormField id='email' label='Email' type='email'/>
          <FormField id='password' label='Password' type='password'/>
          <FormField id='phone' label='Phone' type='phone'/>
          <Button variant='contained' color='primary' type='submit'>Sign up</Button>
          <Button color='default' onClick={onClick}>Sign in</Button>
        </form>
      </FormProvider>
    </Box>
  )
}

export const SignupTSX = withStyles(styles)(withRouter(Signup))
