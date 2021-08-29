import { screenHeader } from '@games/common/canvas/screen'
import { Data } from '@games/game2048/model/types'
import { edge, header } from '../../const'

export const drawHeader = (ctx: Ctx, model: Data) => {
  const { width, height } = model
  screenHeader(ctx, {
    width, height, header, edge
  }, model)
}
