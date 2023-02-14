import {
 Box, Grid, Text, useMediaQuery 
} from '@chakra-ui/react';
import React from 'react'
import { DashboardStates } from '../../../../Contexts/DashboardContext';
import RoundedBackButton from '../../../shared/RoundedBackButton';
import PickupDetails from './PickupDetails';
import ParcelDetails from './ParcelDetails';
import ConfirmDetails from './ConfirmDetails';

function Index(): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const {
        views, dispatchView
    } = DashboardStates()

    const fetchView = () => {
        if (views.shipment.current_view === "create-order-1") return <PickupDetails />
        if (views.shipment.current_view === "add-parcel-details") return <ParcelDetails />
        if (views.shipment.current_view === "confirm-parcel-details") return <ConfirmDetails />
        return <PickupDetails />
    }
    return (
        <Grid
            placeItems="center"
            padding={isSmallerScreen ? "0px 5px" : "0px 40px"}
        >
            <Box w="100%">
                <RoundedBackButton color='#070529' onclick={() => { dispatchView({ type: "change_shipment_view", current_view: String(views?.shipment?.initial_view) }) }} />
            </Box>
            <Text as="h1" w="100%" my="20px" fontSize="24px" fontWeight="600">
                Create Order
            </Text>
            {fetchView()}
        </Grid>
    )
}

export default Index