import { ResBase } from '../../types'

export type Methods = 'putAvatar' | 'putProfile' | 'putPassword'

export type UserData = {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

type UserId = {
  id: number
}

export type User = UserId & UserData

// SEARCH
export type DataUserSearch = {
  login: string
}

export type ResUserSearch = {
  data: User[]
} & ResBase

// PROFILE
export type DataProfile = UserData
export type ResProfile = {
  data: User
} & ResBase

// PASSWORD
export type DataPassword = {
  oldPassword: string
  newPassword: string
}
export type ResPassword = ResBase

// AVATAR
export type DataAvatar = {
  file: File
}
export type ResAvatar = {
  data: UserData
} & ResBase

// COMMON
export type DataUser = DataUserSearch | DataProfile | DataAvatar | DataPassword
export type ResUser = ResUserSearch | ResProfile | ResAvatar | ResPassword
