import requestClient from '../config/axios'
import { handleError } from "../lib/utilities"
type IVerify = {
  email: string
  confirm_email_token: string
}
export const verify = async ({ email, confirm_email_token }: IVerify) => {
  return await requestClient
    .patch(`/auth/verify-email`, {
      email,
      confirm_email_token
    })
    .catch((err) => {
      return handleError(err)
    })
}
