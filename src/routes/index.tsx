import { Text } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../Component/AdminDashboard/DashboardLayout'
import Home from '../pages/Home'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPass'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Verification from '../pages/Verification'
import AdminDashboard from '../Component/AdminDashboard/Dashboard'
import ManageCustomer from '../Component/AdminDashboard/Customer/ManageCustomer'
import Payroll from '../Component/AdminDashboard/Payroll'
import Shipment from '../Component/AdminDashboard/Shipment'
import ManageLink from '../Component/AdminDashboard/ManageLink'
import Settings from '../Component/AdminDashboard/Settings/Settings'
import Deposit from '../Component/AdminDashboard/Dashboard/Deposit'
import Withdraw from '../Component/AdminDashboard/Dashboard/Withdraw'
import Transactions from '../Component/AdminDashboard/Transactions/Transactions'
import ClientDashboard from '../Component/ClientDashboard/Dashboard'


import ShipmentHistory from '../Component/AdminDashboard/Shipment/ShipmentHistory'
import CreateOrder from '../Component/AdminDashboard/Shipment/CreateOrder'
import CreateBulkOrder from '../Component/AdminDashboard/Shipment/CreateBulkOrder'

import CreatePayroll from '../Component/AdminDashboard/Payroll/CreatePayroll'

import AddCustomer from '../Component/AdminDashboard/Customer/AddCustomer'

import CreateFoodMenu from '../Component/AdminDashboard/ManageLink/CreateFoodMenu'
import CreateGroceryMenu from '../Component/AdminDashboard/ManageLink/CreateGroceryMenu'
import FoodMenu from '../Component/AdminDashboard/ManageLink/FoodMenu'
import GroceryMenu from '../Component/AdminDashboard/ManageLink/GroceryMenu'


import ClientTrack from '../Component/ClientDashboard/Track'
import ClientProfile from '../Component/ClientDashboard/Profile'
import ClientEstimate from '../Component/ClientDashboard/Estimate'
import ClientRequest from '../Component/ClientDashboard/Request'

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
            { path: "/dashboard", component: <AdminDashboard /> },
            { path: "/shipment", component: <Shipment /> },
            { path: "/customer", component: <ManageCustomer /> },
            { path: "/rider", component: <Empty /> },
            { path: "/payroll", component: <Payroll /> },
            { path: "/transactions", component: <Transactions /> },
            { path: "/manage-link", component: <ManageLink /> },
            { path: "/settings", component: <Settings /> },
            { path: "*", component: <Home /> },// Usually a 404 error page but since we have none....
            { path: "/client", component: <ClientDashboard /> },

            // Sub paths******************************************************

            // Deposit sub paths----------------------------
            { path: "/deposit", component: <Deposit /> },
            { path: "/withdraw", component: <Withdraw /> },
            // Shipment sub paths----------------------------------------
            { path: "/shipment-history", component: <ShipmentHistory /> },
            { path: "/create-order", component: <CreateOrder /> },
            { path: "/create-bulk-order", component: <CreateBulkOrder /> },
            // customer sub paths------------------------------------------
            { path: "/add-customer", component: <AddCustomer /> },
            // payroll sub paths------------------------------------------
            { path: "/create-payroll", component: <CreatePayroll /> },
            // manage link sub paths------------------------------------------
            { path: "/create-food-link", component: <CreateFoodMenu /> },
            { path: "/create-grocery-link", component: <CreateGroceryMenu /> },
            { path: "/food-menu", component: <FoodMenu /> },
            { path: "/grocery-menu", component: <GroceryMenu /> },
            // Client sub paths------------------------------------------
            { path: "/client-profile", component: <ClientProfile /> },
            { path: "/client-request", component: <ClientRequest /> },
            { path: "/client-track", component: <ClientTrack /> },
            { path: "/client-estimate", component: <ClientEstimate /> },


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