import React, { FC, useCallback, useEffect } from 'react'
import {
  Box, Button, withStyles
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { FormField } from '@components/UI/FormField'
import { DataSignin } from '@apiYa/auth/types'
import { useDispatch } from 'react-redux'
import { signin } from '@saga/auth/actions'
import { conditionSuccessSelector } from '@store/selectors'
import { useMainContext } from '@components/providers/MainProvider'
import { styles } from './styles'
import { Props } from './types'

const Signin: FC<Props> = (props) => {
  const { classes, history } = props
  const formContext = useForm<DataSignin>()
  const dispatch = useDispatch()
  const postSigninSuccess = conditionSuccessSelector('postSignin')
  const { setTitle } = useMainContext()

  useEffect(() => {
    setTitle('Signin')
  }, [])

  useEffect(() => {
    if (postSigninSuccess) history.push('/')
  }, [postSigninSuccess])

  const onSubmit: SubmitHandler<DataSignin> = useCallback(data => {
    dispatch(signin(data))
  }, [])

  const onClick = useCallback((e: OnClick) => {
    e.preventDefault()
    history.push('/signup')
  }, [history])

  return (
    <Box className={classes.root}>
      <FormProvider {...formContext}>
        <form className={classes.formControl} onSubmit={formContext.handleSubmit(onSubmit)}>
          <FormField id='login' label='Login' type='login'/>
          <FormField id='password' label='Password' type='password'/>
          <Button variant='contained' color='primary' type='submit'>Sign in</Button>
          <Button color='default' onClick={onClick}>Sign up</Button>
        </form>
      </FormProvider>
    </Box>
  )
}

export const SigninTSX = withStyles(styles)(withRouter(Signin))
