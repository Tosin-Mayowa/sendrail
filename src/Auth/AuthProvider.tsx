import React,{createContext,useState} from "react";
type IAuth={
    auth?:any,
    setAuth?: React.Dispatch<React.SetStateAction<{}>>,
}

export const AuthContext: React.Context<IAuth> = createContext({});

export const AuthProvider=({children})=>{
const [auth,setAuth]=useState({});
return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>

}

