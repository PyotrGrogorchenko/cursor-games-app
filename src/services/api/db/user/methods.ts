import { getTransport as getTransportMain } from '@xhr'
import {
  ResLogin, DataLogin, Methods, Data, Res
} from './types'
import { url } from '../const'
import { getErrorResponse } from '../../utils'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

export const getTransport = (userId: Number) => {
  const transport = getTransportMain(false)
  transport.defaults.headers.authorization = userId
  return transport
}

const postUser = async (data: DataLogin): Promise<ResLogin> => getTransport(data.userId).post(url.user, data)

export const exe = async (method: Methods, data?: Data):Promise<Res> => {
  try {
    switch (method) {
      case 'postUser': return await postUser(<DataLogin>data)
      default:
        throw Error(`[db-api-exe] Unexpected method: ${method}`)
    }
  } catch (err) {
    // @ts-ignore
    return getErrorResponse(err)
  }
}
