import React from 'react'
import '../../Style/dashboard.css'
import DashboardWrapper from '../shared/DashboardWrapper';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { HiCube, HiLocationMarker, HiOutlineCalculator, HiUser } from 'react-icons/hi';
import { FiLogIn } from 'react-icons/fi';

function ClientDashboardLayout({ children, section }: { children: JSX.Element, section?: string }): JSX.Element {

    const routes: string[] =
        [
            "/client", "/client-profile", "/client-request", "/client-track", "/client-estimate"
        ]
    const sidebar_tabs = [
        {
            icon: <FaRegEnvelopeOpen size="18px" />,
            text: "Dashboard"
        },
        {
            icon: <HiUser size="18px" />,
            text: "Profile"
        },
        {
            icon: <HiCube size="18px" />,
            text: "Request"
        },
        {
            icon: <HiLocationMarker size="18px" />,
            text: "Track"
        },
        {
            icon: <HiOutlineCalculator size="18px" />,
            text: "Estimate"
        },
        {
            icon: <FiLogIn size="18px" />,
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

ClientDashboardLayout.defaultProps = {
    section: null
}

export default ClientDashboardLayout