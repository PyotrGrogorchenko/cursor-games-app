import { screenHeader } from '@games/aux/canvas/screen'
import { Data } from '@games/gameSnake/model/types'
import { edge, header } from '../../const'

export const drawHeader = (ctx: Ctx, model: Data) => {
  const { width, height } = model
  screenHeader(ctx, {
    width, height, header, edge
  }, model)
}
