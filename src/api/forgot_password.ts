import requestClient from '../config/axios';
import { handleError } from './../lib/utilities';


export const forgotPass = async (email:string) => {
  return await requestClient
    .patch(`/auth/forgot-password`, {
      email
      
    })
    .catch((err) => {
      return handleError(err)
    })
}

