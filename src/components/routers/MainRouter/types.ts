import { FC } from 'react'

export type RoutesList = '/' | '/leaderboard' | '/game' | '/profile' | '/signup' | '/signin'
export type Routes = Record<RoutesList, FC<{}>>
