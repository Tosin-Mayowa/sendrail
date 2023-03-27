import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../lib/hooks/useAuth";

function ProtectAuth() {
    const { auth } = useAuth();
    const location = useLocation();
    if (auth?.user) {
        return <Outlet />
    }
    return <Navigate to="/login" state={{ from: location }} replace />
}

export default ProtectAuth;