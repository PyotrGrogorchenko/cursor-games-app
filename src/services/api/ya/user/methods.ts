import { getTransport } from '@xhr'
import { url } from './const'
import {
  DataProfile, DataAvatar, ResProfile, ResAvatar, DataUser, ResUser, Methods, DataPassword, ResPassword
} from './types'

const putAvatar = async (data: DataAvatar): Promise<ResAvatar> => {
  const formData = new FormData()
  formData.append('avatar', data.file)
  return getTransport().put(url.avatar, formData)
}

const putProfile = async (data: DataProfile): Promise<ResProfile> => getTransport().put(url.profile, data)
const putPassword = async (data: DataPassword): Promise<ResPassword> => getTransport().put(url.password, data)

export const exe = async (method: Methods, data?: DataUser):Promise<ResUser> => {
  switch (method) {
    case 'putProfile': return putProfile(<DataProfile>data)
    case 'putAvatar': return putAvatar(<DataAvatar>data)
    case 'putPassword': return putPassword(<DataPassword>data)
    default:
      throw Error(`[api-ya-exe] Unexpected method: ${method}`)
  }
}
