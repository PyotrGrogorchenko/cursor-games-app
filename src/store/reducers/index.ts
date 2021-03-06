import { combineReducers } from 'redux'
import { reducer as user } from './user/reducer'
import { reducer as err } from './err/reducer'
import { reducer as main } from './main/reducer'
import { reducer as theme } from './theme/reducer'

export const reducers = combineReducers({
  user, err, main, theme
})

export type RootState = ReturnType<typeof reducers>
