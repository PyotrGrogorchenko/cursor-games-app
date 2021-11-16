import { Keys } from '@games/common/types'

export type ModelMethods = {
  getModelData: () => unknown
  onController: (key: Keys) => void
  clear: () => unknown
  updateScoreBest: (scoreBest: number) => void
}

export type Props = {
  modelMethods: ModelMethods
}
