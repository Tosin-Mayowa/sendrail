import { handleError } from './../lib/utilities';
import requestClient from "../config/axios";

export interface IBusiness {
     name:string,
        type?:string,
        address:string,
        state:string,
        country:string
}

type IData={
    business:IBusiness;
    first_name:string;
    last_name:string;
    address:string;
    state:string;
    country:string;
    email:string;
    password:string;
}

export const signUpApi=async ({
    business,first_name,
    last_name,
    address,
    state,
    country,
    email,
    password,
}:IData)=>{
  return await requestClient
    .post(`/auth/signup`, {
      business,
      first_name,
      last_name,
      address,
      state,
      country,
      email,
      password
    })
    .catch((err) => {
      return handleError(err);
    });
}