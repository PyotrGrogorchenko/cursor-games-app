import { Conditions, Keys, Vector2 } from '@games/aux/types'
import { decrypt, encrypt, findRandomFreeCell } from '@games/aux/utils/math'
import { cloneDeep } from 'lodash'
import { initialModel, Data } from './types'

class Model {
  private _data: Data = cloneDeep(initialModel)
  private _actionAllow: boolean = true

  get data() {return this._data}
  set data(value) {this._data = value}

  get actionAllow() {return this._actionAllow}
  set actionAllow(value) {this._actionAllow = value}

  setCondition(condition: Conditions) {
    this._data.condition = condition
  }

  calculate(): Vector2 {
    const { snake, direction } = this._data
    let { x, y } = decrypt(snake[0])

    switch (direction) {
      case 'ArrowDown': y++; break
      case 'ArrowUp': y--; break
      case 'ArrowLeft': x--; break
      case 'ArrowRight': x++; break
      default: break
    }

    return { x, y }
  }

  updateData(reset = false) {
    const { scoreBest, score } = this._data
    this._data = cloneDeep(reset ? initialModel : this._data)
    if (reset) this._data.scoreBest = Math.max(scoreBest, score)
  }

  isSnakeDied(coord: Vector2): boolean {
    const { data } = this
    const { snake, width, height } = data
    const { x, y } = coord

    const snakeDied = (snake.includes(encrypt(x, y)))
      || (x < 0 || x > width - 1) || (y < 0 || y > height - 1)

    return snakeDied
  }

  gift() {
    const { data } = this
    const {
      gift, width, height, snake
    } = data

    if (gift) return
    data.gift = findRandomFreeCell(snake, width, height)
  }

  move(coord: Vector2) {
    const { data } = this
    const { snake, gift } = data

    snake.unshift(encrypt(coord.x, coord.y))
    if (gift && snake.includes(gift)) {
      data.score++
      data.tickInterval -= data.tickDecrease
      data.gift = undefined
    } else {
      snake.pop()
    }
  }

  setDirection(key: Keys) {
    const { data } = this
    const { direction } = data

    if (!this._actionAllow) return
    if (direction === key) return
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(key)) return
    if (!direction) {
      data.direction = key
      return
    }

    if ((key === 'ArrowLeft' && direction === 'ArrowRight')
      || (key === 'ArrowRight' && direction === 'ArrowLeft')
      || (key === 'ArrowUp' && direction === 'ArrowDown')
      || (key === 'ArrowDown' && direction === 'ArrowUp')) return

    data.direction = key
    this._actionAllow = false
  }
}

export { Model }
