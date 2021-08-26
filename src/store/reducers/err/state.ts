export type Err = {
  status: number
  message: string
}

export type State = {
  data?: Err
}

export const initialState: State = {
}
