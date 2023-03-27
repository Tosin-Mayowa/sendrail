import React from 'react'
import DashboardOverview from './DashboardOverview/Overview'
import DashboardLayout from '../DashboardLayout'

function Index(): JSX.Element {
    return (
        <DashboardLayout>
            <DashboardOverview />
        </DashboardLayout>
    )
}

export default Index