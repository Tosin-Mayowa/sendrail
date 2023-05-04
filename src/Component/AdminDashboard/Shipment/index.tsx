import React from 'react'
import './styles.css'
import ShipmentOverview from './ShipmentOverview'
import DashboardLayout from '../DashboardLayout'

function Index(): JSX.Element {
    return (
        <DashboardLayout>
            <ShipmentOverview />
        </DashboardLayout>
    )
}

export default Index