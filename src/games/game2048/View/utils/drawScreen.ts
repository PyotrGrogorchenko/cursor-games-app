import { screenEnd, screenBegin, screenGameOver } from '@games/common/canvas/screen'
import { Data } from '@games/game2048/model/types'
import { cloneDeep } from 'lodash'
import { edge, header } from '../../const'
import { Context, initialState } from '../types'
import { drawItems } from './drawItems'
import { drawField } from './drawField'

export const drawScreen = (ctx: Ctx, model: Data, context: Context) => {
  const { condition, width, height } = model
  const { state, setState } = context

  switch (condition) {
    case 'begin':
      screenBegin(ctx, {
        width, height, header, edge
      })
      break
    case 'ready':
      break
    case 'game':
      // if (!state.init) {
      drawField(ctx, model)
      drawItems(ctx, model)
      setState({
        ...state,
        init: true
      })
      // }
      break
    case 'gameOver':
      screenGameOver(ctx, {
        width, height, header, edge
      })
      break
    case 'end':
      setState(cloneDeep(initialState))
      screenEnd(ctx, {
        width, height, header, edge
      })
      break
    default:
      throw new Error('Condition is incorrect')
  }
}
