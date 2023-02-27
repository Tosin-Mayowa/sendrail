import { axiosPrivate } from './../../config/axios';
import { useAuth } from './useAuth';
import {useEffect} from 'react'



export const useAxiosPrivate = () => {
const {auth}=useAuth();

useEffect(()=>{

    const reqIntercept=axiosPrivate.interceptors.request.use(
      (config) => {
        config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    );

  const respIntercept= axiosPrivate.interceptors.response.use(
     (response) => {
       return response
     },
     (error) => {
       return Promise.reject(error)
     }
   );

   return ()=>{
       axiosPrivate.interceptors.request.eject(reqIntercept);
       axiosPrivate.interceptors.response.eject(respIntercept)
   }

},[auth])

return axiosPrivate;
}