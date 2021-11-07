import { Data } from '../model/types'

export type Props = {
  model: Data
}

export type State = {
  init: boolean
  snakeTail: number
}

export const initialState = {
  init: false,
  snakeTail: 0
}

export type Context = {
  setState: React.Dispatch<React.SetStateAction<{
    init: boolean
    snakeTail: number
  }>>
  state: State
}
