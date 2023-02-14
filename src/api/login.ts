import requestClient from '../config/axios';
import { handleError } from './../lib/utilities'


type ILogin = {
  email:string;
  password:string
}


export const signInApi = async ({ email, password }:ILogin) => {
  return await requestClient
    .post(`/auth/login`, {
      email,
      password
    })
    .catch((err) => {
      return handleError(err)
    })
}
