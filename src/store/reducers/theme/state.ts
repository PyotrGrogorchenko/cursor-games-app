import { fetchTheme, Themes } from '@theme'

export type State = {
  name: Themes
}

export const initialState: State = {
  name: fetchTheme()
}
