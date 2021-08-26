import { ResBase } from '../types'

export const getErrorResponse = (
  error: string & Error, status: number = 404, reason: string = 'Something went wrong'
): ResBase => ({ status, data: { error, reason } })
