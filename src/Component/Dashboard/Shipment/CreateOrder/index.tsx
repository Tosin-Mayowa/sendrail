import {
    Box, Grid, Text
} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RoundedBackButton from '../../../shared/RoundedBackButton';
import PickupDetails from './PickupDetails';
import ParcelDetails from './ParcelDetails';
import ConfirmDetails from './ConfirmDetails';
import DashboardLayout from '../../DashboardLayout';

function Index(): JSX.Element {
    const navigate = useNavigate()
    const [section, setSection] = useState<string>("create-order");

    const fetchView = () => {
        if (section === "create-order") return <PickupDetails setSection={setSection} />
        if (section === "add-parcel-details") return <ParcelDetails setSection={setSection} />
        if (section === "confirm-parcel-details") return <ConfirmDetails />
        return <PickupDetails setSection={setSection} />
    }
    return (
        <DashboardLayout section='/shipment'>
            <Grid
                placeItems="center"
            >
                <Box w="100%">
                    <RoundedBackButton color='#070529' onclick={() => { navigate(-1) }} />
                </Box>
                <Text as="h1" w="100%" my="20px" fontSize="24px" fontWeight="600">
                    Create Order
                </Text>
                {fetchView()}
            </Grid>
        </DashboardLayout>
    )
}

export default Index