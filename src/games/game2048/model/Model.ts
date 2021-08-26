import { Conditions, Keys } from '@games/aux/types'
import {
  decrypt, encrypt, findRandomFreeCell, getRandomInt
} from '@games/aux/utils/math'
import { cloneDeep } from 'lodash'
import { initialModel, Data } from './types'

class Model {
  private _data: Data = cloneDeep(initialModel)
  private _actionAllow: boolean = true
  private _modify: boolean = false

  get data() {return this._data}
  set data(value) {this._data = value}

  get actionAllow() {return this._actionAllow}
  set actionAllow(value) {this._actionAllow = value}

  get modify() {return this._modify}
  set modify(value) {this._modify = value}

  updateData(reset = false) {
    const { scoreBest, score } = this._data
    this._data = cloneDeep(reset ? initialModel : this._data)
    if (reset) this._data.scoreBest = Math.max(scoreBest, score)
  }

  setCondition(condition: Conditions) {
    this._data.condition = condition
  }

  setDirection(key: Keys) {
    const { data } = this
    const { direction } = data

    if (!this._actionAllow) return
    if (direction === key) return
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(key)) return

    data.direction = key
  }

  isFullHouse() {
    return this._data.items.length === this._data.width * this._data.height
  }

  createItem() {
    const {
      items, height, width, values
    } = this._data
    const item = findRandomFreeCell(items, width, height)
    items.push(item)
    values[String(item)] = getRandomInt(10) > 7 ? 4 : 2
  }

  start() {
    this.createItem()
    this.createItem()
    this.updateData()
  }

  replaceCount(countOld: number, countNew: number) {
    const { items, values } = this._data
    values[String(countNew)] = values[String(countOld)]
    values[String(countOld)] = undefined
    items.splice(items.indexOf(countOld), 1)
    items.push(countNew)
  }

  calculate(count: number) {
    const {
      direction, width, height, items, values
    } = this._data
    let { x, y } = decrypt(count)

    switch (direction) {
      case 'ArrowDown': y++; break
      case 'ArrowUp': y--; break
      case 'ArrowLeft': x--; break
      case 'ArrowRight': x++; break
      default: break
    }

    const countNew = encrypt(x, y)

    if (x < 0 || x > width - 1 || y < 0 || y > height - 1) return
    if (items.indexOf(countNew) >= 0) {
      if (values[String(count)] === values[String(countNew)]) {
        values[String(countNew)] *= 2
        this._data.score += values[String(countNew)]
        values[String(count)] = undefined
        items.splice(items.indexOf(count), 1)
        this._modify = true
      }
      return
    }
    this.replaceCount(count, encrypt(x, y))
    this._modify = true
  }

  move() {
    const { data } = this
    const { items } = data
    this._modify = false
    cloneDeep(items).forEach((count) => {
      this.calculate(count)
    })
  }
}

export { Model }
