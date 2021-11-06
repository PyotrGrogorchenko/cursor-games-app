import React, {
  FC, useCallback
} from 'react'
import { useHistory } from 'react-router-dom'
import { RoutesList } from '@components/routers/MainRouter'
import { userAuthSelector, userDataPropSelector } from '@store/selectors'
import { Avatar } from '@components/UI/Avatar/index'
import { useMainContext } from '@components/providers/MainProvider'
import { Button } from '@components/UI/Button'
import { LinearLoader } from '@components/loaders/LinearLoader'
import { Props } from './types'
import { Container, Cell } from './styles'

const Layout: FC<Props> = (props: Props) => {
  const { children } = props
  const history = useHistory()

  const userLogin = userDataPropSelector('login')
  const isAuth = userAuthSelector()
  const { setMenuOpen, title } = useMainContext()

  const onRoute = useCallback((e: OnClick, route: RoutesList) => {
    e.preventDefault()
    history.push(route)
  }, [history])

  const onBurger = useCallback((e: OnClick) => {
    e.preventDefault()
    setMenuOpen(true)
  }, [])

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
      <Container>
        <Cell justifyContent='flex-start'>
          <Button onClick={(e) => onBurger(e)} icon='burger'/>
        </Cell>
        <Cell>
          <Button onClick={(e) => onRoute(e, '/')} icon='home'/>
        </Cell>
        <Cell>
          <Button href='https://github.com/PyotrGrogorchenko/cursor-games-app' icon='github'/>
          <Button onClick={(e) => onRoute(e, '/')} icon='adjust'/>
        </Cell>
        <Cell>
          {title}
        </Cell>
        <Cell justifyContent='flex-end'>
          <UserCell/>
        </Cell>
      </Container>
      <LinearLoader/>
      {children}
    </>
  )
}
export const LayoutTSX = Layout
