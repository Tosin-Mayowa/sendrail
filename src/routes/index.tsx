import { Text } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../Component/Dashboard/DashboardLayout'
import Home from '../pages/Home'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPass'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Verification from '../pages/Verification'
import Overview from '../Component/Dashboard/Overview'
import ManageCustomer from '../Component/Dashboard/Customer/ManageCustomer'
import Payroll from '../Component/Dashboard/Payroll'
import Shipment from '../Component/Dashboard/Shipment'

import Deposit from '../Component/Dashboard/Overview/Deposit'
import Withdraw from '../Component/Dashboard/Overview/Withdraw'

import ShipmentHistory from '../Component/Dashboard/Shipment/ShipmentHistory'
import CreateOrder from '../Component/Dashboard/Shipment/CreateOrder'

import CreatePayroll from '../Component/Dashboard/Payroll/CreatePayroll'

import AddCustomer from '../Component/Dashboard/Customer/AddCustomer'

import ProtectAuth from '../Component/ProtectAuth'

function Empty(): JSX.Element {
    return <DashboardLayout><Text mt="80px">Not Yet Implemented</Text></DashboardLayout>;
}
function Index() {
    type Route = {
        path: string, component: JSX.Element
    }

    // Routes without Protection
    const routes: Route[] =
        [
            { path: "/sign-up", component: <SignUp /> },
            { path: "login", component: <SignIn /> },
            { path: "verify", component: <Verification /> },
            { path: "forgot-password", component: <ForgotPassword /> },
            { path: "reset-password", component: <ResetPassword /> },
        ]

    // Routes with Protection
    const AuthRoutes: Route[] =
        [
            // main path routes
            { path: "/", component: <Home /> },
            { path: "/dashboard", component: <Overview /> },
            { path: "/shipment", component: <Shipment /> },
            { path: "/customer", component: <ManageCustomer /> },
            { path: "/rider", component: <Empty /> },
            { path: "/payroll", component: <Payroll /> },
            { path: "/transactions", component: <Empty /> },
            { path: "/manage-link", component: <Empty /> },
            { path: "/settings", component: <Empty /> },
            { path: "*", component: <Home /> },// Usually a 404 error page but since we have none....

            // Sub paths******************************************************

            // Deposit sub paths----------------------------
            { path: "/deposit", component: <Deposit /> },
            { path: "/withdraw", component: <Withdraw /> },
            // Shipment sub paths----------------------------------------
            { path: "/shipment-history", component: <ShipmentHistory /> },
            { path: "/create-order", component: <CreateOrder /> },
            // customer sub paths------------------------------------------
            { path: "/add-customer", component: <AddCustomer /> },
            // payroll sub paths------------------------------------------
            { path: "/create-payroll", component: <CreatePayroll /> }
        ]
    return (
        <Routes>
            {
                routes.map((e) => (
                    <Route key={e.path} path={e.path} element={e.component} />
                ))
            }
            {/* <Route element={<ProtectAuth />}> */}
            {
                // Just remove the comments to add your auth if i forget to remove it before i push
                AuthRoutes.map((e) => (
                    <Route key={e.path} path={e.path} element={e.component} />
                ))
            }
            {/* </Route> */}
        </Routes>
    )
}

export default Index