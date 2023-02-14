import requestClient from '../config/axios'
import { handleError } from './../lib/utilities'
type IVerify = {
  email: string,
  code: string
}
export const verify = async ({email,code}:IVerify) => {
  return await requestClient
    .patch(`/auth/verify-email`, {
      email,code
    })
    .catch((err) => {
      return handleError(err)
    })
}
