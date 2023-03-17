import { handleError } from "../lib/utilities";
import requestClient from "../config/axios";

export interface IBusiness {
 
  address: string,
  state: string,
  country: string
}

export type IData = {
  name: string;
  type: string;
  business_address: IBusiness;
  first_name: string;
  last_name: string;
  address: string;
  state: string;
  country: string;
  email: string;
  password: string;
  role:string;
}

export const signUpApi = async ({
  name,
  type,
  business_address,
  first_name,
  last_name,
  address,
  state,
  country,
  email,
  password,role
}: IData) => {
  return await requestClient
    .post(`/auth/signup`, {
      name,
      type,
      business_address,
      first_name,
      last_name,
      address,
      state,
      country,
      email,
      password,role
    })
    .catch((err) => {
      return handleError(err)
    })
}