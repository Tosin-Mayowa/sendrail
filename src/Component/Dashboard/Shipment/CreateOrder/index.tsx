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
                <Box w="100%" mt={{ base: "10px", md: "42px" }}>
                    <RoundedBackButton color='#040320' />
                </Box>
                <Text as="h1" w="100%" m={{ base: "10px  0px", md: "42px 0px 48px" }} fontSize="24px" fontWeight="600" color="#000000">
                    Create Order
                </Text>
                {fetchView()}
            </Grid>
        </DashboardLayout>
    )
}

export default Index