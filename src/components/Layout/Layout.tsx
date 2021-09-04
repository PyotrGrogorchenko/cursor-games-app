import React, {
  FC, useCallback
} from 'react'
import {
  AppBar, Grid, IconButton, Typography, withStyles
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { RoutesList } from '@components/routers/MainRouter'
import { LinearLoader } from '@components/loaders/LinearLoader'
import { userAuthSelector, userDataPropSelector } from '@store/selectors'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import { AvatarUI } from '@components/UI/AvatarUI/index'
import { useMainContext } from '@components/providers/MainProvider'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Button } from '@components/UI/Button'
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
    console.log('onBurger')
    // setMenuOpen(true)
  }, [])

  // const UserCell = () => {
  //   if (!isAuth) {
  //     return (
  //       <>
  //         <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/signin')}>Log in</Button>
  //         <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/signup')}>Sign up</Button>
  //       </>
  //     )
  //   }

  //   return (
  //     <>
  //       <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/profile')}>{userLogin}</Button>
  //       <AvatarUI/>
  //     </>
  //   )
  // }

  return (
    <>
      <Container>
        <Cell width='100%'>
          <Cell justifyContent='flex-start' flexGrow={1}>
            <Button onClick={(e) => onBurger(e)} icon='burger'/>
          </Cell>
          <Cell justifyContent='flex-start' flexGrow={5}>
            <Button onClick={(e) => onRoute(e, '/')} icon='home'/>
            <Button onClick={(e) => onRoute(e, '/')} icon='github'/>
          </Cell>
        </Cell>
        <Cell width='100%'>
          {title}
        </Cell>
        <Cell justifyContent='flex-end' width='100%'>
          <Button onClick={(e) => onRoute(e, '/signin')} icon='signin'>Sign in</Button>
          <Button onClick={(e) => onRoute(e, '/signup')} icon='userAdd'>Sign up</Button>
        </Cell>
      </Container>
      {children}
    </>
  )
}
export const LayoutTSX = Layout

// <AppBar position='relative'>
// <Container fixed maxWidth='xl'>
//  <Grid container spacing={3} alignItems='center'>
//    <Grid item sm={1}>  const UserCell = () => {
//   if (!isAuth) {
//     return (
//       <>
//         <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/signin')}>Log in</Button>
//         <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/signup')}>Sign up</Button>
//       </>
//     )
//   }

//   return (
//     <>
//       <Button color='inherit' size='small' onClick={(e) => onRoute(e, '/profile')}>{userLogin}</Button>
//       <AvatarUI/>
//     </>
//   )
// }

//      <IconButton color='inherit' onClick={(e) => onBurger(e)}>
//        <MenuIcon/>
//      </IconButton>
//    </Grid>
//    <Grid item sm={3}>
//      <IconButton color='inherit' onClick={(e) => onRoute(e, '/')}>
//        <HomeIcon/>
//      </IconButton>
//      <IconButton color='inherit' href='https://github.com/PyotrGrogorchenko/cursor-games-app' target='_blank'>
//        <GitHubIcon/>
//      </IconButton>//
//    </Grid>
//    <Grid item sm={4}>
//      <Typography align='center' variant='h6'>
//        {title}
//      </Typography>
//    </Grid>
//    <Grid item sm={4}>
//      <Grid container spacing={3} alignItems='center' justify='flex-end'>
//        <UserCell/>
//      </Grid>
//    </Grid>
//  </Grid>
// </Container>
// </AppBar>
// <LinearLoader/>
