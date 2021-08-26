import { urlRoot } from 'src/services/api/const'

export const getAvatarPath = (pathAvatar: string) => (
  pathAvatar ? `${urlRoot}/resources${pathAvatar}` : '')
