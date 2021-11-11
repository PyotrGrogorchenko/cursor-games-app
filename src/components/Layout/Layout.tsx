import React, {
  FC, useCallback
} from 'react'
import { useHistory } from 'react-router-dom'
import { RoutesList } from '@components/routers/MainRouter'
import { themeSelector, userAuthSelector, userDataPropSelector } from '@store/selectors'
import { Avatar } from '@components/UI/Avatar/index'
import { useMainContext } from '@components/providers/MainProvider'
import { Button } from '@components/UI/Button'
import { LinearLoader } from '@components/loaders/LinearLoader'
import { set } from '@saga/theme/actions'
import { useDispatch } from 'react-redux'
import { Props } from './types'
import {
  Container, Grid, Cell, Title
} from './styles'

const Layout: FC<Props> = (props: Props) => {
  const { children } = props
  const history = useHistory()
  const dispatch = useDispatch()

  const userLogin = userDataPropSelector('login')
  const isAuth = userAuthSelector()
  const theme = themeSelector()

  const { setMenuOpen, title } = useMainContext()

  const onRoute = useCallback((e: OnClick, route: RoutesList) => {
    e.preventDefault()
    history.push(route)
  }, [history])

  const onBurger = useCallback((e: OnClick) => {
    e.preventDefault()
    setMenuOpen(true)
  }, [])

  const onAdjust = useCallback((e: OnClick) => {
    e.preventDefault()
    dispatch(set(theme === 'light' ? 'dark' : 'light'))
  }, [theme])

  const UserCell = useCallback(() => {
    if (!isAuth) {
      return (
        <>
          <Button onClick={(e) => onRoute(e, '/signin')} icon='signin'/>
          <Button onClick={(e) => onRoute(e, '/signup')} icon='userAdd'/>
        </>
      )
    }

    return (
      <>
        <Button size='s' onClick={(e) => onRoute(e, '/profile')}>{userLogin}</Button>
        <Avatar/>
      </>
    )
  }, [isAuth])

  return (
    <>
      <Container/>
      <Grid>
        <Cell justifyContent='flex-start'>
          <Button onClick={(e) => onBurger(e)} icon='burger'/>
        </Cell>
        <Cell>
          <Button onClick={(e) => onRoute(e, '/')} icon='home'/>
        </Cell>
        <Cell>
          <Button href='https://github.com/PyotrGrogorchenko/cursor-games-app' icon='github'/>
          <Button onClick={onAdjust} icon='adjust'/>
        </Cell>
        <Cell>
          <Title>{title}</Title>
        </Cell>
        <Cell justifyContent='flex-end'>
          <UserCell/>
        </Cell>
      </Grid>
      <LinearLoader/>
      {children}
    </>
  )
}
export const LayoutTSX = Layout
