import React, { createContext, useState } from "react";
type IAuth = {
    auth?: any,
    setAuth?: React.Dispatch<React.SetStateAction<object>>,
}

export const AuthContext: React.Context<IAuth> = createContext({});

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({});
    const values = { auth, setAuth }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

}

