import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

export const useAuth=()=>{
    return useContext(AuthContext);
    
}

