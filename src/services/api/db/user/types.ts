import { ResBase } from '../../ya/types'

export type Methods = 'postUser'

type DataBase = {
  userId: number
}

// LOGIN
export type DataLogin = {
  displayName: string
  avatar: string
} & DataBase

export type ResLogin = {
  data: {
    id: number
  }
} & ResBase

// COMMON
export type Data = DataLogin
export type Res = ResLogin
