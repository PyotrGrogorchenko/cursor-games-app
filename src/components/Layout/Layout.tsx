import React, {
  FC, useCallback
} from 'react'
import { useHistory } from 'react-router-dom'
import { RoutesList } from '@components/routers/MainRouter'
import { userAuthSelector, userDataPropSelector } from '@store/selectors'
import { AvatarUI } from '@components/UI/AvatarUI/index'
import { useMainContext } from '@components/providers/MainProvider'
import { Button } from '@components/UI/Button'
import { Anchor } from '@components/UI/Anchor'
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
          <Button onClick={(e) => onRoute(e, '/signin')} icon='signin' size='l'>Sign in</Button>
          <Button onClick={(e) => onRoute(e, '/signup')} icon='userAdd'>Sign up</Button>
        </>
      )
    }

    return (
      <>
        <Button onClick={(e) => onRoute(e, '/profile')}>{userLogin}</Button>
        <AvatarUI/>
      </>
    )
  }, [isAuth])

  return (
    <>
      <Container>
        <Cell width='100%'>
          <Cell justifyContent='flex-start' flexGrow={1}>
            <pre>    </pre>
            <Button onClick={(e) => onBurger(e)} icon='burger'/>
          </Cell>
          <Cell justifyContent='flex-start' flexGrow={5}>
            <Button onClick={(e) => onRoute(e, '/')} icon='home'/>
            <pre>    </pre>
            <Anchor href='https://github.com/PyotrGrogorchenko/cursor-games-app' icon='github'/>
            <Button onClick={(e) => onRoute(e, '/')} icon='adjust'/>
          </Cell>
        </Cell>
        <Cell width='100%'>
          {title}
        </Cell>
        <Cell justifyContent='flex-end' width='100%'>
          <UserCell/>
        </Cell>
      </Container>
      {children}
    </>
  )
}
export const LayoutTSX = Layout
