import { Keys } from '@games/common/types'

export type ModelMethods = {
  getModelData: () => any
  onController: (key: Keys) => void
  clear: () => any
  updateScoreBest: (scoreBest: number) => void
}

export type Props = {
  modelMethods: ModelMethods
}
