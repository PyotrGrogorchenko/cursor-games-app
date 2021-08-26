import { YaCookie } from '../types'

export const stringifyCookies = (cookies: YaCookie) => Object
  .entries(cookies)
  .map(([key, value]) => `${key}=${value}`)
  .join(';')
