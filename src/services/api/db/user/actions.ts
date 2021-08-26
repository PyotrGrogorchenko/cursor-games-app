import { DbResponse } from '../types'
import { exe } from './methods'
import { DataLogin } from './types'

export const login = async (data: DataLogin): Promise<DbResponse> => {
  const res = await exe('postUser', data)
  return { ok: res.status === 201 || res.status === 409 }
}
