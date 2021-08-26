import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageError, routes } from './const'

export const MainRouterTSX: FC = () => (
  <Switch>
    <Route path='/' exact component={routes['/']}/>
    <Route path='/leaderboard' exact component={routes['/leaderboard']}/>
    <Route path='/profile' exact component={routes['/profile']}/>
    <Route path='/signup' exact component={routes['/signup']}/>
    <Route path='/signin' exact component={routes['/signin']}/>
    <Route path='/game/:id' component={routes['/game']}/>
    {/* <Route path='/game' component={routes['/game']}/> */}
    <Route component={PageError}/>
  </Switch>
)
