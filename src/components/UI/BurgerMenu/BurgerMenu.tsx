import React, { FC, useCallback } from 'react'
import {
  List, ListItem, ListItemIcon, ListItemText, Box, withStyles, Divider
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import clsx from 'clsx'
import { useMainContext } from '@components/providers/MainProvider'
import { RoutesList } from '@components/routers/MainRouter'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home'
import { styles } from './styles'
import { Props } from './types'

const anchor = 'left'

const BurgerMenu: FC<Props> = (props: Props) => {
  const { classes, history } = props
  const { menuOpen, setMenuOpen } = useMainContext()

  const toggle = useCallback((val: boolean) => (e: OnClick) => {
    e.preventDefault()
    setMenuOpen(val)
  }, [setMenuOpen])

  const onClick = useCallback((e: any, route: RoutesList) => {
    e.preventDefault()
    history.push(route)
  }, [history])

  return (
    <>
      <Drawer anchor={anchor} open={menuOpen} onClose={toggle(false)}>
        <Box
          className={clsx(classes.list)}
          onClick={toggle(false)}
        >
          <List>
            <ListItem button key='home' onClick={(e) => onClick(e, '/')}>
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary='Cursor-games'/>
            </ListItem>
            <Divider/>
            <ListItem button key='profile' onClick={(e) => onClick(e, '/profile')}>
              <ListItemIcon><AccountCircleIcon/></ListItemIcon>
              <ListItemText primary='Profile' secondary=''/>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export const BurgerMenuTSX = withStyles(styles)(withRouter(BurgerMenu))
