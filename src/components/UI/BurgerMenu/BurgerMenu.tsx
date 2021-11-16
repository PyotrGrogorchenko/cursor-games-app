import React, { useCallback } from 'react'
import { Button } from '@components/UI/Button'
import { useMainContext } from '@components/providers/MainProvider'
import { RoutesList } from '@components/routers/MainRouter'
import { useHistory } from 'react-router-dom'
import {
  Nav, Header, Links, Backdrop, Container
} from './styles'

const BurgerMenu = () => {
  const { menuOpen, setMenuOpen } = useMainContext()
  const history = useHistory()

  const onClose = useCallback((e: OnClick) => {
    e.preventDefault()
    setMenuOpen(false)
  }, [setMenuOpen])

  const onClick = useCallback((e: OnClick, route: RoutesList) => {
    e.preventDefault()
    setMenuOpen(false)
    history.push(route)
  }, [history, setMenuOpen])

  return (
    <Container>
      <Nav open={menuOpen}>
        <Header>
          <Button icon='close' onClick={onClose}/>
        </Header>
        <Links>
          <Button icon='home' onClick={(e) => onClick(e, '/')}>Home</Button>
          <Button icon='user' onClick={(e) => onClick(e, '/profile')}>Profile</Button>
        </Links>
      </Nav>
      {menuOpen && <Backdrop onClick={onClose}/>}
    </Container>
  )
}

export const BurgerMenuTSX = BurgerMenu
