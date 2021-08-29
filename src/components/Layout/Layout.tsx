import React, {
  FC, useCallback
} from 'react'
import {
  AppBar, Button, Container, Grid, IconButton, Typography, withStyles
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { RoutesList } from '@components/routers/MainRouter'
import { LinearLoader } from '@components/loaders/LinearLoader'
import { userAuthSelector, userDataPropSelector } from '@store/selectors'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import { AvatarUI } from '@components/UI/AvatarUI/index'
import { useMainContext } from '@components/providers/MainProvider'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Props } from './types'
import { styles } from './styles'

const Layout: FC<Props> = (props: Props) => {
  const { children, history } = props
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
  }, [history])

  const UserCell = () => {
    if (!isAuth) {
      return (
        <>
          <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/signin')}>Log in</Button>
          <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/signup')}>Sign up</Button>
        </>
      )
    }

    return (
      <>
        <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/profile')}>{userLogin}</Button>
        <AvatarUI/>
      </>
    )
  }

  return (
    <>
      <AppBar position='relative'>
        <Container fixed maxWidth='xl'>
          <Grid container spacing={3} alignItems='center'>
            <Grid item sm={1}>
              <IconButton color='inherit' onClick={(e) => onBurger(e)}>
                <MenuIcon/>
              </IconButton>
            </Grid>
            <Grid item sm={3}>
              <IconButton color='inherit' href='/'>
                <HomeIcon/>
              </IconButton>
              <IconButton color='inherit' href='https://github.com/PyotrGrogorchenko/cursor-games-app' target='_blank'>
                <GitHubIcon/>
              </IconButton>
            </Grid>
            <Grid item sm={4}>
              <Typography align='center' variant='h6'>
                {title}
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Grid container spacing={3} alignItems='center' justify='flex-end'>
                <UserCell/>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <LinearLoader/>
      {children}
    </>
  )
}
export const LayoutTSX = withStyles(styles)(withRouter(Layout))
