import requestClient from '../config/axios';



export const signInApi = async ({ email, password }) => {
  return await requestClient.post(`/auth/login`, {
    email,
    password
  })
}
