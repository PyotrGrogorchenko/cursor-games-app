import { rectRound } from '@games/aux/canvas/rectRound'
import { decrypt } from '@games/aux/utils/math'
import { Data } from '@games/gameSnake/model/types'
import { colors, edge, header } from '../../const'
import { Context } from '../types'
import { drawCell } from './drawCell'

export const drawSnake = (ctx: Ctx, model: Data, context: Context) => {
  const { snake } = model
  const { state, setState } = context
  const head = decrypt(snake[0])
  const { snakeTail } = state

  rectRound(ctx, head.x * edge + 2, head.y * edge + 2 + header, edge - 4, edge - 4, colors.snake, 5, true, false)
  if (!snakeTail) {
    setState({
      ...state,
      snakeTail: snake[snake.length - 1]
    })
    return
  }
  if (snake[snake.length - 1] !== snakeTail) {
    const tail = decrypt(snakeTail)
    drawCell(ctx, tail.x, tail.y)
    setState({
      ...state,
      snakeTail: snake[snake.length - 1]
    })
  }
}
