import { urlRoot } from '@apiYa/const'

export const getAvatarPath = (pathAvatar: string) => (
  pathAvatar ? `${urlRoot}/resources${pathAvatar}` : '')
