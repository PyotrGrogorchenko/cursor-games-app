import { getTransport as getTransportMain } from '@xhr'
import {
  Methods, DataSaveScore, ResSaveScore, Data, Res, DataGetScore, ResGetScore
} from './types'
import { url } from '../const'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { getErrorResponse } from '../../utils'

export const getTransport = (userId: Number) => {
  const transport = getTransportMain(false)
  transport.defaults.headers.authorization = userId
  return transport
}

const postScore = async (data: DataSaveScore): Promise<ResSaveScore> => getTransport(data.userId).post(url.score, data)
const getScore = async (data: DataGetScore): Promise<ResGetScore> => getTransport(data.userId).get(`${url.score}/${data.gameId}`)

export const exe = async (method: Methods, data?: Data):Promise<Res> => {
  try {
    switch (method) {
      case 'postScore': return await postScore(<DataSaveScore>data)
      case 'getScore': return await getScore(<DataGetScore>data)
      default:
        throw Error(`[db-api-exe] Unexpected method: ${method}`)
    }
  } catch (err) {
    return getErrorResponse(err)
  }
}
