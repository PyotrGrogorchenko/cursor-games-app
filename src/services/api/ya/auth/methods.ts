import { getTransport } from '@xhr'
import {
  DataAuth, DataSignin, DataSignup, ResAuth, ResLogout, ResSignin, ResSignup, ResUserGet, Methods
} from './types'
import { url } from './const'

const getUser = async (): Promise<ResUserGet> => getTransport().get(url.user)
const postSignup = async (data: DataSignup): Promise<ResSignup> => getTransport().post(url.signup, data)
const postSignin = async (data: DataSignin): Promise<ResSignin> => getTransport().post(url.signin, data)
const postLogout = async (): Promise<ResLogout> => getTransport().post(url.logout)

export const exe = async (method: Methods, data?: DataAuth):Promise<ResAuth> => {
  switch (method) {
    case 'postSignup': return postSignup(<DataSignup>data)
    case 'postSignin': return postSignin(<DataSignin>data)
    case 'postLogout': return postLogout()
    case 'getUser': return getUser()
    default:
      throw Error(`[api-ya-exe] Unexpected method: ${method}`)
  }
}
