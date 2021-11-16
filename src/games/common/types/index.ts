export type Keys = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'
export type Conditions = 'begin' | 'ready' | 'game' | 'gameOver' | 'end'

export type Vector2 = {
  x: number
  y: number
}

export type Func = (...args: unknown[]) => void

export type BaseData = {
  gameId: string
  height: number
  width: number
  condition: Conditions
  score: number
  scoreBest: number
  direction?: Keys
}
