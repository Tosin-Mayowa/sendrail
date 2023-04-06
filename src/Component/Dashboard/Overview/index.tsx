import React from 'react'
import DashboardOverview from './DashboardOverview/Overview'
import Overview from './DashboardOverview'
import DashboardLayout from '../DashboardLayout'

function Index(): JSX.Element {
    return (
        <DashboardLayout>
            <Overview />
        </DashboardLayout>
    )
}

export default Index