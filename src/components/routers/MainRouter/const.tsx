import { Leaderboard } from '@pages/Leaderboard'
import { Signin } from '@pages/Signin'
import { Signup } from '@pages/Signup'
import { Profile } from '@pages/Profile'
import { Err } from '@pages/Err'
import { Home } from '@pages/Home'
import { Game } from '@pages/Game'
import { Routes } from './types'

export const PageError = Err

export const routes: Routes = {
  '/': Home,
  '/game': Game,
  '/leaderboard': Leaderboard,
  '/profile': Profile,
  '/signin': Signin,
  '/signup': Signup
}
