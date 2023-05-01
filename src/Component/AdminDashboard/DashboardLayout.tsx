import React from 'react'
import '../../Style/dashboard.css'
import DashboardWrapper from '../shared/DashboardWrapper';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { AiOutlineSwitcher, AiTwotoneSetting } from 'react-icons/ai';
import { HiLink, HiUserGroup } from 'react-icons/hi';
import { RiEBike2Fill } from 'react-icons/ri';
import { TbLayersSubtract, TbLayoutNavbar } from 'react-icons/tb';
import { MdLogin } from 'react-icons/md';

function DashboardLayout({ children, section }: { children: JSX.Element, section?: string }): JSX.Element {

    const routes: string[] =
        [
            "/dashboard", "/shipment", "/customer", "/rider", "/payroll", "/transactions", "/manage-link", "/settings"
        ]
    const sidebar_tabs = [
        {
            icon: <FaRegEnvelopeOpen size="18px" />,
            text: "Dashboard"
        },
        {
            icon: <AiOutlineSwitcher size="18px" />,
            text: "Shipment"
        },
        {
            icon: <HiUserGroup size="18px" />,
            text: "Customer"
        },
        {
            icon: <RiEBike2Fill size="18px" />,
            text: "Rider"
        },
        {
            icon: <TbLayoutNavbar size="18px" />,
            text: "Payroll"
        },
        {
            icon: <TbLayersSubtract size="18px" />,
            text: "Transactions"
        },
        {
            icon: <HiLink size="18px" />,
            text: "Manage Link"
        },
        {
            icon: <AiTwotoneSetting size="18px" />,
            text: "Settings"
        },
        {
            icon: <MdLogin size="18px" />,
            text: "Logout"
        }
    ]
    return (
        <DashboardWrapper
            section={section}
            routes={routes}
            sidebar_tabs={sidebar_tabs}
        >
            {children}
        </DashboardWrapper>
    )
}

DashboardLayout.defaultProps = {
    section: null
}

export default DashboardLayout