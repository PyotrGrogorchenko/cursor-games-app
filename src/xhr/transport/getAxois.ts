import axios, { AxiosInstance } from 'axios'
import { YaCookie } from '../types'
import { stringifyCookies } from '../utils'

export const getAxois = (withCredentials: boolean = true, cookies: YaCookie | null = null): AxiosInstance => {
  let axiosInstance: AxiosInstance = axios.create()
  axios.defaults.validateStatus = () => true
  if (IS_CLIENT) {
    axiosInstance = axios.create({ withCredentials })
  } else {
    if (!cookies) return axiosInstance
    axiosInstance = axios.create({
      headers: {
        Cookie: stringifyCookies(cookies)
      }
    })
  }
  return axiosInstance
}
