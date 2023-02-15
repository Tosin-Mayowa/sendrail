import React from 'react'
import { DashboardStates } from '../../../Contexts/DashboardContext'
import './styles.css'
import ShipmentOverview from './ShipmentOverview'
import ShipmentHistory from './ShipmentHistory'
import CreateOrder from './CreateOrder'

function Index(): JSX.Element {
    const { views } = DashboardStates();
    switch (views?.shipment?.current_view) {
        case "shipment":
            return <ShipmentOverview />;
        case "shipment-history":
            return <ShipmentHistory />;
        case "create-order-1":
            return <CreateOrder />;
        case "add-parcel-details":
            return <CreateOrder />;
        case "confirm-parcel-details":
            return <CreateOrder />;
        default:
            return <ShipmentOverview />;
    }
}

export default Index