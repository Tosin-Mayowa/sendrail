import { refreshRequestInstance } from './../../config/axios'
import { useAuth } from './useAuth'
import { useEffect } from 'react'

const useRefreshToken=()=>{
    const {setAuth}=useAuth();
    const refresh=async ()=>{
        const response = await refreshRequestInstance.get('')
        setAuth(prev=>{
            console.log({prev});
            console.log(response?.data?.data?.token);
            return { ...prev, accessToken: response?.data?.data?.token }
        });
        return response?.data?.data?.token
    }
    return refresh;
}

export default useRefreshToken;
