import { YaCookie } from '../types'
import { getAxois } from './getAxois'

export const getTransport = (withCredentials: boolean = true, cookies: YaCookie | null = null) => getAxois(withCredentials, cookies)
